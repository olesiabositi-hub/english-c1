window.C1 = window.C1 || {};
C1.lessons = C1.lessons || {};
C1.lessons.w01sat = {
  id: "w01sat", week: 1, day: 6, kind: "test",
  title: "Week 1 test",
  standfirst: "30 заданий по всем урокам недели: 60 выражений и четыре грамматические темы. Без подсказок до ответа — проверьте, что осталось в памяти.",
  minutes: 25,
  vocab: [],
  steps: [
    { id: "vocab", title: "Слова", blocks: [
      { type: "choice", instr: "Выберите выражение, которое подходит по смыслу.", items: [
        { q: "We used to be close, but after she moved to Canada we gradually ___.", o: ["drifted apart", "fell out", "made up"], a: 0 },
        { q: "The negotiations had been difficult for weeks, and the cancelled meeting was ___.", o: ["the last straw", "a narrow escape", "a track record"], a: 0 },
        { q: "She was ___ when she heard she'd passed the exam.", o: ["over the moon", "on edge", "at a loose end"], a: 0 },
        { q: "He's quite shy, so at first he can ___ unfriendly.", o: ["come across as", "get on with", "look up to"], a: 0 },
        { q: "My new boss and I ___ from day one — we have the same sense of humour.", o: ["hit it off", "broke the ice", "beat about the bush"], a: 0 },
        { q: "I'm ___ about the offer: the salary is great, but the hours are long.", o: ["in two minds", "out of my depth", "at a loss for words"], a: 0 },
        { q: "I have a lot of ___ experience with data analysis tools.", o: ["hands-on", "transferable", "steep"], a: 0 },
        { q: "Please don't ___ — tell me directly what the problem is.", o: ["beat about the bush", "speak your mind", "jump to conclusions"], a: 0 },
        { q: "Our two teams don't always ___, but we respect each other's opinions.", o: ["see eye to eye", "go back a long way", "take it in our stride"], a: 0 },
        { q: "I'd never planned to move to Georgia — we decided ___.", o: ["on the spur of the moment", "in the nick of time", "in hindsight"], a: 0 }
      ]},
      { type: "gap", instr: "Вставьте пропущенное слово.", items: [
        { q: "Let's meet for lunch next week and catch ___.", a: ["up"] },
        { q: "We got to the airport in the ___ of time.", a: ["nick"] },
        { q: "I've always looked ___ to my older sister.", a: ["up"] },
        { q: "Stay calm and keep a level ___.", a: ["head"] },
        { q: "She has a proven ___ record of successful projects.", a: ["track"] },
        { q: "I think you've got the wrong end of the ___ — that's not what I said.", a: ["stick"] }
      ]}
    ]},
    { id: "grammar", title: "Грамматика", blocks: [
      { type: "choice", instr: "Выберите правильную форму.", items: [
        { q: "I ___ to Japan three times, and I'd love to go again.", o: ["have been", "went", "had been"], a: 0, explain: "Опыт до сейчас, без указания времени." },
        { q: "We ___ each other since university.", o: ["have known", "have been knowing", "knew"], a: 0, explain: "Know — глагол состояния + since." },
        { q: "How long ___ English?", o: ["have you been learning", "are you learning", "do you learn"], a: 0, explain: "How long + до сейчас → present perfect continuous." },
        { q: "When I got home, I realised I ___ my phone at the office.", o: ["had left", "left", "have left"], a: 0, explain: "Шаг назад → past perfect." },
        { q: "I ___ dinner when the power went off.", o: ["was cooking", "cooked", "have cooked"], a: 0, explain: "Фон, прерванный событием → past continuous." },
        { q: "This bag ___ to my colleague.", o: ["belongs", "is belonging", "has been belonging"], a: 0, explain: "Belong — глагол состояния." },
        { q: "Sorry I'm late. ___ long?", o: ["Have you been waiting", "Did you wait", "Had you waited"], a: 0, explain: "Ожидание длилось до сейчас." },
        { q: "She ___ at the company for ten years when she finally got promoted.", o: ["had been working", "has been working", "was working"], a: 0, explain: "Длительность до момента в прошлом." }
      ]},
      { type: "judge", instr: "Правильно или с ошибкой?", items: [
        { q: "I've met her at a conference last year.", ok: false, fix: "I met her at a conference last year." },
        { q: "I'm thinking of moving to Berlin.", ok: true, fix: "Всё верно: think of = обдумывать." },
        { q: "When did you start your current job?", ok: true, fix: "Всё верно: when → past simple." },
        { q: "I've been drinking three cups of coffee this morning.", ok: false, fix: "I've had / I've drunk three cups of coffee this morning." }
      ]},
      { type: "transform", instr: "Перефразируйте, используя слово в рамке (2–5 слов).", items: [
        { src: "I've never given a speech before.", key: "FIRST", before: "It's the", after: "given a speech.", a: ["first time i have", "first time i've", "first time i have ever", "first time i've ever"] },
        { src: "It started raining two hours ago, and it's still raining.", key: "BEEN", before: "It", after: "two hours.", a: ["has been raining for", "'s been raining for"] },
        { src: "The meeting started before I arrived.", key: "ALREADY", before: "When I arrived, the meeting", after: ".", a: ["had already started", "had already begun"] },
        { src: "What's your opinion of the proposal?", key: "THINK", before: "What", after: "the proposal?", a: ["do you think of", "do you think about"] }
      ]}
    ]}
  ]
};
