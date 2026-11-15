window.C1 = window.C1 || {};
C1.lessons = C1.lessons || {};
C1.lessons.w01d4 = {
  id: "w01d4", week: 1, day: 4, issue: 4,
  title: "States of mind",
  standfirst: "Глаголы состояния и действия: почему нельзя сказать «I'm knowing», но можно «I'm thinking». И 15 выражений, чтобы точно описать свои чувства, стресс и уверенность.",
  minutes: 40,
  vocab: [
    { id: "v-over-moon", en: "be over the moon", ru: "быть на седьмом небе", ex: "She was over the moon when she got the offer." },
    { id: "v-fed-up", en: "be fed up (with sth)", ru: "надоело, сыт по горло", ex: "I'm fed up with working at weekends." },
    { id: "v-two-minds", en: "be in two minds (about sth)", ru: "колебаться, не мочь решить", ex: "I'm in two minds about accepting the job." },
    { id: "v-mixed-feelings", en: "have mixed feelings (about sth)", ru: "испытывать смешанные чувства", ex: "I have mixed feelings about moving abroad." },
    { id: "v-out-of-depth", en: "feel out of your depth", ru: "чувствовать, что не справляешься", ex: "In my first week, I felt completely out of my depth." },
    { id: "v-on-edge", en: "be on edge", ru: "быть на взводе, нервничать", ex: "Everyone was on edge before the results were announced." },
    { id: "v-level-head", en: "keep a level head", ru: "сохранять хладнокровие", ex: "Good managers keep a level head in a crisis." },
    { id: "v-lose-temper", en: "lose your temper", ru: "выйти из себя", ex: "I've never seen him lose his temper." },
    { id: "v-worked-up", en: "get worked up (about sth)", ru: "разволноваться, завестись", ex: "Don't get worked up about it — it's only a small mistake." },
    { id: "v-in-stride", en: "take sth in your stride", ru: "спокойно справиться с трудностью", ex: "She took the criticism in her stride." },
    { id: "v-overwhelmed", en: "be overwhelmed (by sth)", ru: "быть перегруженным, подавленным", ex: "I was overwhelmed by the amount of work." },
    { id: "v-bounce-back", en: "bounce back", ru: "быстро восстановиться", ex: "It was a tough year, but the company bounced back." },
    { id: "v-wary", en: "be wary of sth / sb", ru: "относиться с осторожностью", ex: "I'm wary of offers that sound too good to be true." },
    { id: "v-butterflies", en: "have butterflies (in your stomach)", ru: "волноваться перед чем-то", ex: "I always get butterflies before a presentation." },
    { id: "v-loose-end", en: "be at a loose end", ru: "не знать, чем заняться", ex: "If you're at a loose end on Saturday, come round for dinner." }
  ],
  srsExtra: [
    { id: "g-i-agree", en: "I agree with you completely.", ru: "Я полностью с тобой согласна.", ex: "Agree — глагол: не «I'm agree»." },
    { id: "g-thinking-of", en: "I'm thinking of applying for a job abroad.", ru: "Я подумываю подать резюме на работу за границей.", ex: "Think = обдумывать → continuous возможен." },
    { id: "g-depends-on", en: "It depends on the budget.", ru: "Это зависит от бюджета.", ex: "Depend — глагол состояния: не «is depending»." }
  ],
  steps: [
    { id: "words", title: "Слова", blocks: [
      { type: "cards", instr: "Прочитайте и прослушайте 15 выражений о чувствах и стрессе. Нажмите на карточку, чтобы увидеть перевод." },
      { type: "match", instr: "Соедините выражение с определением.", pairs: [
        ["be over the moon", "to be extremely happy"],
        ["be fed up", "to be bored and annoyed with a situation"],
        ["be in two minds", "to be unable to decide"],
        ["feel out of your depth", "to be in a situation that is too difficult for you"],
        ["take sth in your stride", "to deal calmly with something difficult"],
        ["bounce back", "to recover quickly after a problem"]
      ]},
      { type: "gap", instr: "Вставьте пропущенное слово.", items: [
        { q: "Try to keep a level ___ — panicking won't help.", a: ["head"] },
        { q: "I always get ___ before an important interview.", a: ["butterflies"] },
        { q: "He lost his ___ and started shouting at everyone.", a: ["temper"] },
        { q: "I'm at a loose ___ this evening — fancy a film?", a: ["end"] },
        { q: "There's no point getting worked ___ about things you can't control.", a: ["up"] },
        { q: "I'm a bit ___ of people who promise quick results.", a: ["wary"] }
      ]},
      { type: "choice", instr: "Выберите подходящее выражение.", items: [
        { q: "She's got ___ about the move: she's excited about the new job but sad to leave her friends.", o: ["mixed feelings", "butterflies", "a level head"], a: 0 },
        { q: "After the merger, many employees were ___ — nobody knew who would keep their job.", o: ["on edge", "at a loose end", "over the moon"], a: 0 },
        { q: "The first weeks were hard, but she ___ and is now one of the best in the team.", o: ["bounced back", "lost her temper", "got worked up"], a: 0 },
        { q: "There was so much new information that I felt completely ___.", o: ["overwhelmed", "wary", "fed up"], a: 0 }
      ]}
    ]},
    { id: "grammar", title: "Грамматика", blocks: [
      { type: "theory", title: "State verbs and action verbs", html: `
<p class="lead">Одни глаголы описывают <strong>действие</strong>, другие — <strong>состояние</strong>: мысли, чувства, обладание, восприятие. Глаголы состояния обычно не ставятся в continuous. Но многие из них меняют значение, и тогда continuous возможен.</p>

<h3>1. Типичные глаголы состояния</h3>
<ul class="ex-list">
  <li>know, believe, understand, realise, mean, doubt <span class="note">мысли</span></li>
  <li>like, love, hate, prefer, want, need <span class="note">чувства и желания</span></li>
  <li>have, own, belong, possess <span class="note">обладание</span></li>
  <li>seem, consist of, contain, depend, matter, deserve <span class="note">другие</span></li>
</ul>
<p class="ex">I <b>know</b> what you mean. <span class="note">не «I'm knowing»</span><br>The final decision <b>depends</b> on the budget.</p>

<h3>2. Один глагол, два значения</h3>
<ul class="ex-list">
  <li>I <b>think</b> it's a good idea. <span class="note">мнение</span> / I<b>'m thinking</b> about changing jobs. <span class="note">обдумываю</span></li>
  <li>She <b>has</b> two children. <span class="note">обладание</span> / She<b>'s having</b> lunch / a hard time. <span class="note">действие, опыт</span></li>
  <li>I <b>see</b> what you mean. <span class="note">понимаю</span> / I<b>'m seeing</b> a client at three. <span class="note">встречаюсь</span></li>
  <li>He<b>'s</b> rude. <span class="note">характер</span> / He<b>'s being</b> rude. <span class="note">ведёт себя так сейчас</span></li>
  <li>The soup <b>tastes</b> great. / I<b>'m tasting</b> the soup. <span class="note">пробую</span></li>
  <li>The box <b>weighs</b> five kilos. / They<b>'re weighing</b> the luggage. <span class="note">взвешивают</span></li>
</ul>

<h3>3. Постоянное и временное</h3>
<p class="ex">I <b>work</b> in marketing. <span class="note">постоянно</span><br>I<b>'m working</b> from home this month. <span class="note">временно</span><br>My English <b>is getting</b> better every week. <span class="note">процесс изменения</span></p>

<h3>4. Always + continuous</h3>
<p>Выражает раздражение или удивление повторяющимся поведением:</p>
<p class="ex">He<b>'s always interrupting</b> me in meetings!<br>She<b>'s always helping</b> people — it's amazing.</p>

<h3>5. Разговорное «I'm loving it»</h3>
<p>В речи <em>I'm loving / I'm liking</em> подчёркивает сильное, временное впечатление: <em>I'm really loving my new job.</em> В разговоре это нормально, в официальном письме лучше избегать.</p>

<div class="trap"><h4>Ловушка для русскоговорящих</h4>
<p class="ex"><s>I'm agree.</s> → I <b>agree</b>. <span class="note">agree — глагол, а не прилагательное</span><br>
<s>It is depending on…</s> → It <b>depends</b> on…<br>
<s>I'm not understanding.</s> → I <b>don't understand</b>.</p></div>
` },
      { type: "choice", instr: "Выберите правильную форму.", items: [
        { q: "I ___ what you mean, but I don't agree.", o: ["see", "am seeing"], a: 0, explain: "See = понимать → состояние." },
        { q: "We ___ a new supplier this afternoon — do you want to join us?", o: ["see", "are seeing"], a: 1, explain: "See = встречаться → действие, запланированное на сегодня." },
        { q: "I ___ of applying for a job in Berlin. What do you think?", o: ["think", "am thinking"], a: 1, explain: "Think of/about = обдумывать → continuous." },
        { q: "He ___ very difficult today. Is something wrong?", o: ["is", "is being"], a: 1, explain: "Is being: ведёт себя так сейчас, необычно для него." },
        { q: "This laptop ___ to my company, not to me.", o: ["belongs", "is belonging"], a: 0, explain: "Belong — глагол состояния." },
        { q: "My English ___ better every week.", o: ["gets", "is getting"], a: 1, explain: "Процесс изменения → continuous." },
        { q: "I ___ with you completely.", o: ["agree", "am agree", "am agreeing"], a: 0, explain: "Agree — глагол состояния, без to be." }
      ]},
      { type: "gap", instr: "Поставьте глагол в правильную форму.", items: [
        { q: "I ___ (not / understand) why they rejected the proposal.", a: ["don't understand", "do not understand"] },
        { q: "Shh! I ___ (think) — give me a minute.", a: ["am thinking", "'m thinking"] },
        { q: "The final decision ___ (depend) on the client's budget.", a: ["depends"] },
        { q: "We ___ (have) a team lunch on Friday — are you coming?", a: ["are having", "'re having"] },
        { q: "This coffee ___ (taste) a bit strange.", a: ["tastes"] },
        { q: "More and more people ___ (work) remotely these days.", a: ["are working"] }
      ]},
      { type: "judge", instr: "Правильно или с ошибкой?", items: [
        { q: "I'm agree with your plan.", ok: false, fix: "I agree with your plan." },
        { q: "She's having a really hard time at work at the moment.", ok: true, fix: "Всё верно: have a hard time — действие, опыт." },
        { q: "I'm not knowing the answer.", ok: false, fix: "I don't know the answer." },
        { q: "He's always complaining about the coffee!", ok: true, fix: "Всё верно: always + continuous = раздражение." },
        { q: "This bag is containing important documents.", ok: false, fix: "This bag contains important documents." }
      ]},
      { type: "transform", instr: "Перефразируйте, используя слово в рамке (2–5 слов).", items: [
        { src: "What's your opinion of the new manager?", key: "THINK", before: "What", after: "the new manager?", a: ["do you think of", "do you think about"] },
        { src: "In my opinion, the plan is too risky.", key: "SEEMS", before: "The plan", after: "too risky.", a: ["seems to me to be", "seems to be", "seems to me"] },
        { src: "He's usually polite, but today his behaviour is rude.", key: "BEING", before: "He's usually polite, but today he", after: ".", a: ["is being rude", "'s being rude", "is being very rude"] }
      ]},
      { type: "order", instr: "Составьте предложение из слов.", items: [
        { words: ["I'm", "thinking", "of", "applying", "for", "a", "job", "abroad"], a: ["I'm thinking of applying for a job abroad"] }
      ]}
    ]},
    { id: "reading", title: "Текст", blocks: [
      { type: "reading", title: "Feeling like a fraud", standfirst: "You've got the job, the title and the praise. So why does a quiet voice keep telling you it's all a mistake?", text: [
        "You've just been promoted. Everyone is congratulating you, and you should be [[over the moon]]. Instead, a quiet voice is telling you that it's all a mistake — that sooner or later someone will realise you don't really know what you're doing. If this sounds familiar, you are far from alone.",
        "The psychologists Pauline Clance and Suzanne Imes first described the “impostor phenomenon” in 1978, after noticing it in many of the successful women they worked with. Later research showed that men experience it too, and that it is especially common among high achievers, people starting a new job and anyone who is the first in their family to work in a particular field. People with impostor feelings tend to believe that their success depends on luck or timing rather than ability.",
        "The feeling is uncomfortable, but it isn't always harmful. Some researchers argue that a little self-doubt makes people work harder and listen more carefully. The problems begin when it becomes overwhelming: people [[feel out of their depth]] all the time, avoid new challenges or work such long hours that they burn out.",
        "What helps? Talking about it is a good start. When people discover that respected colleagues have the same doubts, the feeling often loses its power. Keeping a record of your achievements — positive feedback, finished projects, problems you have solved — can also help you see your progress more objectively. And it is worth remembering that feeling nervous in a new role is normal: it means you are learning, not that you don't belong.",
        "In job interviews, this matters more than it seems. Candidates who are [[wary of]] sounding arrogant often undersell themselves. You don't need to pretend you are perfect. But if you have done the work, you deserve to describe it clearly — without apologising for it."
      ]},
      { type: "choice", instr: "Ответьте на вопросы по тексту.", items: [
        { q: "What feeling does the first paragraph describe?", o: ["Pride in a promotion", "The belief that your success is undeserved", "Anger at your colleagues"], a: 1 },
        { q: "According to the article, who experiences impostor feelings?", o: ["Only women", "Many people, especially high achievers", "Mainly people who have failed"], a: 1 },
        { q: "What is the writer's view of self-doubt?", o: ["It is always harmful.", "A little can be useful, but too much causes problems.", "It should be ignored completely."], a: 1 },
        { q: "Which of these is NOT suggested as a way to help?", o: ["Talking about the feeling", "Keeping a record of achievements", "Avoiding new challenges"], a: 2 },
        { q: "What is the advice for job interviews?", o: ["Admit that you are not perfect.", "Describe your achievements clearly, without apologising.", "Avoid talking about your achievements."], a: 1 }
      ]},
      { type: "dictation", instr: "Диктант. Прослушайте и запишите предложение.", items: [
        { text: "I'm thinking of applying for a job abroad, but I'm in two minds about it.", a: ["I'm thinking of applying for a job abroad, but I'm in two minds about it", "I am thinking of applying for a job abroad but I am in two minds about it"] },
        { text: "She seems calm, but she always gets butterflies before a presentation.", a: ["She seems calm, but she always gets butterflies before a presentation"] }
      ]}
    ]},
    { id: "speaking", title: "Речь", blocks: [
      { type: "speak",
        prompt: "How do you usually deal with stress before an important event, like an interview or an exam?",
        tips: "Говорите 1–2 минуты. Present simple — для привычек («I usually…»), present continuous — для того, что меняется сейчас («I'm getting better at…»). Используйте 3–4 выражения о чувствах.",
        targets: [
          { label: "butterflies", re: "butterflies" },
          { label: "on edge", re: "on edge" },
          { label: "keep a level head", re: "level head" },
          { label: "get worked up", re: "worked up" },
          { label: "take sth in your stride", re: "in (my|your|her|his|our|their) stride" },
          { label: "overwhelmed", re: "overwhelm" },
          { label: "out of my depth", re: "out of (my|your|her|his|our|their) depth" },
          { label: "bounce back", re: "bounc(e|ed|ing) back" },
          { label: "in two minds / mixed feelings", re: "two minds|mixed feelings" },
          { label: "present continuous for change", re: "\\b(i'm|i am) (getting|becoming|learning|trying|starting)\\b" }
        ],
        model: "To be honest, I always get butterflies before an important event, and I've accepted that it's normal. What I try not to do is get worked up about things I can't control. The day before, I prepare properly, and then I stop — reading notes until midnight just makes me more on edge. On the day itself, I go for a short walk and do some breathing exercises, which helps me keep a level head. I used to feel completely overwhelmed, but I'm getting better at taking these situations in my stride. And if something goes wrong, I remind myself that I've always bounced back before."
      }
    ]}
  ]
};
