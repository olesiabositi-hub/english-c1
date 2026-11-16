window.C1 = window.C1 || {};
C1.lessons = C1.lessons || {};
C1.lessons.w02d2 = {
  id: "w02d2", week: 2, day: 2, issue: 7,
  title: "The way we were",
  standfirst: "Used to, would или past simple: как рассказывать о прошлом и о том, что изменилось. И 15 выражений о детстве, семье и воспитании.",
  minutes: 40,
  vocab: [
    { id: "v-brought-up", en: "be brought up", ru: "вырасти, быть воспитанным (где-то, кем-то)", ex: "I was brought up in a small town by the sea." },
    { id: "v-strict-upbringing", en: "a strict upbringing", ru: "строгое воспитание", ex: "She had a strict upbringing and wasn't allowed to watch TV." },
    { id: "v-spoil", en: "spoil sb", ru: "баловать кого-то", ex: "Grandparents love to spoil their grandchildren." },
    { id: "v-run-family", en: "run in the family", ru: "передаваться в семье, быть семейной чертой", ex: "Musical talent runs in the family." },
    { id: "v-take-after", en: "take after sb", ru: "быть похожим на родственника (внешне или характером)", ex: "She takes after her mother — they have the same laugh." },
    { id: "v-grow-out", en: "grow out of sth", ru: "перерасти что-то (привычку, увлечение)", ex: "Most children grow out of their fear of the dark." },
    { id: "v-rebel", en: "rebel against", ru: "бунтовать против", ex: "As a teenager, I rebelled against every rule at home." },
    { id: "v-role-model", en: "a role model", ru: "пример для подражания", ex: "My older sister has always been my role model." },
    { id: "v-formative", en: "formative years", ru: "годы становления личности", ex: "I spent my formative years in three different countries." },
    { id: "v-sibling-rivalry", en: "sibling rivalry", ru: "соперничество между братьями и сёстрами", ex: "There was a lot of sibling rivalry between my brothers." },
    { id: "v-footsteps", en: "follow in sb's footsteps", ru: "пойти по чьим-то стопам", ex: "He followed in his father's footsteps and became a doctor." },
    { id: "v-close-bond", en: "a close bond", ru: "тесная связь, близкие отношения", ex: "My grandmother and I have always had a close bond." },
    { id: "v-look-back", en: "look back on", ru: "вспоминать, оглядываться на (прошлое)", ex: "When I look back on my school years, I mostly remember the friendships." },
    { id: "v-sheltered", en: "a sheltered childhood", ru: "оберегаемое детство, жизнь «в теплице»", ex: "I had a sheltered childhood and knew little about the real world." },
    { id: "v-leave-nest", en: "leave the nest", ru: "покинуть родительский дом", ex: "Our youngest left the nest last year to study abroad." }
  ],
  srsExtra: [
    { id: "g-didnt-use-to", en: "I didn't use to like coffee.", ru: "Раньше я не любила кофе.", ex: "Отрицание: didn't use to (без d)." },
    { id: "g-would-past", en: "We would spend every summer by the sea.", ru: "Каждое лето мы проводили у моря.", ex: "Would — только повторяющиеся действия в прошлом." },
    { id: "g-did-you-use-to", en: "Did you use to play the piano?", ru: "Ты раньше играла на пианино?", ex: "Вопрос: Did you use to…? (без d)." }
  ],
  steps: [
    { id: "words", title: "Слова", blocks: [
      { type: "cards", instr: "Read and listen to 15 expressions about childhood and family. Tap a card to see the translation." },
      { type: "match", instr: "Match each expression to its definition.", pairs: [
        ["take after sb", "to look or behave like an older relative"],
        ["grow out of sth", "to stop doing something as you get older"],
        ["rebel against", "to fight against authority or rules"],
        ["formative years", "the period when your character develops"],
        ["sibling rivalry", "competition between brothers and sisters"],
        ["leave the nest", "to leave your parents' home"]
      ]},
      { type: "gap", instr: "Complete each sentence with one word.", items: [
        { q: "I was brought ___ in a small town by the sea.", a: ["up"] },
        { q: "Musical talent seems to run in the ___.", a: ["family"] },
        { q: "She takes ___ her mother — they have the same laugh.", a: ["after"] },
        { q: "He followed in his father's ___ and became a doctor.", a: ["footsteps"] },
        { q: "Grandparents often ___ their grandchildren with sweets and presents.", a: ["spoil"] },
        { q: "My older sister has always been my role ___.", a: ["model"] }
      ]},
      { type: "choice", instr: "Choose the best option.", items: [
        { q: "I had a very ___ childhood: I didn't know much about the real world until I left home.", o: ["sheltered", "formative", "rebellious"], a: 0 },
        { q: "My parents were very strict, so as a teenager I ___ all their rules.", o: ["rebelled against", "took after", "grew out of"], a: 0 },
        { q: "When I ___ my school years, I mostly remember the friendships.", o: ["look back on", "follow in", "leave"], a: 0 },
        { q: "Despite living in different countries, my brother and I still have ___.", o: ["a close bond", "sibling rivalry", "a role model"], a: 0 }
      ]}
    ]},
    { id: "grammar", title: "Грамматика", blocks: [
      { type: "theory", title: "Used to, would and the past simple", html: `
<p class="lead">Все три варианта описывают прошлое, но у каждого своя задача. <em>Used to</em> подчёркивает, что <strong>сейчас всё иначе</strong>. <em>Would</em> рисует <strong>повторяющиеся сцены</strong>. Past simple просто сообщает факт.</p>

<h3>1. Used to: привычки и состояния, которых больше нет</h3>
<p class="ex">I <b>used to live</b> in Moscow. <span class="note">теперь живу в другом месте</span><br>I <b>used to be</b> really shy. <span class="note">состояние</span><br>We <b>used to go</b> camping every summer. <span class="note">привычка</span></p>

<h3>2. Would: только повторяющиеся действия</h3>
<p><em>Would</em> подходит для повторяющихся действий, но <strong>не для состояний</strong> (be, have, live, know, like):</p>
<p class="ex">Every Sunday, my grandmother <b>would bake</b> an apple pie. ✓<br><s>I would have a dog called Max.</s> → I <b>had</b> / <b>used to have</b> a dog. <span class="note">have = состояние</span></p>

<h3>3. Past simple: всегда можно, а с длительностью — нужно</h3>
<p>Если указано, сколько раз или как долго, выбирайте past simple:</p>
<p class="ex">I <b>lived</b> there for ten years. <span class="note">не «used to live… for ten years»</span><br>We <b>went</b> to Paris three times.</p>

<h3>4. Отрицание и вопросы</h3>
<p class="ex">I <b>didn't use to</b> like vegetables. <span class="note">без d!</span><br><b>Did</b> you <b>use to</b> play the piano?<br>I <b>never used to</b> enjoy sport. <span class="note">never + used to — с d</span></p>

<h3>5. Как это звучит в рассказе</h3>
<p>Носители часто начинают с <em>used to</em>, а потом переходят на <em>would</em> (часто сокращённо 'd):</p>
<p class="ex">When I was a child, we <b>used to spend</b> every summer at my grandparents' house. We<b>'d get up</b> early, we<b>'d run</b> down to the river, and my grandfather <b>would tell</b> us stories until it got dark.</p>

<div class="trap"><h4>Не путать</h4>
<p class="ex">I <b>used to get up</b> early. <span class="note">раньше я вставала рано (теперь нет)</span><br>I<b>'m used to getting up</b> early. <span class="note">я привыкла вставать рано — это следующий урок</span><br><s>I use to get up early.</s> <span class="note">в настоящем времени used to не бывает: скажите I usually get up early</span></p></div>
` },
      { type: "choice", instr: "Choose the correct option.", items: [
        { q: "When I was a child, I ___ have very long hair.", o: ["used to", "would"], a: 0, explain: "Have long hair — состояние, would не подходит." },
        { q: "Every Sunday, my grandmother ___ bake an apple pie.", o: ["would", "was going to", "has"], a: 0, explain: "Повторяющееся действие в прошлом (used to тоже возможно)." },
        { q: "I ___ in that city for ten years before I moved abroad.", o: ["lived", "used to live", "would live"], a: 0, explain: "Указана длительность (for ten years) → past simple." },
        { q: "___ you use to play any musical instruments?", o: ["Did", "Were", "Would"], a: 0 },
        { q: "We ___ use to have a television when I was little.", o: ["didn't", "wouldn't", "weren't"], a: 0 },
        { q: "My father ___ a strict man, but he became much softer with his grandchildren.", o: ["used to be", "would be"], a: 0, explain: "Be — состояние → used to." },
        { q: "As teenagers, my sister and I ___ argue about absolutely everything.", o: ["would", "used", "use to"], a: 0, explain: "Повторяющееся действие → would (или used to argue)." }
      ]},
      { type: "gap", instr: "Complete the sentences. Use the words in brackets.", items: [
        { q: "I ___ (not / like) vegetables as a child, but now I love them.", a: ["didn't use to like", "did not use to like", "didn't like", "did not like", "never used to like"] },
        { q: "My parents ___ (use / be) much stricter than they are now.", a: ["used to be"] },
        { q: "Every evening, my dad ___ (would / read) us a story.", a: ["would read", "'d read"] },
        { q: "She ___ (go) to Paris three times last year.", a: ["went"] },
        { q: "I never ___ (use) to enjoy sport, but now I run every morning.", a: ["used"] },
        { q: "When we were kids, we ___ (would / spend) hours in the garden.", a: ["would spend", "'d spend"] }
      ]},
      { type: "judge", instr: "Correct or incorrect?", items: [
        { q: "I would have a dog called Max when I was a child.", ok: false, fix: "I had / I used to have a dog… (have = состояние)" },
        { q: "We used to go camping every summer.", ok: true, fix: "Всё верно." },
        { q: "Did you used to live in London?", ok: false, fix: "Did you use to live in London? (после did — без d)" },
        { q: "I used to work there for five years.", ok: false, fix: "I worked there for five years. (длительность → past simple)" },
        { q: "She'd spend hours drawing when she was little.", ok: true, fix: "Всё верно: 'd = would, повторяющееся действие." }
      ]},
      { type: "transform", instr: "Rewrite the sentence using the word given (2–5 words).", items: [
        { src: "I played tennis a lot in the past, but I don't any more.", key: "USED", before: "I", after: "tennis a lot.", a: ["used to play"] },
        { src: "When I was young, my grandfather told me a story every night.", key: "WOULD", before: "When I was young, my grandfather", after: "a story every night.", a: ["would tell me", "'d tell me", "would read me", "'d read me"] },
        { src: "My brother was much quieter as a child than he is now.", key: "USE", before: "My brother", after: "so talkative as a child.", a: ["didn't use to be", "did not use to be"] }
      ]},
      { type: "order", instr: "Put the words in the correct order.", items: [
        { words: ["We", "would", "spend", "every", "summer", "at", "my", "grandmother's", "house"], a: ["We would spend every summer at my grandmother's house"] }
      ]}
    ]},
    { id: "reading", title: "Текст", blocks: [
      { type: "reading", title: "Birth order: does it really shape who we are?", standfirst: "The responsible eldest, the forgotten middle child, the charming youngest. Big studies put the stereotypes to the test.", text: [
        "Ask people about their families and you will hear the same stories again and again. The eldest child is responsible and a little bossy, the youngest is the charming rebel, and the middle child feels forgotten. Many of us [[look back on]] our childhoods and see these patterns clearly. But are they real?",
        "The idea goes back to the Austrian psychiatrist Alfred Adler, who argued in the early twentieth century that birth order shapes personality. Firstborns, he believed, grew up feeling like little adults, while younger children had to compete for their parents' attention — [[sibling rivalry]] being one of the forces that formed them.",
        "For decades, the theory was popular but poorly tested. Then, in 2015, two large studies changed the picture. One, led by the psychologist Julia Rohrer in Germany, analysed data on more than 20,000 people; another, by Rodica Damian and Brent Roberts, looked at around 377,000 American high-school students. Both found that birth order had almost no meaningful effect on personality traits such as extraversion or conscientiousness.",
        "There was one small exception. Firstborns tended to score slightly higher on intelligence tests — by roughly one or two IQ points on average. One possible explanation is that they used to have their parents' full attention for a while, but the difference is far too small to notice in everyday life.",
        "Why, then, do the stereotypes survive? Partly because we see what we expect to see: when the eldest behaves responsibly, we remember it; when the youngest does the same, we forget. And partly because families really do treat their children differently — but in ways that depend on the family, not on the order in which the children arrived."
      ]},
      { type: "choice", instr: "Answer the questions about the text.", items: [
        { q: "What does the first paragraph describe?", o: ["Scientific findings", "Common beliefs about siblings", "Adler's research methods"], a: 1 },
        { q: "According to Adler, younger children…", o: ["took after their parents", "had to compete for attention", "became more responsible"], a: 1 },
        { q: "What did the 2015 studies find?", o: ["Birth order strongly affects personality.", "Birth order has very little effect on personality.", "Middle children are the most extraverted."], a: 1 },
        { q: "What is true about firstborns' IQ scores?", o: ["They are much higher.", "They are slightly higher on average.", "They are lower than average."], a: 1 },
        { q: "Why do the stereotypes survive, according to the writer?", o: ["Because they are true.", "Because we notice what confirms our expectations.", "Because teachers repeat them."], a: 1 }
      ]},
      { type: "dictation", instr: "Dictation. Listen and type the sentence.", items: [
        { text: "When I was a child, we used to spend every summer at the seaside.", a: ["When I was a child, we used to spend every summer at the seaside"] },
        { text: "My brother and I would argue about everything, but now we're very close.", a: ["My brother and I would argue about everything, but now we're very close", "My brother and I would argue about everything but now we are very close"] }
      ]}
    ]},
    { id: "speaking", title: "Речь", blocks: [
      { type: "speak",
        prompt: "Tell me about your childhood. How has it shaped the person you are today?",
        tips: "Говорите 1–2 минуты. Начните с used to, продолжите сцены через would ('d), а для выводов перейдите к present perfect: «It has made me…». Используйте 3–4 выражения урока.",
        targets: [
          { label: "used to", re: "used to" },
          { label: "would for past habits", re: "\\b(would|we'd|i'd|he'd|she'd|they'd) (\\w+ )?(go|spend|play|get|run|sit|tell|read|take|visit|cook|bake|walk|watch)\\b" },
          { label: "brought up", re: "brought up" },
          { label: "take after", re: "t(ake|akes|ook) after" },
          { label: "role model", re: "role model" },
          { label: "formative years", re: "formative" },
          { label: "look back on", re: "look(ing)? back" },
          { label: "close bond", re: "close bond" },
          { label: "follow in … footsteps", re: "footsteps" },
          { label: "present perfect for results", re: "\\b(has|have|'s|'ve) (made|taught|shaped|helped|given)\\b" }
        ],
        model: "I was brought up in a small town, in a fairly big family. My parents both worked long hours, so my grandmother was a huge part of my childhood. We used to spend every summer at her house in the country. We'd get up early, we'd pick fruit in the garden, and in the evenings she would tell us stories about her own childhood. She was definitely my role model: calm, practical and very down-to-earth. When I look back on those formative years, I think they taught me two things: to be independent and to value family. I think I take after my grandmother more than anyone else, and I hope it has made me a calmer, more patient person."
      }
    ]}
  ]
};
