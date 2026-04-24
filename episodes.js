const PHASES = {
  1: { name: "Phase I",   title: "Orientation",             color: "#74b9ff", days: [1,2,3] },
  2: { name: "Phase II",  title: "The Case Files",          color: "#d63031", days: [4,5,6,7,8,9,10] },
  3: { name: "Phase III", title: "The Law Arrives",         color: "#fdcb6e", days: [11,12,13,14,15,16] },
  4: { name: "Phase IV",  title: "HR's Crime Scene",        color: "#fd79a8", days: [17,18,19,20,21,22,23] },
  5: { name: "Phase V",   title: "Building the Task Force", color: "#55efc4", days: [24,25,26,27,28] },
  6: { name: "Phase VI",  title: "The Capstone",            color: "#a29bfe", days: [29,30] }
};

const EPISODES = [

// ─── PHASE I: ORIENTATION ──────────────────────────────────────────────────

{
  id: 1,
  title: "You're Already in the Crime Scene",
  subtitle: "How AI already runs your life — and you didn't know you were a suspect",
  phase: 1,
  readTime: 45,
  listenTime: 30,
  teaser: "Every morning, before you get to work, AI has already made 12 decisions about you. This is the case you didn't know you were in.",
  content: [
    {
      type: "scene",
      heading: "The Scene of the Crime",
      text: "Before you opened this, AI had already made decisions about you.\n\nYour phone decided which notifications were urgent enough to interrupt you. Your email filtered out messages before you ever saw them. Your music app guessed what you were in the mood for. Your GPS chose your route. If you searched anything this morning, an algorithm decided what you'd see first — and what you'd never see at all.\n\nYou weren't asked. You didn't consent. You probably didn't even notice.\n\nThat's not a complaint. Most of those decisions were probably fine.\n\nBut here's the question that will anchor the next 30 days: What happens when they're not?"
    },
    {
      type: "case-intro",
      caseNumber: "CASE #2021-07",
      heading: "The Warehouse Worker",
      location: "Baltimore, Maryland",
      text: "His name is Eric. He worked at an Amazon fulfillment center — one of the enormous warehouses that makes two-day shipping possible. Every day he clocked in, badge scanned, worked his shift.\n\nThe warehouse had a system. It tracked everything: how fast you moved, how many packages you processed, how many seconds passed between tasks.\n\nOn a Tuesday afternoon, the system decided Eric wasn't working fast enough.\n\nA termination notice printed out.\n\nNo manager reviewed it. No human saw it before it happened. The system had logged too many \"time off task\" violations — including 47 seconds Eric spent getting a drink of water.\n\nEric was fired by a machine."
    },
    {
      type: "quote",
      text: "The system would automatically generate the warnings and the firings. Humans weren't really in the loop.",
      attribution: "Former Amazon operations manager, speaking to The Verge"
    },
    {
      type: "scene",
      heading: "But Wait — Wasn't That Just Automation?",
      text: "You might be thinking: that's not really AI. That's just a computer program following rules.\n\nHere's the thing: that distinction doesn't matter to Eric.\n\nWhether it was a sophisticated learning algorithm or a simple tracking script — a system made a decision about a human being's livelihood without human judgment, human review, or human accountability.\n\nNobody was responsible. Everyone pointed at the software.\n\nThat's the crime. And it's the crime this course is about."
    },
    {
      type: "finding",
      label: "THE DEFINITION",
      text: "AI governance is knowing who is responsible when a machine makes a wrong decision. Everything else — the regulations, the frameworks, the policies, the committees — exists to answer that one question."
    },
    {
      type: "scene",
      heading: "Why You, Why Now",
      text: "You might be wondering why you're learning this. You're not an engineer. You're not a lawyer. You don't write code.\n\nHere's why it matters: the people closest to how work actually happens — how decisions get made, what \"normal\" looks like — are often the first to notice when something is wrong.\n\nThe engineers who build these systems often can't see what you can. They're too deep in the code. The executives who approve them are too far from the day-to-day.\n\nYou're in the middle. And in AI governance, the middle is where the real work happens.\n\nBy Day 30, you'll be able to ask the questions that catch problems before they become cases."
    },
    {
      type: "icm",
      text: "If someone had run an ICM review before Amazon deployed that system, here's the interview question that would have changed everything:\n\n\"When the system flags someone for termination, what's the process for a human to review it before the decision is final?\"\n\nIf nobody could answer that — and at Amazon, nobody could — that's not a policy gap. That's a crime scene waiting to happen.\n\nICM stands for Interview, Codify, Map. It's a methodology for understanding how a process actually works before you automate it. We'll return to it in every single episode. Every case in this course failed because someone skipped the Interview."
    },
    {
      type: "terms",
      terms: [
        { term: "Artificial Intelligence (AI)", definition: "A computer system that makes decisions based on patterns learned from historical data — rather than following a fixed set of rules written by a programmer." },
        { term: "Automated Decision System", definition: "Software that makes or substantially influences decisions about people — hiring, firing, lending, healthcare — without requiring a human to review each one." },
        { term: "AI Governance", definition: "The policies, processes, and oversight structures that establish who is responsible when an AI system makes a decision — especially a wrong one." }
      ]
    },
    {
      type: "assignment",
      heading: "Your First Investigation",
      text: "Think about three decisions that affect your work — when you get a notification, how calendar invites are prioritized, how expense reports get routed.\n\nFor each one, write down:\n1. Who actually makes this decision — a person, or a system?\n2. If it's a system: do you know who would fix it if it made a mistake?\n3. If you don't know who's responsible — you've found your first governance gap.\n\nThis is the governance audit. You just ran your first one."
    }
  ]
},

{
  id: 2,
  title: "What Is This Thing, Exactly?",
  subtitle: "How computers learned to make decisions — and why that's both remarkable and dangerous",
  phase: 1,
  readTime: 45,
  listenTime: 30,
  teaser: "Amazon taught a computer to hire people by showing it who they'd hired before. Then they discovered what they'd actually taught it.",
  content: [
    {
      type: "scene",
      heading: "The Recipe Analogy",
      text: "Imagine you want to learn to make bread. You find 10,000 recipes and read all of them. You notice that nearly every recipe includes flour, water, and yeast. You conclude: bread requires these three things.\n\nYou learned a rule — not because someone told you, but because you found the pattern.\n\nThat's machine learning. Except instead of recipes, the computer reads millions of resumes. Or loan applications. Or medical records. It looks for patterns — \"people who got hired looked like this,\" \"loans that got repaid came from applicants like this\" — and applies those patterns to new situations.\n\nFind the pattern. Apply it. That's the machine.\n\nThe problem: patterns from the past carry the decisions of the past. And the decisions of the past weren't always fair."
    },
    {
      type: "case-intro",
      caseNumber: "CASE #2018-11",
      heading: "The Resume Killer",
      location: "Seattle, Washington",
      text: "In 2014, Amazon's recruiters had a problem: too many resumes, not enough time.\n\nSo they built an AI. The idea was simple: feed the system 10 years of resumes from people who actually got hired, and let it learn what a good candidate looks like.\n\nBy 2017, something seemed off.\n\nResearchers reviewing the system's recommendations found it was systematically downgrading resumes from women.\n\nNot because it was told to. Because it had learned to.\n\nThe 10 years of hiring data it trained on reflected a decade of tech industry hiring that overwhelmingly favored men. When the system saw the phrase \"women's engineering society,\" it learned to rank that resume lower. Because historically, candidates with that phrase weren't the ones who got hired.\n\nThe mirror showed them exactly who they had been.\n\nAmazon scrapped the project in 2018."
    },
    {
      type: "quote",
      text: "It was never going to be neutral. You're asking it to replicate historical hiring decisions. Historical hiring decisions weren't neutral.",
      attribution: "Amazon engineer working on the project, reported by Reuters"
    },
    {
      type: "finding",
      label: "THE MECHANISM",
      text: "AI doesn't decide to be biased. It learns to replicate the past. If the past was biased — and it was — the AI faithfully reproduces that bias at massive scale, with an air of scientific objectivity that makes it harder to challenge."
    },
    {
      type: "scene",
      heading: "The Three Things You Need to Know",
      text: "You don't need to understand how to build AI. You need to understand what it does. Here are the only three things that matter for governance:\n\n1. AI finds patterns. It doesn't understand meaning. It can't tell you why something is a pattern — only that it is one.\n\n2. Patterns come from historical data. Historical data reflects historical decisions.\n\n3. Historical decisions often reflected bias, discrimination, or just bad judgment.\n\nTherefore: AI can encode and amplify the mistakes of the past — faster, at greater scale, with an authority that makes them harder to question.\n\nThat's the case we're building."
    },
    {
      type: "scene",
      heading: "The Autocorrect Test",
      text: "Pull out your phone and try to type something unusual — a specialized term your phone hasn't seen you type before.\n\nWatch what it suggests.\n\nAutocorrect learned from patterns. It's a simplified version of the exact same technology that makes hiring decisions, loan decisions, healthcare decisions.\n\nIf the patterns it learned were skewed — even slightly, even unintentionally — it doesn't know. It just corrects.\n\nNow scale that to a decision about whether you get a job interview. Or a mortgage. Or a health diagnosis.\n\nThat's why this matters."
    },
    {
      type: "icm",
      text: "\"As soon as we presented the results, we said: we have a problem.\"\n\nThat's an Amazon engineer describing the moment the team realized what their system had learned. They ran the Interview — they looked at what the system was actually doing, not what they intended it to do.\n\nBut they discovered the problem too late. The bias was baked into 10 years of training data they couldn't undo.\n\nThe ICM lesson: Interview early. Discover problems when you can still change course. The Amazon team interviewed late — after the system was running. By then, reversing course was harder than scrapping the whole project.\n\nEvery governance framework in this course has one root purpose: make sure someone runs the Interview before the system goes live."
    },
    {
      type: "terms",
      terms: [
        { term: "Machine Learning", definition: "A type of AI that learns patterns from historical data rather than being explicitly programmed with rules. The patterns it learns reflect the data it was trained on." },
        { term: "Training Data", definition: "The historical information an AI system learns from. The quality and fairness of training data directly determines whether the AI's decisions will be fair." },
        { term: "Bias (in AI)", definition: "When an AI system produces systematically unfair results for certain groups — not because it was programmed to discriminate, but because it learned to replicate historical patterns that were already unfair." },
        { term: "Algorithm", definition: "A set of rules or instructions a computer follows to make a decision. Can be simple (if X, do Y) or complex (trained AI weighing thousands of factors)." }
      ]
    },
    {
      type: "assignment",
      heading: "The Pattern Hunt",
      text: "Pick one AI-powered tool you use regularly — your phone's recommendations, an email filter, a navigation app.\n\nWrite down:\n1. What decisions does it make for you?\n2. What data did it probably learn from?\n3. Who would be well-represented in that historical data? Who might be underrepresented?\n4. Is there any way to tell when it's wrong?\n\nYou just performed your first bias audit."
    }
  ]
},

{
  id: 3,
  title: "The First Rule: Who's In Charge?",
  subtitle: "The single governance concept everything else builds on — and why most organizations don't have it",
  phase: 1,
  readTime: 45,
  listenTime: 30,
  teaser: "A building with fire exits but no fire marshal. An algorithm making healthcare decisions for millions — and nobody owned it. Same crime, different crime scenes.",
  content: [
    {
      type: "scene",
      heading: "The Building With No Fire Marshal",
      text: "Imagine a large office building. Beautiful offices. Multiple fire exits. Smoke detectors on every floor. Fire extinguishers in the hallways. An automatic sprinkler system.\n\nNow: who is the fire marshal?\n\nBuilding management says it's the facilities team. The facilities team says it's building management. Building management says it's HR. HR has never heard this was their responsibility.\n\nOne afternoon, a small fire starts in the server room. Everyone evacuates safely.\n\nThen they stand outside and realize: nobody called the fire department. Because nobody knew whose job that was.\n\nThe equipment was perfect. The ownership was missing.\n\nThat's most organizations' relationship with their AI."
    },
    {
      type: "case-intro",
      caseNumber: "CASE #2019-09",
      heading: "Nobody Owned the Algorithm",
      location: "United States, nationwide",
      text: "In 2019, researchers at UC Berkeley made a disturbing discovery.\n\nA commercial algorithm used by hospitals and insurance companies across the country — to determine which patients needed extra healthcare support — was systematically under-assigning care to Black patients.\n\nFor the same health status, the algorithm scored Black patients as needing less care than white patients. Researchers estimated it affected tens of millions of patients per year.\n\nThe company said the bias wasn't intentional. And they were right. The algorithm had used healthcare costs as a proxy for healthcare needs. Because of systemic inequality, Black patients historically had less access to care — meaning they spent less on healthcare even when they were equally sick. The algorithm learned that lower costs meant lower needs.\n\nIt faithfully replicated a historical injustice.\n\nBut here's what investigators found most alarming: when they asked who owned this algorithm — who monitored its fairness, who had authority to change it, who would be accountable if it caused harm — there was no clear answer.\n\nAn algorithm making healthcare decisions for tens of millions of people had no identified owner."
    },
    {
      type: "quote",
      text: "The study represents an important moment. It shows that health care algorithms can have significant racial bias — and companies may not know it.",
      attribution: "The New York Times, on the Obermeyer et al. study, published in Science, 2019"
    },
    {
      type: "finding",
      label: "THE PATTERN",
      text: "In almost every AI governance failure, there's a moment where investigators ask: who owned this system? And the answer is either nobody, or everyone pointing at someone else. The technology was sophisticated. The accountability was absent."
    },
    {
      type: "scene",
      heading: "The Wernfeldt Model",
      text: "A data governance consultant named John Wernfeldt has been making an important argument: governance isn't documentation. It isn't policy. It's clarity about who makes decisions.\n\nHe describes three layers every organization needs:\n\nLayer 1 — The Facts: Your data, your systems, the source of truth.\nLayer 2 — The Quality Controls: Making sure the facts are accurate and reliable.\nLayer 3 — Decision Authority: Who owns a metric? Who can change a definition? Who resolves conflicts?\n\nHis argument: if ownership is unclear at Layer 3, nothing above it scales. You can have the most sophisticated AI in the world. If nobody owns the algorithm's behavior — who trained it, who monitors it, who can shut it down — you don't have AI governance.\n\nYou have a building with no fire marshal."
    },
    {
      type: "scene",
      heading: "The Three Questions That Anchor Everything",
      text: "Every governance framework we'll study is answering three questions:\n\nWho decides? — Ownership. A specific person's name attached to this system's behavior.\n\nWho reviews? — Oversight. A process that catches problems before they become cases.\n\nWho's accountable when it goes wrong? — The person who can't say \"that was the algorithm's fault.\"\n\nThat's it. NIST frameworks, EU regulations, corporate policies — all of it is scaffolding around these three questions.\n\nIf you can answer all three for every AI system in your organization, you have governance.\n\nIf you can't — you have a building with no fire marshal."
    },
    {
      type: "icm",
      text: "ICM begins with the Interview. Before you automate anything, you sit down with the people who actually do the work and ask: how does this process actually work?\n\nTwo ICM interview questions for any AI system:\n\n\"If this system makes a wrong decision, what is the specific process to catch it and correct it?\"\n\n\"Who is the named person responsible for this system's behavior?\"\n\nIf nobody in the room can answer either question with a specific name and a specific process — you've found the crime scene before the crime happened.\n\nThis is what ICM gives you: the ability to identify governance gaps before they become the case studies we'll read in episodes four through thirty."
    },
    {
      type: "terms",
      terms: [
        { term: "Governance", definition: "The system that determines who has decision-making authority, who provides oversight, and who is accountable for outcomes. Not a document — a living structure of responsibility." },
        { term: "Data Governance", definition: "Who owns data, who can change definitions, who resolves conflicts about what data means. The foundation that AI governance builds on." },
        { term: "Decision Authority", definition: "The explicit assignment of who has the final say on a given decision — including decisions made by automated systems. The most frequently missing element in AI governance." },
        { term: "ICM (Interview, Codify, Map)", definition: "A methodology for understanding how a process actually works before automating it. Interview the humans doing the work. Codify the rules. Map the workflow. The standard: 60% deterministic code, 30% rules, 10% human judgment." }
      ]
    },
    {
      type: "assignment",
      heading: "The Ownership Audit",
      text: "Identify one automated system in your organization — an expense approval workflow, a scheduling system, anything that makes decisions without asking a person every time.\n\nAsk yourself:\n1. Who owns it? A specific person's name, not a team.\n2. What happens when it makes a mistake? A specific process, not \"IT handles it.\"\n3. When was it last reviewed for fairness or accuracy?\n\nIf you can't answer all three — that's not a technology problem. That's a governance problem.\n\nYou now know what one looks like."
    }
  ]
},

// ─── PHASE II: THE CASE FILES (stubs — content loads after research) ───────

{ id: 4,  title: "The Resume Killer",              subtitle: "How Amazon built — and buried — an AI that taught itself to discriminate", phase: 2, readTime: 50, listenTime: 35, teaser: "They gave an algorithm ten years of hiring data and asked it to find the best candidates. It did exactly what they asked. That was the problem.", content: [], stub: true },
{ id: 5,  title: "Guilty Until the Algorithm Says Otherwise", subtitle: "COMPAS, recidivism scoring, and the black box that jailed the innocent", phase: 2, readTime: 50, listenTime: 35, teaser: "A black-box algorithm was deciding who went to prison and for how long. Nobody — not the judges, not the defendants, not their lawyers — could see inside it.", content: [], stub: true },
{ id: 6,  title: "The Invisible Redline",           subtitle: "How Facebook's ad targeting recreated illegal housing discrimination", phase: 2, readTime: 50, listenTime: 35, teaser: "Fair Housing Act violations. Sixty years after the Civil Rights Act. Automated, invisible, at scale.", content: [], stub: true },
{ id: 7,  title: "The Face You Can't Appeal",       subtitle: "Facial recognition, wrongful arrests, and the humans behind the black box", phase: 2, readTime: 50, listenTime: 35, teaser: "Robert Williams was arrested in his driveway in front of his daughters. The facial recognition system that identified him was wrong. There was no process to challenge it.", content: [], stub: true },
{ id: 8,  title: "The Deactivation",               subtitle: "How gig economy platforms terminate workers without human review", phase: 2, readTime: 45, listenTime: 30, teaser: "Uber, Lyft, and Amazon Flex: hundreds of thousands of workers deactivated by algorithms. No hearing. No appeal. No human decision.", content: [], stub: true },
{ id: 9,  title: "The Healthcare Ranker",           subtitle: "The algorithm that decided Black patients needed less care — a deep investigation", phase: 2, readTime: 50, listenTime: 35, teaser: "We introduced this case in Day 3. Today we go deeper: how was it discovered, who was held accountable, and what actually changed?", content: [], stub: true },
{ id: 10, title: "The Firing Line",                subtitle: "When performance management becomes automated termination", phase: 2, readTime: 45, listenTime: 30, teaser: "Amazon, IBM, and others: AI systems recommending who to fire. No appeals process. No human review. No warning.", content: [], stub: true },

// ─── PHASE III: THE LAW ARRIVES (stubs) ────────────────────────────────────

{ id: 11, title: "The Law Wakes Up",               subtitle: "New York City passes the world's first law governing AI in hiring — here's what it says", phase: 3, readTime: 45, listenTime: 30, teaser: "Local Law 144. The first law anywhere specifically requiring employers to audit their AI hiring tools. Passed 2021. Enforced 2023. Here's the story of how it happened.", content: [], stub: true },
{ id: 12, title: "The European Indictment",        subtitle: "The EU AI Act: the most comprehensive AI law ever passed, explained for non-lawyers", phase: 3, readTime: 50, listenTime: 35, teaser: "500 million people. A four-tier risk system. Fines up to 7% of global revenue. The EU redrew the rules. Here's what it means for HR.", content: [], stub: true },
{ id: 13, title: "The American Framework",         subtitle: "NIST's AI Risk Management Framework — the US government's blueprint for responsible AI", phase: 3, readTime: 45, listenTime: 30, teaser: "No fines. No enforcement. And yet the NIST AI RMF has become the standard that matters most in American boardrooms. Why?", content: [], stub: true },
{ id: 14, title: "The Corporate Pledge",           subtitle: "What Microsoft, Google, and IBM actually committed to — and how to hold them to it", phase: 3, readTime: 45, listenTime: 30, teaser: "Every major tech company now has an 'AI ethics' page. Most are vague. Some are specific. This episode teaches you how to tell the difference.", content: [], stub: true },
{ id: 15, title: "The State Investigators",        subtitle: "Illinois, Colorado, and the state laws filling gaps the federal government left open", phase: 3, readTime: 40, listenTime: 25, teaser: "With no federal AI law, states are moving fast. If you work in HR, these laws may already apply to you.", content: [], stub: true },
{ id: 16, title: "The Enforcement Playbook",       subtitle: "EEOC guidance, civil rights law, and how existing rules already apply to AI", phase: 3, readTime: 45, listenTime: 30, teaser: "You don't need a new law to hold an employer accountable for AI discrimination. Title VII, the ADA, and the ADEA already apply. Here's how.", content: [], stub: true },

// ─── PHASE IV: HR'S CRIME SCENE (stubs) ────────────────────────────────────

{ id: 17, title: "The HR Fingerprint",             subtitle: "Every place AI touches the employee lifecycle — a complete map", phase: 4, readTime: 40, listenTime: 25, teaser: "From the first keyword search to the exit interview, AI is making recommendations at every stage. Today we build the map.", content: [], stub: true },
{ id: 18, title: "The Invisible Interviewer",      subtitle: "HireVue, video interview AI, and the algorithm that read your face", phase: 4, readTime: 50, listenTime: 35, teaser: "One company's AI analyzed 25,000 facial data points per interview. Another used voice analysis. Neither could explain exactly what they were looking for.", content: [], stub: true },
{ id: 19, title: "The Performance Paradox",        subtitle: "When AI rates your work — and nobody's sure what it's measuring", phase: 4, readTime: 45, listenTime: 30, teaser: "Stack ranking. Forced distribution. Predictive performance scores. What do these systems actually measure, and who's checking?", content: [], stub: true },
{ id: 20, title: "The Pay Gap Machine",            subtitle: "How algorithmic compensation decisions can amplify pay inequity at scale", phase: 4, readTime: 45, listenTime: 30, teaser: "Market data feeds. Automated salary banding. When the pay system runs on historical data, historical inequity gets automated.", content: [], stub: true },
{ id: 21, title: "The Always-On Workplace",        subtitle: "Employee monitoring, surveillance, and the line between oversight and control", phase: 4, readTime: 50, listenTime: 35, teaser: "During COVID, employee monitoring software sales increased 300%. What's being measured, what it's used for, and what rights employees have.", content: [], stub: true },
{ id: 22, title: "The Prediction Machine",         subtitle: "Workforce planning, flight risk scoring, and predictive people analytics", phase: 4, readTime: 45, listenTime: 30, teaser: "Software that predicts who's about to quit, who's burned out, who's a top performer. Predicted by what, for what purpose, and who gets told?", content: [], stub: true },
{ id: 23, title: "The Legal Crossroads",           subtitle: "Title VII, the ADA, NLRA — how civil rights law intersects with AI employment decisions", phase: 4, readTime: 50, listenTime: 35, teaser: "The Workday lawsuit. The EEOC settlements. The legal theories that hold employers responsible for their algorithms — even when the vendor wrote them.", content: [], stub: true },

// ─── PHASE V: BUILDING THE TASK FORCE (stubs) ──────────────────────────────

{ id: 24, title: "The Inventory",                  subtitle: "How to identify, catalog, and risk-tier every AI system in your organization", phase: 5, readTime: 40, listenTime: 25, teaser: "Most organizations don't know how many AI systems they have. This episode walks you through finding them all and sorting them by risk.", content: [], stub: true },
{ id: 25, title: "The Vendor Problem",             subtitle: "When your AI was built by someone else — procurement governance and vendor assessment", phase: 5, readTime: 45, listenTime: 30, teaser: "Most HR AI is bought, not built. The Workday lawsuit established something important: buying the tool doesn't transfer the liability.", content: [], stub: true },
{ id: 26, title: "The Audit",                      subtitle: "Bias auditing, algorithmic auditing, and what an independent review actually looks like", phase: 5, readTime: 45, listenTime: 30, teaser: "NYC Local Law 144 requires annual bias audits for AI hiring tools. What does an audit actually involve? What does passing look like?", content: [], stub: true },
{ id: 27, title: "The Task Force",                 subtitle: "Building an AI governance committee — roles, accountabilities, and operating rhythm", phase: 5, readTime: 40, listenTime: 25, teaser: "You've learned the cases. You know the laws. Now: who sits in the room that makes decisions about AI, and what are their jobs?", content: [], stub: true },
{ id: 28, title: "The Score Card",                 subtitle: "Metrics, KPIs, and how you know your governance program is actually working", phase: 5, readTime: 40, listenTime: 25, teaser: "You can't manage what you don't measure. The metrics that separate real governance programs from compliance theater.", content: [], stub: true },

// ─── PHASE VI: THE CAPSTONE ─────────────────────────────────────────────────

{ id: 29, title: "The Capstone: The Scenario",     subtitle: "A fictional company. Eight AI systems. Two pending lawsuits. A board asking questions.", phase: 6, readTime: 60, listenTime: 45, teaser: "Day 29 gives you the scenario. Day 30 is your verdict. Everything you've learned over 30 days leads here.", content: [], stub: true },
{ id: 30, title: "The Capstone: Your Verdict",     subtitle: "Design your HR AI governance framework — and present what you'd do first", phase: 6, readTime: 60, listenTime: 45, teaser: "You've spent 30 days learning the cases, the law, the frameworks. Today, you're the investigator who closes the file.", content: [], stub: true }

];
