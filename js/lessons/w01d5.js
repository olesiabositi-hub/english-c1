window.C1 = window.C1 || {};
C1.lessons = C1.lessons || {};
C1.lessons.w01d5 = {
  id: "w01d5", week: 1, day: 5, issue: 5,
  title: "Tell me about yourself",
  standfirst: "Первый вопрос любого интервью и идеальное повторение всех времён недели: настоящее, недавнее прошлое, история и планы. Плюс 15 выражений, чтобы рассказать о себе как профессионал.",
  minutes: 45,
  vocab: [
    { id: "v-background", en: "my background is in", ru: "по образованию / опыту я из сферы", ex: "My background is in marketing, but I've moved into project management." },
    { id: "v-specialise", en: "specialise in sth", ru: "специализироваться на", ex: "I specialise in digital campaigns for small businesses." },
    { id: "v-hands-on", en: "hands-on experience", ru: "практический опыт", ex: "I have hands-on experience of managing remote teams." },
    { id: "v-track-record", en: "a (proven) track record", ru: "подтверждённые результаты", ex: "She has a proven track record of increasing sales." },
    { id: "v-transferable", en: "transferable skills", ru: "универсальные, переносимые навыки", ex: "Teaching gave me strong transferable skills, like presenting and planning." },
    { id: "v-thrive", en: "thrive on sth", ru: "раскрываться, работать лучше всего в условиях", ex: "I thrive on challenges and tight deadlines." },
    { id: "v-learning-curve", en: "a steep learning curve", ru: "быстрое и сложное обучение", ex: "My first job was a steep learning curve, but I learnt a lot." },
    { id: "v-initiative", en: "take the initiative", ru: "проявить инициативу", ex: "I took the initiative and set up a new reporting system." },
    { id: "v-keen", en: "be keen to do sth", ru: "очень хотеть, стремиться", ex: "I'm keen to work in an international environment." },
    { id: "v-table", en: "bring sth to the table", ru: "привнести ценность, предложить", ex: "I think I can bring a lot of creativity to the table." },
    { id: "v-strengths", en: "play to your strengths", ru: "делать ставку на свои сильные стороны", ex: "This role would let me play to my strengths." },
    { id: "v-move-into", en: "move into (a field / role)", ru: "перейти в (сферу, роль)", ex: "After five years in sales, I moved into training." },
    { id: "v-horizons", en: "broaden your horizons", ru: "расширить кругозор", ex: "Working abroad would broaden my horizons." },
    { id: "v-comfort-zone", en: "step out of your comfort zone", ru: "выйти из зоны комфорта", ex: "Presenting in English was a way to step out of my comfort zone." },
    { id: "v-responsible", en: "be responsible for sth", ru: "отвечать за", ex: "I was responsible for a team of six people." }
  ],
  srsExtra: [
    { id: "g-tmay-present", en: "I'm currently working as a project manager at a logistics company.", ru: "Сейчас я работаю менеджером проектов в логистической компании.", ex: "Начало ответа: настоящее время." },
    { id: "g-tmay-since", en: "I've been managing the team since 2021.", ru: "Я руковожу командой с 2021 года.", ex: "Since + период до сейчас → present perfect (continuous)." },
    { id: "g-have-experience", en: "I have five years of experience in sales.", ru: "У меня пять лет опыта в продажах.", ex: "Have = иметь: не «I'm having experience»." }
  ],
  steps: [
    { id: "words", title: "Слова", blocks: [
      { type: "cards", instr: "Прочитайте и прослушайте 15 выражений для рассказа о себе на интервью. Нажмите на карточку, чтобы увидеть перевод." },
      { type: "match", instr: "Соедините выражение с определением.", pairs: [
        ["hands-on experience", "practical experience of doing something"],
        ["a track record", "a history of results that others can check"],
        ["transferable skills", "abilities you can use in many different jobs"],
        ["thrive on sth", "to do very well in a particular situation"],
        ["a steep learning curve", "a period of learning a lot very quickly"],
        ["bring sth to the table", "to offer something valuable"]
      ]},
      { type: "gap", instr: "Вставьте пропущенное слово.", items: [
        { q: "My background is ___ finance and accounting.", a: ["in"] },
        { q: "I'm really ___ to develop my leadership skills.", a: ["keen"] },
        { q: "In my last job, I was responsible ___ the company's social media.", a: ["for"] },
        { q: "Moving to another country forced me to step out of my comfort ___.", a: ["zone"] },
        { q: "I prefer roles that let me play to my ___.", a: ["strengths"] },
        { q: "Nobody asked me to, but I took the ___ and organised a training day.", a: ["initiative"] }
      ]},
      { type: "choice", instr: "Выберите подходящий вариант.", items: [
        { q: "I've worked in three countries, so I can bring a genuinely international perspective ___.", o: ["to the table", "on the table", "at the table"], a: 0 },
        { q: "I ___ pressure — I actually work best when deadlines are tight.", o: ["thrive on", "take the initiative on", "am keen to"], a: 0 },
        { q: "She has a proven ___ of delivering projects on time.", o: ["track record", "learning curve", "comfort zone"], a: 0 },
        { q: "After ten years as a teacher, I'd like to ___ corporate training.", o: ["move into", "broaden", "specialise"], a: 0 }
      ]}
    ]},
    { id: "grammar", title: "Грамматика", blocks: [
      { type: "theory", title: "Tell me about yourself: времена в работе", html: `
<p class="lead">«Tell me about yourself» почти всегда первый вопрос на интервью. Хороший ответ занимает <strong>60–90 секунд</strong> и строится по схеме <strong>настоящее → прошлое → будущее</strong>. Это заодно идеальное повторение всех времён недели.</p>

<h3>1. Схема ответа</h3>
<ul class="ex-list">
  <li>I<b>'m</b> a marketing manager at… I currently <b>lead</b> a team of five. At the moment, I<b>'m working</b> on… <span class="note">кто вы сейчас: present simple / continuous</span></li>
  <li>For the past three years, I<b>'ve been developing</b>… I<b>'ve launched</b> four products. <span class="note">недавние достижения: present perfect</span></li>
  <li>I <b>started</b> my career in customer service. Before that, I <b>had studied</b> economics. <span class="note">путь: past simple, past perfect</span></li>
  <li>Now I<b>'m keen to</b>… That<b>'s</b> why this role <b>caught</b> my attention. <span class="note">почему эта работа: настоящее и цели</span></li>
</ul>

<h3>2. Пример ответа</h3>
<p class="ex">I<b>'m</b> a project coordinator with five years of experience in logistics. At the moment, I<b>'m working</b> for a mid-sized delivery company, where I <b>coordinate</b> a team of eight. Over the past two years, I<b>'ve been leading</b> our move to a new tracking system, and we<b>'ve cut</b> late deliveries by a quarter. I <b>started</b> my career in customer service, which <b>taught</b> me how to stay calm when things go wrong. Now I<b>'m</b> keen to move into an international company, which is why this role <b>caught</b> my attention.</p>

<h3>3. Шпаргалка недели</h3>
<ul class="ex-list">
  <li>Present perfect или past simple: период ещё идёт или закрыт. <span class="note">урок 1</span></li>
  <li>Present perfect simple или continuous: результат и количество или процесс и длительность. <span class="note">урок 2</span></li>
  <li>Narrative tenses: past continuous — фон, past perfect — шаг назад. <span class="note">урок 3</span></li>
  <li>Глаголы состояния: know, believe, belong без -ing; think, have, see меняют смысл. <span class="note">урок 4</span></li>
</ul>

<div class="trap"><h4>Типичная ошибка на интервью</h4>
<p>Пересказывать резюме по порядку, начиная со школы. Начинайте с настоящего: кто вы сейчас и что умеете. Прошлое — только то, что объясняет, почему вы подходите для этой работы.</p>
<p class="ex"><s>I am working here since 2020.</s> → I<b>'ve been working</b> here since 2020.<br><s>I'm having five years of experience.</s> → I <b>have</b> five years of experience.</p></div>
` },
      { type: "choice", instr: "Повторение недели. Выберите правильную форму.", items: [
        { q: "I ___ in logistics for the past six years.", o: ["have been working", "worked", "am working"], a: 0, explain: "For the past six years: период до сейчас." },
        { q: "I ___ my career in 2012 as a junior analyst.", o: ["started", "have started", "had started"], a: 0, explain: "In 2012: закрытый период." },
        { q: "By the time I left the company, I ___ three major projects.", o: ["had led", "led", "have led"], a: 0, explain: "By the time + past → past perfect." },
        { q: "At the moment, I ___ on a new CRM system for our sales team.", o: ["am working", "work", "have worked"], a: 0, explain: "At the moment → present continuous." },
        { q: "I ___ that this role is a perfect match for my skills.", o: ["believe", "am believing"], a: 0, explain: "Believe — глагол состояния." },
        { q: "Over the last year, I ___ more than forty new clients.", o: ["have been training", "have trained", "trained"], a: 1, explain: "Количество (forty clients) → present perfect simple." },
        { q: "I was working as a freelance translator when I ___ an advert for this position.", o: ["saw", "was seeing", "had been seeing"], a: 0, explain: "Событие на фоне длительного действия → past simple." },
        { q: "So far in my current role, I ___ our response time by 30 percent.", o: ["have reduced", "reduced", "had reduced"], a: 0, explain: "So far: результат к настоящему моменту." }
      ]},
      { type: "judge", instr: "Правильно или с ошибкой?", items: [
        { q: "I am working as a project manager since 2020.", ok: false, fix: "I have been working / I have worked as a project manager since 2020." },
        { q: "Before I joined this company, I had worked in two start-ups.", ok: true, fix: "Всё верно: шаг назад от момента «joined»." },
        { q: "I'm having five years of experience in sales.", ok: false, fix: "I have five years of experience in sales." },
        { q: "I've been studying English seriously for the last six months.", ok: true, fix: "Всё верно." },
        { q: "Last year I have completed a course in data analysis.", ok: false, fix: "Last year I completed a course in data analysis." }
      ]},
      { type: "transform", instr: "Перефразируйте, используя слово в рамке (2–5 слов).", items: [
        { src: "I started managing the team in 2021.", key: "SINCE", before: "I", after: "2021.", a: ["have managed the team since", "'ve managed the team since", "have been managing the team since", "'ve been managing the team since"] },
        { src: "My opinion is that I'd be a good fit for the role.", key: "THINK", before: "I", after: "a good fit for the role.", a: ["think i would be", "think i'd be"] },
        { src: "I finished the course, and then I applied for the job.", key: "AFTER", before: "I applied for the job", after: "the course.", a: ["after i had finished", "after i'd finished", "after i finished", "after finishing", "after completing", "after i had completed", "after i completed"] },
        { src: "This is my first interview in English.", key: "EVER", before: "This is the first interview", after: "in English.", a: ["i have ever had", "i've ever had", "i have ever done", "i've ever done", "i have ever given", "i've ever given"] }
      ]},
      { type: "order", instr: "Составьте предложение из слов.", items: [
        { words: ["For", "the", "past", "three", "years,", "I've", "been", "working", "in", "sales"], a: ["For the past three years, I've been working in sales"] }
      ]}
    ]},
    { id: "reading", title: "Текст", blocks: [
      { type: "reading", title: "Three answers to the most common question", standfirst: "Three candidates, one job, one question. A career coach explains which answer works — and why.", text: [
        "“So, tell me about yourself.” It's the most common interview question in the world, and one of the most badly answered. We asked three candidates applying for the same project coordinator role to answer it. Here is what they said.",
        "Candidate A: “Well, I was born in Manchester, and I went to school there. I've always liked travelling. At university I studied history, which I really enjoyed, and then I had a few different jobs. I worked in a shop for a while, and then in a call centre. Now I'm looking for something new.”",
        "Candidate B: “I'm a project coordinator with five years of experience in logistics. At the moment, I'm working for a mid-sized delivery company, where I coordinate a team of eight. Over the past two years, I've been leading our move to a new tracking system, and we've cut late deliveries by a quarter. I started my career in customer service, which taught me how to stay calm when things go wrong. Now I'm [[keen to]] move into a larger, international company, which is why this role caught my attention.”",
        "Candidate C: “I'm extremely hard-working, a real team player and a natural leader. I [[thrive on]] pressure, and I always give 110 percent. I'm passionate about excellence, and I'm a perfectionist, which is probably my only weakness.”",
        "The coach's verdict? Candidate A tells a life story with no direction. Candidate C offers a list of clichés that any applicant could say, with no evidence behind them. Candidate B answers in under a minute, moves from the present to the past to the future, and backs up every claim with a fact. “The interviewer should finish your answer knowing three things,” the coach says. “What you do now, what you've achieved, and why you want this job. Everything else is optional.”"
      ]},
      { type: "choice", instr: "Ответьте на вопросы по тексту.", items: [
        { q: "What is the main problem with Candidate A's answer?", o: ["It is too short.", "It has no clear focus on the job.", "It contains too many numbers."], a: 1 },
        { q: "Which candidate supports their claims with specific results?", o: ["Candidate A", "Candidate B", "Candidate C"], a: 1, fixed: true },
        { q: "What does Candidate B talk about first?", o: ["Their childhood", "Their current role", "Their education"], a: 1 },
        { q: "Why does the coach criticise Candidate C?", o: ["The answer is too long.", "The claims are general and unsupported.", "The candidate admits a weakness."], a: 1 },
        { q: "According to the coach, by the end of your answer the interviewer should know…", o: ["your life story", "your current role, achievements and motivation", "your hobbies and interests"], a: 1 }
      ]},
      { type: "dictation", instr: "Диктант. Прослушайте и запишите предложение.", items: [
        { text: "I've been working in marketing for six years, and I'm keen to move into an international role.", a: ["I've been working in marketing for six years, and I'm keen to move into an international role", "I have been working in marketing for six years and I am keen to move into an international role"] },
        { text: "Before I joined the company, I had worked as a freelance translator.", a: ["Before I joined the company, I had worked as a freelance translator", "Before I joined the company, I'd worked as a freelance translator"] }
      ]}
    ]},
    { id: "speaking", title: "Речь", blocks: [
      { type: "speak",
        prompt: "So, tell me about yourself.",
        tips: "Ваш собственный ответ, 60–90 секунд. Схема: кто вы сейчас → 1–2 достижения с цифрами → коротко о пути → почему вам интересна международная работа. Запишите ответ несколько раз, пока он не зазвучит естественно: этот текст пригодится на настоящем интервью.",
        targets: [
          { label: "my background is in", re: "background is in" },
          { label: "specialise in", re: "speciali[sz]e" },
          { label: "hands-on experience", re: "hands.?on" },
          { label: "track record", re: "track record" },
          { label: "transferable skills", re: "transferable" },
          { label: "thrive on", re: "thrive" },
          { label: "learning curve", re: "learning curve" },
          { label: "take the initiative", re: "initiative" },
          { label: "keen to", re: "keen to" },
          { label: "bring … to the table", re: "to the table" },
          { label: "responsible for", re: "responsible for" },
          { label: "present perfect continuous", re: "(have|has|'ve) been \\w+ing" },
          { label: "a number or fact", re: "\\d|percent|per cent|half|quarter|twice" }
        ],
        model: "I'm a marketing specialist with seven years of experience, mostly in e-commerce. At the moment, I'm working for an online retailer, where I'm responsible for email and social media campaigns. Over the past two years, I've been leading a small team of three, and we've doubled the number of repeat customers. My background is actually in linguistics, which gave me some useful transferable skills — I'm good at writing clearly and understanding different audiences. Recently, I've been working more and more with international clients, and I've realised that I thrive in that kind of environment. That's why I'm keen to join a global company like yours, where I could bring both my marketing experience and my languages to the table."
      }
    ]}
  ]
};
