window.C1 = window.C1 || {};
C1.lessons = C1.lessons || {};
C1.lessons.w02sun = {
  id: "w02sun", week: 2, day: 7, kind: "interview",
  title: "Interview practice",
  standfirst: "Пять вопросов о характере, сильных и слабых сторонах и адаптации. Отвечайте вслух, потом сравните с примером.",
  minutes: 30,
  vocab: [],
  steps: [
    { id: "q1", title: "Вопрос 1", blocks: [
      { type: "speak",
        prompt: "How would your colleagues describe you?",
        tips: "Назовите 2–3 качества и подкрепите каждое коротким фактом. Используйте прилагательные недели и tend to / will для типичного поведения.",
        targets: [
          { label: "tend to / will", re: "tend(s)? to|\\b(i'll|i will) (usually|often|always)\\b" },
          { label: "personality adjectives", re: "conscientious|meticulous|easy.?going|down.to.earth|assertive|considerate|reliable|self.motivated|open.minded" },
          { label: "a people person / team player", re: "people person|team player" },
          { label: "an example", re: "for example|for instance|last (year|month)|once" }
        ],
        model: "I think they'd describe me as reliable, calm and quite meticulous. I'm the person people come to when something needs to be checked properly — for example, I'm usually the one who reviews our monthly reports before they go to the client. They'd probably also say I'm easy-going: I tend not to get stressed when plans change, and I'll often be the one who suggests a practical solution. And I hope they'd say I'm a team player, because I genuinely enjoy helping new colleagues find their feet."
      }
    ]},
    { id: "q2", title: "Вопрос 2", blocks: [
      { type: "speak",
        prompt: "What is your greatest strength?",
        tips: "Одна сила, но с доказательством: ситуация и результат. Наречия степени (extremely, really) — только вместе с фактом.",
        targets: [
          { label: "adverb of degree", re: "extremely|really|particularly|highly|very" },
          { label: "attention to detail / quick learner", re: "attention to detail|quick learner|work well under pressure|prioriti" },
          { label: "an example", re: "for example|for instance|last (year|month)|once|recently" },
          { label: "a result", re: "\\d|percent|per cent|result|saved|reduced|increased|on time" }
        ],
        model: "My greatest strength is probably that I'm a quick learner. In my last job, our company switched to a completely new CRM system with only two weeks' notice. I spent the first few evenings going through the training materials, and within a week I was running short sessions for the rest of my team. As a result, we didn't lose a single client during the transition. I think that ability to learn fast and then share what I've learnt would be particularly useful in an international team, where things change quickly."
      }
    ]},
    { id: "q3", title: "Вопрос 3", blocks: [
      { type: "speak",
        prompt: "What is your greatest weakness?",
        tips: "Повторите ответ из пятничного урока, но короче и увереннее: слабость → пример → что вы делаете. Не больше 60 секунд.",
        targets: [
          { label: "used to / tended to", re: "used to|tended to" },
          { label: "present perfect continuous", re: "(have|has|'ve) been \\w+ing" },
          { label: "softening", re: "a little|slightly|a bit|sometimes|at times" },
          { label: "working on it", re: "work(ing|ed)? on" }
        ],
        model: "I can be a little too self-critical. In the past, I tended to keep improving work that was already good enough, which sometimes slowed me down. Since then, I've been working on it: I agree what the finished result should look like before I start, and I give myself a time limit for each task. I still set high standards, but I'm much better at knowing when to stop."
      }
    ]},
    { id: "q4", title: "Вопрос 4", blocks: [
      { type: "speak",
        prompt: "Tell me about a time you had to adapt to a big change.",
        tips: "Расскажите историю: used to (как было), get used to (как привыкали), be used to (что стало нормой). Закончите выводом в present perfect.",
        targets: [
          { label: "used to", re: "(?<!(?:'m|am|is|'s|are|'re|was|were|be|been|get|got|getting|gotten) )used to (?!\\w+ing\\b)\\w+" },
          { label: "get used to", re: "(get|got|getting|gotten) used to" },
          { label: "be used to", re: "(am|'m|is|'s|are|'re|was|were) (now )?used to (\\w+ing|the|it)" },
          { label: "settle in / find my feet", re: "settl|find (my|our) feet|found (my|our) feet" },
          { label: "since then / it has taught me", re: "since then|taught me|i've learnt|i've learned" }
        ],
        model: "Last year, my company merged with a larger international firm, and almost everything changed overnight. We used to be a small team where decisions were made in a five-minute conversation; suddenly, there were approval processes, new software and colleagues in four time zones. At first it was frustrating, and it took me a few months to get used to working asynchronously. What helped was asking a lot of questions and finding a colleague in the head office who showed me how things worked. Now I'm used to it, and I actually prefer the structure. It's taught me that I adapt faster than I expect, as long as I stay curious."
      }
    ]},
    { id: "q5", title: "Вопрос 5", blocks: [
      { type: "speak",
        prompt: "What kind of manager brings out the best in you?",
        tips: "Опишите стиль управления, а не конкретного человека. Используйте tend to, прилагательные недели и объясните почему.",
        targets: [
          { label: "tend to", re: "tend(s)? to" },
          { label: "personality adjectives", re: "open.minded|laid.back|considerate|assertive|down.to.earth|easy.?going|supportive" },
          { label: "constructive criticism / feedback", re: "constructive|feedback" },
          { label: "delegate / trust", re: "delegat|trust" },
          { label: "used to", re: "used to" }
        ],
        model: "I tend to do my best work with managers who set clear goals and then trust me to reach them in my own way. I'm quite self-motivated, so I don't need someone checking on me every day, but I really value regular constructive feedback. The best manager I've had was open-minded and very down-to-earth: she'd listen to every idea, and she was honest when something wasn't good enough. I used to be nervous about asking for help, but with her I never was, and that's when I learnt the most."
      }
    ]}
  ]
};
