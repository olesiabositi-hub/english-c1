/* The C1 Edition — lesson engine */
(function () {
  'use strict';
  const C1 = window.C1;
  const app = document.getElementById('app');

  /* ---------- storage ---------- */
  const KEY = 'c1-edition-v1';
  const memoryFallback = {};
  function loadState() {
    let raw = null;
    try { raw = localStorage.getItem(KEY); } catch (e) { raw = memoryFallback[KEY] || null; }
    const base = { done: {}, cards: {}, streak: { last: null, count: 0 }, settings: { accent: 'en-GB', rate: 0.95 }, started: today() };
    if (!raw) return base;
    try { return Object.assign(base, JSON.parse(raw)); } catch (e) { return base; }
  }
  function saveState() {
    const raw = JSON.stringify(state);
    try { localStorage.setItem(KEY, raw); } catch (e) { memoryFallback[KEY] = raw; }
    updateBadge();
  }
  let state = loadState();

  /* ---------- helpers ---------- */
  function today(d) { d = d || new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function addDays(n) { const d = new Date(); d.setDate(d.getDate() + n); return today(d); }
  function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
  function h(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function norm(s) {
    s = String(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/[.,!?;:"“”—–-]/g, ' ');
    s = ' ' + s.replace(/\s+/g, ' ').trim() + ' ';
    s = s.replace(/ i'm /g, ' i am ').replace(/'ve /g, ' have ').replace(/'ll /g, ' will ').replace(/'re /g, ' are ')
      .replace(/ can't /g, ' cannot ').replace(/ won't /g, ' will not ').replace(/n't /g, ' not ');
    return s.replace(/\s+/g, ' ').trim();
  }
  function matches(input, answers) { const n = norm(input); return answers.some(a => norm(a) === n); }
  function toast(msg) { const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2600); }
  const plural = (n, one, few, many) => { const m10 = n % 10, m100 = n % 100; return m10 === 1 && m100 !== 11 ? one : (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20) ? few : many); };

  /* ---------- speech ---------- */
  function speak(text) {
    if (!('speechSynthesis' in window)) { toast('Озвучка недоступна в этом браузере'); return; }
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text.replace(/\bsb\b/g, 'somebody'));
      u.lang = state.settings.accent; u.rate = state.settings.rate;
      const voices = speechSynthesis.getVoices();
      const v = voices.find(v => v.lang === state.settings.accent && /Google|Natural|Premium|Enhanced/i.test(v.name)) || voices.find(v => v.lang === state.settings.accent);
      if (v) u.voice = v;
      speechSynthesis.speak(u);
    } catch (e) { toast('Озвучка недоступна'); }
  }
  if ('speechSynthesis' in window) { try { speechSynthesis.getVoices(); speechSynthesis.onvoiceschanged = () => {}; } catch (e) {} }
  const listenBtn = (text, label) => `<button class="listen" type="button" data-say="${esc(text)}" aria-label="Прослушать">${label ? esc(label) : ''}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>`;
  document.addEventListener('click', e => { const b = e.target.closest('[data-say]'); if (b) { e.stopPropagation(); speak(b.dataset.say); } });

  /* ---------- lessons loading ---------- */
  function allLessons() { const out = []; C1.course.weeks.forEach(w => (w.lessons || []).forEach(l => out.push(Object.assign({ week: w.n }, l)))); return out; }
  function loadLesson(id) {
    return new Promise((res, rej) => {
      if (C1.lessons && C1.lessons[id]) return res(C1.lessons[id]);
      const s = document.createElement('script'); s.src = 'js/lessons/' + id + '.js';
      s.onload = () => (C1.lessons && C1.lessons[id]) ? res(C1.lessons[id]) : rej();
      s.onerror = rej; document.body.appendChild(s);
    });
  }
  const DAY_RU = ['', 'день 1', 'день 2', 'день 3', 'день 4', 'день 5', 'суббота', 'воскресенье'];
  function kickerFor(l) { return l.issue ? `Выпуск ${l.issue}. Неделя ${l.week}, ${DAY_RU[l.day]}` : `Неделя ${l.week}, ${DAY_RU[l.day]}`; }
  function labelFor(L) { return L.issue ? 'Выпуск ' + L.issue : (L.kind === 'test' ? 'Контрольная' : 'Интервью'); }
  function withCover(root, src, onShow) {
    const fig = root.querySelector('figure.cover'); if (!fig) return;
    const img = fig.querySelector('img');
    img.onload = () => { fig.hidden = false; if (onShow) onShow(); };
    img.onerror = () => fig.remove();
    img.src = src;
  }
  function nextLesson() { return allLessons().find(l => !state.done[l.id]) || null; }

  /* ---------- SRS (simplified SM-2) ---------- */
  function addCards(lesson) {
    const list = (lesson.vocab || []).map(v => Object.assign({ kind: 'word' }, v)).concat((lesson.srsExtra || []).map(v => Object.assign({ kind: 'pattern' }, v)));
    let added = 0;
    list.forEach(c => { if (!state.cards[c.id]) { state.cards[c.id] = { id: c.id, kind: c.kind, en: c.en, ru: c.ru, ex: c.ex, lesson: lesson.id, due: addDays(1), int: 0, ef: 2.5, reps: 0, lapses: 0 }; added++; } });
    return added;
  }
  function dueCards() { const t = today(); return Object.values(state.cards).filter(c => c.due <= t); }
  function grade(card, q) { // q: 0 again, 1 hard, 2 good, 3 easy
    if (q === 0) { card.reps = 0; card.lapses++; card.int = 0; card.ef = Math.max(1.3, card.ef - 0.2); card.due = today(); return; }
    if (card.reps === 0) card.int = q === 3 ? 3 : 1;
    else if (card.reps === 1) card.int = q === 1 ? 2 : (q === 3 ? 6 : 4);
    else card.int = Math.round(card.int * (q === 1 ? 1.2 : q === 3 ? card.ef * 1.3 : card.ef));
    card.ef = Math.max(1.3, card.ef + (q === 1 ? -0.15 : q === 3 ? 0.15 : 0));
    card.reps++; card.due = addDays(card.int);
  }
  function cardStatus(c) { return c.reps === 0 ? 'новое' : c.int >= 21 ? 'выучено' : 'учу'; }
  function updateBadge() { const b = document.getElementById('due-badge'); if (!b) return; const n = dueCards().length; b.hidden = !n; b.textContent = n; }

  function touchStreak() {
    const t = today(); const s = state.streak;
    if (s.last === t) return;
    s.count = (s.last === addDays(-1)) ? s.count + 1 : 1; s.last = t;
  }
  function liveStreak() { const s = state.streak; return (s.last === today() || s.last === addDays(-1)) ? s.count : 0; }

  /* ---------- router ---------- */
  const routes = { home: viewHome, contents: viewContents, review: viewReview, words: viewWords, grammar: viewGrammar, settings: viewSettings };
  function route() {
    const hash = (location.hash || '#home').slice(1);
    document.querySelectorAll('[data-nav]').forEach(a => a.classList.toggle('active', a.dataset.nav === hash || (hash.startsWith('lesson-') && a.dataset.nav === 'home')));
    if (window.speechSynthesis) try { speechSynthesis.cancel(); } catch (e) {}
    app.innerHTML = '';
    if (hash.startsWith('lesson-')) viewLesson(hash.slice(7));
    else (routes[hash] || viewHome)();
    window.scrollTo(0, 0);
    updateBadge();
  }
  window.addEventListener('hashchange', route);

  /* ---------- views ---------- */
  function viewHome() {
    const next = nextLesson();
    const lessons = allLessons();
    const doneCount = Object.keys(state.done).length;
    const due = dueCards().length;
    const words = Object.values(state.cards).filter(c => c.kind === 'word');
    const learnt = words.filter(c => c.int >= 21).length;
    const dateStr = new Date().toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' });
    const week = next ? C1.course.weeks.find(w => w.n === next.week) : null;

    const el = h(`<div class="page home">
      <div class="dateline"><span>${esc(dateStr)}</span><span>Неделя ${week ? week.n : '—'} из 26</span></div>
      <section class="front">
        <div class="front-main">
          ${next ? `
          <figure class="cover" hidden><img alt=""></figure>
          ${next.issue ? `<div class="issue-no" aria-hidden="true">${next.issue}</div>` : `<div class="issue-no word" aria-hidden="true">${next.kind === 'test' ? 'Test' : 'Interview'}</div>`}
          <p class="kicker">${kickerFor(next)}</p>
          <h1 class="headline">${esc(next.title)}</h1>
          <p class="standfirst" id="standfirst">${esc(next.grammar)}</p>
          <div class="front-actions">
            <a class="btn primary" href="#lesson-${next.id}">Открыть выпуск</a>
            <span class="meta">около ${next.minutes} минут</span>
          </div>` : `
          <h1 class="headline">Все готовые выпуски пройдены</h1>
          <p class="standfirst">Новые уроки появятся здесь, как только будут добавлены. Пока повторяйте слова: колода работает каждый день.</p>`}
        </div>
        <aside class="front-side">
          <div class="side-block review-block">
            <h2>Повторение</h2>
            ${due ? `<p class="big-num">${due}</p><p>${plural(due, 'карточка ждёт', 'карточки ждут', 'карточек ждут')} сегодня. Лучше начать с них: 5–10 минут.</p><a class="btn" href="#review">Повторить</a>`
                  : `<p>${Object.keys(state.cards).length ? 'На сегодня всё повторено.' : 'Колода пока пуста. Слова из урока появятся здесь на следующий день.'}</p>`}
          </div>
          <dl class="stats">
            <div><dt>Дней подряд</dt><dd>${liveStreak()}</dd></div>
            <div><dt>Уроков пройдено</dt><dd>${doneCount}</dd></div>
            <div><dt>Слов в колоде</dt><dd>${words.length}</dd></div>
            <div><dt>Выучено надолго</dt><dd>${learnt}</dd></div>
          </dl>
        </aside>
      </section>
      ${week ? weekStrip(week) : ''}
    </div>`);
    app.appendChild(el);
    if (next) withCover(el, 'images/' + next.id + '.jpg', () => el.querySelector('.front-main').classList.add('has-cover'));
    if (next) loadLesson(next.id).then(l => { const sf = document.getElementById('standfirst'); if (sf && l.standfirst) sf.textContent = l.standfirst; }).catch(() => {});
  }

  function weekStrip(week) {
    const items = (week.lessons || []).map((l, i) => {
      const done = state.done[l.id]; const isNext = nextLesson() && nextLesson().id === l.id;
      const available = done || isNext;
      let inner = `<span class="day">${DAY_RU[l.day].replace(/^д/, 'Д').replace(/^с/, 'С').replace(/^в/, 'В')}</span><span class="t">${esc(l.title)}</span><span class="g">${esc(l.grammar)}</span><span class="st">${done ? 'пройдено, ' + done.score + '%' : isNext ? 'сегодня' : 'позже'}</span>`;
      if (l.kind) inner = inner.replace('class="t"', 'class="t weekend"');
      return available ? `<a class="wk-item ${done ? 'done' : ''} ${isNext ? 'next' : ''}" href="#lesson-${l.id}">${inner}</a>` : `<div class="wk-item locked">${inner}</div>`;
    }).join('');
    return `<section class="week"><h2>Неделя ${week.n}. ${esc(week.theme)}</h2><div class="wk-list">${items}</div></section>`;
  }

  function viewContents() {
    const parts = C1.course.parts.map(p => {
      const rows = p.weeks.map(n => {
        const w = C1.course.weeks.find(x => x.n === n);
        const ls = w.lessons || [];
        const dots = ls.length ? ls.map(l => `<i class="${state.done[l.id] ? 'on' : ''}" title="${esc(l.title)}"></i>`).join('') : '<span class="soon">в работе</span>';
        const link = ls.length ? `href="#lesson-${(ls.find(l => !state.done[l.id]) || ls[0]).id}"` : '';
        return `<li class="${ls.length ? '' : 'dim'}"><span class="wn">${n}</span><span class="wt">${ls.length ? `<a ${link}>${esc(w.theme)}</a>` : esc(w.theme)}</span><span class="wg">${esc(w.grammar)}</span><span class="dots">${dots}</span></li>`;
      }).join('');
      return `<section class="part"><h2><span class="pn">Часть ${p.n}</span> ${esc(p.title)}</h2><p class="part-ru">${esc(p.ru)}</p><ol class="toc">${rows}</ol></section>`;
    }).join('');
    app.appendChild(h(`<div class="page contents"><h1 class="page-title">Содержание</h1><p class="page-lead">26 недель, по пять уроков в неделю. В субботу контрольная, в воскресенье тренировка интервью. Уроки добавляются блоками по мере прохождения.</p>${parts}</div>`));
  }

  /* ---------- review ---------- */
  function viewReview() {
    let queue = shuffle(dueCards());
    const total = queue.length;
    const el = h(`<div class="page review"><h1 class="page-title">Повторение</h1><div id="rv"></div></div>`);
    app.appendChild(el);
    const box = el.querySelector('#rv');
    let doneN = 0;
    function show() {
      if (!queue.length) {
        box.innerHTML = total ? `<div class="empty"><p class="big-num">${total}</p><p>${plural(total, 'карточка повторена', 'карточки повторены', 'карточек повторено')}. Следующие придут по расписанию.</p><a class="btn primary" href="#home">На главную</a></div>`
          : `<div class="empty"><p>Сегодня повторять нечего. Слова из пройденных уроков приходят сюда через день, потом через 3–4 дня, неделю и дальше: чем лучше помните, тем реже.</p><a class="btn" href="#home">На главную</a></div>`;
        return;
      }
      const c = queue[0];
      const blanked = c.kind === 'word' ? blank(c.ex, c.en) : null;
      box.innerHTML = `<div class="rv-progress"><span style="width:${(doneN / Math.max(total, 1)) * 100}%"></span></div>
        <div class="rv-card">
          <p class="rv-kind">${c.kind === 'word' ? 'Вспомните выражение' : 'Скажите по-английски'}</p>
          <p class="rv-ru">${esc(c.ru)}</p>
          ${blanked ? `<p class="rv-ex">${blanked}</p>` : ''}
          <div class="rv-answer" hidden><p class="rv-en">${esc(c.en)} ${listenBtn(c.kind === 'word' ? c.ex : c.en)}</p>${c.kind === 'word' ? `<p class="rv-full">${esc(c.ex)}</p>` : `<p class="rv-full">${esc(c.ex)}</p>`}</div>
          <div class="rv-actions"><button class="btn primary" id="reveal" type="button">Показать ответ</button></div>
        </div>`;
      box.querySelector('#reveal').onclick = () => {
        box.querySelector('.rv-answer').hidden = false;
        speak(c.kind === 'word' ? c.en : c.en);
        box.querySelector('.rv-actions').innerHTML = `<p class="rv-q">Насколько легко вспомнили?</p><div class="grades">
          <button class="g0" data-q="0" type="button">Не вспомнила</button><button class="g1" data-q="1" type="button">С трудом</button>
          <button class="g2" data-q="2" type="button">Вспомнила</button><button class="g3" data-q="3" type="button">Легко</button></div>`;
        box.querySelectorAll('[data-q]').forEach(b => b.onclick = () => {
          const q = +b.dataset.q; grade(c, q); queue.shift();
          if (q === 0) queue.push(c); else doneN++;
          touchStreak(); saveState(); show();
        });
      };
    }
    show();
  }
  function blank(ex, phrase) {
    // hide the key word(s) of the phrase in the example
    const keys = phrase.replace(/\(.*?\)/g, '').replace(/\bsb\b|\bsth\b|\byour\b/g, '').split(/\s+/).filter(w => w.length > 2 && !/^(the|not|a|an)$/i.test(w));
    let out = esc(ex);
    keys.forEach(k => { const stem = k.slice(0, Math.max(3, k.length - 2)); out = out.replace(new RegExp('\\b' + stem.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\w*', 'gi'), '<span class="gapline">_____</span>'); });
    return out;
  }

  function viewWords() {
    const cards = Object.values(state.cards).filter(c => c.kind === 'word');
    const el = h(`<div class="page words"><h1 class="page-title">Словарь</h1>
      <p class="page-lead">Все выражения из пройденных уроков. Статус меняется по мере повторения: через три недели без ошибок слово считается выученным.</p>
      <input class="search" type="search" placeholder="Поиск по английскому или русскому" aria-label="Поиск по словарю">
      <ul class="wordlist"></ul></div>`);
    app.appendChild(el);
    const ul = el.querySelector('.wordlist');
    function render(q) {
      q = (q || '').toLowerCase();
      const list = cards.filter(c => !q || c.en.toLowerCase().includes(q) || c.ru.toLowerCase().includes(q));
      ul.innerHTML = list.length ? list.map(c => `<li><div class="w-en">${esc(c.en)} ${listenBtn(c.en)}</div><div class="w-ru">${esc(c.ru)}</div><div class="w-ex">${esc(c.ex)}</div><span class="w-st st-${cardStatus(c) === 'выучено' ? 'ok' : cardStatus(c) === 'учу' ? 'mid' : 'new'}">${cardStatus(c)}</span></li>`).join('')
        : `<li class="empty-li">${cards.length ? 'Ничего не нашлось.' : 'Словарь заполнится после первого урока.'}</li>`;
    }
    el.querySelector('.search').oninput = e => render(e.target.value);
    render();
  }

  function viewGrammar() {
    const el = h(`<div class="page grammar"><h1 class="page-title">Грамматика</h1><p class="page-lead">Справочник по темам из пройденных и текущего урока. Удобно открыть, если что-то забылось.</p><div class="g-list"></div></div>`);
    app.appendChild(el);
    const list = el.querySelector('.g-list');
    const ids = allLessons().filter(l => state.done[l.id] || (nextLesson() && nextLesson().id === l.id)).map(l => l.id);
    if (!ids.length) { list.innerHTML = '<p>Пока пусто.</p>'; return; }
    Promise.all(ids.map(id => loadLesson(id).catch(() => null))).then(ls => {
      ls.filter(Boolean).forEach(l => l.steps.forEach(s => s.blocks.filter(b => b.type === 'theory').forEach(b => {
        const d = h(`<details class="g-item"><summary><span class="g-week">Неделя ${l.week}</span> ${esc(b.title)}</summary><div class="theory">${b.html}</div></details>`);
        list.appendChild(d);
      })));
    });
  }

  function viewSettings() {
    const el = h(`<div class="page settings"><h1 class="page-title">Настройки</h1>
      <section class="set"><h2>Произношение</h2>
        <label>Акцент озвучки <select id="accent"><option value="en-GB">Британский</option><option value="en-US">Американский</option></select></label>
        <label>Скорость <select id="rate"><option value="0.8">Медленно</option><option value="0.95">Обычно</option><option value="1.1">Быстро</option></select></label>
        <button class="btn" type="button" data-say="Over the past few months, I've learnt a lot about small talk.">Проверить голос</button>
      </section>
      <section class="set"><h2>Резервная копия</h2>
        <p>Прогресс хранится только в этом браузере. Раз в неделю сохраняйте копию: при очистке браузера или смене устройства её можно будет восстановить.</p>
        <div class="row"><button class="btn" id="exp" type="button">Скачать копию</button><button class="btn" id="copy" type="button">Скопировать как текст</button></div>
        <label class="file">Восстановить из файла <input type="file" id="imp" accept=".json,application/json"></label>
        <textarea id="impText" rows="3" placeholder="…или вставьте сюда текст копии"></textarea>
        <button class="btn" id="impBtn" type="button">Восстановить из текста</button>
      </section>
      <section class="set danger"><h2>Начать заново</h2><p>Удалит весь прогресс и колоду повторения.</p><button class="btn warn" id="reset" type="button">Сбросить прогресс</button></section>
    </div>`);
    app.appendChild(el);
    const acc = el.querySelector('#accent'), rate = el.querySelector('#rate');
    acc.value = state.settings.accent; rate.value = String(state.settings.rate);
    acc.onchange = () => { state.settings.accent = acc.value; saveState(); };
    rate.onchange = () => { state.settings.rate = +rate.value; saveState(); };
    const data = () => JSON.stringify(state);
    el.querySelector('#exp').onclick = () => {
      try { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([data()], { type: 'application/json' })); a.download = 'c1-edition-backup-' + today() + '.json'; document.body.appendChild(a); a.click(); a.remove(); toast('Копия сохранена'); }
      catch (e) { toast('Скачивание недоступно, используйте «Скопировать как текст»'); }
    };
    el.querySelector('#copy').onclick = () => { navigator.clipboard.writeText(data()).then(() => toast('Скопировано'), () => toast('Не удалось скопировать')); };
    const restore = txt => { try { const s = JSON.parse(txt); if (!s.cards || !s.done) throw 0; state = Object.assign(loadState(), s); saveState(); toast('Прогресс восстановлен'); location.hash = '#home'; } catch (e) { toast('Это не похоже на копию прогресса'); } };
    el.querySelector('#imp').onchange = e => { const f = e.target.files[0]; if (f) f.text().then(restore); };
    el.querySelector('#impBtn').onclick = () => restore(el.querySelector('#impText').value);
    const rs = el.querySelector('#reset');
    rs.onclick = () => {
      if (rs.dataset.armed) { try { localStorage.removeItem(KEY); } catch (e) {} delete memoryFallback[KEY]; state = loadState(); saveState(); toast('Прогресс сброшен'); location.hash = '#home'; }
      else { rs.dataset.armed = 1; rs.textContent = 'Нажмите ещё раз для подтверждения'; }
    };
  }

  /* ---------- lesson player ---------- */
  function viewLesson(id) {
    app.innerHTML = '<div class="page"><p class="loading">Открываем выпуск…</p></div>';
    loadLesson(id).then(lesson => runLesson(lesson)).catch(() => {
      app.innerHTML = '<div class="page"><h1 class="page-title">Этот выпуск ещё не готов</h1><p>Урок появится, когда будет добавлен следующий блок.</p><a class="btn" href="#contents">К содержанию</a></div>';
    });
  }

  function runLesson(L) {
    // flatten into screens
    const screens = [];
    L.steps.forEach((step, si) => step.blocks.forEach(b => {
      const per = ['choice', 'gap', 'judge', 'transform', 'order', 'dictation'];
      if (per.includes(b.type)) b.items.forEach((it, i) => screens.push({ si, b, it, i, n: b.items.length }));
      else screens.push({ si, b, it: null, i: 0, n: 1 });
    }));
    screens.forEach((s, k) => { s.last = k === screens.length - 1; s.idx = k; });
    let pos = 0; const score = { right: 0, total: 0 };
    const el = h(`<div class="lesson">
      <div class="lesson-bar">
        <a class="close" href="#home" aria-label="Закрыть урок">✕</a>
        <div class="lesson-title"><span class="issue">${labelFor(L)}</span> ${esc(L.title)}</div>
        <ol class="steps">${L.steps.map((s, i) => `<li data-si="${i}">${esc(s.title)}</li>`).join('')}</ol>
        <div class="pbar"><span></span></div>
      </div>
      <div class="stage" id="stage"></div>
    </div>`);
    app.innerHTML = ''; app.appendChild(el);
    const stage = el.querySelector('#stage');

    function header() {
      const s = screens[pos];
      el.querySelectorAll('.steps li').forEach((li, i) => { li.classList.toggle('cur', i === s.si); li.classList.toggle('past', i < s.si); });
      el.querySelector('.pbar span').style.width = (pos / screens.length * 100) + '%';
    }
    function next() { pos++; if (pos >= screens.length) finish(); else render(); }
    function render() {
      header();
      const s = screens[pos];
      stage.innerHTML = '';
      const wrap = h(`<div class="screen"><div class="instr"><p>${esc(s.b.instr || '')}</p>${s.n > 1 ? `<span class="count">${s.i + 1} / ${s.n}</span>` : ''}</div><div class="body"></div><div class="feedback" aria-live="polite"></div><div class="actions"></div></div>`);
      if (!s.b.instr) wrap.querySelector('.instr').remove();
      stage.appendChild(wrap);
      const R = renderers[s.b.type];
      R(s, wrap.querySelector('.body'), wrap.querySelector('.actions'), wrap.querySelector('.feedback'), result => {
        if (result !== undefined && result !== null) { score.total++; if (result) score.right++; }
      }, next, L);
      const f = wrap.querySelector('input, button.opt, .chip, button.primary');
      if (f && s.b.type !== 'theory' && s.b.type !== 'reading' && s.b.type !== 'cards') try { f.focus({ preventScroll: true }); } catch (e) {}
    }
    function finish() {
      const pct = score.total ? Math.round(score.right / score.total * 100) : 100;
      const added = addCards(L);
      const prev = state.done[L.id];
      state.done[L.id] = { score: Math.max(pct, prev ? prev.score : 0), date: today() };
      touchStreak(); saveState();
      el.querySelector('.pbar span').style.width = '100%';
      el.querySelectorAll('.steps li').forEach(li => { li.classList.add('past'); li.classList.remove('cur'); });
      const verdict = pct >= 90 ? (L.issue ? 'Отличный выпуск.' : 'Отличный результат.') : pct >= 70 ? 'Хороший результат.' : 'Стоит вернуться к грамматике ещё раз.';
      const isTalk = !score.total;
      stage.innerHTML = `<div class="screen finish">
        <p class="kicker">${L.issue ? 'Выпуск ' + L.issue + ' пройден' : (L.kind === 'test' ? 'Контрольная пройдена' : 'Тренировка завершена')}</p>
        ${isTalk ? `<p class="verdict">Пять ответов вслух — это лучшая подготовка к настоящему интервью. Возвращайтесь к этим вопросам: с каждой неделей ответы будут звучать свободнее.</p>`
          : `<p class="score">${pct}<small>%</small></p>
        <p class="verdict">${verdict} Правильных ответов: ${score.right} из ${score.total}.</p>`}
        ${(L.vocab || []).length ? `<p>${added ? `${added} ${plural(added, 'карточка добавлена', 'карточки добавлены', 'карточек добавлено')} в повторение. Первые придут завтра.` : 'Карточки этого урока уже в колоде.'}</p>` : ''}
        <div class="actions"><a class="btn primary" href="#home">На главную</a><a class="btn" href="#lesson-${L.id}" id="again">Пройти ещё раз</a></div>
      </div>`;
      stage.querySelector('#again').onclick = e => { e.preventDefault(); runLesson(L); };
    }
    render();
  }

  /* ---------- exercise renderers ---------- */
  function checkBtn(actions, label) { const b = h(`<button class="btn primary" type="button">${label || 'Проверить'}</button>`); actions.appendChild(b); return b; }
  function nextBtn(actions, next) { actions.innerHTML = ''; const b = h(`<button class="btn primary" type="button">Дальше</button>`); b.onclick = next; actions.appendChild(b); b.focus({ preventScroll: true }); return b; }
  function fb(box, ok, text) { box.className = 'feedback ' + (ok ? 'ok' : 'no'); box.innerHTML = `<strong>${ok ? 'Верно.' : 'Не совсем.'}</strong> ${text || ''}`; }

  const renderers = {
    theory(s, body, actions, box, report, next) {
      body.innerHTML = `<article class="theory"><h2>${esc(s.b.title)}</h2>${s.b.html}</article>`;
      const b = checkBtn(actions, 'Понятно, к упражнениям'); b.onclick = next;
    },
    cards(s, body, actions, box, report, next, L) {
      body.innerHTML = `<div class="vocab-grid">${L.vocab.map(v => `<div class="vcard" tabindex="0" role="button" aria-expanded="false">
        <div class="v-top"><span class="v-en">${esc(v.en)}</span>${listenBtn(v.en)}</div>
        <p class="v-ex">${esc(v.ex)} ${listenBtn(v.ex)}</p>
        <p class="v-ru"><span class="ru-hint">Показать перевод</span><span class="ru-text">${esc(v.ru)}</span></p></div>`).join('')}</div>`;
      body.querySelectorAll('.vcard').forEach(c => { const t = () => { c.classList.toggle('open'); c.setAttribute('aria-expanded', c.classList.contains('open')); }; c.onclick = t; c.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); t(); } }; });
      const b = checkBtn(actions, 'Дальше'); b.onclick = next;
    },
    match(s, body, actions, box, report, next) {
      const pairs = s.b.pairs;
      const left = shuffle(pairs.map((p, i) => ({ t: p[0], i }))), right = shuffle(pairs.map((p, i) => ({ t: p[1], i })));
      body.innerHTML = `<div class="match"><div class="col l">${left.map(x => `<button class="mitem" type="button" data-i="${x.i}">${esc(x.t)}</button>`).join('')}</div><div class="col r">${right.map(x => `<button class="mitem" type="button" data-i="${x.i}">${esc(x.t)}</button>`).join('')}</div></div>`;
      let sel = null, solved = 0, mistakes = 0;
      body.querySelectorAll('.mitem').forEach(b => b.onclick = () => {
        if (b.classList.contains('solved')) return;
        const side = b.parentElement.classList.contains('l') ? 'l' : 'r';
        if (!sel || sel.side === side) { body.querySelectorAll('.col.' + side + ' .mitem').forEach(x => x.classList.remove('sel')); sel = { b, side }; b.classList.add('sel'); return; }
        if (sel.b.dataset.i === b.dataset.i) {
          [sel.b, b].forEach(x => { x.classList.remove('sel'); x.classList.add('solved'); x.disabled = true; });
          if (side === 'r' || sel.side === 'r') { const lb = side === 'l' ? b : sel.b; speak(lb.textContent); }
          solved++; sel = null;
          if (solved === pairs.length) {
            for (let k = 0; k < pairs.length; k++) report(k >= mistakes);
            fb(box, mistakes === 0, mistakes ? `Ошибок: ${mistakes}.` : 'Все пары без ошибок.'); nextBtn(actions, next);
          }
        } else { mistakes++; [sel.b, b].forEach(x => { x.classList.add('wrong'); setTimeout(() => x.classList.remove('wrong', 'sel'), 500); }); sel = null; }
      });
    },
    choice(s, body, actions, box, report, next) {
      const it = s.it;
      const order = it.fixed ? it.o.map((o, i) => i) : shuffle(it.o.map((o, i) => i));
      body.innerHTML = `<p class="q">${fmtQ(it.q)}</p><div class="opts">${order.map(i => `<button class="opt" type="button" data-i="${i}">${esc(it.o[i])}</button>`).join('')}</div>`;
      body.querySelectorAll('.opt').forEach(b => b.onclick = () => {
        const i = +b.dataset.i, ok = i === it.a;
        body.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (+x.dataset.i === it.a) x.classList.add('right'); });
        if (!ok) b.classList.add('wrong');
        const full = it.q.includes('___') ? it.q.replace('___', it.o[it.a]) : null;
        fb(box, ok, (it.explain ? esc(it.explain) : '') + (full ? ` ${listenBtn(full)}` : ''));
        report(ok); nextBtn(actions, next);
      });
    },
    gap(s, body, actions, box, report, next) {
      const it = s.it; const parts = it.q.split('___');
      body.innerHTML = `<p class="q gapq">${esc(parts[0])}<input class="gapin" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Ответ">${esc(parts[1] || '')}</p>`;
      const inp = body.querySelector('input');
      inp.style.width = Math.max(5, Math.max(...it.a.map(a => a.length)) + 1) + 'ch';
      const go = () => {
        if (!inp.value.trim()) { inp.focus(); return; }
        const ok = matches(inp.value, it.a); inp.disabled = true; inp.classList.add(ok ? 'right' : 'wrong');
        const full = parts[0].replace(/\s*\(.*?\)\s*$/, ' ') + it.a[0] + (parts[1] || '').replace(/^\s*\([^)]*\)/, '');
        fb(box, ok, (ok ? '' : `Правильно: <b>${esc(it.a[0])}</b>. `) + (it.explain ? esc(it.explain) : '') + ' ' + listenBtn(cleanQ(it.q, it.a[0])));
        report(ok); nextBtn(actions, next);
      };
      inp.onkeydown = e => { if (e.key === 'Enter') go(); };
      checkBtn(actions).onclick = go;
    },
    judge(s, body, actions, box, report, next) {
      const it = s.it;
      body.innerHTML = `<p class="q big">${esc(it.q)}</p><div class="opts two"><button class="opt" type="button" data-v="1">Правильно</button><button class="opt" type="button" data-v="0">С ошибкой</button></div>`;
      body.querySelectorAll('.opt').forEach(b => b.onclick = () => {
        const v = b.dataset.v === '1', ok = v === it.ok;
        body.querySelectorAll('.opt').forEach(x => { x.disabled = true; if ((x.dataset.v === '1') === it.ok) x.classList.add('right'); });
        if (!ok) b.classList.add('wrong');
        fb(box, ok, esc(it.fix)); report(ok); nextBtn(actions, next);
      });
    },
    transform(s, body, actions, box, report, next) {
      const it = s.it;
      body.innerHTML = `<p class="src">${esc(it.src)}</p><p class="key"><span>${esc(it.key)}</span></p><p class="q gapq">${esc(it.before)} <input class="gapin wide" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Ответ"> ${esc(it.after)}</p>`;
      const inp = body.querySelector('input');
      const go = () => {
        if (!inp.value.trim()) { inp.focus(); return; }
        const ok = matches(inp.value, it.a); inp.disabled = true; inp.classList.add(ok ? 'right' : 'wrong');
        const best = it.a[0].replace(/^i /, 'I ').replace(/ i /g, ' I ');
        fb(box, ok, `${ok ? '' : 'Возможный ответ: '}<b>${esc(it.before)} ${esc(best)} ${esc(it.after)}</b>`);
        report(ok); nextBtn(actions, next);
      };
      inp.onkeydown = e => { if (e.key === 'Enter') go(); };
      checkBtn(actions).onclick = go;
    },
    order(s, body, actions, box, report, next) {
      const it = s.it; let built = [];
      const pool = shuffle(it.words.map((w, i) => ({ w, i })));
      body.innerHTML = `<div class="built" aria-label="Ваше предложение"></div><div class="pool"></div>`;
      const bEl = body.querySelector('.built'), pEl = body.querySelector('.pool');
      function draw() {
        bEl.innerHTML = built.length ? built.map(x => `<button class="chip" type="button" data-i="${x.i}">${esc(x.w)}</button>`).join('') : '<span class="ph">Нажимайте на слова по порядку</span>';
        pEl.innerHTML = pool.map(x => `<button class="chip" type="button" data-i="${x.i}" ${built.includes(x) ? 'disabled' : ''}>${esc(x.w)}</button>`).join('');
        pEl.querySelectorAll('.chip').forEach(c => c.onclick = () => { built.push(pool.find(x => x.i === +c.dataset.i)); draw(); });
        bEl.querySelectorAll('.chip').forEach(c => c.onclick = () => { built = built.filter(x => x.i !== +c.dataset.i); draw(); });
      }
      draw();
      checkBtn(actions).onclick = () => {
        if (built.length < it.words.length) { toast('Используйте все слова'); return; }
        const ok = matches(built.map(x => x.w).join(' '), it.a);
        bEl.classList.add(ok ? 'right' : 'wrong'); bEl.querySelectorAll('.chip').forEach(c => c.disabled = true); pEl.innerHTML = '';
        fb(box, ok, `${ok ? '' : 'Правильно: '}<b>${esc(it.a[0])}.</b> ${listenBtn(it.a[0])}`); report(ok); nextBtn(actions, next);
      };
    },
    reading(s, body, actions, box, report, next, L) {
      const vmap = {}; (L.vocab || []).forEach(v => vmap[v.en] = v);
      const STOP = ['the', 'sth', 'your', 'not', 'with', 'sb'];
      const findV = t => { const tl = t.toLowerCase(); let best = null, score = 0; (L.vocab || []).forEach(v => { const ws = v.en.toLowerCase().replace(/\(.*?\)/g, '').split(/[\s\/]+/).filter(w => w.length > 2 && !STOP.includes(w)); const hits = ws.filter(w => tl.includes(w.slice(0, Math.max(3, w.length - 2)))).length; if (hits > score) { score = hits; best = v; } }); return best; };
      const paras = s.b.text.map(p => '<p>' + esc(p).replace(/\[\[(.+?)\]\]/g, (m, t) => { const v = findV(t); return `<button class="hl" type="button" data-tip="${esc(v ? v.ru : '')}">${t}</button>`; }) + '</p>').join('');
      const plain = s.b.text.join(' ').replace(/\[\[|\]\]/g, '');
      body.innerHTML = `<article class="article"><figure class="cover" hidden><img alt=""></figure><h2>${esc(s.b.title)}</h2><p class="article-sf">${esc(s.b.standfirst)}</p>
        <div class="article-tools">${listenBtn(plain, 'Слушать статью')}<button class="stop" type="button">Стоп</button></div>
        <div class="article-body">${paras}</div><p class="article-note">Подчёркнутые выражения из урока: нажмите, чтобы увидеть перевод.</p></article>`;
      withCover(body, 'images/' + L.id + '.jpg');
      body.querySelector('.stop').onclick = () => { try { speechSynthesis.cancel(); } catch (e) {} };
      body.querySelectorAll('.hl').forEach(b => b.onclick = () => { body.querySelectorAll('.hl.show').forEach(x => x !== b && x.classList.remove('show')); b.classList.toggle('show'); });
      const b = checkBtn(actions, 'К вопросам'); b.onclick = next;
    },
    dictation(s, body, actions, box, report, next) {
      const it = s.it;
      body.innerHTML = `<div class="dict"><button class="btn play" type="button" data-say="${esc(it.text)}">Прослушать</button><button class="btn ghost slow" type="button">Медленно</button></div><textarea class="dictin" rows="3" autocomplete="off" autocapitalize="sentences" spellcheck="false" aria-label="Запишите предложение"></textarea>`;
      body.querySelector('.slow').onclick = () => { const r = state.settings.rate; state.settings.rate = 0.7; speak(it.text); state.settings.rate = r; };
      setTimeout(() => speak(it.text), 300);
      const ta = body.querySelector('textarea');
      checkBtn(actions).onclick = () => {
        if (!ta.value.trim()) { ta.focus(); return; }
        const ok = matches(ta.value, it.a); ta.disabled = true; ta.classList.add(ok ? 'right' : 'wrong');
        fb(box, ok, `${ok ? '' : 'Оригинал: '}<b>${esc(it.text)}</b>${ok ? '' : '<br><span class="diff">' + diff(ta.value, it.text) + '</span>'}`);
        report(ok); nextBtn(actions, next);
      };
    },
    speak(s, body, actions, box, report, next, L) {
      const b = s.b;
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      body.innerHTML = `<div class="speak">
        <p class="kicker">Interview question</p>
        <p class="prompt">${esc(b.prompt)} ${listenBtn(b.prompt)}</p>
        <p class="tips">${esc(b.tips)}</p>
        <div class="rec-row">${SR ? '<button class="btn primary rec" type="button">Начать запись</button>' : ''}<span class="rec-state"></span></div>
        <textarea class="transcript" rows="6" placeholder="${SR ? 'Здесь появится распознанный текст. Его можно поправить или напечатать ответ вручную.' : 'Распознавание речи недоступно в этом браузере: ответьте вслух, а потом кратко запишите ответ здесь.'}"></textarea>
        <div class="targets">${b.targets.map((t, i) => `<span class="tg" data-i="${i}">${esc(t.label)}</span>`).join('')}</div>
        <details class="model"><summary>Показать пример ответа</summary><p>${esc(b.model)} ${listenBtn(b.model)}</p></details>
      </div>`;
      const ta = body.querySelector('.transcript');
      const check = () => { const txt = ta.value.toLowerCase().replace(/[’]/g, "'"); body.querySelectorAll('.tg').forEach(el => el.classList.toggle('hit', new RegExp(b.targets[+el.dataset.i].re, 'i').test(txt))); };
      ta.oninput = check;
      if (SR) {
        let rec = null, on = false, base = '';
        const btn = body.querySelector('.rec'), st = body.querySelector('.rec-state');
        btn.onclick = () => {
          if (on) { rec && rec.stop(); return; }
          try {
            rec = new SR(); rec.lang = state.settings.accent; rec.continuous = true; rec.interimResults = true;
            base = ta.value ? ta.value + ' ' : '';
            rec.onresult = e => { let t = ''; for (let i = 0; i < e.results.length; i++) t += e.results[i][0].transcript; ta.value = base + t; check(); };
            rec.onerror = e => { st.textContent = e.error === 'not-allowed' ? 'Нет доступа к микрофону: ответьте вслух и запишите кратко текстом.' : 'Ошибка распознавания: ' + e.error; };
            rec.onend = () => { on = false; btn.textContent = 'Продолжить запись'; btn.classList.remove('on'); if (!st.textContent.startsWith('Нет')) st.textContent = ''; };
            rec.start(); on = true; btn.textContent = 'Остановить'; btn.classList.add('on'); st.textContent = 'Слушаю…';
          } catch (e) { st.textContent = 'Микрофон недоступен здесь.'; }
        };
      }
      const done = checkBtn(actions, s.last ? (L.kind === 'interview' ? 'Завершить тренировку' : 'Завершить урок') : 'Следующий вопрос');
      done.onclick = () => { try { speechSynthesis.cancel(); } catch (e) {} next(); };
    }
  };
  function fmtQ(q) { return esc(q).replace('___', '<span class="gapline">_____</span>'); }
  function cleanQ(q, a) { return q.replace(/\s*\([^)]*\)/, '').replace('___', a).replace(/^—\s*/, '').replace(/\s—\s/g, ' '); }
  function diff(a, b) {
    const A = norm(a).split(' '), B = b.split(/\s+/);
    return B.map(w => A.includes(norm(w)) ? esc(w) : `<mark>${esc(w)}</mark>`).join(' ');
  }

  route();
})();
