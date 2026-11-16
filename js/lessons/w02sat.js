window.C1 = window.C1 || {};
C1.lessons = C1.lessons || {};
C1.lessons.w02sat = {
  id: "w02sat", week: 2, day: 6, kind: "test",
  title: "Week 2 test",
  standfirst: "32 задания по неделе 2: 75 выражений о характере, семье и переезде, привычки, used to / be used to и словообразование.",
  minutes: 25,
  vocab: [],
  steps: [
    { id: "vocab", title: "Слова", blocks: [
      { type: "choice", instr: "Choose the best option.", items: [
        { q: "She's incredibly ___ — she checks every figure three times.", o: ["meticulous", "impulsive", "laid-back"], a: 0 },
        { q: "He ___ his father: they're both tall, quiet and love fishing.", o: ["takes after", "grows out of", "rebels against"], a: 0 },
        { q: "In my first weeks abroad, the ___ made even buying a SIM card complicated.", o: ["language barrier", "role model", "blind spot"], a: 0 },
        { q: "Don't be so ___ — at least listen to the other side of the argument.", o: ["narrow-minded", "warm-hearted", "self-motivated"], a: 0 },
        { q: "I'm ___ — I really enjoy working with clients.", o: ["a people person", "a perfectionist", "a fish out of water"], a: 0 },
        { q: "Most children ___ their fear of the dark eventually.", o: ["grow out of", "take after", "look back on"], a: 0 },
        { q: "Nobody trusts him; he's friendly to your face but totally ___.", o: ["two-faced", "down-to-earth", "considerate"], a: 0 },
        { q: "After a difficult first month, I finally started to ___.", o: ["find my feet", "leave the nest", "spoil myself"], a: 0 },
        { q: "The results are good, but there's still ___.", o: ["room for improvement", "sibling rivalry", "red tape"], a: 0 },
        { q: "He's very ___: he'll tell the boss exactly what he thinks.", o: ["outspoken", "reserved", "absent-minded"], a: 0 }
      ]},
      { type: "gap", instr: "Complete each sentence with one word.", items: [
        { q: "I was brought ___ by my grandparents.", a: ["up"] },
        { q: "I sometimes get bogged ___ in details.", a: ["down"] },
        { q: "We felt completely at ___ in our new neighbourhood.", a: ["home"] },
        { q: "She followed in her mother's ___ and became a lawyer.", a: ["footsteps"] },
        { q: "You need to be thick-___ to work in sales.", a: ["skinned"] },
        { q: "Try to make the ___ of every opportunity.", a: ["most"] }
      ]}
    ]},
    { id: "grammar", title: "Грамматика", blocks: [
      { type: "choice", instr: "Choose the correct option.", items: [
        { q: "When I was a child, we ___ live near the sea.", o: ["used to", "would", "were used to"], a: 0, explain: "Live — состояние → used to." },
        { q: "I'm not used ___ in an open-plan office.", o: ["to working", "to work", "working"], a: 0 },
        { q: "He ___ forgetting his password — it happens every week!", o: ["keeps", "tends", "is used to"], a: 0 },
        { q: "I ___ to be very shy, but I'm much more confident now.", o: ["used", "use", "was used"], a: 0 },
        { q: "Every evening, my grandfather ___ tell us stories about his childhood.", o: ["would", "used", "was"], a: 0 },
        { q: "It took me months to ___ the time difference.", o: ["get used to", "used to", "be use to"], a: 0 },
        { q: "It's a ___ drive to the airport.", o: ["forty-minute", "forty-minutes", "forty minutes'"], a: 0 },
        { q: "That was a very ___ decision.", o: ["irresponsible", "unresponsible", "disresponsible"], a: 0 }
      ]},
      { type: "judge", instr: "Correct or incorrect?", items: [
        { q: "I would have a cat when I was little.", ok: false, fix: "I had / I used to have a cat… (have = состояние)" },
        { q: "She's used to giving presentations in English.", ok: true, fix: "Всё верно." },
        { q: "He's very unpatient.", ok: false, fix: "He's very impatient." },
        { q: "I tend to make decisions quite quickly.", ok: true, fix: "Всё верно." }
      ]},
      { type: "transform", instr: "Rewrite the sentence using the word given (2–5 words).", items: [
        { src: "I went to the gym regularly in the past, but I don't now.", key: "USED", before: "I", after: "the gym regularly.", a: ["used to go to"] },
        { src: "Living in a big city still feels strange to me.", key: "USED", before: "I'm still not", after: "in a big city.", a: ["used to living"] },
        { src: "He often loses his temper.", key: "PRONE", before: "He", after: "his temper.", a: ["is prone to losing", "'s prone to losing"] },
        { src: "The meeting lasted two hours.", key: "MEETING", before: "It was a", after: ".", a: ["two-hour meeting", "two hour meeting"] }
      ]}
    ]}
  ]
};
