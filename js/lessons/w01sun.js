window.C1 = window.C1 || {};
C1.lessons = C1.lessons || {};
C1.lessons.w01sun = {
  id: "w01sun", week: 1, day: 7, kind: "interview",
  title: "Interview practice",
  standfirst: "Пять вопросов, которые задают почти на каждом интервью. Отвечайте вслух, используя слова и времена недели, потом сравните с примером ответа.",
  minutes: 30,
  vocab: [],
  steps: [
    { id: "q1", title: "Вопрос 1", blocks: [
      { type: "speak",
        prompt: "Tell me about yourself.",
        tips: "60–90 секунд. Настоящее → достижения → путь → почему эта работа. Если вы записывали ответ в пятницу, попробуйте сказать его увереннее и короче.",
        targets: [
          { label: "currently / at the moment", re: "currently|at the moment" },
          { label: "present perfect continuous", re: "(have|has|'ve) been \\w+ing" },
          { label: "a number or fact", re: "\\d|percent|per cent|half|quarter|twice|doubled" },
          { label: "keen to", re: "keen to" },
          { label: "background / experience", re: "background|experience" }
        ],
        model: "I'm a project coordinator with five years of experience in logistics. At the moment, I'm working for a delivery company, where I coordinate a team of eight. Over the past two years, I've been leading our move to a new tracking system, and we've cut late deliveries by a quarter. I started my career in customer service, which taught me to stay calm under pressure. Now I'm keen to move into an international company, and that's why this role caught my attention."
      }
    ]},
    { id: "q2", title: "Вопрос 2", blocks: [
      { type: "speak",
        prompt: "Why are you interested in working for an international company?",
        tips: "Назовите 2–3 конкретные причины. Покажите, что вы уже сделали шаги в этом направлении (present perfect), и что вы можете предложить.",
        targets: [
          { label: "broaden my horizons", re: "broaden" },
          { label: "step out of my comfort zone", re: "comfort zone" },
          { label: "bring … to the table", re: "to the table" },
          { label: "thrive", re: "thrive" },
          { label: "present perfect", re: "\\b(i've|i have) (been|worked|lived|learnt|learned|started|realised|realized|always)\\b" }
        ],
        model: "There are three main reasons. First, I've always enjoyed working with people from different backgrounds — I've lived in three countries, and I've noticed that I thrive in multicultural teams. Second, I'm keen to broaden my horizons professionally: international companies deal with more complex projects, and I'd like to be part of that. And finally, I think I can bring something to the table. I speak three languages and I understand how to adapt communication to different cultures, which is exactly what a global team needs."
      }
    ]},
    { id: "q3", title: "Вопрос 3", blocks: [
      { type: "speak",
        prompt: "Tell me about a time you had to deal with a difficult situation at work.",
        tips: "Расскажите историю: past continuous для фона, past simple для событий, past perfect для шага назад. Закончите тем, чему вы научились (present perfect).",
        targets: [
          { label: "past continuous", re: "\\b(was|were) \\w+ing\\b" },
          { label: "past perfect", re: "\\b(had|'d) (been|\\w+ed|left|forgotten|lost|gone|made|done|taken|told|given)\\b" },
          { label: "it turned out", re: "turned out" },
          { label: "keep a level head", re: "level head" },
          { label: "take the initiative", re: "initiative" },
          { label: "in hindsight", re: "hindsight" },
          { label: "since then, I've…", re: "since then" }
        ],
        model: "A couple of years ago, we were preparing a big product launch when, two days before the deadline, our main supplier called to say they couldn't deliver. It turned out that their factory had been closed for a week, but nobody had told us. The team was on edge, and some people were getting worked up. I tried to keep a level head: I took the initiative, called three other suppliers and found one who could deliver half the order in time. We launched with a smaller range, and it went well. In hindsight, we should have had a backup supplier from the start, and since then, I've always made sure we have one."
      }
    ]},
    { id: "q4", title: "Вопрос 4", blocks: [
      { type: "speak",
        prompt: "How do you usually handle stress and pressure?",
        tips: "Present simple для привычек, конкретный пример, и что вы сейчас улучшаете (present continuous). Избегайте фразы «I never get stressed»: она звучит неправдоподобно.",
        targets: [
          { label: "take it in my stride", re: "stride" },
          { label: "keep a level head", re: "level head" },
          { label: "overwhelmed", re: "overwhelm" },
          { label: "worked up", re: "worked up" },
          { label: "bounce back", re: "bounc(e|ed|ing) back" },
          { label: "present continuous for change", re: "\\b(i'm|i am) (getting|becoming|learning|trying|working)\\b" }
        ],
        model: "I think a certain amount of pressure is useful — I actually work quite well with tight deadlines. What helps me most is planning: when I feel overwhelmed, I break the work into small steps and decide what really matters today. I also try not to get worked up about things I can't control. For example, last month two projects had the same deadline, so I spoke to my manager early and we agreed on priorities. I'm still learning to delegate more, but I'm getting better at taking these situations in my stride."
      }
    ]},
    { id: "q5", title: "Вопрос 5", blocks: [
      { type: "speak",
        prompt: "What have you been doing recently to develop your skills?",
        tips: "Идеальный вопрос для present perfect continuous: что вы делаете последние месяцы, и present perfect simple: что уже получилось.",
        targets: [
          { label: "present perfect continuous", re: "(have|has|'ve) been \\w+ing" },
          { label: "present perfect simple", re: "\\b(i've|i have) (completed|finished|read|done|taken|passed|started|learnt|learned)\\b" },
          { label: "steep learning curve", re: "learning curve" },
          { label: "step out of my comfort zone", re: "comfort zone" },
          { label: "keen to", re: "keen to" }
        ],
        model: "Over the past few months, I've been working on two things. First, I've been studying English every day, with a focus on professional communication, because I'm keen to work in an international team. I've also been taking an online course in data analysis — it's been a steep learning curve, but I've already completed four of the six modules and started using what I've learnt at work. And to step out of my comfort zone, I've volunteered to present our team's results at the monthly meeting."
      }
    ]}
  ]
};
