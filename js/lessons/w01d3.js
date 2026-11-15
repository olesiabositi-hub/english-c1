window.C1 = window.C1 || {};
C1.lessons = C1.lessons || {};
C1.lessons.w01d3 = {
  id: "w01d3", week: 1, day: 3, issue: 3,
  title: "A story worth telling",
  standfirst: "Четыре прошедших времени, из которых строится любая история: что случилось, что происходило фоном, что было раньше и как долго. И 15 выражений, которые делают рассказ живым.",
  minutes: 40,
  vocab: [
    { id: "v-out-of-blue", en: "out of the blue", ru: "неожиданно, как гром среди ясного неба", ex: "Out of the blue, my old boss called and offered me a job." },
    { id: "v-long-story", en: "to cut a long story short", ru: "короче говоря", ex: "To cut a long story short, we missed the flight and spent the night at the airport." },
    { id: "v-dawned", en: "it dawned on me (that)", ru: "до меня дошло, что", ex: "Halfway to the airport, it dawned on me that I'd left my passport at home." },
    { id: "v-nick-of-time", en: "in the nick of time", ru: "в последний момент", ex: "We got to the station in the nick of time." },
    { id: "v-as-luck", en: "as luck would have it", ru: "по счастливой (или несчастливой) случайности", ex: "As luck would have it, the interviewer had studied at my university." },
    { id: "v-turned-out", en: "it turned out (that)", ru: "оказалось, что", ex: "It turned out that we had been talking about two different projects." },
    { id: "v-last-straw", en: "the last straw", ru: "последняя капля", ex: "The overtime was bad enough, but the cancelled holiday was the last straw." },
    { id: "v-narrow-escape", en: "a narrow escape", ru: "едва избежать беды", ex: "Nobody was hurt, but it was a narrow escape." },
    { id: "v-wrong-end", en: "get the wrong end of the stick", ru: "понять всё неправильно", ex: "I think you've got the wrong end of the stick — I wasn't criticising you." },
    { id: "v-believe-eyes", en: "couldn't believe my eyes", ru: "не поверить своим глазам", ex: "When I saw the bill, I couldn't believe my eyes." },
    { id: "v-hindsight", en: "in hindsight", ru: "оглядываясь назад, задним числом", ex: "In hindsight, I should have asked more questions." },
    { id: "v-spur", en: "on the spur of the moment", ru: "спонтанно, под влиянием момента", ex: "We booked the trip on the spur of the moment." },
    { id: "v-loss-words", en: "be at a loss for words", ru: "потерять дар речи", ex: "When they offered me the job, I was at a loss for words." },
    { id: "v-all-sudden", en: "all of a sudden", ru: "вдруг, внезапно", ex: "All of a sudden, the lights went out." },
    { id: "v-to-my-relief", en: "to my surprise / relief / horror", ru: "к моему удивлению / облегчению / ужасу", ex: "To my relief, the presentation file opened." }
  ],
  srsExtra: [
    { id: "g-had-left", en: "By the time we arrived, the train had left.", ru: "Когда мы приехали, поезд уже ушёл.", ex: "By the time + past simple, затем past perfect." },
    { id: "g-had-been-preparing", en: "I had been preparing for weeks, so I felt confident.", ru: "Я готовилась несколько недель, поэтому чувствовала себя уверенно.", ex: "Длительность до момента в прошлом → past perfect continuous." },
    { id: "g-just-sat", en: "I had just sat down when the phone rang.", ru: "Я только села, как зазвонил телефон.", ex: "Had just + V3 … when + past simple." }
  ],
  steps: [
    { id: "words", title: "Слова", blocks: [
      { type: "cards", instr: "Прочитайте и прослушайте 15 выражений для рассказа истории. Нажмите на карточку, чтобы увидеть перевод." },
      { type: "match", instr: "Соедините выражение с определением.", pairs: [
        ["out of the blue", "unexpectedly, with no warning"],
        ["in the nick of time", "at the last possible moment"],
        ["it dawned on me", "I suddenly realised"],
        ["the last straw", "the final problem that makes things unbearable"],
        ["in hindsight", "looking back on a past event"],
        ["on the spur of the moment", "suddenly, without planning"]
      ]},
      { type: "gap", instr: "Вставьте пропущенное слово.", items: [
        { q: "To cut a long story ___, I got the job.", a: ["short"] },
        { q: "I think you've got the wrong end of the ___.", a: ["stick"] },
        { q: "We caught the last train in the ___ of time.", a: ["nick"] },
        { q: "Nobody was injured — it was a ___ escape.", a: ["narrow"] },
        { q: "When she told me the news, I was at a ___ for words.", a: ["loss"] },
        { q: "It ___ out that the manager was an old friend of my father's.", a: ["turned"] }
      ]},
      { type: "choice", instr: "Выберите подходящее выражение.", items: [
        { q: "I didn't plan to quit — I did it on the ___.", o: ["spur of the moment", "nick of time", "last straw"], a: 0 },
        { q: "We had been arguing about the budget for weeks, and his rude email was ___.", o: ["the last straw", "a narrow escape", "out of the blue"], a: 0 },
        { q: "___, I'd have chosen a different university, but I didn't know that then.", o: ["In hindsight", "All of a sudden", "As luck would have it"], a: 0 },
        { q: "I was sure I'd failed. ___, I'd passed with the highest mark in the group.", o: ["To my surprise", "To cut a long story short", "In the nick of time"], a: 0 }
      ]}
    ]},
    { id: "grammar", title: "Грамматика", blocks: [
      { type: "theory", title: "Narrative tenses: как рассказать историю", html: `
<p class="lead">Хорошая история на английском строится на четырёх временах. Каждое отвечает на свой вопрос: что <strong>произошло</strong>, что происходило <strong>фоном</strong>, что случилось <strong>раньше</strong> и <strong>как долго</strong> это длилось до того момента.</p>

<h3>1. Четыре времени</h3>
<ul class="ex-list">
  <li>I <b>opened</b> the door, <b>saw</b> the panel and <b>smiled</b>. <span class="note">past simple: основные события по порядку</span></li>
  <li>It <b>was raining</b>, and everyone <b>was rushing</b> to work. <span class="note">past continuous: фон, действие в процессе</span></li>
  <li>I realised I <b>had left</b> my notes on the train. <span class="note">past perfect: шаг назад, ещё раньше</span></li>
  <li>I <b>had been preparing</b> for weeks, so I felt confident. <span class="note">past perfect continuous: длительность до момента</span></li>
</ul>

<h3>2. Одно when, три смысла</h3>
<ul class="ex-list">
  <li>When I arrived, the meeting <b>started</b>. <span class="note">сначала я пришла, потом началось</span></li>
  <li>When I arrived, the meeting <b>had started</b>. <span class="note">началось до моего прихода</span></li>
  <li>When I arrived, they <b>were having</b> a meeting. <span class="note">совещание уже шло</span></li>
</ul>

<h3>3. Past perfect нужен не всегда</h3>
<p>Если порядок и так ясен из <em>after, before, as soon as</em> или из последовательности событий, достаточно past simple. Past perfect нужен, когда вы «прыгаете назад» по времени.</p>
<p class="ex">After I <b>finished</b> university, I <b>moved</b> to Moscow. <span class="note">порядок ясен</span><br>I <b>moved</b> to Moscow in 2012. I <b>had finished</b> university the year before. <span class="note">шаг назад</span></p>

<h3>4. Типичные конструкции</h3>
<p class="ex">By the time we got to the station, the train <b>had left</b>.<br>
It was the first time I <b>had spoken</b> to a CEO.<br>
I <b>had just sat down</b> when the phone rang.<br>
I <b>hadn't realised</b> how late it was until the lights went off.</p>

<h3>5. Длительность или результат в прошлом</h3>
<p class="ex">She <b>had been working</b> there for ten years when she was promoted. <span class="note">как долго</span><br>
She <b>had written</b> three books by the age of thirty. <span class="note">сколько, результат</span></p>

<div class="trap"><h4>Ловушка для русскоговорящих</h4>
<p>В русском «когда я пришла, все ушли» понятно из контекста. В английском past simple меняет порядок событий:</p>
<p class="ex"><s>When I arrived at the office, everyone went home.</s> <span class="note">будто ушли из-за меня</span><br>When I arrived at the office, everyone <b>had gone</b> home.</p>
<p>И глаголы состояния не ставятся в past continuous: <s>I was knowing</s> → I <b>knew</b>.</p></div>
` },
      { type: "choice", instr: "Выберите правильную форму.", items: [
        { q: "By the time I got to the interview, I ___ my notes three times.", o: ["had read", "read", "was reading"], a: 0, explain: "By the time + действие, завершённое раньше → past perfect." },
        { q: "I ___ home when I realised I'd forgotten my keys.", o: ["walked", "was walking", "had walked"], a: 1, explain: "Фон, прерванный событием → past continuous." },
        { q: "When we arrived at the cinema, the film ___, so we missed the beginning.", o: ["started", "had started", "was starting"], a: 1, explain: "Фильм начался до нашего прихода." },
        { q: "She was exhausted because she ___ all night.", o: ["worked", "had been working", "has been working"], a: 1, explain: "Длительность до момента в прошлом + видимые последствия." },
        { q: "It was the first time I ___ in front of so many people.", o: ["had spoken", "spoke", "have spoken"], a: 0, explain: "It was the first time + past perfect." },
        { q: "After I ___ university, I moved to Moscow.", o: ["finished", "had been finishing", "was finishing"], a: 0, explain: "After делает порядок ясным: past simple достаточно (had finished тоже возможно)." },
        { q: "We ___ for two hours when the guide finally admitted we were lost.", o: ["had been walking", "were walking", "have been walking"], a: 0, explain: "For two hours … when: длительность до момента → past perfect continuous." }
      ]},
      { type: "gap", instr: "Поставьте глагол в правильную форму.", items: [
        { q: "I ___ (never / meet) anyone so inspiring before I met her.", a: ["had never met", "'d never met"] },
        { q: "While I ___ (wait) for the bus, I saw an old school friend.", a: ["was waiting"] },
        { q: "By the time the police arrived, the thieves ___ (escape).", a: ["had escaped", "had already escaped"] },
        { q: "Her English was excellent because she ___ (live) in London for six years.", a: ["had lived", "had been living"] },
        { q: "I ___ (not / realise) how late it was until the cleaner switched off the lights.", a: ["hadn't realised", "had not realised", "hadn't realized", "had not realized", "didn't realise", "didn't realize"], explain: "Hadn't realised … until — самый естественный вариант, но didn't realise тоже возможно." },
        { q: "We ___ (drive) for hours when the car suddenly broke down.", a: ["had been driving"] }
      ]},
      { type: "judge", instr: "Правильно или с ошибкой?", items: [
        { q: "When I arrived at the office, everyone went home.", ok: false, fix: "…everyone had gone home. (ушли до моего прихода)" },
        { q: "I was knowing the answer, but I was too nervous to speak.", ok: false, fix: "I knew the answer… (know — глагол состояния)" },
        { q: "She had been crying, so her eyes were red.", ok: true, fix: "Всё верно." },
        { q: "After I had finished my report, I went home.", ok: true, fix: "Всё верно (After I finished — тоже правильно)." },
        { q: "I had seen that film last week.", ok: false, fix: "I saw that film last week. (нет «шага назад» от другого момента)" }
      ]},
      { type: "transform", instr: "Перефразируйте, используя слово в рамке (2–5 слов).", items: [
        { src: "The train left before I got to the station.", key: "ALREADY", before: "When I got to the station, the train", after: ".", a: ["had already left", "had already gone"] },
        { src: "I had never been to Japan before that trip.", key: "FIRST", before: "That trip was", after: "to Japan.", a: ["the first time i had been", "the first time i'd been", "the first time i had ever been", "the first time i'd ever been", "my first time"] },
        { src: "She started working at 8 a.m. and was still working at midnight.", key: "BEEN", before: "By midnight, she", after: "for sixteen hours.", a: ["had been working", "'d been working"] }
      ]},
      { type: "order", instr: "Составьте предложение из слов.", items: [
        { words: ["By", "the", "time", "we", "arrived,", "the", "meeting", "had", "already", "started"], a: ["By the time we arrived, the meeting had already started"] }
      ]}
    ]},
    { id: "reading", title: "Текст", blocks: [
      { type: "reading", title: "The interview I nearly missed", standfirst: "A reader remembers the worst morning of her career — and why it turned out to be the best.", text: [
        "It was a grey Tuesday in March, and I had been preparing for this interview for almost a month. I had read everything about the company, I had practised my answers in front of the mirror, and I had even bought a new jacket. Nothing, I thought, could go wrong.",
        "The interview was at ten. I left home at eight, which seemed more than enough. I was sitting on the train, going over my notes for the last time, when [[all of a sudden]] it stopped between two stations. Ten minutes passed, then twenty. [[It turned out]] that a signal had failed somewhere ahead of us, and nobody knew how long the delay would last.",
        "At half past nine, [[it dawned on me]] that I wasn't going to make it. I phoned the company, apologised and explained what had happened. [[To my relief]], the receptionist was very kind. She told me to come as soon as I could.",
        "The train finally started moving at ten to ten. I ran out of the station, got lost twice and arrived at the office at twenty past ten — out of breath, with my new jacket soaked by the rain. [[As luck would have it]], the interviewer had been stuck on the same train, and she walked in two minutes after me. We looked at each other and burst out laughing. The ice was broken before we had even sat down.",
        "[[To cut a long story short]], I got the job. [[In hindsight]], that terrible morning was the best thing that could have happened. We hardly talked about my carefully prepared answers. We talked about trains, rain and how to stay calm when everything goes wrong — which, it turned out, was exactly what the job required."
      ]},
      { type: "choice", instr: "Ответьте на вопросы по тексту.", items: [
        { q: "Before the interview, the writer…", o: ["had prepared very thoroughly", "had not had time to prepare", "had been late for interviews before"], a: 0 },
        { q: "Why did the train stop?", o: ["There had been an accident.", "A signal had failed.", "The driver was ill."], a: 1 },
        { q: "How did the company react when the writer phoned?", o: ["They cancelled the interview.", "They were understanding.", "They asked her to come the next day."], a: 1 },
        { q: "Why did the interviewer arrive late?", o: ["She had forgotten about the interview.", "She had been on the same delayed train.", "She had been in another meeting."], a: 1 },
        { q: "What does the writer suggest in the final paragraph?", o: ["Her prepared answers were the key to success.", "Handling the bad morning showed qualities the job needed.", "The job turned out to be disappointing."], a: 1 }
      ]},
      { type: "dictation", instr: "Диктант. Прослушайте и запишите предложение.", items: [
        { text: "By the time I got to the office, the meeting had already started.", a: ["By the time I got to the office, the meeting had already started"] },
        { text: "I had been waiting for almost an hour when she finally called.", a: ["I had been waiting for almost an hour when she finally called", "I'd been waiting for almost an hour when she finally called"] }
      ]}
    ]},
    { id: "speaking", title: "Речь", blocks: [
      { type: "speak",
        prompt: "Tell me about a time when something went wrong, but it turned out well in the end.",
        tips: "Говорите 1–2 минуты. Past continuous — для фона («I was waiting…»), past simple — для событий, past perfect — для шага назад («I had forgotten…»). Добавьте 3–4 выражения из урока: они делают историю живой.",
        targets: [
          { label: "out of the blue", re: "out of the blue" },
          { label: "to cut a long story short", re: "cut a long story short" },
          { label: "it dawned on me", re: "dawned on me" },
          { label: "in the nick of time", re: "nick of time" },
          { label: "as luck would have it", re: "as luck would have it" },
          { label: "it turned out", re: "turned out" },
          { label: "in hindsight", re: "in hindsight" },
          { label: "all of a sudden", re: "all of a sudden" },
          { label: "to my surprise / relief", re: "to my (surprise|relief|horror|amazement)" },
          { label: "past continuous", re: "\\b(was|were) \\w+ing\\b" },
          { label: "past perfect", re: "\\b(had|'d) (been|\\w+ed|left|forgotten|lost|gone|made|seen|done|taken|written|met|told|given)\\b" }
        ],
        model: "A few years ago, I was flying to a conference in Berlin where I was supposed to give a presentation. I had been preparing for weeks. When I landed, it dawned on me that my laptop was still on the plane — I had left it under the seat. To my horror, the airline told me it would take at least a day to get it back. I was at a loss for words. As luck would have it, I had emailed the slides to myself the night before, so I borrowed a colleague's laptop. The presentation went fine, and the next morning the airline returned my laptop. In hindsight, it taught me a simple lesson: always have a backup."
      }
    ]}
  ]
};
