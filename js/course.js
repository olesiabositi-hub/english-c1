/* Course map: 26 weeks, 4 parts. Lessons are loaded from js/lessons/<id>.js */
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
      { id: 'w01d1', day: 1, issue: 1, title: 'First impressions', grammar: 'Present perfect vs past simple', minutes: 40 },
      { id: 'w01d2', day: 2, issue: 2, title: 'Keeping in touch', grammar: 'Present perfect continuous', minutes: 40 },
      { id: 'w01d3', day: 3, issue: 3, title: 'A story worth telling', grammar: 'Past perfect and narrative tenses', minutes: 40 },
      { id: 'w01d4', day: 4, issue: 4, title: 'States of mind', grammar: 'State and action verbs', minutes: 40 },
      { id: 'w01d5', day: 5, issue: 5, title: 'Tell me about yourself', grammar: 'Week 1 review', minutes: 45 },
      { id: 'w01sat', day: 6, kind: 'test', title: 'Week 1 test', grammar: 'Контрольная по неделе', minutes: 25 },
      { id: 'w01sun', day: 7, kind: 'interview', title: 'Interview practice', grammar: 'Пять вопросов с интервью', minutes: 30 }
    ]},
    { n: 2, theme: 'People and personality', grammar: 'Habits: used to, would, will' },
    { n: 3, theme: 'Communication styles', grammar: 'Future forms' },
    { n: 4, theme: 'Health and wellbeing', grammar: 'Future continuous, future perfect, future in the past' },
    { n: 5, theme: 'Work–life balance', grammar: 'Modals of possibility and deduction' },
    { n: 6, theme: 'Checkpoint 1', grammar: 'Part 1 review and test' },
    { n: 7, theme: 'Exceptional people', grammar: 'Relative clauses' },
    { n: 8, theme: 'Places and travel', grammar: 'Participle clauses' },
    { n: 9, theme: 'Media and news', grammar: 'Cleft sentences and emphasis' },
    { n: 10, theme: 'Cities and technology', grammar: 'Inversion' },
    { n: 11, theme: 'Society and change', grammar: 'Patterns with it, noun clauses' },
    { n: 12, theme: 'Checkpoint 2', grammar: 'Part 2 review and test' },
    { n: 13, theme: 'Science and innovation', grammar: 'Passives and causatives' },
    { n: 14, theme: 'Money and the economy', grammar: 'Reporting verbs' },
    { n: 15, theme: 'Ethics and dilemmas', grammar: 'Mixed conditionals, wish, if only' },
    { n: 16, theme: 'The environment', grammar: 'Hedging and distancing' },
    { n: 17, theme: 'Culture and identity', grammar: 'Discourse markers, ellipsis, substitution' },
    { n: 18, theme: 'Checkpoint 3', grammar: 'Part 3 review and test' },
    { n: 19, theme: 'The job market', grammar: 'CV language and action verbs' },
    { n: 20, theme: 'Cover letters', grammar: 'Formal register' },
    { n: 21, theme: 'The interview', grammar: 'Talking about yourself and your strengths' },
    { n: 22, theme: 'Competency questions', grammar: 'The STAR method and narrative tenses' },
    { n: 23, theme: 'Meetings and negotiation', grammar: 'Diplomatic language' },
    { n: 24, theme: 'Offers and the workplace', grammar: 'Negotiating terms, professional email' },
    { n: 25, theme: 'Final test', grammar: 'C1 mock exam' },
    { n: 26, theme: 'Graduation', grammar: 'Full interview simulations' }
  ]
};
