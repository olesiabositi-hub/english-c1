window.C1 = window.C1 || {};
C1.lessons = C1.lessons || {};
C1.lessons.w01d2 = {
  id: "w01d2", week: 1, day: 2, issue: 2,
  title: "Keeping in touch",
  standfirst: "Present perfect continuous или simple: что важнее, процесс или результат. И 15 выражений о дружбе, общении и о том, как люди отдаляются и снова находят друг друга.",
  minutes: 40,
  vocab: [
    { id: "v-keep-touch", en: "keep in touch (with sb)", ru: "поддерживать связь", ex: "We've kept in touch ever since we worked together in Moscow." },
    { id: "v-lose-touch", en: "lose touch (with sb)", ru: "потерять связь", ex: "I lost touch with most of my school friends after I moved." },
    { id: "v-drift-apart", en: "drift apart", ru: "постепенно отдалиться друг от друга", ex: "We didn't fall out; we just drifted apart." },
    { id: "v-catch-up", en: "catch up (with sb)", ru: "пообщаться, обменяться новостями", ex: "Let's meet for coffee and catch up properly." },
    { id: "v-get-on", en: "get on (well) with sb", ru: "ладить с кем-то", ex: "I get on really well with my new colleagues." },
    { id: "v-fall-out", en: "fall out (with sb)", ru: "поссориться", ex: "They fell out over money and haven't spoken since." },
    { id: "v-make-up", en: "make up", ru: "помириться", ex: "We had a big argument, but we made up the next day." },
    { id: "v-eye-to-eye", en: "see eye to eye (on sth)", ru: "сходиться во взглядах", ex: "My manager and I don't always see eye to eye on deadlines." },
    { id: "v-in-common", en: "have a lot in common", ru: "иметь много общего", ex: "We have a lot in common: we both love hiking and hate long meetings." },
    { id: "v-go-back", en: "go back a long way", ru: "давно знать друг друга", ex: "Anna and I go back a long way — we met at university." },
    { id: "v-confide", en: "confide in sb", ru: "доверять кому-то личное", ex: "She's the only person I really confide in." },
    { id: "v-there-for", en: "be there for sb", ru: "быть рядом, поддержать", ex: "When I lost my job, my sister was there for me." },
    { id: "v-house-fire", en: "get on like a house on fire", ru: "моментально подружиться, отлично ладить", ex: "Our kids got on like a house on fire." },
    { id: "v-close-knit", en: "close-knit (team / community)", ru: "сплочённый", ex: "It's a small, close-knit team, so everyone helps each other." },
    { id: "v-look-up", en: "look up to sb", ru: "уважать, равняться на кого-то", ex: "I've always looked up to my grandmother." }
  ],
  srsExtra: [
    { id: "g-been-waiting", en: "How long have you been waiting?", ru: "Как долго ты ждёшь?", ex: "How long → present perfect continuous." },
    { id: "g-had-laptop", en: "I've had this laptop for seven years.", ru: "У меня этот ноутбук уже семь лет.", ex: "Have = владеть: глагол состояния, без -ing." },
    { id: "g-written-emails", en: "I've written twelve emails this morning.", ru: "Я написала двенадцать писем за утро.", ex: "Количество → present perfect simple." }
  ],
  steps: [
    { id: "words", title: "Слова", blocks: [
      { type: "cards", instr: "Прочитайте и прослушайте 15 выражений. Нажмите на карточку, чтобы увидеть перевод." },
      { type: "match", instr: "Соедините выражение с определением.", pairs: [
        ["drift apart", "to slowly become less close"],
        ["see eye to eye", "to agree with someone"],
        ["confide in sb", "to tell someone your private thoughts"],
        ["go back a long way", "to have known each other for years"],
        ["look up to sb", "to admire and respect someone"],
        ["make up", "to become friends again after an argument"]
      ]},
      { type: "gap", instr: "Вставьте пропущенное слово.", items: [
        { q: "Since I moved to Tbilisi, I've tried hard to keep ___ touch with my old colleagues.", a: ["in"] },
        { q: "We used to be best friends, but we gradually drifted ___ after school.", a: ["apart"] },
        { q: "He fell ___ with his business partner over the future of the company.", a: ["out"] },
        { q: "Call me when you're back — we really need to catch ___.", a: ["up"] },
        { q: "I've always looked up ___ my first manager; she taught me everything.", a: ["to"] },
        { q: "My brother and his new neighbour get on like a house on ___.", a: ["fire"] }
      ]},
      { type: "choice", instr: "Выберите подходящее выражение.", items: [
        { q: "I'm not sure I ___ with her on this — her plan seems far too risky.", o: ["see eye to eye", "get on like a house on fire", "go back a long way"], a: 0 },
        { q: "It's a really ___ community: everyone knows everyone, and people help each other.", o: ["close-knit", "drifted apart", "fallen out"], a: 0 },
        { q: "When things got difficult, my friends ___. I'll never forget it.", o: ["were there for me", "looked up to me", "lost touch with me"], a: 0 },
        { q: "Although we're very different people, we ___ — we've been friends for over twenty years.", o: ["go back a long way", "have fallen out", "drift apart"], a: 0 }
      ]}
    ]},
    { id: "grammar", title: "Грамматика", blocks: [
      { type: "theory", title: "Present perfect continuous vs present perfect simple", html: `
<p class="lead">Оба времени связывают прошлое с настоящим. Разница в фокусе: на <strong>процессе и длительности</strong> (continuous) или на <strong>результате и количестве</strong> (simple).</p>

<h3>1. Процесс или результат</h3>
<div class="rule-grid">
  <div class="rule"><h4>Present perfect continuous</h4><p>Процесс и его длительность. Действие может ещё продолжаться.</p>
  <p class="markers">how long, all day, for ages, lately, recently, since…</p>
  <p class="ex">I<b>'ve been writing</b> emails all morning.</p></div>
  <div class="rule"><h4>Present perfect simple</h4><p>Результат, сколько сделано. Действие завершено.</p>
  <p class="markers">how many, how much, already, yet, ever, never, three times</p>
  <p class="ex">I<b>'ve written</b> twelve emails this morning.</p></div>
</div>

<h3>2. How long или how many</h3>
<ul class="ex-list">
  <li>How long <b>have</b> you <b>been learning</b> English? <span class="note">длительность</span></li>
  <li>How many lessons <b>have</b> you <b>done</b> this week? <span class="note">количество</span></li>
  <li>I<b>'ve been reading</b> this book for weeks. <span class="note">ещё читаю</span></li>
  <li>I<b>'ve read</b> three books this month. <span class="note">прочитаны</span></li>
</ul>

<h3>3. Видимые следы действия</h3>
<p>Действие только что закончилось, но видны его последствия:</p>
<p class="ex">You're out of breath. <b>Have</b> you <b>been running</b>?<br>Sorry about my hands — I<b>'ve been fixing</b> the bike.</p>

<h3>4. Временное и постоянное</h3>
<p class="ex">I<b>'ve been living</b> with friends since I arrived. <span class="note">временно</span><br>My parents <b>have lived</b> in this house all their lives. <span class="note">постоянно</span></p>
<p>С глаголами <em>live, work, study, teach</em> и <em>for / since</em> часто возможны оба варианта, разница минимальна.</p>

<h3>5. Глаголы состояния: только simple</h3>
<p><em>Know, believe, understand, belong, own, want</em> и <em>have</em> в значении «владеть» не ставятся в continuous (подробнее в уроке 4):</p>
<p class="ex">I<b>'ve known</b> her for years. <span class="note">не «have been knowing»</span><br>I<b>'ve had</b> this laptop since 2021.</p>

<div class="trap"><h4>Важно в рабочей переписке</h4>
<p class="ex">I<b>'ve been reading</b> your report. <span class="note">ещё читаю, не закончила</span><br>I<b>'ve read</b> your report. <span class="note">прочитала и готова обсуждать</span></p>
<p>Так же <em>I've been working on the presentation</em> — это не то же самое, что <em>I've finished the presentation</em>. Коллеги поймут вас буквально.</p></div>
` },
      { type: "choice", instr: "Выберите правильную форму.", items: [
        { q: "She ___ three job offers this month!", o: ["has been receiving", "has received"], a: 1, explain: "Количество (three offers) → simple." },
        { q: "How long ___ for a new flat?", o: ["have you been looking", "have you looked"], a: 0, explain: "How long + процесс → continuous." },
        { q: "Your eyes are red. ___?", o: ["Have you cried", "Have you been crying"], a: 1, explain: "Видимые следы недавнего действия → continuous." },
        { q: "I ___ him since we were children.", o: ["have been knowing", "have known"], a: 1, explain: "Know — глагол состояния." },
        { q: "I ___ your report — it's excellent, and I've got a few small comments.", o: ["have been reading", "have read"], a: 1, explain: "Отчёт прочитан целиком, есть результат (комментарии)." },
        { q: "We ___ about moving abroad for a while, but we haven't decided anything yet.", o: ["have been thinking", "have thought"], a: 0, explain: "Think = обдумывать (процесс), поэтому continuous." },
        { q: "How many times ___ this film?", o: ["have you seen", "have you been seeing"], a: 0, explain: "How many times → simple." }
      ]},
      { type: "gap", instr: "Поставьте глагол в правильную форму.", items: [
        { q: "I ___ (try) to call Mark all afternoon, but he isn't answering.", a: ["have been trying", "'ve been trying"] },
        { q: "Good news — I ___ (finish) the presentation! Do you want to see it?", a: ["have finished", "'ve finished"] },
        { q: "Sorry about the mess — we ___ (paint) the kitchen.", a: ["have been painting", "'ve been painting"] },
        { q: "This laptop is old: I ___ (have) it for nearly seven years.", a: ["have had", "'ve had"] },
        { q: "She ___ (write) four articles for the company blog so far.", a: ["has written", "'s written"] },
        { q: "We ___ (wait) for an answer from HR for two weeks now.", a: ["have been waiting", "'ve been waiting"] }
      ]},
      { type: "judge", instr: "Правильно или с ошибкой?", items: [
        { q: "I've been knowing Maria since 2015.", ok: false, fix: "I've known Maria since 2015. (know — глагол состояния)" },
        { q: "I've been drinking four cups of coffee today.", ok: false, fix: "I've had / I've drunk four cups of coffee today. (количество → simple)" },
        { q: "She's been working here since March.", ok: true, fix: "Всё верно." },
        { q: "Look how wet you are! Have you been walking in the rain?", ok: true, fix: "Всё верно: видимые последствия." },
        { q: "I've read this book for two weeks and I'm only halfway through.", ok: false, fix: "I've been reading this book for two weeks… (книга ещё не дочитана)" }
      ]},
      { type: "transform", instr: "Перефразируйте, используя слово в рамке (2–5 слов).", items: [
        { src: "I started learning Spanish two years ago, and I'm still learning it.", key: "BEEN", before: "I", after: "two years.", a: ["have been learning spanish for", "'ve been learning spanish for", "have been studying spanish for", "'ve been studying spanish for"] },
        { src: "This is my third cup of coffee today.", key: "HAD", before: "I", after: "of coffee today.", a: ["have had three cups", "'ve had three cups"] },
        { src: "When did you start working on this project?", key: "LONG", before: "How", after: "on this project?", a: ["long have you been working", "long have you worked"] }
      ]},
      { type: "order", instr: "Составьте предложение из слов.", items: [
        { words: ["We've", "been", "waiting", "for", "an", "answer", "for", "two", "weeks"], a: ["We've been waiting for an answer for two weeks"] }
      ]}
    ]},
    { id: "reading", title: "Текст", blocks: [
      { type: "reading", title: "Why friendships fade", standfirst: "Nobody argued, nothing happened — and yet the friendship is gone. Researchers say that's perfectly normal.", text: [
        "Most of us have a friend we used to see every week and now only message on birthdays. Nobody fell out; nothing dramatic happened. We simply [[drifted apart]]. According to researchers who study friendship, this is not a personal failure but something close to a law of nature.",
        "The Oxford anthropologist Robin Dunbar has been studying human relationships for decades. His research suggests that we can maintain only around 150 meaningful relationships, arranged in layers: roughly five very close people, fifteen good friends, fifty friends and 150 acquaintances. Moving someone into an inner layer takes time, and keeping them there takes even more.",
        "How much time? A study by Jeffrey Hall at the University of Kansas estimated that it takes around fifty hours together to turn an acquaintance into a casual friend, about ninety hours to become real friends, and more than two hundred hours to become close friends. When we move cities or change jobs, those hours suddenly stop, and the relationship slowly slips into an outer layer.",
        "Technology has helped, but only partly. Messages and video calls make it easier to [[keep in touch]], yet many people report that online contact feels thinner than meeting face to face. Researchers who have been looking at this question suggest that the quality of contact matters more than its frequency: one long call in which you genuinely [[catch up]] does more than dozens of quick reactions to someone's photos.",
        "The good news is that old friendships are surprisingly easy to revive. People who [[go back a long way]] share memories and a sense of trust, and these don't disappear just because they have [[lost touch]]. Often, all it takes is a message that says: “I've been thinking about you. How are you?”"
      ]},
      { type: "choice", instr: "Ответьте на вопросы по тексту.", items: [
        { q: "According to the article, friends usually drift apart because…", o: ["they have had a serious argument", "the time they spend together decreases", "they no longer have anything in common"], a: 1 },
        { q: "Dunbar's research suggests that…", o: ["we can have an unlimited number of close friends online", "our relationships are organised in layers of different closeness", "most people have around fifty close friends"], a: 1 },
        { q: "Hall's study measured…", o: ["how long friendships usually last", "how much time it takes to become friends", "how often friends message each other"], a: 1 },
        { q: "What do researchers say about online contact?", o: ["It has replaced face-to-face friendship.", "A few meaningful conversations matter more than many small interactions.", "It always makes friendships weaker."], a: 1 },
        { q: "The last paragraph suggests that reviving an old friendship…", o: ["requires a lot of effort", "is often easier than people think", "rarely works"], a: 1 }
      ]},
      { type: "dictation", instr: "Диктант. Прослушайте и запишите предложение.", items: [
        { text: "We've been trying to catch up for months, but we're both so busy.", a: ["We've been trying to catch up for months, but we're both so busy", "We have been trying to catch up for months but we are both so busy"] },
        { text: "I've lost touch with most of my school friends.", a: ["I've lost touch with most of my school friends", "I have lost touch with most of my school friends"] }
      ]}
    ]},
    { id: "speaking", title: "Речь", blocks: [
      { type: "speak",
        prompt: "How do you keep in touch with friends and family who live far away? Has it become easier or harder over the years?",
        tips: "Говорите 1–2 минуты. Используйте present perfect continuous для того, что продолжается («Recently, I've been…»), и present perfect simple для результатов («I've lost touch with…»).",
        targets: [
          { label: "keep in touch", re: "(keep|kept|keeping) in touch" },
          { label: "lose touch", re: "(lose|lost|losing) touch" },
          { label: "drift apart", re: "(drift|drifted|drifting) apart" },
          { label: "catch up", re: "(catch|caught|catching) up" },
          { label: "get on with", re: "(get|got|getting) on (well |really well )?with" },
          { label: "go back a long way", re: "go back a long way" },
          { label: "have a lot in common", re: "a lot in common" },
          { label: "be there for", re: "(be|been|was|were|is|are) there for" },
          { label: "close-knit", re: "close.?knit" },
          { label: "confide in", re: "confide" },
          { label: "present perfect continuous", re: "(have|has|'ve|'s) been \\w+ing" }
        ],
        model: "Most of my close friends live in different countries now, so we mainly keep in touch through messages and video calls. To be honest, it has become both easier and harder. It's easier because technology is free and instant, but I've noticed that we've been talking less about important things and more about everyday trivia. I've lost touch with a few people I used to be close to — nobody fell out, we just drifted apart. Recently, I've been trying to change that: once a month I set aside an evening to call one old friend and really catch up. The people I go back a long way with are worth the effort."
      }
    ]}
  ]
};
