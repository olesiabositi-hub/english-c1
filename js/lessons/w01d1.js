window.C1 = window.C1 || {};
C1.lessons = C1.lessons || {};
C1.lessons.w01d1 = {
  id: 'w01d1',
  week: 1, day: 1, issue: 1,
  title: 'First impressions',
  standfirst: 'Present perfect или past simple: как понять, «закрыто» время или ещё идёт. И 15 выражений, которые помогают знакомиться, вести small talk и производить впечатление на интервью.',
  minutes: 40,
  vocab: [
    { id: 'v-make-impression', en: 'make a lasting impression (on sb)', ru: 'произвести неизгладимое впечатление', ex: 'Her answer about teamwork made a lasting impression on the panel.' },
    { id: 'v-come-across', en: 'come across as', ru: 'производить впечатление (какого-то человека)', ex: 'He comes across as rather cold, but he\'s actually just shy.' },
    { id: 'v-hit-it-off', en: 'hit it off (with sb)', ru: 'сразу найти общий язык', ex: 'We hit it off straight away and talked for hours.' },
    { id: 'v-break-ice', en: 'break the ice', ru: 'растопить лёд, снять напряжение', ex: 'A quick joke about the weather helped break the ice.' },
    { id: 'v-strike-up', en: 'strike up a conversation', ru: 'завязать разговор', ex: 'I struck up a conversation with the woman next to me in the queue.' },
    { id: 'v-small-talk', en: 'make small talk', ru: 'вести светскую беседу', ex: 'I\'ve never been good at making small talk with strangers.' },
    { id: 'v-at-ease', en: 'put sb at ease', ru: 'помочь кому-то расслабиться', ex: 'The interviewer smiled and immediately put me at ease.' },
    { id: 'v-point-across', en: 'get your point across', ru: 'донести свою мысль', ex: 'She spoke slowly to make sure she got her point across.' },
    { id: 'v-beat-bush', en: 'beat about the bush', ru: 'ходить вокруг да около', ex: 'Stop beating about the bush and tell me what happened.' },
    { id: 'v-speak-mind', en: 'speak your mind', ru: 'говорить прямо, что думаешь', ex: 'Our manager encourages everyone to speak their mind in meetings.' },
    { id: 'v-cross-purposes', en: 'talk at cross purposes', ru: 'говорить о разном, не понимая друг друга', ex: 'We\'d been talking at cross purposes: I meant this Friday, he meant next.' },
    { id: 'v-wavelength', en: 'be on the same wavelength', ru: 'быть на одной волне', ex: 'From the first meeting, we were on the same wavelength.' },
    { id: 'v-edgeways', en: 'not get a word in edgeways', ru: 'не дать вставить ни слова', ex: 'He talked so much that I couldn\'t get a word in edgeways.' },
    { id: 'v-rapport', en: 'build rapport (with sb)', ru: 'наладить контакт, взаимопонимание', ex: 'Good salespeople build rapport before they talk about the product.' },
    { id: 'v-conclusions', en: 'jump to conclusions', ru: 'делать поспешные выводы', ex: 'Don\'t jump to conclusions: he may just be nervous.' }
  ],
  // extra review cards beyond vocab (grammar patterns)
  srsExtra: [
    { id: 'g-known-since', en: 'I\'ve known him since school.', ru: 'Я знаю его со школы.', ex: 'Не «I know him since…» — период до сейчас требует present perfect.' },
    { id: 'g-first-time', en: 'It\'s the first time I\'ve given a presentation in English.', ru: 'Я впервые делаю презентацию на английском.', ex: 'It\'s the first time + present perfect.' },
    { id: 'g-when-did', en: 'When did you start learning English?', ru: 'Когда ты начала учить английский?', ex: 'Вопрос с When → past simple.' }
  ],
  steps: [
    { id: 'words', title: 'Слова', blocks: [
      { type: 'cards', instr: 'Прочитайте и прослушайте 15 выражений. Нажмите на карточку, чтобы увидеть перевод: сначала попробуйте угадать смысл сами.' },
      { type: 'match', instr: 'Соедините выражение с определением на английском.', pairs: [
        ['hit it off', 'to like each other immediately'],
        ['beat about the bush', 'to avoid saying something directly'],
        ['put sb at ease', 'to help someone feel relaxed'],
        ['talk at cross purposes', 'to misunderstand each other without realising it'],
        ['speak your mind', 'to say honestly what you think'],
        ['jump to conclusions', 'to decide something too quickly, without the facts']
      ]},
      { type: 'gap', instr: 'Вставьте пропущенное слово.', items: [
        { q: 'We hit it ___ immediately — by the end of the evening we were swapping phone numbers.', a: ['off'] },
        { q: 'On the phone she comes ___ as quite strict, but in person she\'s lovely.', a: ['across'] },
        { q: 'He talked non-stop; I couldn\'t get a word in ___.', a: ['edgeways', 'edgewise'], explain: 'Edgeways — британский вариант, edgewise — американский.' },
        { q: 'I didn\'t know anyone, so I struck ___ a conversation with the person next to me.', a: ['up'] },
        { q: 'A good interviewer tries to put candidates at ___ in the first few minutes.', a: ['ease'] },
        { q: 'It takes time to build ___ with a new client.', a: ['rapport'], explain: 'Rapport читается /ræˈpɔː/: конечная t не произносится.' }
      ]},
      { type: 'choice', instr: 'Выберите выражение, которое лучше всего подходит по смыслу.', items: [
        { q: 'The meeting was going nowhere: for twenty minutes we ___ — I was talking about the budget and she was talking about the deadline.', o: ['were on the same wavelength', 'were talking at cross purposes', 'were breaking the ice'], a: 1 },
        { q: 'I know you\'re worried about the feedback, but please ___. We need to hear what you really think.', o: ['speak your mind', 'beat about the bush', 'make small talk'], a: 0 },
        { q: 'Her presentation was short, but it ___ on everyone in the room.', o: ['came across', 'made a lasting impression', 'got a word in'], a: 1 },
        { q: 'The first five minutes were awkward until someone mentioned football and that ___.', o: ['broke the ice', 'hit it off', 'built rapport'], a: 0 }
      ]}
    ]},
    { id: 'grammar', title: 'Грамматика', blocks: [
      { type: 'theory', title: 'Present perfect vs past simple', html: `
<p class="lead">Выбор между этими временами зависит не от того, <em>когда</em> произошло действие, а от того, как вы видите период времени: он <strong>закрыт</strong> или <strong>ещё продолжается</strong>.</p>

<h3>1. Главное правило</h3>
<div class="rule-grid">
  <div class="rule"><h4>Past simple</h4><p>Период закрыт и отрезан от настоящего.</p>
  <p class="markers">yesterday, last week, in 2019, two years ago, when I was a student, the other day</p>
  <p class="ex">I <b>met</b> my manager at a conference two years ago.</p></div>
  <div class="rule"><h4>Present perfect</h4><p>Период тянется до сейчас: результат или опыт важен сейчас.</p>
  <p class="markers">so far, up to now, lately, this year, over the past few months, since, ever, never, yet, just</p>
  <p class="ex">I <b>have had</b> three interviews so far this month.</p></div>
</div>

<h3>2. Одни и те же слова, разный выбор</h3>
<p>Важно, закончился ли период <em>в момент речи</em>:</p>
<ul class="ex-list">
  <li>В 11:00: I<b>'ve had</b> three coffees this morning. <span class="note">утро ещё идёт</span></li>
  <li>В 16:00: I <b>had</b> three coffees this morning. <span class="note">утро закончилось</span></li>
  <li>In the past few years, remote work <b>has become</b> normal. <span class="note">период до сейчас</span></li>
  <li>In the past, people <b>wrote</b> letters by hand. <span class="note">просто «в прошлом»</span></li>
</ul>

<h3>3. Новость, затем детали</h3>
<p>Новость часто сообщают в present perfect, а как только время зафиксировано, переходят на past simple:</p>
<p class="ex">— I<b>'ve</b> just <b>had</b> my interview! — How <b>did</b> it <b>go</b>? — Really well. They <b>asked</b> about my last project and I <b>didn't panic</b>.</p>

<h3>4. It's the first time…</h3>
<p>После <em>It's the first / second / best…</em> идёт present perfect:</p>
<p class="ex">It's the first time I<b>'ve given</b> a presentation in English.<br>This is the best interview I<b>'ve</b> ever <b>had</b>.</p>

<h3>5. Нюанс уровня C1: живой и закрытый «опыт»</h3>
<p>Если человек жив и его «период» продолжается, используют present perfect. Если человека нет или эпоха закончилась, используют past simple.</p>
<p class="ex">Spielberg <b>has directed</b> more than thirty films. <span class="note">карьера продолжается</span><br>Hitchcock <b>directed</b> more than fifty films.</p>

<div class="trap"><h4>Ловушка для русскоговорящих</h4>
<p>В русском «я живу здесь пять лет» стоит в настоящем времени, а в английском — нет:</p>
<p class="ex"><s>I live here for five years.</s> → I<b>'ve lived</b> / I<b>'ve been living</b> here for five years.<br>
<s>I know him since school.</s> → I<b>'ve known</b> him since school.<br>
<s>When have you started?</s> → When <b>did</b> you <b>start</b>? <span class="note">when всегда указывает на конкретный момент</span></p></div>
` },
      { type: 'choice', instr: 'Выберите правильную форму.', items: [
        { q: 'I ___ three interviews so far this month, and none of them went particularly well.', o: ['had', 'have had'], a: 1, explain: 'So far this month: месяц ещё идёт.' },
        { q: 'She ___ the company back in 2019, straight after graduating.', o: ['joined', 'has joined'], a: 0, explain: 'In 2019: закрытый период.' },
        { q: 'It\'s the first time I ___ a presentation in English, so please be patient!', o: ['give', 'gave', 'have given'], a: 2, explain: 'It\'s the first time + present perfect.' },
        { q: 'It\'s 4 p.m. — I ___ a really awkward call this morning; the client kept interrupting me.', o: ['have had', 'had'], a: 1, explain: 'В 16:00 утро уже закончилось.' },
        { q: 'Over the past few months, we ___ a lot about each other\'s working styles.', o: ['learnt', 'have learnt'], a: 1, explain: 'Over the past few months: период тянется до сейчас.' },
        { q: 'When I was living in Moscow, I ___ for a small marketing agency.', o: ['worked', 'have worked'], a: 0, explain: 'When I was living…: закрытый период жизни.' },
        { q: 'Spielberg ___ more than thirty films.', o: ['directed', 'has directed'], a: 1, explain: 'Режиссёр продолжает работать, его «период» не закрыт.' }
      ]},
      { type: 'gap', instr: 'Поставьте глагол в правильную форму.', items: [
        { q: 'I ___ (know) Anna since we were at university.', a: ['have known', '\'ve known'] },
        { q: 'We ___ (meet) at a conference in Tbilisi two years ago.', a: ['met'] },
        { q: 'Lately, I ___ (notice) that small talk comes much more easily to me.', a: ['have noticed', '\'ve noticed'] },
        { q: '— Have you ever been to London? — Yes, I ___ (go) there in 2018 for a training course.', a: ['went'], explain: 'Вопрос в present perfect (опыт), но ответ с датой уже в past simple.' },
        { q: 'Up to now, nobody ___ (complain) about the new schedule.', a: ['has complained'] },
        { q: 'Guess what? I ___ (just / get) an invitation to a second interview!', a: ['have just got', '\'ve just got', 'have just gotten', '\'ve just gotten', 'just got'], explain: 'Британский вариант: I\'ve just got. В американском английском нормально и just got (past simple).' }
      ]},
      { type: 'judge', instr: 'Правильно или с ошибкой?', items: [
        { q: 'I live in Georgia since July.', ok: false, fix: 'I\'ve lived / I\'ve been living in Georgia since July.' },
        { q: 'I\'ve seen him at the conference last week.', ok: false, fix: 'I saw him at the conference last week. (last week — закрытый период)' },
        { q: 'We\'ve worked together for five years, and we still get on really well.', ok: true, fix: 'Всё верно: период до сейчас.' },
        { q: 'When have you started learning English?', ok: false, fix: 'When did you start learning English?' },
        { q: 'This is the best presentation I\'ve ever heard.', ok: true, fix: 'Всё верно: превосходная степень + ever + present perfect.' },
        { q: 'He has left the company two months ago.', ok: false, fix: 'He left the company two months ago. (ago → past simple)' }
      ]},
      { type: 'transform', instr: 'Перефразируйте, используя слово в рамке (2–5 слов). Так выглядит задание экзамена C1 Advanced.', items: [
        { src: 'I started working here three years ago.', key: 'FOR', before: 'I', after: 'three years.', a: ['have worked here for', '\'ve worked here for', 'have been working here for', '\'ve been working here for'] },
        { src: 'This is my first visit to Scotland.', key: 'TIME', before: 'It\'s the first', after: 'Scotland.', a: ['time i have been to', 'time i\'ve been to', 'time i have visited', 'time i\'ve visited', 'time i have ever been to', 'time i\'ve ever been to', 'time i have ever visited', 'time i\'ve ever visited'] },
        { src: 'I haven\'t spoken to her since March.', key: 'LAST', before: 'The', after: 'in March.', a: ['last time i spoke to her was', 'last time i talked to her was', 'last time i spoke with her was', 'last time i talked with her was'] },
        { src: 'We haven\'t had a team meeting for weeks.', key: 'SINCE', before: 'It', after: 'a team meeting.', a: ['has been weeks since we had', '\'s been weeks since we had', 'has been weeks since we last had', '\'s been weeks since we last had', 'is weeks since we had', 'is weeks since we last had'] }
      ]},
      { type: 'order', instr: 'Составьте предложение из слов.', items: [
        { words: ['I', 'have', 'known', 'him', 'since', 'we', 'were', 'at', 'school'], a: ['I have known him since we were at school'] },
        { words: ['It\'s', 'the', 'first', 'time', 'I\'ve', 'been', 'interviewed', 'in', 'English'], a: ['It\'s the first time I\'ve been interviewed in English'] }
      ]}
    ]},
    { id: 'reading', title: 'Текст', blocks: [
      { type: 'reading', title: 'The seven-second verdict', standfirst: 'Recruiters say they judge candidates on their experience. Research suggests they often decide much sooner.', text: [
        'Psychologists have long argued that we judge strangers almost instantly. In a well-known series of experiments at Princeton, volunteers saw photographs of faces for just a tenth of a second — and their snap judgements barely changed when they were given more time to look. Recruiters, it seems, are no exception.',
        'Over the past decade, studies of job interviews have repeatedly shown that many interviewers make up their minds within the first few minutes. One widely quoted survey of hiring managers found that a third of them knew whether they would hire someone within ninety seconds. And what happens in those ninety seconds? Mostly, nothing to do with qualifications.',
        'Candidates who [[come across as]] warm and confident tend to do well, even before they have said anything particularly impressive. Eye contact, a relaxed smile and the ability to [[make small talk]] on the way from reception to the meeting room all help to [[break the ice]]. Interviewers who [[hit it off]] with a candidate early on often spend the rest of the conversation looking for evidence that confirms their first impression.',
        'This is unfair, of course, and many companies have tried to reduce the effect. Some have introduced structured interviews, in which every candidate answers exactly the same questions in the same order. Others have started to remove names and photographs from CVs. These measures have helped, but they have not solved the problem entirely.',
        'So what can a candidate do? Experienced coaches give surprisingly simple advice: prepare a confident answer to "Tell me about yourself", arrive early enough to feel calm, and treat the receptionist as warmly as the CEO. You cannot stop people from [[jumping to conclusions]] — but you can make sure the conclusion they jump to is a good one.'
      ]},
      { type: 'choice', instr: 'Ответьте на вопросы по тексту.', items: [
        { q: 'What did the Princeton experiments suggest?', o: ['People need time to judge faces accurately.', 'Judgements made in a fraction of a second hardly change with more time.', 'Recruiters are better at judging faces than other people.'], a: 1 },
        { q: 'According to the article, what mostly influences interviewers in the first ninety seconds?', o: ['The candidate\'s qualifications', 'How the candidate comes across', 'The design of the candidate\'s CV'], a: 1 },
        { q: 'What is the main idea of structured interviews?', o: ['To make interviews shorter', 'To treat all candidates in the same way', 'To help candidates prepare in advance'], a: 1 },
        { q: 'What is the writer\'s view of the measures companies have taken?', o: ['They have completely failed.', 'They are useful but not a complete solution.', 'They are unfair to candidates.'], a: 1 },
        { q: 'The writer\'s final advice is essentially to…', o: ['avoid making any first impression at all', 'take control of the impression you create', 'focus only on the most senior people'], a: 1 }
      ]},
      { type: 'dictation', instr: 'Диктант. Прослушайте предложение (можно несколько раз) и запишите его.', items: [
        { text: 'I\'ve known her since we were at university, and we hit it off straight away.', a: ['I\'ve known her since we were at university, and we hit it off straight away', 'I have known her since we were at university and we hit it off straight away'] },
        { text: 'Over the past few months, I\'ve learnt a lot about small talk.', a: ['Over the past few months I\'ve learnt a lot about small talk', 'Over the past few months I have learnt a lot about small talk', 'Over the past few months I\'ve learned a lot about small talk', 'Over the past few months I have learned a lot about small talk'] }
      ]}
    ]},
    { id: 'speaking', title: 'Речь', blocks: [
      { type: 'speak',
        prompt: 'Tell me about a time you made a strong first impression — or a terrible one. What happened, and what have you learnt from it?',
        tips: 'Говорите 1–2 минуты. Используйте past simple для самой истории и present perfect для выводов («Since then, I\'ve…»). Постарайтесь вставить хотя бы три выражения из урока.',
        targets: [
          { label: 'come across as', re: 'c[oa]me?s? across|coming across' },
          { label: 'hit it off', re: 'hit it off|hitting it off' },
          { label: 'break the ice', re: '(break|broke|breaking|broken) the ice' },
          { label: 'strike up a conversation', re: '(strike|struck|striking) up' },
          { label: 'small talk', re: 'small talk' },
          { label: 'put sb at ease', re: 'at ease' },
          { label: 'same wavelength', re: 'same wavelength' },
          { label: 'jump to conclusions', re: '(jump|jumped|jumping) to conclusions?' },
          { label: 'rapport', re: 'rapport' },
          { label: 'lasting impression', re: '(make|made|making) (a|an) (\\w+ )?impression' },
          { label: 'present perfect', re: "\\b(i've|i have|i haven't|we've|we have|has|have) (never |always |just |already |since |really )?(learnt|learned|been|become|made|met|seen|done|had|known|realised|realized|noticed|stopped|started|tried|changed|understood)\\b" }
        ],
        model: 'A couple of years ago, I went to a networking event where I didn\'t know a single person. At first I felt really awkward, but I struck up a conversation with a woman by the coffee machine, and a silly joke about the queue helped break the ice. We hit it off immediately — it turned out we were on the same wavelength about almost everything. Later that evening she introduced me to her manager, and that conversation led to a project I really enjoyed. Since then, I\'ve learnt that small talk isn\'t a waste of time. I\'ve also stopped jumping to conclusions about people: the ones who come across as cold are often just nervous.'
      }
    ]}
  ]
};
