window.C1 = window.C1 || {};
C1.lessons = C1.lessons || {};
C1.lessons.w02d1 = {
  id: "w02d1", week: 2, day: 1, issue: 6,
  title: "Creatures of habit",
  standfirst: "Как говорить о привычках и характерном поведении: will, tend to, keep -ing, always + continuous, be prone to. И 15 прилагательных, чтобы точно описать характер — свой и коллег.",
  minutes: 40,
  vocab: [
    { id: "v-conscientious", en: "conscientious", ru: "добросовестный, ответственный", ex: "She's a conscientious worker who never misses a deadline." },
    { id: "v-easy-going", en: "easy-going", ru: "покладистый, лёгкий в общении", ex: "My boss is very easy-going — nothing seems to stress him." },
    { id: "v-outspoken", en: "outspoken", ru: "прямолинейный, открыто высказывающий мнение", ex: "She's always been outspoken about equal pay." },
    { id: "v-self-assured", en: "self-assured", ru: "уверенный в себе", ex: "He gave a calm, self-assured presentation." },
    { id: "v-headstrong", en: "headstrong", ru: "своевольный, упрямо делающий по-своему", ex: "As a teenager, I was headstrong and never listened to advice." },
    { id: "v-meticulous", en: "meticulous", ru: "дотошный, педантично аккуратный", ex: "Our accountant is meticulous; she checks every figure twice." },
    { id: "v-impulsive", en: "impulsive", ru: "импульсивный", ex: "Buying the flat after one viewing was a bit impulsive." },
    { id: "v-down-to-earth", en: "down-to-earth", ru: "простой, практичный, без пафоса", ex: "Despite her success, she's remarkably down-to-earth." },
    { id: "v-thick-skinned", en: "thick-skinned", ru: "толстокожий, не обидчивый", ex: "You need to be thick-skinned to work in sales." },
    { id: "v-quick-tempered", en: "quick-tempered", ru: "вспыльчивый", ex: "He's quick-tempered, but he calms down just as fast." },
    { id: "v-assertive", en: "assertive", ru: "уверенно отстаивающий свою позицию", ex: "You need to be more assertive in negotiations." },
    { id: "v-reserved", en: "reserved", ru: "сдержанный, замкнутый", ex: "She seems reserved at first, but she's very warm once you know her." },
    { id: "v-gregarious", en: "gregarious", ru: "общительный, любящий компанию", ex: "He's gregarious and loves organising team events." },
    { id: "v-considerate", en: "considerate", ru: "внимательный к другим, тактичный", ex: "It was very considerate of you to call." },
    { id: "v-stubborn", en: "stubborn", ru: "упрямый", ex: "Don't be so stubborn — just admit you might be wrong." }
  ],
  srsExtra: [
    { id: "g-tend-not", en: "I tend not to make decisions quickly.", ru: "Обычно я не принимаю решения быстро.", ex: "Tend to = обычно; отрицание: tend not to / don't tend to." },
    { id: "g-keeps-interrupting", en: "He keeps interrupting me.", ru: "Он постоянно меня перебивает.", ex: "Keep + -ing: повторяющееся, часто раздражающее действие." },
    { id: "g-will-habit", en: "She'll sit for hours without saying a word.", ru: "Она может часами сидеть, не говоря ни слова.", ex: "Will для характерного поведения — не будущее время." }
  ],
  steps: [
    { id: "words", title: "Слова", blocks: [
      { type: "cards", instr: "Read and listen to 15 personality adjectives. Tap a card to see the translation." },
      { type: "match", instr: "Match each adjective to its definition.", pairs: [
        ["meticulous", "paying great attention to detail"],
        ["outspoken", "saying exactly what you think, even if it offends"],
        ["headstrong", "determined to do things your own way"],
        ["gregarious", "enjoying the company of other people"],
        ["thick-skinned", "not easily upset by criticism"],
        ["down-to-earth", "practical and realistic, without pretensions"]
      ]},
      { type: "gap", instr: "Complete each sentence with one word.", items: [
        { q: "She's very easy-___: nothing seems to worry her.", a: ["going"] },
        { q: "He's quick-___, so be careful what you say.", a: ["tempered"] },
        { q: "You need to be more ___ in meetings — say clearly what you want.", a: ["assertive"] },
        { q: "Thanks for the flowers — that was very ___ of you.", a: ["considerate"] },
        { q: "She seems a bit ___ at first, but once you get to know her she's very warm.", a: ["reserved"] },
        { q: "Don't be so ___! Just try it my way for once.", a: ["stubborn", "headstrong"] }
      ]},
      { type: "choice", instr: "Choose the best adjective.", items: [
        { q: "Our accountant is incredibly ___: she hasn't made a single mistake in ten years.", o: ["meticulous", "impulsive", "gregarious"], a: 0 },
        { q: "He bought a sports car on the way home from work — he's so ___.", o: ["impulsive", "conscientious", "reserved"], a: 0 },
        { q: "You have to be fairly ___ to work in politics; people criticise you all the time.", o: ["thick-skinned", "quick-tempered", "considerate"], a: 0 },
        { q: "Despite her fame, she's remarkably ___ and still takes the bus to work.", o: ["down-to-earth", "headstrong", "outspoken"], a: 0 }
      ]}
    ]},
    { id: "grammar", title: "Грамматика", blocks: [
      { type: "theory", title: "Talking about habits and typical behaviour", html: `
<p class="lead">На уровне B2 привычки описывают через present simple и <em>usually</em>. На C1 есть целый набор способов показать, <strong>насколько это типично</strong> для человека и <strong>как вы к этому относитесь</strong>.</p>

<h3>1. Will для характерного поведения</h3>
<p>Это не будущее время! <em>Will</em> описывает то, что человек обычно делает, что для него типично:</p>
<p class="ex">She<b>'ll sit</b> for hours without saying a word.<br>My manager <b>will</b> usually <b>reply</b> within an hour.</p>
<p>Если <em>will</em> произнести с ударением, получится раздражение: <em>He WILL leave his cups on my desk!</em> — «Вечно он оставляет…»</p>

<h3>2. Tend to</h3>
<p>Самый нейтральный способ сказать «обычно, как правило». Очень частотен в интервью и деловой речи:</p>
<p class="ex">I <b>tend to</b> overthink things when I'm tired.<br>Introverts <b>tend to</b> prefer written communication.<br>I <b>tend not to</b> / I <b>don't tend to</b> make decisions quickly.</p>

<h3>3. Keep (on) + -ing</h3>
<p>Повторяющееся действие, часто раздражающее или неожиданное:</p>
<p class="ex">He <b>keeps interrupting</b> me.<br>I <b>keep forgetting</b> her name!</p>

<h3>4. Always / constantly / forever + continuous</h3>
<p>Повторение из урока 4 недели 1: эмоция (обычно раздражение) по поводу повторяющегося поведения.</p>
<p class="ex">She<b>'s forever losing</b> her keys.<br>He<b>'s constantly checking</b> his phone in meetings.</p>

<h3>5. Be prone to / be inclined to</h3>
<p>Более формальные варианты: «склонен к чему-то».</p>
<ul class="ex-list">
  <li>I<b>'m prone to</b> procrastination. / I<b>'m prone to</b> making careless mistakes when I'm tired. <span class="note">prone to + существительное или -ing</span></li>
  <li>He<b>'s inclined to</b> exaggerate. <span class="note">inclined to + глагол</span></li>
</ul>

<div class="trap"><h4>Порядок слов и формы</h4>
<p class="ex"><s>She usually will call.</s> → She<b>'ll usually call</b>. <span class="note">наречие после will</span><br>
<s>He will always borrows my car.</s> → He <b>will always borrow</b>… <span class="note">после will — инфинитив</span><br>
<s>He keeps to call me.</s> → He <b>keeps calling</b> me.<br>
<s>I'm tending to…</s> → I <b>tend to</b>… <span class="note">для привычек — простая форма</span></p></div>
` },
      { type: "choice", instr: "Choose the correct option.", items: [
        { q: "My grandfather ___ sit in the same chair every evening and read the paper.", o: ["will", "is going to", "has"], a: 0, explain: "Will для характерного поведения." },
        { q: "I ___ to overthink things when I'm tired.", o: ["tend", "am tending", "keep"], a: 0, explain: "Tend to — нейтральное «обычно»." },
        { q: "He ___ interrupting me in meetings, and it's driving me mad.", o: ["keeps", "tends", "will"], a: 0, explain: "Keep + -ing: повторяющееся раздражающее действие." },
        { q: "She's ___ losing her keys — she's lost them three times this week!", o: ["forever", "ever", "never"], a: 0, explain: "Forever + continuous = «вечно она…»." },
        { q: "People who are naturally reserved ___ to listen more than they speak.", o: ["tend", "will tend", "keep"], a: 0 },
        { q: "I'm ___ to procrastination, so I set myself strict deadlines.", o: ["prone", "inclined", "tending"], a: 0, explain: "Prone to + существительное. Inclined to требует глагола: inclined to procrastinate." },
        { q: "My manager ___ reply within an hour, even late at night.", o: ["will usually", "usually will", "is usually"], a: 0, explain: "Наречие частоты ставится после will." }
      ]},
      { type: "gap", instr: "Complete the sentences. Use the words in brackets.", items: [
        { q: "She ___ (keep / forget) my name, even though we've met five times.", a: ["keeps forgetting", "keeps on forgetting"] },
        { q: "I ___ (tend, negative) to work well in noisy offices.", a: ["tend not", "don't tend", "do not tend"], explain: "Оба варианта правильные: I tend not to… / I don't tend to…" },
        { q: "He's ___ (always / complain) about the coffee!", a: ["always complaining"] },
        { q: "My boss ___ (will / usually / reply) within an hour.", a: ["will usually reply", "'ll usually reply"] },
        { q: "He's inclined ___ exaggerate when he tells stories.", a: ["to"] },
        { q: "Some people are prone ___ anxiety before exams.", a: ["to"] }
      ]},
      { type: "judge", instr: "Correct or incorrect?", items: [
        { q: "I'm tending to get up early these days.", ok: false, fix: "I tend to get up early. (для привычек — простая форма)" },
        { q: "She will often spend the whole weekend reading.", ok: true, fix: "Всё верно: will для типичного поведения." },
        { q: "He keeps to call me late at night.", ok: false, fix: "He keeps calling me late at night." },
        { q: "She's always forgetting her password!", ok: true, fix: "Всё верно: always + continuous = раздражение." },
        { q: "My brother will always borrows my car without asking.", ok: false, fix: "My brother will always borrow my car… (после will — инфинитив)" }
      ]},
      { type: "transform", instr: "Rewrite the sentence using the word given (2–5 words).", items: [
        { src: "He interrupts people all the time, which is annoying.", key: "KEEPS", before: "He", after: "people.", a: ["keeps interrupting", "keeps on interrupting"] },
        { src: "Generally, I don't make decisions quickly.", key: "TEND", before: "I", after: "decisions quickly.", a: ["tend not to make", "don't tend to make", "do not tend to make"] },
        { src: "She often loses her temper when she's tired.", key: "PRONE", before: "She", after: "her temper when she's tired.", a: ["is prone to losing", "'s prone to losing"] }
      ]},
      { type: "order", instr: "Put the words in the correct order.", items: [
        { words: ["She'll", "sit", "for", "hours", "without", "saying", "a", "single", "word"], a: ["She'll sit for hours without saying a single word"] }
      ]}
    ]},
    { id: "reading", title: "Текст", blocks: [
      { type: "reading", title: "Are personality tests worth anything?", standfirst: "Millions of candidates take them every year. Psychologists are far less impressed than recruiters.", text: [
        "Every year, millions of job applicants are asked questions such as “Would you rather spend a free evening alone or with friends?” The results are supposed to reveal who they really are: a [[gregarious]] extravert or a [[reserved]] introvert, a planner or a free spirit. But how much do these tests actually tell us?",
        "The most famous of them, the Myers–Briggs Type Indicator, was developed in the mid-twentieth century by Katharine Cook Briggs and her daughter Isabel Briggs Myers, who were inspired by the ideas of the psychiatrist Carl Jung. It sorts people into sixteen types, each described by four letters, such as INTJ or ESFP. Many people find their type surprisingly accurate, and companies like it because it is easy to understand.",
        "Psychologists, however, tend to be sceptical. One problem is that the test puts people into boxes, while most personality traits exist on a scale: few of us are completely introverted or completely extraverted. Another is reliability. In several studies, a large proportion of people — in some cases around half — were given a different type when they took the test again just a few weeks later.",
        "Most researchers prefer the “Big Five” model, which measures five broad traits: openness, conscientiousness, extraversion, agreeableness and neuroticism. Instead of a label, it gives each person a score on each trait. Of the five, [[conscientiousness]] — being organised, reliable and hard-working — has repeatedly been linked to success at work.",
        "So should you worry if a recruiter asks you to take a personality test? Probably not. Answer honestly rather than trying to guess the “right” answers; many tests are designed to spot inconsistent responses. And remember that no questionnaire can measure what matters most in an interview: the specific things you have done, and how you did them."
      ]},
      { type: "choice", instr: "Answer the questions about the text.", items: [
        { q: "Why do companies like the Myers–Briggs test?", o: ["It is scientifically proven.", "It is easy to understand.", "It predicts job performance."], a: 1 },
        { q: "What is one criticism of the test?", o: ["It has too many types.", "It treats traits as either/or categories.", "It takes too long to complete."], a: 1 },
        { q: "What did some studies find about reliability?", o: ["Results almost never changed.", "Many people got a different type when they were retested.", "The test was more reliable for introverts."], a: 1 },
        { q: "How is the Big Five model different?", o: ["It gives scores on a scale instead of types.", "It has only two types.", "It was developed by Jung himself."], a: 0 },
        { q: "What does the writer advise candidates?", o: ["Try to guess what the employer wants.", "Answer honestly.", "Refuse to take the test."], a: 1 }
      ]},
      { type: "dictation", instr: "Dictation. Listen and type the sentence.", items: [
        { text: "She tends to be quite reserved, but she's very considerate.", a: ["She tends to be quite reserved, but she's very considerate", "She tends to be quite reserved but she is very considerate"] },
        { text: "He keeps interrupting people, which is why he comes across as rude.", a: ["He keeps interrupting people, which is why he comes across as rude"] }
      ]}
    ]},
    { id: "speaking", title: "Речь", blocks: [
      { type: "speak",
        prompt: "How would your friends describe your personality? Do you agree with them?",
        tips: "Говорите 1–2 минуты. Используйте 3–4 прилагательных из урока и подкрепите каждое примером. Добавьте конструкции урока: I tend to…, I'll often…, I'm prone to…",
        targets: [
          { label: "tend to", re: "tend(s)? (not )?to" },
          { label: "will for habits", re: "\\b(i'll|i will|she'll|he'll) (usually|often|always|sometimes|happily)\\b" },
          { label: "keep + -ing", re: "keep(s)? (on )?\\w+ing" },
          { label: "prone / inclined to", re: "prone to|inclined to" },
          { label: "conscientious", re: "conscientious" },
          { label: "easy-going", re: "easy.?going" },
          { label: "down-to-earth", re: "down.to.earth" },
          { label: "reserved / gregarious", re: "reserved|gregarious" },
          { label: "stubborn / headstrong", re: "stubborn|headstrong" },
          { label: "meticulous", re: "meticulous" },
          { label: "assertive / outspoken", re: "assertive|outspoken" }
        ],
        model: "I think my friends would say I'm quite easy-going and down-to-earth. I tend not to get stressed about small things, and I'll usually be the one who calms everyone down when plans go wrong. They'd probably also say I'm a bit stubborn — once I've made a decision, I'm prone to sticking with it even when I shouldn't. I mostly agree, although I don't think they see how meticulous I am at work. With friends I'm relaxed, but with a project I'll check every detail twice. So I'd say I'm a mix: easy-going in life, but very conscientious when it matters."
      }
    ]}
  ]
};
