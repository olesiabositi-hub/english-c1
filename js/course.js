/* Course map: 26 weeks, 4 parts. Lessons are loaded from js/lessons/<id>.js.
   ready: true marks lessons whose file exists. Generated from docs/syllabus.txt (weeks 2–26). */
window.C1 = window.C1 || {};
C1.course = {
  title: 'The C1 Edition',
  parts: [
    { n: 1, title: 'Precision', ru: 'Точность', weeks: [1, 2, 3, 4, 5, 6] },
    { n: 2, title: 'Complex sentences', ru: 'Сложные предложения', weeks: [7, 8, 9, 10, 11, 12] },
    { n: 3, title: 'Nuance and style', ru: 'Нюансы и стиль', weeks: [13, 14, 15, 16, 17, 18] },
    { n: 4, title: 'English for work', ru: 'Английский для работы', weeks: [19, 20, 21, 22, 23, 24, 25, 26] }
  ],
  weeks: [
    { n: 1, theme: 'First impressions', grammar: 'Present perfect and past tenses', lessons: [
      { ready: true, id: 'w01d1', day: 1, issue: 1, title: 'First impressions', grammar: 'Present perfect vs past simple', minutes: 40 },
      { ready: true, id: 'w01d2', day: 2, issue: 2, title: 'Keeping in touch', grammar: 'Present perfect continuous', minutes: 40 },
      { ready: true, id: 'w01d3', day: 3, issue: 3, title: 'A story worth telling', grammar: 'Past perfect and narrative tenses', minutes: 40 },
      { ready: true, id: 'w01d4', day: 4, issue: 4, title: 'States of mind', grammar: 'State and action verbs', minutes: 40 },
      { ready: true, id: 'w01d5', day: 5, issue: 5, title: 'Tell me about yourself', grammar: 'Week 1 review', minutes: 45 },
      { ready: true, id: 'w01sat', day: 6, kind: 'test', title: 'Week 1 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { ready: true, id: 'w01sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 2, theme: 'People and personality', grammar: 'Habits and characteristic behaviour', lessons: [
      { ready: true, id: 'w02d1', day: 1, issue: 6, title: 'Creatures of habit', grammar: 'Present habits: will, tend to, keep -ing, always + continuous', minutes: 40 },
      { ready: true, id: 'w02d2', day: 2, issue: 7, title: 'The way we were', grammar: 'Past habits: used to, would, past simple', minutes: 40 },
      { ready: true, id: 'w02d3', day: 3, issue: 8, title: 'Getting used to it', grammar: 'be used to / get used to + -ing vs used to', minutes: 40 },
      { ready: true, id: 'w02d4', day: 4, issue: 9, title: 'Character at work', grammar: 'Word formation: compound adjectives, prefixes and suffixes', minutes: 40 },
      { ready: true, id: 'w02d5', day: 5, issue: 10, title: 'Strengths and weaknesses', grammar: 'Review + adverbs of degree (fairly, rather, pretty, extremely)', minutes: 45 },
      { ready: true, id: 'w02sat', day: 6, kind: 'test', title: 'Week 2 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { ready: true, id: 'w02sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 3, theme: 'Communication styles', grammar: 'Future forms', lessons: [
      { id: 'w03d1', day: 1, issue: 11, title: 'Plans and arrangements', grammar: 'will, going to, present continuous, present simple for timetables', minutes: 40 },
      { id: 'w03d2', day: 2, issue: 12, title: 'Saying what you mean', grammar: 'bound to, likely to, due to, about to, on the verge of, set to', minutes: 40 },
      { id: 'w03d3', day: 3, issue: 13, title: 'Across cultures', grammar: 'Future continuous and future perfect', minutes: 40 },
      { id: 'w03d4', day: 4, issue: 14, title: 'Messages and email', grammar: 'Future time clauses: when, as soon as, until, by the time', minutes: 40 },
      { id: 'w03d5', day: 5, issue: 15, title: 'Making your point', grammar: 'Review of future forms + opinion language', minutes: 45 },
      { id: 'w03sat', day: 6, kind: 'test', title: 'Week 3 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { id: 'w03sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 4, theme: 'Health and wellbeing', grammar: 'Future perfect, future continuous, future in the past', lessons: [
      { id: 'w04d1', day: 1, issue: 16, title: 'Running on empty', grammar: 'Future continuous vs future perfect simple and continuous', minutes: 40 },
      { id: 'w04d2', day: 2, issue: 17, title: 'Habits that stick', grammar: 'Future in the past: was going to, was about to, would', minutes: 40 },
      { id: 'w04d3', day: 3, issue: 18, title: 'A good night\'s sleep', grammar: 'Probability: may well, could well, there\'s every chance, the odds are', minutes: 40 },
      { id: 'w04d4', day: 4, issue: 19, title: 'You are what you eat', grammar: 'Quantifiers: a great deal of, hardly any, the vast majority, a handful', minutes: 40 },
      { id: 'w04d5', day: 5, issue: 20, title: 'Fit for work', grammar: 'Review of future forms', minutes: 45 },
      { id: 'w04sat', day: 6, kind: 'test', title: 'Week 4 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { id: 'w04sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 5, theme: 'Work–life balance', grammar: 'Modals: deduction, obligation, ability', lessons: [
      { id: 'w05d1', day: 1, issue: 21, title: 'It must be nice', grammar: 'Present deduction: must, can\'t, might, could', minutes: 40 },
      { id: 'w05d2', day: 2, issue: 22, title: 'What might have been', grammar: 'Past modals: must have, can\'t have, might have, should have, needn\'t have', minutes: 40 },
      { id: 'w05d3', day: 3, issue: 23, title: 'Working from anywhere', grammar: 'Obligation: need to, needn\'t, don\'t have to, be supposed to, be required to', minutes: 40 },
      { id: 'w05d4', day: 4, issue: 24, title: 'Ambition', grammar: 'Ability: could, was able to, managed to, succeeded in', minutes: 40 },
      { id: 'w05d5', day: 5, issue: 25, title: 'Hard choices', grammar: 'Review of modals', minutes: 45 },
      { id: 'w05sat', day: 6, kind: 'test', title: 'Week 5 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { id: 'w05sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 6, theme: 'Checkpoint 1', grammar: 'Part 1 review and C1 exam formats', lessons: [
      { id: 'w06d1', day: 1, issue: 26, title: 'Time will tell', grammar: 'Review: present perfect, narrative tenses + C1 multiple-choice cloze', minutes: 40 },
      { id: 'w06d2', day: 2, issue: 27, title: 'Home sweet home', grammar: 'Review: habits, used to, would + C1 open cloze', minutes: 40 },
      { id: 'w06d3', day: 3, issue: 28, title: 'Journeys', grammar: 'Review: future forms + C1 word formation', minutes: 40 },
      { id: 'w06d4', day: 4, issue: 29, title: 'Without a doubt', grammar: 'Review: modals + C1 key word transformations', minutes: 40 },
      { id: 'w06d5', day: 5, issue: 30, title: 'Mock test 1', grammar: 'Part 1 mock: C1 Reading and Use of English, parts 1–4', minutes: 45 },
      { id: 'w06sat', day: 6, kind: 'test', title: 'Week 6 test', grammar: 'Большая контрольная по части', minutes: 25 },
      { id: 'w06sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Полное пробное интервью', minutes: 30 }
    ]},
    { n: 7, theme: 'Exceptional people', grammar: 'Relative clauses', lessons: [
      { id: 'w07d1', day: 1, issue: 31, title: 'Pioneers', grammar: 'Defining and non-defining relative clauses; which referring to a whole clause', minutes: 40 },
      { id: 'w07d2', day: 2, issue: 32, title: 'At the helm', grammar: 'Prepositions in relative clauses, whose, whereby, the extent to which', minutes: 40 },
      { id: 'w07d3', day: 3, issue: 33, title: 'Against the odds', grammar: 'Reduced relative clauses: people living…, the man arrested…, the first to…', minutes: 40 },
      { id: 'w07d4', day: 4, issue: 34, title: 'Bright ideas', grammar: 'Nominal relative clauses: what, whatever, whoever, wherever', minutes: 40 },
      { id: 'w07d5', day: 5, issue: 35, title: 'Role models', grammar: 'Review of relative clauses', minutes: 45 },
      { id: 'w07sat', day: 6, kind: 'test', title: 'Week 7 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { id: 'w07sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 8, theme: 'Places and travel', grammar: 'Participle clauses', lessons: [
      { id: 'w08d1', day: 1, issue: 36, title: 'The urban explorer', grammar: 'Present participle clauses: Walking…, Having finished…, Not knowing…', minutes: 40 },
      { id: 'w08d2', day: 2, issue: 37, title: 'Lost in transit', grammar: 'Past participle clauses and with + noun + -ing / -ed', minutes: 40 },
      { id: 'w08d3', day: 3, issue: 38, title: 'Remember to stop', grammar: 'Verbs + -ing or to-infinitive with a change of meaning: remember, stop, try, regret, go on, mean', minutes: 40 },
      { id: 'w08d4', day: 4, issue: 39, title: 'Breathtaking', grammar: 'Adverb + adjective collocations; adjectives + prepositions', minutes: 40 },
      { id: 'w08d5', day: 5, issue: 40, title: 'Home away from home', grammar: 'Review of participle clauses', minutes: 45 },
      { id: 'w08sat', day: 6, kind: 'test', title: 'Week 8 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { id: 'w08sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 9, theme: 'Media and news', grammar: 'Cleft sentences and emphasis', lessons: [
      { id: 'w09d1', day: 1, issue: 41, title: 'Breaking news', grammar: 'It-clefts: It was X who / that…', minutes: 40 },
      { id: 'w09d2', day: 2, issue: 42, title: 'Fact or fiction', grammar: 'Wh-clefts: What I need is…, All I want is…, The thing is…', minutes: 40 },
      { id: 'w09d3', day: 3, issue: 43, title: 'Always online', grammar: 'Emphasis: do / did, the very, at all, whatsoever, -ever words', minutes: 40 },
      { id: 'w09d4', day: 4, issue: 44, title: 'The art of persuasion', grammar: 'Fronting for emphasis: Particularly important is…, Of greater concern is…', minutes: 40 },
      { id: 'w09d5', day: 5, issue: 45, title: 'On stage', grammar: 'Review of clefts and emphasis', minutes: 45 },
      { id: 'w09sat', day: 6, kind: 'test', title: 'Week 9 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { id: 'w09sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 10, theme: 'Cities and technology', grammar: 'Inversion', lessons: [
      { id: 'w10d1', day: 1, issue: 46, title: 'Never before', grammar: 'Inversion after negative adverbials: Never have I…, Rarely…, Not only… but also…, Under no circumstances…', minutes: 40 },
      { id: 'w10d2', day: 2, issue: 47, title: 'No sooner said', grammar: 'No sooner… than, Hardly… when, Only after…, Not until…', minutes: 40 },
      { id: 'w10d3', day: 3, issue: 48, title: 'Had I known', grammar: 'Conditional inversion: Should you…, Had I known…, Were it not for…', minutes: 40 },
      { id: 'w10d4', day: 4, issue: 49, title: 'So private that…', grammar: 'So / such inversion; as, nor, neither', minutes: 40 },
      { id: 'w10d5', day: 5, issue: 50, title: 'Problems and solutions', grammar: 'Review of inversion in formal writing', minutes: 45 },
      { id: 'w10sat', day: 6, kind: 'test', title: 'Week 10 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { id: 'w10sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 11, theme: 'Society and change', grammar: 'Patterns with it, noun clauses', lessons: [
      { id: 'w11d1', day: 1, issue: 51, title: 'Changing times', grammar: 'Preparatory it: It\'s worth…, I find it hard to…, It\'s no use…, It goes without saying', minutes: 40 },
      { id: 'w11d2', day: 2, issue: 52, title: 'Learning for life', grammar: 'Noun clauses: that, whether, the fact that, wh-clauses as subjects', minutes: 40 },
      { id: 'w11d3', day: 3, issue: 53, title: 'Generations', grammar: 'It\'s time + past; I\'d rather + past; it + adjective + of / for', minutes: 40 },
      { id: 'w11d4', day: 4, issue: 54, title: 'Giving back', grammar: 'There + be patterns: There\'s no point…, There\'s bound to be…, There\'s every reason…', minutes: 40 },
      { id: 'w11d5', day: 5, issue: 55, title: 'Hot topics', grammar: 'Review: it-patterns and noun clauses', minutes: 45 },
      { id: 'w11sat', day: 6, kind: 'test', title: 'Week 11 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { id: 'w11sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 12, theme: 'Checkpoint 2', grammar: 'Part 2 review and C1 exam formats', lessons: [
      { id: 'w12d1', day: 1, issue: 56, title: 'Up and down', grammar: 'Review: relative and participle clauses', minutes: 40 },
      { id: 'w12d2', day: 2, issue: 57, title: 'The customer is always right', grammar: 'Review: clefts and emphasis', minutes: 40 },
      { id: 'w12d3', day: 3, issue: 58, title: 'On track', grammar: 'Review: inversion', minutes: 40 },
      { id: 'w12d4', day: 4, issue: 59, title: 'Teething problems', grammar: 'Review: it-patterns and noun clauses', minutes: 40 },
      { id: 'w12d5', day: 5, issue: 60, title: 'Mock test 2', grammar: 'Part 2 mock: C1 Reading and Use of English + gapped text', minutes: 45 },
      { id: 'w12sat', day: 6, kind: 'test', title: 'Week 12 test', grammar: 'Большая контрольная по части', minutes: 25 },
      { id: 'w12sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Полное пробное интервью', minutes: 30 }
    ]},
    { n: 13, theme: 'Science and innovation', grammar: 'Passives and causatives', lessons: [
      { id: 'w13d1', day: 1, issue: 61, title: 'Lab notes', grammar: 'Passive forms in all tenses; passive infinitive and gerund', minutes: 40 },
      { id: 'w13d2', day: 2, issue: 62, title: 'Medical marvels', grammar: 'Get-passive and passive reporting', minutes: 40 },
      { id: 'w13d3', day: 3, issue: 63, title: 'Getting it done', grammar: 'Causatives: have sth done, get sth done, have sb do, get sb to do', minutes: 40 },
      { id: 'w13d4', day: 4, issue: 64, title: 'How it works', grammar: 'Passive for objectivity in reports and process descriptions', minutes: 40 },
      { id: 'w13d5', day: 5, issue: 65, title: 'Keep it simple', grammar: 'Review of passives', minutes: 45 },
      { id: 'w13sat', day: 6, kind: 'test', title: 'Week 13 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { id: 'w13sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 14, theme: 'Money and the economy', grammar: 'Reporting verbs', lessons: [
      { id: 'w14d1', day: 1, issue: 66, title: 'Making ends meet', grammar: 'Reported speech: backshift and when not to backshift', minutes: 40 },
      { id: 'w14d2', day: 2, issue: 67, title: 'The bottom line', grammar: 'Reporting verbs + infinitive: agree, refuse, promise, threaten, offer', minutes: 40 },
      { id: 'w14d3', day: 3, issue: 68, title: 'Boom and bust', grammar: 'Reporting verbs + object + infinitive / -ing / that: advise, urge, warn, admit, deny, accuse of, blame for', minutes: 40 },
      { id: 'w14d4', day: 4, issue: 69, title: 'Value for money', grammar: 'Reporting nouns and passive reporting: There were claims that…, He is alleged to…', minutes: 40 },
      { id: 'w14d5', day: 5, issue: 70, title: 'Show me the money', grammar: 'Review of reporting', minutes: 45 },
      { id: 'w14sat', day: 6, kind: 'test', title: 'Week 14 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { id: 'w14sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 15, theme: 'Ethics and dilemmas', grammar: 'Conditionals, wish, if only', lessons: [
      { id: 'w15d1', day: 1, issue: 71, title: 'Right and wrong', grammar: 'Conditionals 0–3; unless, provided, as long as, otherwise', minutes: 40 },
      { id: 'w15d2', day: 2, issue: 72, title: 'Knock-on effects', grammar: 'Mixed conditionals', minutes: 40 },
      { id: 'w15d3', day: 3, issue: 73, title: 'If only', grammar: 'Wish and if only + past, past perfect, would; I\'d rather', minutes: 40 },
      { id: 'w15d4', day: 4, issue: 74, title: 'What if?', grammar: 'Alternatives to if: suppose, imagine, assuming, in case, but for, otherwise, or else', minutes: 40 },
      { id: 'w15d5', day: 5, issue: 75, title: 'Doing the right thing', grammar: 'Review of conditionals', minutes: 45 },
      { id: 'w15sat', day: 6, kind: 'test', title: 'Week 15 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { id: 'w15sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 16, theme: 'The environment', grammar: 'Hedging and distancing', lessons: [
      { id: 'w16d1', day: 1, issue: 76, title: 'A warming world', grammar: 'Hedging verbs and adverbs: seem, appear, tend to, arguably, presumably, to some extent', minutes: 40 },
      { id: 'w16d2', day: 2, issue: 77, title: 'Wild places', grammar: 'Impersonal passive: It is thought that…, X is believed to have…', minutes: 40 },
      { id: 'w16d3', day: 3, issue: 78, title: 'Throwaway culture', grammar: 'Modal hedging: would seem, could be argued, may well', minutes: 40 },
      { id: 'w16d4', day: 4, issue: 79, title: 'Power at home', grammar: 'Vague language: roughly, or so, somewhat, -ish, a number of', minutes: 40 },
      { id: 'w16d5', day: 5, issue: 80, title: 'Weighing the evidence', grammar: 'Review: hedging in reports', minutes: 45 },
      { id: 'w16sat', day: 6, kind: 'test', title: 'Week 16 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { id: 'w16sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 17, theme: 'Culture and identity', grammar: 'Discourse markers, ellipsis, substitution, register', lessons: [
      { id: 'w17d1', day: 1, issue: 81, title: 'Where I\'m from', grammar: 'Discourse markers in speech: actually, anyway, mind you, having said that, still', minutes: 40 },
      { id: 'w17d2', day: 2, issue: 82, title: 'Culture vultures', grammar: 'Linking in writing: nevertheless, whereas, albeit, notwithstanding, consequently', minutes: 40 },
      { id: 'w17d3', day: 3, issue: 83, title: 'I hope so', grammar: 'Ellipsis and substitution: so, not, do so, one / ones', minutes: 40 },
      { id: 'w17d4', day: 4, issue: 84, title: 'Finding the right tone', grammar: 'Register: phrasal verbs vs formal verbs', minutes: 40 },
      { id: 'w17d5', day: 5, issue: 85, title: 'Small talk, big impact', grammar: 'Review + small talk strategies', minutes: 45 },
      { id: 'w17sat', day: 6, kind: 'test', title: 'Week 17 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { id: 'w17sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 18, theme: 'Checkpoint 3', grammar: 'Part 3 review and C1 writing', lessons: [
      { id: 'w18d1', day: 1, issue: 86, title: 'Make or do?', grammar: 'Review: passives and causatives', minutes: 40 },
      { id: 'w18d2', day: 2, issue: 87, title: 'Pay attention', grammar: 'Review: reporting', minutes: 40 },
      { id: 'w18d3', day: 3, issue: 88, title: 'Hit or miss', grammar: 'Review: conditionals and wish', minutes: 40 },
      { id: 'w18d4', day: 4, issue: 89, title: 'Academic voice', grammar: 'Review: hedging and register', minutes: 40 },
      { id: 'w18d5', day: 5, issue: 90, title: 'Mock test 3', grammar: 'Part 3 mock: C1 Use of English + writing an essay', minutes: 45 },
      { id: 'w18sat', day: 6, kind: 'test', title: 'Week 18 test', grammar: 'Большая контрольная по части', minutes: 25 },
      { id: 'w18sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Полное пробное интервью', minutes: 30 }
    ]},
    { n: 19, theme: 'The job market', grammar: 'CV language and action verbs', lessons: [
      { id: 'w19d1', day: 1, issue: 91, title: 'On the market', grammar: 'Gerunds and infinitives after verbs: consider doing, aim to, apply for', minutes: 40 },
      { id: 'w19d2', day: 2, issue: 92, title: 'Action verbs', grammar: 'Past simple in CV bullet points; ellipsis in CVs', minutes: 40 },
      { id: 'w19d3', day: 3, issue: 93, title: 'By the numbers', grammar: 'Prepositions with numbers: by, from, to, of; twice as many', minutes: 40 },
      { id: 'w19d4', day: 4, issue: 94, title: 'Skills', grammar: 'Adjective order and noun compounds in CV language', minutes: 40 },
      { id: 'w19d5', day: 5, issue: 95, title: 'Your profile', grammar: 'Present tenses in professional summaries', minutes: 45 },
      { id: 'w19sat', day: 6, kind: 'test', title: 'Week 19 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { id: 'w19sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 20, theme: 'Cover letters', grammar: 'Formal register', lessons: [
      { id: 'w20d1', day: 1, issue: 96, title: 'Dear Hiring Manager', grammar: 'Formal letter structure and set phrases', minutes: 40 },
      { id: 'w20d2', day: 2, issue: 97, title: 'Why us?', grammar: 'Structuring motivation: cleft sentences and emphasis', minutes: 40 },
      { id: 'w20d3', day: 3, issue: 98, title: 'Formal style', grammar: 'Nominalisation', minutes: 40 },
      { id: 'w20d4', day: 4, issue: 99, title: 'Inbox', grammar: 'Polite requests: I was wondering if, could you possibly, would you mind', minutes: 40 },
      { id: 'w20d5', day: 5, issue: 100, title: 'Final draft', grammar: 'Review + writing a full cover letter', minutes: 45 },
      { id: 'w20sat', day: 6, kind: 'test', title: 'Week 20 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { id: 'w20sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 21, theme: 'The interview', grammar: 'Talking about yourself, strengths and goals', lessons: [
      { id: 'w21d1', day: 1, issue: 101, title: 'The process', grammar: 'Future forms for expectations and next steps', minutes: 40 },
      { id: 'w21d2', day: 2, issue: 102, title: 'Selling your strengths', grammar: 'Cleft sentences in answers: What I enjoy most is…', minutes: 40 },
      { id: 'w21d3', day: 3, issue: 103, title: 'Room to grow', grammar: 'Hedging in answers: I tend to…, I sometimes find…', minutes: 40 },
      { id: 'w21d4', day: 4, issue: 104, title: 'Five years from now', grammar: 'Future perfect and continuous for career plans', minutes: 40 },
      { id: 'w21d5', day: 5, issue: 105, title: 'Any questions?', grammar: 'Indirect questions: Could you tell me…, I was wondering whether…', minutes: 45 },
      { id: 'w21sat', day: 6, kind: 'test', title: 'Week 21 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { id: 'w21sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 22, theme: 'Competency questions', grammar: 'The STAR method and narrative tenses', lessons: [
      { id: 'w22d1', day: 1, issue: 106, title: 'STAR', grammar: 'Narrative tenses in STAR answers', minutes: 40 },
      { id: 'w22d2', day: 2, issue: 107, title: 'Teamwork', grammar: 'Reciprocal and collective expressions: each other, one another, together', minutes: 40 },
      { id: 'w22d3', day: 3, issue: 108, title: 'Conflict', grammar: 'Reported speech in stories', minutes: 40 },
      { id: 'w22d4', day: 4, issue: 109, title: 'Leading change', grammar: 'Causatives and persuasion: get sb to do, have sb do', minutes: 40 },
      { id: 'w22d5', day: 5, issue: 110, title: 'When it went wrong', grammar: 'Third and mixed conditionals in reflection', minutes: 45 },
      { id: 'w22sat', day: 6, kind: 'test', title: 'Week 22 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { id: 'w22sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 23, theme: 'Meetings and negotiation', grammar: 'Diplomatic language', lessons: [
      { id: 'w23d1', day: 1, issue: 111, title: 'The agenda', grammar: 'Modals for suggestions and procedures', minutes: 40 },
      { id: 'w23d2', day: 2, issue: 112, title: 'Softly does it', grammar: 'Diplomatic language: past forms for distance, negative questions, softeners', minutes: 40 },
      { id: 'w23d3', day: 3, issue: 113, title: 'Let\'s make a deal', grammar: 'Negotiation basics', minutes: 40 },
      { id: 'w23d4', day: 4, issue: 114, title: 'On condition that', grammar: 'Conditional language in negotiation: If you could…, we would…; provided that', minutes: 40 },
      { id: 'w23d5', day: 5, issue: 115, title: 'Can you hear me?', grammar: 'Review + language of online calls', minutes: 45 },
      { id: 'w23sat', day: 6, kind: 'test', title: 'Week 23 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { id: 'w23sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 24, theme: 'Offers and the workplace', grammar: 'Negotiating terms and professional communication', lessons: [
      { id: 'w24d1', day: 1, issue: 116, title: 'The offer', grammar: 'Polite requests and conditionals in salary negotiation', minutes: 40 },
      { id: 'w24d2', day: 2, issue: 117, title: 'The first 90 days', grammar: 'Future forms for plans', minutes: 40 },
      { id: 'w24d3', day: 3, issue: 118, title: 'Feedback', grammar: 'Softening and emphasis in feedback', minutes: 40 },
      { id: 'w24d4', day: 4, issue: 119, title: 'Office politics', grammar: 'Phrasal verbs and idioms in the workplace', minutes: 40 },
      { id: 'w24d5', day: 5, issue: 120, title: 'Moving on', grammar: 'Formal and polite email for resignation', minutes: 45 },
      { id: 'w24sat', day: 6, kind: 'test', title: 'Week 24 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { id: 'w24sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 25, theme: 'Final test', grammar: 'C1 mock exam', lessons: [
      { id: 'w25d1', day: 1, issue: 121, title: 'Reading and Use of English', grammar: 'C1 exam: parts 1–4 (cloze, word formation, transformations)', minutes: 40 },
      { id: 'w25d2', day: 2, issue: 122, title: 'Reading', grammar: 'C1 exam: gapped text, multiple matching, cross-text matching', minutes: 40 },
      { id: 'w25d3', day: 3, issue: 123, title: 'Listening', grammar: 'C1 exam: listening tasks with dictation and note-taking', minutes: 40 },
      { id: 'w25d4', day: 4, issue: 124, title: 'Writing', grammar: 'C1 exam: essay and proposal / report', minutes: 40 },
      { id: 'w25d5', day: 5, issue: 125, title: 'Speaking', grammar: 'C1 exam: long turn and discussion', minutes: 45 },
      { id: 'w25sat', day: 6, kind: 'test', title: 'Week 25 test', grammar: 'Итоговый тест по грамматике', minutes: 25 },
      { id: 'w25sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пробное интервью', minutes: 30 }
    ]},
    { n: 26, theme: 'Graduation', grammar: 'Full interview simulations', lessons: [
      { id: 'w26d1', day: 1, issue: 126, title: 'The screening call', grammar: 'Simulation: HR phone screen', minutes: 40 },
      { id: 'w26d2', day: 2, issue: 127, title: 'The competency interview', grammar: 'Simulation: six STAR questions', minutes: 40 },
      { id: 'w26d3', day: 3, issue: 128, title: 'The case interview', grammar: 'Simulation: present a solution to a business problem', minutes: 40 },
      { id: 'w26d4', day: 4, issue: 129, title: 'The panel', grammar: 'Simulation: panel interview + salary negotiation', minutes: 40 },
      { id: 'w26d5', day: 5, issue: 130, title: 'Your story', grammar: 'Final presentation: your career story in English (3 minutes)', minutes: 45 },
      { id: 'w26sat', day: 6, kind: 'test', title: 'Vocabulary marathon', grammar: 'Повторение всех выражений', minutes: 25 },
      { id: 'w26sun', day: 7, kind: 'interview', title: 'Graduation', grammar: 'Итоги курса', minutes: 30 }
    ]}
  ]
};
