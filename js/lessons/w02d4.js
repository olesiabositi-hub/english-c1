window.C1 = window.C1 || {};
C1.lessons = C1.lessons || {};
C1.lessons.w02d4 = {
  id: "w02d4", week: 2, day: 4, issue: 9,
  title: "Character at work",
  standfirst: "Словообразование — отдельное задание экзамена C1: приставки, суффиксы и сложные прилагательные вроде open-minded и a ten-minute walk. И 15 таких прилагательных о характере.",
  minutes: 40,
  vocab: [
    { id: "v-open-minded", en: "open-minded", ru: "непредвзятый, открытый новому", ex: "Our new manager is very open-minded; she listens to every idea." },
    { id: "v-single-minded", en: "single-minded", ru: "целеустремлённый, сосредоточенный на одной цели", ex: "You have to be single-minded to finish a marathon." },
    { id: "v-strong-willed", en: "strong-willed", ru: "волевой, решительный", ex: "She's strong-willed and won't give up easily." },
    { id: "v-self-motivated", en: "self-motivated", ru: "самомотивированный, не нуждающийся в контроле", ex: "Freelancers need to be self-motivated." },
    { id: "v-quick-witted", en: "quick-witted", ru: "находчивый, сообразительный", ex: "He's quick-witted and always has a funny reply." },
    { id: "v-absent-minded", en: "absent-minded", ru: "рассеянный", ex: "My professor was so absent-minded that he once came to class in his slippers." },
    { id: "v-big-headed", en: "big-headed", ru: "зазнавшийся, высокомерный", ex: "He's become so big-headed since he got promoted." },
    { id: "v-two-faced", en: "two-faced", ru: "двуличный", ex: "He's friendly to your face but criticises you behind your back — he's so two-faced." },
    { id: "v-narrow-minded", en: "narrow-minded", ru: "ограниченный, с узкими взглядами", ex: "It's narrow-minded to judge people by their accent." },
    { id: "v-tight-fisted", en: "tight-fisted", ru: "скупой, прижимистый", ex: "He's so tight-fisted that he never pays for a coffee." },
    { id: "v-laid-back", en: "laid-back", ru: "расслабленный, спокойный", ex: "The office has a very laid-back atmosphere." },
    { id: "v-warm-hearted", en: "warm-hearted", ru: "добросердечный, отзывчивый", ex: "She's warm-hearted and always helps people in need." },
    { id: "v-hot-headed", en: "hot-headed", ru: "горячий, вспыльчивый, действующий сгоряча", ex: "Don't be so hot-headed — think before you act." },
    { id: "v-short-tempered", en: "short-tempered", ru: "раздражительный, легко выходящий из себя", ex: "He gets short-tempered when he's tired." },
    { id: "v-well-meaning", en: "well-meaning", ru: "благонамеренный, желающий добра", ex: "My aunt is well-meaning, but her advice is usually useless." }
  ],
  srsExtra: [
    { id: "g-ten-minute", en: "It's a ten-minute walk from the station.", ru: "От станции десять минут пешком.", ex: "Число + существительное перед словом — без -s: a ten-minute walk." },
    { id: "g-impatient", en: "He's very impatient.", ru: "Он очень нетерпеливый.", ex: "im- перед p, b, m: impatient, impossible." },
    { id: "g-misunderstanding", en: "I think there's been a misunderstanding.", ru: "Кажется, произошло недоразумение.", ex: "mis- = неправильно: misunderstand, mislead." }
  ],
  steps: [
    { id: "words", title: "Слова", blocks: [
      { type: "cards", instr: "Read and listen to 15 compound adjectives. Tap a card to see the translation." },
      { type: "match", instr: "Match each adjective to its definition.", pairs: [
        ["absent-minded", "often forgetting things"],
        ["two-faced", "saying different things to different people"],
        ["tight-fisted", "not willing to spend money"],
        ["laid-back", "relaxed and calm"],
        ["strong-willed", "determined to do what you want"],
        ["well-meaning", "trying to help, but not always succeeding"]
      ]},
      { type: "gap", instr: "Complete each adjective.", items: [
        { q: "She's very warm-___ and always helps people in need.", a: ["hearted"] },
        { q: "He's become so big-___ since he got promoted.", a: ["headed"] },
        { q: "You need to be ___-minded to finish a marathon.", a: ["single"] },
        { q: "He's quick-___ — he always has a funny reply.", a: ["witted"] },
        { q: "He gets short-___ when he hasn't slept.", a: ["tempered"] },
        { q: "My grandfather was rather ___-minded: he never accepted new ideas.", a: ["narrow"] }
      ]},
      { type: "choice", instr: "Choose the best adjective.", items: [
        { q: "Our professor was so ___ that he once came to class in his slippers.", o: ["absent-minded", "two-faced", "tight-fisted"], a: 0 },
        { q: "She's a ___ freelancer: nobody has to tell her when to start work.", o: ["self-motivated", "laid-back", "well-meaning"], a: 0 },
        { q: "He's friendly to your face but criticises you behind your back — he's completely ___.", o: ["two-faced", "open-minded", "warm-hearted"], a: 0 },
        { q: "My parents were very ___ about rules; we could stay up as late as we liked.", o: ["laid-back", "strong-willed", "hot-headed"], a: 0 }
      ]}
    ]},
    { id: "grammar", title: "Грамматика", blocks: [
      { type: "theory", title: "Word formation", html: `
<p class="lead">В экзамене C1 Advanced есть целая часть на словообразование: дано слово, нужно превратить его в нужную форму. В речи это помогает звучать точнее: <em>unreliable</em> вместо <em>not very reliable</em>.</p>

<h3>1. Сложные прилагательные</h3>
<ul class="ex-list">
  <li>прилагательное + <b>-minded / -hearted / -headed / -tempered / -willed</b>: open-minded, warm-hearted, hot-headed</li>
  <li><b>self-</b> + причастие: self-motivated, self-employed, self-taught</li>
  <li><b>well- / badly-</b> + причастие: well-paid, well-known, badly-organised</li>
  <li><b>число + существительное</b>: a <b>ten-minute</b> walk, a <b>two-year</b> contract, a <b>five-star</b> hotel <span class="note">существительное без -s!</span></li>
</ul>
<p>Дефис ставится, когда такое прилагательное стоит <em>перед</em> существительным: <em>a well-known writer</em>, но <em>the writer is well known</em>.</p>

<h3>2. Отрицательные приставки</h3>
<ul class="ex-list">
  <li><b>un-</b>: unreliable, unhelpful, unexpected</li>
  <li><b>in-</b>: inefficient, inexperienced; <b>im-</b> перед p, b, m: impatient, impossible; <b>il-</b> перед l: illogical; <b>ir-</b> перед r: irresponsible</li>
  <li><b>dis-</b>: dishonest, disorganised, dissatisfied</li>
  <li><b>mis-</b> (неправильно): misunderstand, mislead, misjudge</li>
  <li><b>over- / under-</b> (слишком / недостаточно): overconfident, underestimate, underpaid</li>
</ul>

<h3>3. Суффиксы</h3>
<ul class="ex-list">
  <li>существительное → прилагательное: <b>-ful</b> (helpful), <b>-less</b> (pointless), <b>-ous</b> (ambitious), <b>-ive</b> (creative), <b>-al</b> (logical)</li>
  <li>глагол → прилагательное: <b>-able / -ible</b> (reliable, flexible)</li>
  <li>прилагательное → существительное: <b>-ness</b> (weakness), <b>-ity</b> (reliability, generosity), <b>-ence / -ance</b> (patience, confidence)</li>
  <li>глагол → существительное: <b>-ment</b> (development), <b>-tion</b> (organisation), <b>-ship</b> (leadership)</li>
</ul>

<div class="trap"><h4>Частые ошибки</h4>
<p class="ex"><s>a two-hours flight</s> → a <b>two-hour</b> flight<br><s>unpatient</s> → <b>impatient</b> <span class="note">в русском «не-», но приставки в английском разные</span><br><s>unresponsible</s> → <b>irresponsible</b><br><s>reliableness</s> → <b>reliability</b></p></div>
` },
      { type: "choice", instr: "Choose the correct option.", items: [
        { q: "It's a ___ walk from the station to the office.", o: ["ten-minute", "ten-minutes", "ten minute's"], a: 0, explain: "Число + существительное перед словом — без -s." },
        { q: "She has just signed a ___ contract.", o: ["two-year", "two-years", "two-yearly"], a: 0 },
        { q: "It was ___ of me to forget your birthday.", o: ["thoughtless", "thoughtful", "unthoughtful"], a: 0, explain: "-less = без: без внимания к другим." },
        { q: "Leaving the door unlocked was completely ___.", o: ["irresponsible", "unresponsible", "disresponsible"], a: 0, explain: "ir- перед r." },
        { q: "I think we ___ how long the project would take.", o: ["underestimated", "misestimated", "disestimated"], a: 0 },
        { q: "She's a ___ writer in Germany.", o: ["well-known", "well known", "good-known"], a: 0, explain: "Перед существительным — с дефисом." },
        { q: "His greatest ___ is that he never asks for help.", o: ["weakness", "weakity", "weakment"], a: 0 }
      ]},
      { type: "gap", instr: "Use the word in brackets to form a word that fits the gap.", items: [
        { q: "Her ___ (reliable) is what makes her so valuable to the team.", a: ["reliability"] },
        { q: "I'm sorry, I think there's been a ___ (understand).", a: ["misunderstanding"] },
        { q: "He's extremely ___ (patience) — he hates waiting.", a: ["impatient"] },
        { q: "The meeting was a complete waste of time: totally ___ (point).", a: ["pointless"] },
        { q: "We need someone with strong ___ (lead) skills.", a: ["leadership"] },
        { q: "She's so ___ (organise) that she can never find anything.", a: ["disorganised", "disorganized"] },
        { q: "Thank you for your ___ (generous).", a: ["generosity"] },
        { q: "That argument was completely ___ (logic); it made no sense.", a: ["illogical"] }
      ]},
      { type: "judge", instr: "Correct or incorrect?", items: [
        { q: "It's a two-hours flight to Istanbul.", ok: false, fix: "It's a two-hour flight to Istanbul." },
        { q: "She's a well-respected doctor.", ok: true, fix: "Всё верно." },
        { q: "He's very unpatient with junior staff.", ok: false, fix: "He's very impatient with junior staff." },
        { q: "The author is well known in Germany.", ok: true, fix: "Всё верно: после глагола дефис не нужен." },
        { q: "I'm sorry, I misunderstood your question.", ok: true, fix: "Всё верно: mis- = неправильно." }
      ]},
      { type: "transform", instr: "Rewrite the sentence using the word given.", items: [
        { src: "Nobody has to push her to work; she does it herself.", key: "SELF", before: "She is very", after: ".", a: ["self-motivated", "self motivated", "self-disciplined"] },
        { src: "The journey took three hours.", key: "JOURNEY", before: "It was a", after: ".", a: ["three-hour journey", "three hour journey"] },
        { src: "He doesn't easily accept new ideas.", key: "MINDED", before: "He's rather", after: ".", a: ["narrow-minded", "narrow minded", "closed-minded", "closed minded"] }
      ]},
      { type: "order", instr: "Put the words in the correct order.", items: [
        { words: ["It's", "a", "ten-minute", "walk", "from", "the", "station"], a: ["It's a ten-minute walk from the station"] }
      ]}
    ]},
    { id: "reading", title: "Текст", blocks: [
      { type: "reading", title: "Introverts at work: the quiet strength", standfirst: "Open-plan offices and endless brainstorming reward the loudest voices. Research suggests that isn't always wise.", text: [
        "Walk into almost any open-plan office and you will see the extravert ideal at work: brainstorming sessions, team-building games and managers who praise people for “speaking up”. For the many people who describe themselves as introverts — by some estimates, between a third and a half of the population — this can be exhausting.",
        "The writer Susan Cain made this argument famous in her 2012 book Quiet, which suggested that schools and workplaces systematically undervalue people who prefer to think before they speak. Introversion, she pointed out, is not the same as shyness. A shy person fears social judgement; an introvert simply finds that quiet environments help them recharge and concentrate.",
        "Research supports some of her points. In a study published in 2011, the management researchers Adam Grant, Francesca Gino and David Hofmann looked at leaders and teams in a chain of pizza restaurants. Extraverted leaders did well when employees were passive. But when employees were proactive and came up with their own ideas, introverted leaders were often more successful, because they were more likely to listen and let those ideas develop.",
        "None of this means introverts are better. Extraverts bring energy, build networks easily and are often more comfortable in front of an audience. The point is that teams work best with a mix of temperaments — the [[quick-witted]] talker and the [[single-minded]] thinker — and with managers who are [[open-minded]] enough to value both.",
        "If you are an introvert preparing for an interview, the advice is simple: prepare more, not less. Write down your examples in advance, practise them aloud, and remember that thoughtful, well-structured answers often impress more than quick ones."
      ]},
      { type: "choice", instr: "Answer the questions about the text.", items: [
        { q: "What does “the extravert ideal” in paragraph 1 refer to?", o: ["A type of personality test", "A workplace culture that rewards talkative people", "A successful extraverted manager"], a: 1 },
        { q: "According to the article, how is introversion different from shyness?", o: ["Introverts are afraid of other people.", "Introverts recharge in quiet environments.", "Shy people are always introverts."], a: 1 },
        { q: "What did Grant, Gino and Hofmann find?", o: ["Extraverted leaders are always more effective.", "Introverted leaders were often more effective with proactive teams.", "Introverts prefer working in restaurants."], a: 1 },
        { q: "What is the writer's view of introverts and extraverts?", o: ["Introverts make better leaders.", "Both bring different strengths.", "Extraverts should learn to be quieter."], a: 1 },
        { q: "What advice does the writer give introverts preparing for interviews?", o: ["Speak as quickly as possible.", "Prepare examples and practise them aloud.", "Keep answers very short."], a: 1 }
      ]},
      { type: "dictation", instr: "Dictation. Listen and type the sentence.", items: [
        { text: "She's a self-motivated, open-minded manager with a ten-year track record.", a: ["She's a self-motivated, open-minded manager with a ten-year track record", "She is a self-motivated open-minded manager with a ten-year track record"] },
        { text: "He can be a bit absent-minded, but he's very warm-hearted.", a: ["He can be a bit absent-minded, but he's very warm-hearted", "He can be a bit absent-minded but he is very warm-hearted"] }
      ]}
    ]},
    { id: "speaking", title: "Речь", blocks: [
      { type: "speak",
        prompt: "What kind of colleague are you? Which personality types do you find easy or difficult to work with?",
        tips: "Говорите 1–2 минуты. Используйте 4–5 сложных прилагательных из урока и приставки (impatient, disorganised, unreliable). Помните: о трудных коллегах говорите тактично.",
        targets: [
          { label: "compound adjectives", re: "\\b\\w+-(minded|hearted|headed|tempered|willed|motivated|witted|back|faced|fisted|meaning)\\b" },
          { label: "open-minded", re: "open.minded" },
          { label: "self-motivated", re: "self.motivated" },
          { label: "laid-back", re: "laid.back" },
          { label: "negative prefix", re: "\\b(un|im|in|il|ir|dis)(reliable|patient|organi[sz]ed|honest|responsible|logical|helpful|predictable|flexible|efficient)\\b" },
          { label: "tend to", re: "tend(s)? to" }
        ],
        model: "I'd describe myself as a self-motivated and fairly open-minded colleague. I don't need much supervision, and I tend to listen to other people's ideas before I decide anything. I find laid-back, warm-hearted people very easy to work with, because the atmosphere stays positive even under pressure. What I find more difficult is working with people who are disorganised or unreliable — if someone misses deadlines again and again, it affects the whole team. I also struggle a little with very hot-headed colleagues, but I've learnt that the best approach is to stay calm and talk to them privately once things have cooled down."
      }
    ]}
  ]
};
