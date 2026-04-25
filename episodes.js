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

// ─── PHASE II: THE CASE FILES ───────────────────────────────────────────────

{
  id: 4,
  title: "The Resume Killer",
  subtitle: "How Amazon built — and buried — an AI that taught itself to discriminate",
  phase: 2,
  readTime: 50,
  listenTime: 35,
  teaser: "They gave an algorithm ten years of hiring data and asked it to find the best candidates. It did exactly what they asked. That was the problem.",
  content: [
    {
      type: "scene",
      heading: "Previously, on AI Crime Files",
      text: "In Day 2, we used Amazon's resume screening AI as a quick example of how machine learning works — and how it fails.\n\nToday we go back to the scene of the crime. Slower. With everything.\n\nBecause this case isn't just about bias in a hiring algorithm. It's about what happens when a powerful company builds a consequential system, watches it fail, tries to fix it, can't, and then quietly buries it — hoping nobody notices.\n\nSomebody noticed."
    },
    {
      type: "case-intro",
      caseNumber: "CASE #2018-10",
      heading: "The Edinburgh Project",
      location: "Edinburgh, Scotland & Seattle, Washington",
      text: "In 2014, Amazon's machine learning team — based not in Seattle but in Edinburgh, Scotland — was handed an ambitious assignment.\n\nAmazon received roughly 100 applications for every open role. Recruiters couldn't read them all. The Edinburgh team was asked to build something that could: an AI that would review resumes, learn what made a successful Amazon employee, and sort candidates automatically.\n\nThe system would be trained on ten years of resume data — specifically, the resumes of people Amazon had actually hired. It would identify patterns. Then it would apply those patterns to new applicants.\n\nBy 2015, the system was running. Recruiters fed it resumes. It spat out scores.\n\nBy 2016, something was wrong."
    },
    {
      type: "scene",
      heading: "What the Mirror Showed",
      text: "Researchers on the team began reviewing the system's recommendations. They noticed the algorithm was penalizing resumes that included the word \"women's\" — as in \"captain of the women's chess team\" or \"women's engineering society president.\"\n\nThey dug deeper. The system had also downgraded graduates of two all-women's colleges.\n\nIt hadn't been programmed to do any of this. It had learned to.\n\nHere's why: the training data — ten years of Amazon hiring decisions — was built in an era when the tech industry was overwhelmingly male. The algorithm had learned that male candidates got hired. So it learned to prefer male-coded resumes. It was doing exactly what it was designed to do: predict who Amazon would hire. The problem was that \"who Amazon would hire\" was itself a biased target.\n\nThe algorithm wasn't the source of the bias. It was a mirror. And the reflection was ugly."
    },
    {
      type: "quote",
      text: "Amazon's computer models were trained to vet applicants by observing patterns in resumes submitted to the company over a 10-year period. Most came from men, a reflection of male dominance across the tech industry.",
      attribution: "Jeffrey Dastin, Reuters, October 2018"
    },
    {
      type: "scene",
      heading: "The Failed Fix",
      text: "The team wasn't oblivious. When they found the bias, they tried to fix it.\n\nThey edited the model to make it gender-neutral — removing features that explicitly referenced gender. The bias persisted. The algorithm had learned subtler proxies: certain verbs, certain activities, certain school affiliations that correlated with gender without stating it.\n\nThey tried again. And again.\n\nBy 2017, Amazon's executives had concluded the problem couldn't be solved cleanly. The system was quietly disbanded. Recruiters were told it should not be used as the sole decision-making tool — which meant, functionally, it wasn't used at all.\n\nIn October 2018, Reuters broke the story. Amazon confirmed the system existed and had been shut down.\n\nThe system had operated for approximately three years."
    },
    {
      type: "finding",
      label: "THE FINDING",
      text: "Amazon built a system to replicate its own hiring decisions, discovered its own hiring decisions were biased, tried to remove the bias from the system rather than from the decisions, and failed. The system ran for three years before being shut down. No public accounting of how many candidates it affected was ever released."
    },
    {
      type: "scene",
      heading: "The Questions That Were Never Asked",
      text: "After the Reuters story broke, executives and HR professionals around the world asked the obvious question: how did this get deployed without anyone checking for bias?\n\nThe answer is quieter than it sounds. The team did check. They found the problem. They tried to fix it.\n\nThe question that was never asked — before building the system — was this: \"What if the historical data we're training on is itself biased? And if we can't remove that bias, do we stop?\"\n\nNobody had defined in advance what would constitute a failure condition. Nobody had assigned ownership of the answer to that question. Nobody had built an off-ramp.\n\nSo when the bias was found, the only options were: keep trying to fix it, or quietly shut it down. There was no process for accountability. No mechanism to notify candidates who might have been affected. No external audit. No public disclosure until a journalist found it four years later."
    },
    {
      type: "icm",
      text: "Before Amazon built that system, an ICM interview would have started with a foundational question:\n\n\"What are we assuming about the quality of our historical hiring data?\"\n\nA follow-up: \"If this system produces discriminatory recommendations, what is our process to detect it, stop it, and be accountable for it?\"\n\nIf those questions had been asked — and answered with specifics, not assumptions — Amazon would have either built the system differently or decided not to build it at all.\n\nThe 60/30/10 rule applies here too: 60% of the hiring process can be deterministic (did they meet the qualifications?). 30% can be rules-based (do they pass the structured screen?). The remaining 10% — the human judgment about potential and fit — cannot be learned from historical data that encoded historical bias. That 10% is where the algorithm tried to go, and where it caused the harm."
    },
    {
      type: "terms",
      terms: [
        { term: "Proxy Discrimination", definition: "When an AI system discriminates based on a characteristic that's correlated with a protected class, even without directly using that characteristic. Amazon's algorithm penalized 'women's organizations' — a proxy for gender." },
        { term: "Training Data Bias", definition: "Systematic unfairness baked into an AI's historical training data. If the data reflects past discriminatory decisions, the AI learns to replicate those decisions." },
        { term: "Disparate Impact", definition: "When a seemingly neutral policy or tool produces significantly different outcomes across protected groups — even without discriminatory intent. A legal standard under Title VII." }
      ]
    },
    {
      type: "assignment",
      heading: "The Data Audit",
      text: "Think about one hiring or promotion decision your organization has made using historical data — even something as simple as \"people who succeed in this role usually have X background.\"\n\nAsk yourself:\n1. Where did that belief come from? Whose decisions generated that history?\n2. Were the people making those past decisions representative? Were the candidates?\n3. If you built an AI on that history, what biases would it learn?\n\nYou just identified the most important question to ask before buying any AI hiring tool."
    }
  ]
},

{
  id: 5,
  title: "Guilty Until the Algorithm Says Otherwise",
  subtitle: "COMPAS, recidivism scoring, and the black box that determined prison sentences",
  phase: 2,
  readTime: 50,
  listenTime: 35,
  teaser: "A black-box algorithm was deciding who went to prison and for how long. Nobody — not the judges, not the defendants, not their lawyers — could see inside it.",
  content: [
    {
      type: "scene",
      heading: "Two People, Two Scores, One Algorithm",
      text: "Broward County, Florida. 2013.\n\nBrisha Borden was 18 years old. She and a friend had attempted to ride away on an unlocked bicycle and a child's scooter. They were caught, arrested, and charged with petty theft.\n\nTwo blocks away, Vernon Prater had a more serious record — he had been convicted of armed robbery and sentenced to five years in prison years earlier. He'd been caught shoplifting $86.35 worth of tools from Home Depot.\n\nBoth were processed through the Broward County courts. Both were evaluated by a risk assessment algorithm called COMPAS.\n\nCOMPAS assigned Brisha Borden — the teenager with the bicycle — a high risk score. Future criminal. Likely to reoffend.\n\nCOMPAS assigned Vernon Prater — the prior armed robber — a low risk score. Unlikely to reoffend.\n\nTwo years later, journalists would check what had actually happened. Borden had been charged with a minor infraction. Prater had been arrested for breaking into a warehouse and stealing thousands of dollars in goods.\n\nThe algorithm had gotten both of them exactly backwards."
    },
    {
      type: "case-intro",
      caseNumber: "CASE #2016-05",
      heading: "Machine Bias",
      location: "Broward County, Florida — and 34 other states",
      text: "In May 2016, ProPublica published an investigation that would become one of the most cited pieces of journalism in the history of AI accountability.\n\nReporters Julia Angwin, Jeff Larson, Surya Mattu, and Lauren Kirchner had done something that almost nobody had done before: they obtained the COMPAS risk scores for more than 7,000 people arrested in Broward County, Florida, and compared them to what actually happened to those people over the following two years.\n\nWhat they found stopped the country.\n\nBlack defendants were nearly twice as likely as white defendants to be falsely flagged as future criminals — labeled high-risk but then not rearrested.\n\nWhite defendants were more likely to be mistakenly flagged as lower risk and then go on to commit additional crimes.\n\nCOMPAS — short for Correctional Offender Management Profiling for Alternative Sanctions — had been used in 34 states to inform bail, sentencing, and parole decisions. Millions of people had passed through it. Judges had relied on its scores."
    },
    {
      type: "quote",
      text: "We're not able to tell defendants what's in the algorithm. We don't have access to the algorithm. The company considers that proprietary.",
      attribution: "Broward County judge, during a COMPAS-related court proceeding"
    },
    {
      type: "scene",
      heading: "The 137 Questions",
      text: "COMPAS asked defendants 137 questions. Race was not one of them.\n\nInstead, it asked about things like: Where did you grow up? What's your family's criminal history? How many times did you move as a child? Do you have friends who have been in trouble with the law? How often do you get angry?\n\nThese questions are called \"criminogenic factors\" — risk indicators that researchers have associated with reoffending.\n\nThe problem is that many of these factors are deeply correlated with race in the United States. Zip codes, family incarceration history, educational disruption — these aren't race-neutral variables. They encode the effects of decades of systemic inequality.\n\nCOMPAS didn't ask about race. It didn't need to. The proxies were already there.\n\nThe company behind COMPAS — Northpointe, later renamed Equivant — disputed the ProPublica findings. They argued that the algorithm had equal predictive accuracy across racial groups. Technically, they were right.\n\nBut ProPublica's point wasn't about accuracy. It was about error type. COMPAS made different kinds of errors for Black defendants than for white defendants. For Black defendants, it disproportionately predicted crime that didn't happen. For white defendants, it disproportionately missed crime that did.\n\nSame accuracy rate. Systematically different consequences."
    },
    {
      type: "finding",
      label: "THE FINDING",
      text: "COMPAS scored Black defendants as high-risk at nearly twice the false-positive rate of white defendants. It scored white defendants as low-risk at nearly twice the false-positive rate of Black defendants. The algorithm was, in effect, assigning risk based on race — without ever asking the question."
    },
    {
      type: "scene",
      heading: "The Black Box Problem",
      text: "Here is the part of this story that matters most for AI governance.\n\nJudges using COMPAS scores in sentencing hearings did not know how the score was calculated. Defense attorneys could not challenge the methodology. Defendants could not see the questions that generated their score, nor could they explain why an answer might be misleading in their specific case.\n\nNorthpointe considered the algorithm proprietary. It was a trade secret. The justice system — with the power to take away human freedom — was making decisions based on a formula nobody was allowed to examine.\n\nIn 2017, a Wisconsin case called Loomis v. Wisconsin reached the state Supreme Court. Eric Loomis argued that using COMPAS in his sentencing violated his right to due process because he couldn't challenge a system he couldn't see.\n\nThe court ruled against him. The score wasn't the only factor in the decision, they said.\n\nBut the question Loomis raised never went away: in a system built on the right to confront evidence against you, how do you confront an algorithm?"
    },
    {
      type: "icm",
      text: "COMPAS was never subjected to an ICM review before its deployment in courtrooms. If it had been, two interview questions would have changed everything:\n\n\"When a judge uses this score, can they explain to the defendant how it was calculated and why?\"\n\n\"Who is responsible for auditing whether this system produces different outcomes across racial groups — and what happens if it does?\"\n\nNeither question had an answer. Nobody owned the algorithm's fairness. Nobody had mapped a process for defendants to challenge it. Nobody had defined what \"unacceptable disparity\" would look like.\n\nThis is what happens when you skip the Codify step. The rules for how the system should be governed never got written down. So when the harm was discovered — and it was discovered, loudly, in a Pulitzer-nominated investigation — there was no process to fix it. Only the choice to keep using it or stop."
    },
    {
      type: "terms",
      terms: [
        { term: "Recidivism", definition: "The tendency of a convicted person to reoffend. Risk assessment tools like COMPAS try to predict this — with documented racial disparities." },
        { term: "Algorithmic Accountability", definition: "The principle that organizations deploying AI systems must be able to explain, justify, and take responsibility for the outcomes those systems produce." },
        { term: "False Positive / False Negative", definition: "A false positive means predicting something that doesn't happen (flagging someone as high-risk who isn't). A false negative means missing something that does (flagging someone as low-risk who reoffends). COMPAS had racially unequal error rates across both types." },
        { term: "Proprietary Algorithm", definition: "An AI system whose methodology is protected as a trade secret, preventing external scrutiny. COMPAS's proprietary nature made it impossible for defendants to challenge their scores." }
      ]
    },
    {
      type: "assignment",
      heading: "The Transparency Test",
      text: "Think about one automated decision that affects people at your organization — a hiring screen, a performance rating, a compensation band assignment.\n\nAsk:\n1. If an employee asked \"how was this decision made about me?\" — could you give them a real answer?\n2. If they disagreed with the outcome, is there a process to challenge it?\n3. If neither answer is yes — what right do they have to appeal a machine's judgment?\n\nYou just ran the transparency test. Most organizations fail it."
    }
  ]
},

{
  id: 6,
  title: "The Invisible Redline",
  subtitle: "How Facebook's ad targeting recreated illegal housing discrimination — automatically",
  phase: 2,
  readTime: 50,
  listenTime: 35,
  teaser: "Fair Housing Act violations. Sixty years after the Civil Rights Act. Automated, invisible, at scale.",
  content: [
    {
      type: "scene",
      heading: "A Brief History of the Red Pen",
      text: "In the 1930s, the federal Home Owners' Loan Corporation created maps of American cities. Neighborhoods were color-coded by risk. Green meant safe for investment. Red meant too risky.\n\nThe red neighborhoods were almost always Black neighborhoods.\n\nBanks used these maps to deny mortgages. Insurance companies used them to deny coverage. Entire communities were cut off from the wealth-building engine of homeownership. The practice became known as redlining.\n\nThe Fair Housing Act of 1968 made it illegal. It was one of the landmark achievements of the Civil Rights Movement.\n\nFifty years later, Facebook rebuilt it. Automatically. Without anyone drawing a single red line."
    },
    {
      type: "case-intro",
      caseNumber: "CASE #2022-06",
      heading: "The Lookalike Audience",
      location: "Menlo Park, California — and everywhere",
      text: "Facebook's advertising platform was built on a powerful concept: precision targeting. You could tell Facebook exactly who you wanted to reach — by age, by interest, by location, by behavior. And if you didn't know exactly who you wanted, Facebook would help. Upload a list of your best customers, and Facebook would find \"lookalike audiences\" — people who resembled them in ways Facebook's algorithm had identified.\n\nFor most advertisers, this was just good marketing.\n\nFor housing advertisers, it was a civil rights violation.\n\nIn 2016, ProPublica reporter Julia Angwin demonstrated that Facebook allowed housing advertisers to exclude users by \"Ethnic Affinity\" — a category Facebook had created based on the content users engaged with. An advertiser could reach \"people interested in housing\" and then exclude people with an affinity for African American, Hispanic, or Asian American culture.\n\nFacebook initially defended the feature. Then, under pressure, said they would fix it. Then, two years later, the US Department of Housing and Urban Development filed a formal complaint: Facebook was still enabling housing discrimination."
    },
    {
      type: "quote",
      text: "This is twenty-first century redlining. Facebook is using 21st-century technology to engage in the same type of discriminatory practices that have been illegal for decades.",
      attribution: "Anna Maria Farías, Assistant Secretary for Fair Housing and Equal Opportunity, HUD, 2019"
    },
    {
      type: "scene",
      heading: "How the Algorithm Did It Without Trying",
      text: "Here is what makes this case different from a human drawing a red line on a map: Facebook's algorithm wasn't targeting by race. It was targeting by interest, behavior, and similarity.\n\nBut interest, behavior, and similarity are proxies for race in a country where culture and race are deeply intertwined.\n\nWhen a housing advertiser used Facebook's \"lookalike audience\" tool — just targeting people who looked like their current customers — and their current customers were predominantly white, the algorithm found more white prospects. Not because it was told to. Because that's what \"people like your customers\" meant.\n\nThe ACLU ran tests. They created housing ads targeting users within commuting distance of Detroit. They specifically excluded users interested in \"African American culture,\" \"Hispanic culture,\" and similar categories. Facebook approved the ads in minutes.\n\nThe ads never needed to say \"no minorities.\" The algorithm handled it automatically.\n\nIn March 2022, Facebook (by then Meta) reached a landmark settlement with the Department of Justice, HUD, and civil rights organizations. They agreed to overhaul their entire ad targeting system for housing, employment, and credit — dismantling the tools that had enabled discrimination and building new systems with civil rights protections built in.\n\nThe fine: $115,054. For a company worth hundreds of billions of dollars."
    },
    {
      type: "finding",
      label: "THE FINDING",
      text: "Facebook's ad platform did not set out to discriminate. It set out to optimize. Optimization for 'similar users' in a segregated society produces segregated results. The tool did exactly what it was designed to do. That was the problem."
    },
    {
      type: "scene",
      heading: "Why This Is an HR Story",
      text: "You might be wondering: why is a housing ad case in an HR governance curriculum?\n\nBecause Facebook's employment advertising worked the same way.\n\nThe same tools that allowed housing advertisers to exclude by ethnicity also allowed job advertisers to target by age, gender, and zip code. An employer could post a job ad and use Facebook's targeting to show it only to men, only to people under 40, only to people in predominantly white zip codes.\n\nIn 2019, the EEOC, ACLU, and other organizations reached settlements with Facebook that specifically addressed employment ad discrimination. Companies including Amazon, T-Mobile, and Goldman Sachs were individually named in complaints for using Facebook's tools to run age- or gender-targeted job ads.\n\nThe platform that connects employers to candidates was silently filtering who got to see the opportunity."
    },
    {
      type: "icm",
      text: "Facebook's advertising team was interviewed — extensively — about revenue optimization, user growth, and advertiser satisfaction.\n\nThey were not interviewed about civil rights.\n\nAn ICM review of the ad targeting system would have asked: \"Who uses this tool, and for what decisions? Are any of those decisions legally protected from discrimination?\" Housing. Employment. Credit. All three are explicitly covered by federal anti-discrimination law.\n\nIf that question had been asked in the product design phase — and codified as a constraint, not an afterthought — the \"Ethnic Affinity\" exclusion feature never gets built.\n\nThis is the Codify failure. The rule \"you cannot enable housing or employment advertisers to exclude by protected class\" existed in federal law. It just never made it into the product requirements document."
    },
    {
      type: "terms",
      terms: [
        { term: "Redlining", definition: "The historical practice of denying financial services to residents of certain areas based on race. Outlawed in 1968. Facebook's algorithmic targeting was found to replicate its effects." },
        { term: "Lookalike Audience", definition: "An advertising feature that finds new users who resemble an existing customer list. When used without civil rights constraints, it can replicate the demographics of existing customers — including their racial composition." },
        { term: "Disparate Impact (advertising)", definition: "When an ad targeting system produces racially disparate reach — even without explicitly targeting by race — it may violate the Fair Housing Act and Title VII regardless of intent." },
        { term: "Disparate Treatment", definition: "Intentional discrimination against a protected class. Different from disparate impact, which can occur without intent. Both are illegal." }
      ]
    },
    {
      type: "assignment",
      heading: "The Platform Audit",
      text: "Your organization uses job advertising platforms — LinkedIn, Indeed, Google, Facebook, or others.\n\nAsk:\n1. What targeting options does each platform offer for job ads?\n2. Do any of those options allow filtering by age, gender, or geography in ways that could produce disparate impact?\n3. Who in your organization reviews job ad targeting before campaigns go live?\n\nIf nobody reviews it — your organization may be running discriminatory ads right now without knowing it."
    }
  ]
},

{
  id: 7,
  title: "The Face You Can't Appeal",
  subtitle: "Facial recognition, wrongful arrests, and the three men Detroit's algorithm got wrong",
  phase: 2,
  readTime: 50,
  listenTime: 35,
  teaser: "Robert Williams was arrested in his driveway in front of his daughters. The facial recognition system that identified him was wrong. There was no process to challenge it.",
  content: [
    {
      type: "scene",
      heading: "January 9, 2020",
      text: "Robert Williams was a 42-year-old software developer. He lived in a suburb of Detroit with his wife and two young daughters.\n\nOn the afternoon of January 9, 2020, he was in his driveway when Detroit police pulled up. They arrested him in front of his family, handcuffed him, and put him in a squad car.\n\nHis daughters watched from the porch.\n\nHe had been identified as a shoplifting suspect by a facial recognition system. The system had compared a grainy surveillance video from a Shinola store to a database of driver's license photos and returned a match.\n\nThe match was Robert Williams.\n\nThe match was wrong."
    },
    {
      type: "case-intro",
      caseNumber: "CASE #2020-01",
      heading: "The Computer Said It Was You",
      location: "Detroit, Michigan",
      text: "Williams was brought to a Detroit police station and held overnight. The next day, a detective showed him two photographs side by side: the blurry surveillance image and his driver's license photo.\n\nWilliams picked up both photos, held them next to his face, and said: \"I hope you don't think all Black men look alike.\"\n\nThe detective's response, according to Williams: \"The computer says it's you.\"\n\nWilliams spent 30 hours in jail. He was released after his wife paid $1,000 bail. It took months for the charges to be fully dropped.\n\nThe ACLU took his case. Investigators found that the facial recognition system used by Detroit police had identified Williams based on a low-quality video image — a match that no trained human examiner would have made.\n\nMore troubling: the detective knew the match had come from facial recognition, which Detroit police policy described as a \"lead\" requiring additional verification — not as standalone evidence. But no additional verification had been done before the arrest."
    },
    {
      type: "quote",
      text: "I'm not sure if my daughters will ever forget seeing their father arrested. That's something I have to live with. And I'm one of the lucky ones — the charges were dropped.",
      attribution: "Robert Williams, speaking to The New York Times, 2020"
    },
    {
      type: "scene",
      heading: "The Science Behind the Problem",
      text: "Robert Williams wasn't a fluke.\n\nIn 2018, MIT researcher Joy Buolamwini published a landmark study with co-author Timnit Gebru. They tested three major commercial facial recognition systems from IBM, Microsoft, and Face++.\n\nThe results were damning.\n\nOn lighter-skinned male faces, the systems had error rates below 1%. On darker-skinned female faces, error rates reached as high as 34.7%. The systems were 34 times more likely to misidentify a dark-skinned woman than a light-skinned man.\n\nWhy? Training data. The systems had been trained predominantly on images of lighter-skinned faces. They had learned to recognize what they had seen most. People with darker skin — and especially darker-skinned women — had been underrepresented in the data.\n\nThe research had been published. The error rates were known. Law enforcement agencies deploying facial recognition had access to this information.\n\nDetroit deployed the system anyway."
    },
    {
      type: "finding",
      label: "THE FINDING",
      text: "Within 18 months of Robert Williams's arrest, two other Black men in the Detroit area were wrongfully arrested by facial recognition: Michael Oliver and Nijeer Parks. All three cases involved the same pattern: a low-quality image, a facial recognition match, and an arrest made without adequate human verification. All three were Black."
    },
    {
      type: "scene",
      heading: "The Policy That Wasn't Followed",
      text: "Here's a detail that makes this case particularly striking from a governance perspective.\n\nDetroit Police Department had a policy about facial recognition. The policy stated explicitly that a facial recognition result was a lead — not evidence — and that officers should not make arrests based solely on a facial recognition match.\n\nThe policy existed. It was on paper. It was, in any reasonable definition, a governance document.\n\nBut the policy didn't work. Robert Williams was still arrested.\n\nThis is the difference between having a governance policy and having a governance system. A policy sitting in a manual doesn't stop a detective from trusting \"the computer says it's you.\" A governance system would have built the verification step into the workflow — so that making an arrest without it was structurally impossible, not just technically prohibited.\n\nWriting the rule is the Codify step. Making it impossible to skip is the Map step. Detroit did one and skipped the other."
    },
    {
      type: "icm",
      text: "Before Detroit deployed facial recognition, an ICM interview of the arrest workflow would have asked:\n\n\"Walk me through what happens when the system returns a match. Who sees it? What do they do next? What's required before an arrest is made?\"\n\nIf the answer was \"the detective uses their judgment\" — that's not a governance step. That's a hope.\n\nThe Codify step would have written: facial recognition match → mandatory secondary human review by trained examiner → verification of at least one additional evidence source → arrest authorization. Not optional. Required.\n\nThe Map step would have made that sequence visible and auditable — so that every arrest tied to facial recognition could be reviewed to confirm the protocol was followed.\n\nNone of that was built. The policy existed. The system didn't."
    },
    {
      type: "terms",
      terms: [
        { term: "Facial Recognition", definition: "An AI system that identifies a person by comparing their face to a database of known images. Current systems have significantly higher error rates on darker-skinned and female faces." },
        { term: "Algorithmic Lead vs. Evidence", definition: "The important legal and procedural distinction between a facial recognition match (which should be a starting point for investigation) and actual evidence (which justifies an arrest). Detroit's policy made this distinction; the practice ignored it." },
        { term: "Disparate Error Rate", definition: "When an AI system is significantly less accurate for certain demographic groups. Facial recognition systems have documented disparate error rates by race and gender — a governance risk that must be assessed before deployment." }
      ]
    },
    {
      type: "assignment",
      heading: "The Policy vs. System Test",
      text: "Think about a governance policy in your organization — a rule that exists on paper about how something should be handled.\n\nAsk:\n1. Is following this policy required by the workflow, or optional based on judgment?\n2. Is there any way to audit whether it was followed in a specific case?\n3. What happens to someone who skips it — is there a consequence?\n\nIf the answer to any of these is \"I'm not sure\" — you have a policy, not a governance system."
    }
  ]
},

{
  id: 8,
  title: "The Deactivation",
  subtitle: "How gig economy platforms terminate workers without human review",
  phase: 2,
  readTime: 45,
  listenTime: 30,
  teaser: "Uber, Lyft, and Amazon Flex: hundreds of thousands of workers deactivated by algorithms. No hearing. No appeal. No human decision.",
  content: [
    {
      type: "scene",
      heading: "The Email That Ends Your Job",
      text: "For millions of gig workers, the end of their working relationship with a platform arrives as an automated email.\n\nNo warning. No conversation. No manager. No hearing.\n\n\"Your account has been deactivated.\"\n\nThat's it. The algorithm made a decision. The algorithm sent the email. The algorithm — in many cases — is the only one who will talk to you about it.\n\nFor people who depend on these platforms for their income, that email is a firing. But the platforms don't call it that. They call it a \"deactivation.\" And deactivations, they argue, aren't firings — because the workers weren't employees.\n\nThe legal debate about that distinction has been playing out in courts around the world. But the human reality is the same regardless of the legal label: a machine decided you were done, and there was nothing you could do about it."
    },
    {
      type: "case-intro",
      caseNumber: "CASE #2021-08",
      heading: "The Amazon Flex Investigation",
      location: "Nationwide, United States",
      text: "In 2021, Bloomberg Businessweek published an investigation into Amazon Flex — the program that allows independent contractors to deliver Amazon packages using their own cars.\n\nReporters found that Amazon had built an AI system to manage its Flex drivers — monitoring their performance, flagging violations, and terminating their contracts. The system tracked metrics like whether packages were delivered on time, whether the driver's app showed them as \"online\" during their shift, and whether customers complained.\n\nWhen the system flagged a driver for enough violations, it generated an automated termination email. No human reviewed it. No manager approved it. The algorithm decided, and the email went out.\n\nDrivers who received these emails and tried to appeal found a maze: chatbots, form submissions, weeks of silence. Some reported never receiving a response at all.\n\nAmong the drivers Bloomberg spoke to: a woman who had been deactivated because her GPS had shown her as briefly offline — she had driven through a tunnel. A man who was flagged for \"quality\" violations he couldn't identify. Both had strong performance records. Both were gone."
    },
    {
      type: "quote",
      text: "Amazon essentially has drivers managed by an algorithm. The algorithm can fire you. The algorithm doesn't listen to appeals. The algorithm doesn't have a number you can call.",
      attribution: "Gig economy researcher, Bloomberg Businessweek investigation, 2021"
    },
    {
      type: "scene",
      heading: "Uber and the Star Rating System",
      text: "Uber's deactivation system works differently but produces similar results.\n\nDrivers must maintain an average rating above a threshold — typically 4.6 stars out of 5. Drop below it, and Uber will deactivate you.\n\nThe problem: passenger ratings are not objective. Research has documented that passengers rate drivers of color lower than white drivers for identical service. Drivers who work in lower-income areas, where passengers may be less likely to leave five-star ratings, face structural disadvantages.\n\nA driver who is rated 4.5 stars by passengers who are systematically biased against them — through no fault of the driver — can be terminated by an algorithm that treats those biased ratings as objective performance data.\n\nThe algorithm doesn't know about the bias. It just calculates the average.\n\nIn 2022, the UK Supreme Court ruled that Uber drivers were \"workers\" — not independent contractors — entitled to minimum wage and other protections. Similar rulings followed in other European countries. In 2024, the EU Platform Work Directive required platforms to provide human review for automated deactivation decisions.\n\nIn the United States, the legal battle continues."
    },
    {
      type: "finding",
      label: "THE FINDING",
      text: "Gig economy platforms have built the largest automated workforce management systems in human history — managing, monitoring, and terminating workers at a scale no human HR team could match. The efficiency gain is real. So is the risk: when the algorithm is wrong, the worker has no one to call."
    },
    {
      type: "scene",
      heading: "The Appeal That Goes Nowhere",
      text: "What happens when a gig worker believes their deactivation was wrong?\n\nIn most cases: very little.\n\nPlatforms have built appeals processes — but many of them are handled by AI too. You submit your appeal. It goes to a queue. An algorithm reviews it using the same data that triggered the original deactivation. The appeal is denied.\n\nDrivers who have persisted — filing complaints with labor boards, reaching out to journalists, organizing with worker advocacy groups — have sometimes won reinstatement. But the process requires knowledge, time, and resources that many workers don't have.\n\nThis is not accidental. Platforms have calculated that the cost of a robust, human-staffed appeals process would be higher than the cost of occasionally losing a good driver to an erroneous deactivation. The algorithm is cheaper than the appeals coordinator.\n\nThat calculation is, at its core, a governance decision. Someone decided that human review of deactivations wasn't worth the cost. That decision has consequences that fall entirely on the workers."
    },
    {
      type: "icm",
      text: "An ICM interview of the deactivation workflow would begin with the question that most platform companies have apparently never asked out loud:\n\n\"When the system decides to deactivate a worker, what is the human review step?\"\n\nIf the answer is \"there isn't one\" — that's a governance gap large enough to drive a delivery van through.\n\nThe 60/30/10 principle applies directly here. Detecting a potential violation? That's deterministic code — 60%. Deciding whether that violation warrants termination given context? That's rules — 30%. But the final decision to end someone's livelihood? That's judgment — the 10% that should never be handed entirely to an algorithm.\n\nThe EU Platform Work Directive essentially codified this principle into law: automated deactivation decisions must receive meaningful human review. It took a continental-scale regulation to establish what an ICM interview would have caught in week one."
    },
    {
      type: "terms",
      terms: [
        { term: "Algorithmic Management", definition: "The use of AI systems to monitor, evaluate, direct, and discipline workers in real time. Common in gig economy platforms and increasingly in traditional workplaces." },
        { term: "Deactivation", definition: "The platform economy's term for terminating a worker's access to the platform. Legally distinct from employment termination in the US, but functionally identical in impact." },
        { term: "Surrogate Discrimination", definition: "When an AI uses a metric that seems neutral (like star ratings) but systematically disadvantages workers from certain groups due to bias in how that metric is generated." }
      ]
    },
    {
      type: "assignment",
      heading: "The Human Review Audit",
      text: "Identify one automated system in your organization that makes decisions that significantly affect employees — performance ratings, schedule assignments, workload distribution, anything consequential.\n\nAsk:\n1. Can this system produce an outcome that negatively affects an employee without a human reviewing it first?\n2. If an employee believes the outcome is wrong, who do they talk to?\n3. Is that person empowered to override the system?\n\nIf the answer to question 1 is yes and the answer to question 3 is uncertain — you have an algorithmic management problem."
    }
  ]
},

{
  id: 9,
  title: "The Healthcare Ranker",
  subtitle: "How a widely-used algorithm systematically underestimated the health needs of Black patients — and nobody noticed for years",
  phase: 2,
  readTime: 50,
  listenTime: 35,
  teaser: "We introduced this case in Day 3. Today we go deeper: the full investigation, the statistics, and the governance failure that let it run for years.",
  content: [
    {
      type: "scene",
      heading: "The Case You've Already Heard",
      text: "In Day 3, we used this case to illustrate the governance concept of decision authority — what happens when nobody owns an algorithm.\n\nToday, we're going back to read the full file.\n\nBecause this case has something most AI governance cases don't: numbers. Specific, documented, peer-reviewed numbers that show exactly how large the harm was, exactly how the algorithm produced it, and exactly what a small design change would have done differently.\n\nThis is the case where the math tells the story."
    },
    {
      type: "case-intro",
      caseNumber: "CASE #2019-10",
      heading: "The Obermeyer Study",
      location: "Published in Science, October 25, 2019",
      text: "Ziad Obermeyer is a physician and researcher at the University of California Berkeley. In 2019, he and three colleagues — Brian Powers, Christine Vogeli, and Sendhil Mullainathan — published a study in Science, one of the most prestigious scientific journals in the world.\n\nThe paper's title was clinical: 'Dissecting racial bias in an algorithm used to manage the health of populations.'\n\nThe subject was a commercial algorithm widely used by hospitals and insurance companies across the United States to identify which patients needed enrollment in \"care management programs\" — intensive support for patients with complex chronic conditions. These programs meant more check-in calls, more specialist referrals, more preventive interventions.\n\nThe algorithm scored millions of patients. The scores determined who got extra care.\n\nObermeyer's team had obtained data on the algorithm's predictions and compared them to patients' actual health status. What they found was that the algorithm was systematically wrong — and wrong in a specific direction."
    },
    {
      type: "quote",
      text: "At a given risk score, Black patients are considerably sicker than White patients. The magnitude of the bias is striking: at the algorithm's decision threshold for extra care, Black patients have significantly more chronic conditions than White patients.",
      attribution: "Obermeyer et al., Science, October 2019"
    },
    {
      type: "scene",
      heading: "The Flaw in the Formula",
      text: "The algorithm used healthcare costs as a proxy for healthcare needs. The logic seemed reasonable: sicker patients generally have higher medical costs, so cost is a good predictor of how much care someone needs.\n\nExcept it wasn't. Not equally. Not across race.\n\nBlack patients, on average, spent less on healthcare than white patients with the same level of illness. Not because they needed less care — because they had received less care. Decades of unequal access to healthcare, distrust of the medical system, economic barriers, and geographic gaps in healthcare availability had produced lower historical costs for Black patients — even when their underlying health was equally or more compromised.\n\nThe algorithm learned from cost data. Cost data reflected historical inequity. The algorithm learned to reproduce that inequity.\n\nAt the same risk score threshold, the researchers found that Black patients had significantly more chronic conditions than white patients. The algorithm was, in effect, requiring Black patients to be sicker than white patients to qualify for the same level of care.\n\nThe researchers estimated that the algorithm affected approximately 200 million people per year in the United States."
    },
    {
      type: "finding",
      label: "THE NUMBERS",
      text: "The researchers found that if the bias were corrected, the percentage of Black patients identified as needing extra care would increase from 17.7% to 46.5%. The algorithm had been cutting the number of Black patients who qualified for intensive care management by nearly two-thirds."
    },
    {
      type: "scene",
      heading: "The Fix Was Simple. The Governance Question Was Hard.",
      text: "Here is what makes this case particularly striking: the fix was relatively straightforward.\n\nThe algorithm was using cost as a proxy for health. Obermeyer's team showed that if you replaced cost with a direct measure of health — actual number of chronic conditions, lab test results — the racial disparity largely disappeared.\n\nThe company behind the algorithm, Optum (a subsidiary of UnitedHealth Group), worked with Obermeyer's team after publication. They acknowledged the finding and committed to changes.\n\nBut the hard questions remained.\n\nThe algorithm had been running for years. Hundreds of millions of patients had been scored. An unknown number of Black patients had been denied access to care management programs they should have qualified for. What happened to those patients? What was the health impact of the care they didn't receive? Who was accountable?\n\nOptum did not face regulatory penalties. There were no EEOC complaints. No class action lawsuits have succeeded on this specific case.\n\nThe harm was documented, quantified, and published in one of the world's most respected scientific journals. And nothing changed except the algorithm."
    },
    {
      type: "icm",
      text: "This case contains one of the most important ICM lessons in the entire curriculum.\n\nBefore this algorithm was deployed, someone — somewhere — chose cost as the proxy for health need. That was a design decision. It wasn't inevitable. It wasn't the only option.\n\nAn ICM interview of the algorithm design process would have asked: \"What are we using to represent health need, and is that representation equally valid for all patient groups?\"\n\nThat is an Interview question. The answer — that cost reflects access as much as need, and that access is unequally distributed — was knowable. Researchers had written about it. Public health literature documented it.\n\nThe Codify step would have written the rule: any proxy variable used in a health algorithm must be validated for disparate impact across demographic groups before deployment.\n\nThe Map step would have assigned a named person — with authority and accountability — to monitor that validation on an ongoing basis.\n\nNone of those steps were taken. The algorithm ran for years. The harm accumulated silently. And it took a team of outside researchers to find what the company running it had never looked for."
    },
    {
      type: "terms",
      terms: [
        { term: "Proxy Variable", definition: "A measurable quantity used to represent something harder to measure directly. In healthcare algorithms, cost is often used as a proxy for health need. The validity of proxies must be tested across demographic groups." },
        { term: "Structural Inequality", definition: "Systemic patterns of disadvantage embedded in institutions and practices over time. Healthcare algorithms trained on historical data can learn and reproduce these patterns without anyone intending them to." },
        { term: "Disparate Impact (healthcare)", definition: "When a healthcare algorithm produces systematically different outcomes for patients of different racial groups — even when trained on race-neutral data — it may constitute discrimination under civil rights law." }
      ]
    },
    {
      type: "assignment",
      heading: "The Proxy Audit",
      text: "Think about one metric your organization uses to evaluate people — performance scores, potential ratings, flight risk predictions, anything.\n\nAsk:\n1. What is this metric actually measuring directly?\n2. What is it being used as a proxy for?\n3. Is that proxy equally valid across different demographic groups in your workforce?\n4. When was the last time anyone checked?\n\nThis is the proxy audit. Most HR metrics have never been subjected to one."
    }
  ]
},

{
  id: 10,
  title: "The Firing Line",
  subtitle: "When AI recommendations become the mechanism for workforce reductions — and nobody owns the decision",
  phase: 2,
  readTime: 45,
  listenTime: 30,
  teaser: "Amazon, IBM, and others: AI systems recommending who to fire. IBM just paid $17 million to settle. The question of who actually made the decision still doesn't have a clean answer.",
  content: [
    {
      type: "scene",
      heading: "The 30-Second Approval",
      text: "Imagine you're an HR manager at a large company. You have a stack of 40 performance review cases to process this week. The system has already ranked them. Flagged the low performers. Suggested which roles to eliminate in the next restructuring.\n\nYou click through the cases. Each one takes about 30 seconds. You review the score, confirm the recommendation, move on.\n\nAt the end of the day, you've \"reviewed\" 40 cases. But have you actually reviewed them? Or have you clicked approve on whatever the algorithm recommended?\n\nThis is the question at the center of AI-assisted terminations — and it may be the most important governance question in HR today. If a human approves an AI recommendation in 30 seconds without reading the file, did a human make that decision?\n\nThe answer, legally and ethically, matters enormously."
    },
    {
      type: "case-intro",
      caseNumber: "CASE #2018-03",
      heading: "The IBM Restructuring",
      location: "Armonk, New York — and everywhere IBM operates",
      text: "In March 2018, ProPublica reporters Peter Gosselin and Ariana Tobin published an investigation into IBM's workforce strategy.\n\nOver the previous five years, IBM had laid off tens of thousands of workers. The reporters documented that these layoffs had disproportionately affected older employees. Between 2013 and 2018, more than 85% of those targeted for layoff were workers over 40. ProPublica estimated IBM had eliminated over 20,000 American employees aged 40 or over in just five years.\n\nInternal emails obtained by investigators used strikingly candid language. Older workers were referred to as 'dinobabies' who needed to be made 'extinct,' as 'gray hairs' who were 'not digital natives,' and one email described a 'dated maternal workforce' that didn't 'understand social or engagement.'\n\nIBM had developed and sold AI-powered HR tools — including systems called 'Watson Candidate Assistant' and platforms for 'workforce rebalancing,' the corporate euphemism for deciding who to cut. The company selling AI HR solutions to the world was using AI internally to manage its own workforce reductions.\n\nThe EEOC's August 2020 letter of determination confirmed the allegations: IBM's messaging from 'the highest ranks' directed managers to reduce headcount among older workers to make room for 'early professional hires.' Former employees filed hundreds of ADEA complaints. But IBM had a defense: arbitration contracts that forced each individual worker into a secret, private proceeding. In August 2023, the Second Circuit upheld those contracts.\n\nThen, on April 16, 2026 — eight days before this curriculum was last updated — the Department of Justice announced IBM would pay $17,077,043 to resolve separate allegations that it had used illegal demographic targets in hiring and promotion decisions.\n\nThe core question that survives every settlement: when an AI system recommends which employees to cut, and a manager approves that recommendation in a 30-second workflow review, who made the decision to end that person's career?"
    },
    {
      type: "quote",
      text: "IBM has mastered the art of laying off older workers so that it can be defended later as a routine business decision. The tools they are selling to help other companies do this are the same tools they are using on their own people.",
      attribution: "Peter Gosselin, ProPublica, 2018"
    },
    {
      type: "scene",
      heading: "The Amazon Pipeline",
      text: "Amazon's approach to performance management is among the most automated in corporate history.\n\nThe system — sometimes called \"the machine\" internally — tracks hundreds of performance metrics for warehouse workers: units processed per hour, time off task, error rates, attendance. It generates automated warnings. It generates performance improvement plans. And in some cases, it generates termination recommendations.\n\nWhat Amazon has built is essentially a pipeline: data flows in, performance scores are calculated, recommendations are generated, and — depending on the threshold — automated actions are taken. At the human end of that pipeline, managers may approve or review actions. But the rhythm of the system, the volume of cases, and the framing of the recommendation all push toward approval.\n\nThis is what governance researchers call automation bias: the human tendency to trust and defer to automated recommendations, especially when the system is presented as objective and the human reviewer is busy.\n\nAutomation bias isn't laziness. It's a predictable human response to being embedded in a system designed around the assumption that the algorithm is right."
    },
    {
      type: "finding",
      label: "THE FINDING",
      text: "When AI systems are embedded into termination workflows, two risks compound each other. First, the algorithm may have learned from biased historical data — replicating past patterns of who gets fired. Second, automation bias means human reviewers are likely to approve algorithmic recommendations without meaningful scrutiny. The result: discriminatory patterns execute at scale, with a human signature that provides legal cover."
    },
    {
      type: "scene",
      heading: "The Legal Question Nobody Has Fully Answered",
      text: "Here is where AI-assisted terminations sit legally right now: in unresolved territory.\n\nTitle VII, the ADEA, and the ADA all prohibit employment discrimination. They apply regardless of whether the discriminatory decision was made by a human or an algorithm. Buying a discriminatory tool doesn't transfer liability to the vendor — the employer remains responsible.\n\nBut proving that an AI-assisted termination was discriminatory is hard. The algorithm's methodology is often proprietary. The manager's approval is documented. The causal chain — from biased training data to discriminatory recommendation to human approval — is difficult to establish in court.\n\nThe EEOC has been increasingly clear: it will apply existing civil rights law to AI-assisted HR decisions. The agency's 2023 guidance specifically addresses AI in employment and makes clear that employers cannot use algorithmic tools to evade anti-discrimination obligations.\n\nThe law is catching up. The governance structures that would have prevented the harm are still being built."
    },
    {
      type: "icm",
      text: "This episode ends Phase II of AI Crime Files. And it ends with the ICM question that connects all seven cases:\n\n\"When this system makes a recommendation that affects someone's employment, what human review happens before action is taken — and is that review meaningful, or ceremonial?\"\n\nA meaningful review means: the reviewer has time, information, and authority to say no. They understand what the algorithm is measuring and what it might be missing. They consider context the algorithm can't see.\n\nA ceremonial review means: the reviewer clicks approve on 40 cases in 90 minutes because that's how long the process takes, and the system's recommendations are presented as objective.\n\nEvery AI governance framework in Phase III of this curriculum — NIST, EU AI Act, EEOC guidance — is, at its core, trying to answer this one question. They want to ensure that when a machine affects a human life, a human is genuinely responsible for that decision.\n\nNot just technically. Actually."
    },
    {
      type: "terms",
      terms: [
        { term: "Automation Bias", definition: "The tendency for humans to over-trust automated recommendations, especially in high-volume environments. A major risk in AI-assisted HR decisions where humans are nominally in the loop but functionally deferring to the algorithm." },
        { term: "Meaningful Human Review", definition: "Oversight that is substantive, not ceremonial — where the reviewer has time, authority, information, and genuine ability to override the AI recommendation. Distinguished from 'rubber stamp' approval." },
        { term: "ADEA", definition: "Age Discrimination in Employment Act. Prohibits employment discrimination against workers 40 and older. Applies to AI-assisted decisions the same as human decisions." }
      ]
    },
    {
      type: "assignment",
      heading: "The Meaningful Review Test",
      text: "Think about one place in your organization where a human approves an automated recommendation — a performance flag, a candidate screen, a compensation adjustment.\n\nAsk honestly:\n1. How long does that review typically take?\n2. What information does the reviewer actually look at?\n3. In the last year, how often has a reviewer overridden the system's recommendation?\n\nIf overrides are rare, the review may be ceremonial rather than meaningful. That's not a criticism of the reviewer — it's a governance design problem.\n\nYou've now finished Phase II. You know seven cases. You understand the mechanisms of harm. In Phase III, you'll meet the people who decided to do something about it."
    }
  ]
},

// ─── PHASE III: THE LAW ARRIVES ─────────────────────────────────────────────

{
  id: 11,
  title: "The Law Wakes Up",
  subtitle: "New York City passes the world's first law specifically governing AI in hiring — here's the story of how it happened",
  phase: 3,
  readTime: 45,
  listenTime: 30,
  teaser: "Every crime eventually gets a detective. Local Law 144 was the first law anywhere requiring employers to audit their AI hiring tools before using them. Here's what it took to get there.",
  content: [
    {
      type: "scene",
      heading: "The Pattern That Forced a Response",
      text: "By 2020, the cases were piling up.\n\nAmazon's resume screener had taught itself to discriminate. COMPAS was assigning racially biased risk scores to criminal defendants. Facebook had rebuilt the redline with ad targeting. HireVue was analyzing faces and voices in job interviews with no explanation of what it was measuring.\n\nAnd yet there was no law specifically governing any of it.\n\nEmployers could buy AI hiring tools, deploy them at scale, and face no specific disclosure, audit, or accountability requirement. Candidates had no right to know an algorithm had evaluated them. Vendors had no obligation to prove their tools were fair before selling them.\n\nNew York City decided to change that."
    },
    {
      type: "case-intro",
      caseNumber: "LOCAL LAW 144",
      heading: "The First AI Hiring Law",
      location: "New York City, New York — effective January 1, 2023",
      text: "In November 2021, the New York City Council passed Local Law 144, formally known as the law governing Automated Employment Decision Tools (AEDT).\n\nIt was the first law anywhere in the world specifically requiring employers to audit AI tools used in hiring and promotion decisions — before using them on real candidates.\n\nWhat it requires:\n\n1. BIAS AUDIT: Any covered AI tool must receive an independent bias audit within one year before use. The audit must analyze selection rates by sex and race/ethnicity.\n\n2. PUBLIC SUMMARY: The audit results must be posted publicly on the employer's website. Not buried in a filing — publicly accessible.\n\n3. CANDIDATE NOTICE: Employers must notify candidates at least ten business days before using a covered tool, explain what data is being collected, and provide a way to request an alternative selection process.\n\n4. ACCOMMODATION: If a candidate requests an alternative to the AI-based process, the employer must provide one.\n\nPenalties start at $375 per violation per day for the first offense and rise to $1,500 per day after that."
    },
    {
      type: "finding",
      label: "WHAT IT COVERS",
      text: "NYC LL144 covers tools that 'substantially assist or replace discretionary decision-making' in screening or ranking candidates for employment or promotion. It applies to employers and employment agencies that use covered tools for candidates or employees in New York City. Many vendors and employers initially tried to argue their tools didn't qualify. The NYC enforcement agency has been clear: if the tool meaningfully influences who advances, it's covered."
    },
    {
      type: "scene",
      heading: "The Gap Between Law and Enforcement",
      text: "Local Law 144 took effect January 1, 2023. Enforcement began July 5, 2023 — six months after the effective date, after the city extended a grace period due to industry pushback.\n\nThe New York State Comptroller's review found compliance was uneven in practice. Many employers using covered tools had not posted audit summaries. Many had not sent the required candidate notices. Some vendors provided pooled audit data — covering multiple clients' data combined — rather than employer-specific results, raising questions about whether that satisfied the law's intent.\n\nThe lesson: a law on paper is the Codify step. Enforcement is the Map step. When enforcement lags, the governance gap the law was meant to close remains open."
    },
    {
      type: "icm",
      text: "Local Law 144 is essentially the government forcing companies to run the Interview before they automate.\n\nThe bias audit is an Interview: look at what the system is actually doing, not what you intended. Are the selection rates for women and people of color equal to those for men and white candidates?\n\nThe candidate notice is the Codify step made public: here is what the tool does, here is what data it collects, here is how to opt out.\n\nThe accommodation requirement is the Map step: if a person needs a different path, the process must have one.\n\nWhat's remarkable about this law is that it's legislating the steps that responsible organizations should have taken voluntarily before deploying these tools. That they needed a law to require it is itself a governance story."
    },
    {
      type: "terms",
      terms: [
        { term: "Automated Employment Decision Tool (AEDT)", definition: "Under NYC LL144: any computational process that uses machine learning, statistical modeling, data analytics, or AI to issue a simplified output that substantially assists or replaces discretionary decision-making in employment screening or promotion." },
        { term: "Independent Bias Audit", definition: "An assessment of an AEDT conducted by a qualified, impartial third party to evaluate the tool's disparate impact on candidates by sex and race/ethnicity. Must be completed within one year before the tool is used." },
        { term: "Selection Rate", definition: "The percentage of applicants from a given group who are advanced by the tool. A significantly lower selection rate for a protected class compared to the most-selected group may indicate disparate impact." }
      ]
    },
    {
      type: "assignment",
      heading: "The Compliance Checklist",
      text: "If your company used an AI screening tool tomorrow in New York City, what three concrete things would need to happen before the tool could legally be used?\n\nAnswer the question in your own words — not as a lawyer, but as an HR professional who would be responsible for making sure it happened.\n\nThen ask: does your organization have a process that would catch this before the tool goes live, or would you find out after the fact?"
    }
  ]
},

{
  id: 12,
  title: "The European Indictment",
  subtitle: "The EU AI Act: 500 million people, a four-tier risk system, and what it means for HR",
  phase: 3,
  readTime: 50,
  listenTime: 35,
  teaser: "The EU passed the most comprehensive AI law in history. HR AI is explicitly classified as high-risk. Here's what that means in plain terms.",
  content: [
    {
      type: "scene",
      heading: "When the Regulator Leads",
      text: "The United States has taken a largely voluntary approach to AI governance — guidelines, frameworks, recommendations.\n\nThe European Union took a different path.\n\nIn 2024, the EU passed the AI Act: the world's first comprehensive legal framework for regulating artificial intelligence. It applies to any organization deploying AI systems that affect people in the EU — including non-European companies. It carries fines of up to 7% of global annual revenue for the most serious violations.\n\nFor HR professionals: employment is explicitly named as a high-risk domain. That means the tools you're using — or might buy — are subject to the most demanding tier of requirements under the law."
    },
    {
      type: "case-intro",
      caseNumber: "REGULATION EU 2024/1689",
      heading: "The Four-Tier Risk System",
      location: "European Union — phased implementation 2024–2027",
      text: "The EU AI Act classifies every AI system into one of four risk tiers:\n\nUNACCEPTABLE RISK (Banned): Systems that manipulate people against their will, exploit vulnerabilities, enable social scoring by governments, or conduct real-time biometric surveillance in public spaces. These are prohibited outright.\n\nHIGH RISK (Heavily Regulated): Systems used in areas where AI can significantly affect people's rights, safety, or livelihoods. HR and employment is explicitly listed in this category. Covered systems include: AI used in recruitment and candidate selection, AI used in promotion and performance evaluation, AI used in task allocation and monitoring of behavior.\n\nLIMITED RISK (Transparency Required): Chatbots and AI that interacts with people must disclose that it's AI.\n\nMINIMAL RISK (No Specific Requirements): Most AI, including spam filters and AI-generated playlists.\n\nIf your HR AI tool falls in the High Risk category — and most significant ones do — here's what you're required to do before deploying it: register it in an EU database, conduct a conformity assessment, maintain technical documentation, implement human oversight, ensure transparency to affected workers, and conduct ongoing monitoring."
    },
    {
      type: "quote",
      text: "AI systems used in employment, workers management, and access to self-employment are among the most consequential AI applications and deserve strict requirements.",
      attribution: "EU AI Act, Recital 57 — the legislative reasoning behind the high-risk classification of employment AI"
    },
    {
      type: "finding",
      label: "THE HR IMPLICATION",
      text: "Under the EU AI Act, emotion recognition systems in the workplace are prohibited in most contexts. AI systems that evaluate worker performance, monitor behavior, or allocate tasks are high-risk. Employers must be able to explain to affected workers how the system works and what data it uses. Workers have rights to contest AI-based decisions. This applies to any company deploying these systems for EU-based workers — regardless of where the company is headquartered."
    },
    {
      type: "icm",
      text: "The EU AI Act essentially codifies the ICM methodology into law for high-risk systems.\n\nBefore deploying: you must conduct a conformity assessment (the Interview — does this system do what we think it does? Does it do it fairly?).\n\nDuring deployment: you must maintain technical documentation and logs (the Map — is the workflow operating as designed?).\n\nOngoing: you must monitor for emerging risks (the Codify step, revisited — do the rules still hold as the system learns and changes?).\n\nThe law didn't invent these practices. It made them mandatory because too many organizations were skipping them."
    },
    {
      type: "terms",
      terms: [
        { term: "High-Risk AI System", definition: "Under the EU AI Act: AI systems used in safety-critical or rights-impacting contexts, including employment decisions. Subject to conformity assessments, documentation requirements, human oversight mandates, and transparency obligations." },
        { term: "Conformity Assessment", definition: "A required evaluation confirming that a high-risk AI system meets the EU AI Act's requirements before deployment. For most HR AI, this involves internal assessment with third-party review." },
        { term: "Prohibited AI Practices", definition: "Under the EU AI Act: AI systems that manipulate people using subliminal techniques, exploit vulnerabilities, enable government social scoring, or conduct real-time public facial recognition. Banned outright regardless of claimed benefit." }
      ]
    },
    {
      type: "assignment",
      heading: "The Risk Classification Exercise",
      text: "Think about three AI tools your organization uses that affect employees — anything from a hiring screener to a performance management tool to a scheduling algorithm.\n\nFor each one, decide: under the EU AI Act's framework, would it be Unacceptable Risk, High Risk, Limited Risk, or Minimal Risk?\n\nThen ask: if these tools are High Risk, are the required protections in place — human oversight, technical documentation, worker transparency, and a complaints process?\n\nWhich of the EU requirements would your current tools fail today?"
    }
  ]
},

{
  id: 13,
  title: "The American Framework",
  subtitle: "NIST's AI Risk Management Framework — no fines, no enforcement, and yet the standard everyone uses",
  phase: 3,
  readTime: 45,
  listenTime: 30,
  teaser: "The US government built a voluntary AI governance framework. Companies use it not because they have to — but because it's the best defense they have.",
  content: [
    {
      type: "scene",
      heading: "The Detective Without a Badge",
      text: "The EU has fines. New York City has audits. The EEOC has enforcement authority.\n\nNIST has none of these things.\n\nThe National Institute of Standards and Technology published its AI Risk Management Framework — the AI RMF — in January 2023. It is entirely voluntary. No company is required to use it. There are no penalties for ignoring it.\n\nAnd yet it has become the most widely referenced AI governance framework in US corporate boardrooms.\n\nWhy? Because when a company faces an EEOC complaint, a shareholder lawsuit, or a congressional hearing about AI gone wrong, the first question asked is: what governance framework were you using? A company that can point to documented adherence to NIST AI RMF is in a fundamentally different legal and reputational position than one that was just winging it.\n\nVoluntary doesn't mean optional. It means the choice to use it — or not — is yours to make and yours to live with."
    },
    {
      type: "case-intro",
      caseNumber: "NIST AI RMF 1.0",
      heading: "The Four Functions",
      location: "National Institute of Standards and Technology, January 2023",
      text: "The NIST AI RMF organizes AI risk management around four core functions:\n\nGOVERN: Establish the culture, policies, and accountability structures that make responsible AI possible. Who makes decisions? Who is responsible? What values guide the organization?\n\nMAP: Identify and understand the risks of a specific AI system in its specific context. Who is affected? What could go wrong? What data does it use? What decisions does it influence?\n\nMEASURE: Analyze and assess the risks you've identified. How serious are they? How likely? What biases exist? What would a failure look like?\n\nMANAGE: Address the risks you've measured — mitigate them, accept them with monitoring, or decide not to deploy. Maintain ongoing oversight.\n\nThese four functions aren't a checklist you complete once. They're a cycle. You govern, map, measure, and manage continuously across the life of every AI system."
    },
    {
      type: "finding",
      label: "WHY IT MATTERS FOR HR",
      text: "NIST AI RMF doesn't tell you what to decide. It tells you how to decide — with the rigor, documentation, and accountability that makes AI governable. For HR, the Map function is most immediately useful: it forces you to articulate exactly what decision an AI tool is influencing, who is affected, and what safeguards are in place. Most HR teams buying AI tools have never done this work explicitly. NIST gives you the structure to do it."
    },
    {
      type: "icm",
      text: "The NIST AI RMF and ICM are, at their core, answering the same question: how do you understand a complex process well enough to be responsible for its outcomes?\n\nGOVERN = the ownership question ICM asks first. Who decides? Who is accountable?\n\nMAP = the Interview. Walk me through exactly how this system works and who it affects.\n\nMEASURE = the Codify step for risk. What are the rules that define acceptable and unacceptable outcomes?\n\nMANAGE = the ongoing Map. Is the process running as designed? What do we do when it isn't?\n\nOrganizations that have internalized ICM as a working practice find NIST AI RMF immediately intuitive. The structure is the same. The language is different."
    },
    {
      type: "terms",
      terms: [
        { term: "NIST AI RMF", definition: "The National Institute of Standards and Technology's AI Risk Management Framework. A voluntary US government framework for identifying, measuring, and managing AI risks. Organized around four functions: Govern, Map, Measure, Manage." },
        { term: "AI Risk", definition: "Under NIST AI RMF: the composite measure of an AI event's probability and the magnitude of its consequences — including harms to individuals, communities, or the organization deploying it." },
        { term: "Trustworthy AI", definition: "NIST's goal for AI systems: valid and reliable, safe, secure and resilient, explainable and interpretable, privacy-enhanced, fair, accountable, and transparent. These seven characteristics are the foundation of the framework." }
      ]
    },
    {
      type: "assignment",
      heading: "The Four Functions Test",
      text: "Pick one AI tool your organization uses in HR. Walk it through the four NIST functions in plain language:\n\nGOVERN: Who owns this tool? Who is accountable if it produces a discriminatory outcome?\n\nMAP: What exactly does it decide? Who does it affect? What data does it use?\n\nMEASURE: Has anyone analyzed whether it produces disparate results across demographic groups? What would failure look like?\n\nMANAGE: What monitoring exists? What's the process to shut it down if something goes wrong?\n\nIf you can't answer all four, you've identified your governance gaps."
    }
  ]
},

{
  id: 14,
  title: "The Corporate Pledge",
  subtitle: "What Microsoft, Google, and IBM actually committed to — and how to tell real governance from branding",
  phase: 3,
  readTime: 45,
  listenTime: 30,
  teaser: "Every major tech company now has an AI ethics page. Most are vague. Some are specific. This episode teaches you the difference — and why it matters when you're buying their tools.",
  content: [
    {
      type: "scene",
      heading: "The Principles Problem",
      text: "After the scandals broke — Amazon's resume screener, COMPAS, Facebook's housing ads — the tech industry responded with a wave of AI ethics announcements.\n\nGoogle published its AI Principles. Microsoft published its Responsible AI Standard. IBM launched its AI Ethics commitments. Dozens of other companies followed.\n\nThese documents share certain characteristics: they are publicly available, they use words like fairness, transparency, accountability, and human oversight, and they are extremely difficult to hold anyone to.\n\nIn 2018, Google published its AI Principles and pledged not to develop AI for weapons or surveillance that violated human rights.\n\nIn 2024, Google quietly removed that pledge after winning a military contract.\n\nThis is not to say that corporate AI ethics efforts are meaningless. Some are genuine. The problem is that most people — including HR professionals buying AI tools — can't tell the difference between a governance program and a marketing document."
    },
    {
      type: "case-intro",
      caseNumber: "MICROSOFT RESPONSIBLE AI STANDARD v2",
      heading: "What Real Commitments Look Like",
      location: "Redmond, Washington — published 2022",
      text: "Microsoft's Responsible AI Standard is one of the most specific corporate AI ethics documents publicly available.\n\nUnlike principles documents that state values, Microsoft's Standard states requirements — specific, testable obligations that teams must meet before shipping AI systems.\n\nExamples of what it actually requires:\n\nFor fairness: teams must identify the demographic groups potentially affected by a system, assess potential harms, and document how they measured and mitigated disparate impact. The documentation must exist, not just the intention.\n\nFor human oversight: systems in high-risk domains must specify who is responsible for oversight, what data they have access to, how they can intervene, and under what conditions the system must be paused.\n\nFor explainability: affected individuals must be able to understand, in plain terms, how a decision affecting them was made — and have a mechanism to contest it.\n\nThis is what moves a principles document toward a governance document: specificity, testability, and accountability."
    },
    {
      type: "quote",
      text: "We need to move from ethics principles to ethics practice. Having the right values isn't enough. You need the right processes, the right roles, and the right accountability structures.",
      attribution: "Stanford HAI, Walking the Walk of AI Ethics in Technology Companies"
    },
    {
      type: "finding",
      label: "THE EVALUATION FRAMEWORK",
      text: "When evaluating a vendor's AI ethics commitments, ask five questions: (1) Are specific requirements stated, or just values? (2) Is there a named person or team responsible for compliance? (3) Is there external verification, or only self-assessment? (4) Has the company's behavior ever contradicted its stated principles, and how did they respond? (5) Does the document govern what they sell to you, or only what they build internally?"
    },
    {
      type: "icm",
      text: "A principles document is a statement of intent. It's what someone wrote down in a meeting.\n\nA governance document is a set of rules with teeth. It's what gets checked before a system ships.\n\nA governance system is what actually happens in practice.\n\nThe ICM sequence — Interview, Codify, Map — distinguishes these three levels. The Interview reveals what people actually believe and do. The Codify step turns beliefs into rules. The Map step makes the rules into a process that runs regardless of who's watching.\n\nWhen you evaluate a vendor's AI ethics commitments, you're asking: which of these three levels does this document represent? Most corporate AI ethics pages are at level one. A small number are at level two. Almost none are at level three — because level three requires ongoing investment and accountability that most companies haven't yet built."
    },
    {
      type: "terms",
      terms: [
        { term: "AI Principles", definition: "High-level statements of values an organization commits to in developing or deploying AI. Necessary but not sufficient for governance — without specific requirements, accountability, and enforcement, principles don't constrain behavior." },
        { term: "Responsible AI Standard", definition: "A more specific governance document that translates principles into testable requirements. Microsoft's version is a public example of what a mature standard looks like — with required documentation, specific roles, and checkpoints before deployment." },
        { term: "Ethics Washing", definition: "The practice of making public ethics commitments that are not backed by meaningful governance structures — using ethical language primarily for reputational purposes rather than operational change." }
      ]
    },
    {
      type: "assignment",
      heading: "The Vendor Principles Audit",
      text: "Pick one AI vendor your organization uses in HR. Find their AI ethics or responsible AI page.\n\nEvaluate it against the five questions:\n1. Are specific requirements stated, or just values?\n2. Is there a named person responsible for compliance?\n3. Is there external verification?\n4. Has their behavior ever contradicted their principles?\n5. Does it govern what they sell to you?\n\nWhat evidence would make you believe their principles are real governance, not branding?"
    }
  ]
},

{
  id: 15,
  title: "The State Investigators",
  subtitle: "When the federal government didn't act, the states did — and now HR has a patchwork to navigate",
  phase: 3,
  readTime: 40,
  listenTime: 25,
  teaser: "Connecticut passed a new AI employment law three days ago. California's opt-out rights took effect January 1. The state AI law patchwork is expanding faster than most HR programs can track.",
  content: [
    {
      type: "scene",
      heading: "The Federal Silence",
      text: "As of 2025, the United States has no comprehensive federal AI law.\n\nCongress has held hearings. Agencies have issued guidance. The White House published an Executive Order. But there is no single law that tells employers what they can and cannot do with AI in the workplace — the way the Civil Rights Act told them they couldn't discriminate, or HIPAA told them how to handle health data.\n\nInto that silence, the states moved.\n\nToday, if your company operates in multiple US states — and most medium-sized and large employers do — you may be subject to a patchwork of overlapping, sometimes conflicting AI employment laws. Knowing which ones apply to you is no longer optional."
    },
    {
      type: "case-intro",
      caseNumber: "STATE LAW SNAPSHOT 2024–2026",
      heading: "The Laws You Need to Know",
      location: "Multiple US States — Updated April 2026",
      text: "ILLINOIS — AI Video Interview Act (2020): The first state AI employment law. Requires employers using AI to analyze video interviews to notify candidates, explain how the AI works, get consent, and delete videos on request. Also requires annual race/ethnicity reporting if AI is the sole determinant for in-person interview selection.\n\nNEW YORK CITY — Local Law 144 (effective 2023): Already covered in Day 11. The gold standard for bias audit requirements.\n\nCOLORADO — SB 205 (2024, effective 2026): Applies to deployers of 'high-risk' AI systems in employment decisions. Requires risk management programs, impact assessments, annual reviews, candidate notices, data correction rights, appeals path, and public disclosures. The first state to impose a 'reasonable care' duty of care specifically for AI bias.\n\nCALIFORNIA — Two frameworks now apply. The Civil Rights Council regulations (2024) apply the state's anti-discrimination law to automated employment systems — same disparate impact standards as human decision-makers. Separately, CPRA Automated Decision-Making Technology rules took effect January 1, 2026: employees and candidates now have the right to opt out of automated decisions for hiring, discipline, or promotion; a pre-use notice explaining the logic behind the tool; and the right to request how their data was used.\n\nMARYLAND: Prohibits facial recognition during interviews without written applicant consent. Penalties up to $10,000 per day per violation.\n\nNEW JERSEY (January 2025): The Division on Civil Rights issued guidance that the Law Against Discrimination applies to AI-driven bias. Employers cannot outsource their legal liability to AI vendors.\n\nCONNECTICUT — SB 5 (passed April 21, 2026): Requires detailed written notices for automated employment-related decision technology. Passed three days before this curriculum was updated — an example of how fast the patchwork is expanding.\n\nMASSACHUSETTS: In Saint Cyr v. JPMorgan, a court considered whether AI tools that score 'honesty' or 'integrity' might violate the state's lie-detector prohibition. AI behavioral assessments in Massachusetts carry specific legal risk.\n\nAs of April 2026, over a dozen states have enacted or are actively advancing AI employment legislation. This list will be longer by the time you read it."
    },
    {
      type: "finding",
      label: "THE PATCHWORK PROBLEM",
      text: "Operating in multiple states means managing multiple compliance standards — some of which conflict. A tool that is compliant in one state may require additional documentation in another, candidate notices in a third, and specific audit results in a fourth. HR professionals need a state-by-state compliance map for every AI tool they deploy, updated as laws evolve. Most organizations don't have this."
    },
    {
      type: "icm",
      text: "Multi-state AI compliance is an ICM problem at scale.\n\nThe Interview question: in which states do we hire, promote, and manage people? What laws apply in each?\n\nThe Codify step: for each law, what specific rules does it impose on our tools and processes? Not a general summary — specific requirements with specific deadlines.\n\nThe Map step: for every AI tool we deploy, a compliance checklist by state. Automated where possible. Human-reviewed where required.\n\nThis is exactly the kind of problem that gets solved with a process, not with a policy document. A document that says 'we comply with applicable state AI laws' isn't a governance system. A workflow that checks each tool against each relevant state's requirements before deployment — that's a governance system."
    },
    {
      type: "terms",
      terms: [
        { term: "Regulatory Patchwork", definition: "The current US state of AI law — no federal standard, multiple state laws with different requirements, scope, and enforcement mechanisms. Requires employers to track and comply with requirements in every state where they operate." },
        { term: "High-Risk AI (Colorado)", definition: "Under Colorado SB 205: AI systems that make or substantially influence consequential decisions in employment, including hiring, compensation, promotion, demotion, and termination. Triggers the law's full set of obligations for deployers." },
        { term: "Disparate Impact Analysis", definition: "Under California's Civil Rights Council regulations: employers using automated employment decision systems must analyze whether those systems produce selection rates that adversely affect protected groups — the same standard applied to human decision-making." }
      ]
    },
    {
      type: "assignment",
      heading: "Your State Compliance Map",
      text: "List the states where your organization makes employment decisions — hiring, promotions, terminations.\n\nFor the top three by employee headcount, research: does that state have a law specifically governing AI in employment decisions?\n\nIf the federal government stays vague, which kinds of HR AI decisions do you predict states will regulate next?\n\nYour answer should reflect what you've learned in the last five days about which AI-in-HR use cases have caused the most documented harm."
    }
  ]
},

{
  id: 16,
  title: "The Enforcement Playbook",
  subtitle: "You don't need a new law — Title VII, the ADA, and the ADEA already apply to AI",
  phase: 3,
  readTime: 45,
  listenTime: 30,
  teaser: "The EEOC's first AI enforcement action wasn't under a new AI law. It was under age discrimination law from 1967. The old laws already apply. Here's how.",
  content: [
    {
      type: "scene",
      heading: "The First Enforcement Action",
      text: "In August 2023, iTutorGroup — an online tutoring platform — agreed to pay $365,000 to settle a lawsuit brought by the Equal Employment Opportunity Commission.\n\nThe charge: age discrimination in hiring.\n\nThe mechanism: iTutorGroup had used automated screening software that automatically rejected applicants over 55 (for women) and over 60 (for men). The software wasn't described as an 'AI system.' It was just the company's applicant processing workflow.\n\nBut the EEOC treated it as an AI hiring case — and won.\n\nThis was a landmark moment. No new AI law was needed. The Age Discrimination in Employment Act of 1967 applied. The automation of the discrimination made it faster and more systematic, but it didn't make it legal.\n\nThe message to employers was clear: you cannot use an algorithm to do what a human could not legally do."
    },
    {
      type: "case-intro",
      caseNumber: "EEOC TECHNICAL ASSISTANCE 2023",
      heading: "The Three Laws That Already Apply",
      location: "Equal Employment Opportunity Commission — Washington, DC",
      text: "In 2023, the EEOC published technical assistance documents specifically addressing AI in employment. The core message: existing civil rights law applies fully to AI-assisted decisions.\n\nTITLE VII (Civil Rights Act of 1964): Prohibits employment discrimination based on race, color, religion, sex, and national origin. Applies to AI tools that produce disparate impact — even without discriminatory intent. If an AI hiring tool screens out Black applicants at twice the rate of white applicants, that's a Title VII problem regardless of how the algorithm works.\n\nADA (Americans with Disabilities Act): Prohibits discrimination against qualified individuals with disabilities. The EEOC has specifically warned that AI tools can violate the ADA by screening out disabled applicants who could perform the job with reasonable accommodation, by conducting disability-related inquiries through their design, or by denying accessible alternatives. If your video interview AI can't score a candidate with a speech impairment fairly, that's an ADA problem.\n\nADEA (Age Discrimination in Employment Act of 1967): Prohibits discrimination against employees and applicants 40 and older. iTutorGroup's settlement proved the point: an algorithm that filters by age is age discrimination, full stop."
    },
    {
      type: "quote",
      text: "The use of algorithmic decision-making tools does not change existing civil rights law. An employer cannot use AI to do what it could not legally do on its own.",
      attribution: "EEOC Chair Charlotte Burrows, 2023"
    },
    {
      type: "finding",
      label: "THE STRATEGIC RISK",
      text: "The most dangerous assumption in HR AI governance is: 'There isn't an AI law yet, so we're fine.' There may not be an AI-specific law in your state. But Title VII, the ADA, the ADEA, and the Equal Pay Act have applied to employment decisions for decades. AI doesn't create an exemption. It creates new ways to violate laws that have existed since before most current HR professionals were born."
    },
    {
      type: "scene",
      heading: "The Employer's Responsibility",
      text: "One more fact that HR professionals need to carry from Phase III into Phase IV.\n\nThe EEOC's 2023 guidance makes clear: employers are responsible for the employment decisions their AI tools make — even if a vendor built and sold them the tool.\n\nThis matters enormously.\n\nWhen a company buys a hiring AI from a vendor and that tool produces discriminatory results, the employer faces the EEOC complaint — not the vendor. The employer can seek indemnification from the vendor contractually, but the legal liability for the employment decision is the employer's.\n\nYou can outsource the algorithm. You cannot outsource the accountability.\n\nWith that principle established — and Phase III complete — you are ready to walk into the specific rooms where AI is making decisions about people at work."
    },
    {
      type: "icm",
      text: "Phase III has given you the legal framework. Now the ICM question becomes urgent.\n\nBefore any AI tool is deployed in an HR context, someone needs to ask: could a human be held legally liable for making this decision this way? If the answer is yes — and for most consequential HR decisions, the answer is yes — then the same liability applies to the AI.\n\nThe Codify step for legal compliance: map every AI tool to the civil rights laws it touches. Title VII: does it produce disparate impact? ADA: does it screen out or disadvantage disabled applicants? ADEA: does it filter by age?\n\nIf you can't answer these questions about a tool you're using, you have a governance gap that already exists under law — not just under future AI regulation."
    },
    {
      type: "terms",
      terms: [
        { term: "Disparate Impact (legal)", definition: "A legal theory under Title VII: a facially neutral policy or practice that disproportionately disadvantages a protected group, even without discriminatory intent. The primary civil rights theory applied to AI employment decisions." },
        { term: "Reasonable Accommodation", definition: "Under the ADA: a modification to a job, work environment, or the way work is done that enables a qualified person with a disability to enjoy equal employment opportunity. AI tools must not eliminate accommodation pathways." },
        { term: "Employer Liability", definition: "Legal responsibility for employment decisions — including decisions substantially influenced by AI tools the employer has chosen to deploy. Buying a discriminatory tool does not transfer liability to the vendor." }
      ]
    },
    {
      type: "assignment",
      heading: "The Legal Exposure Map",
      text: "You are an HR professional explaining to your CHRO why the company needs to audit its AI tools before using them.\n\nWrite three sentences — one for each law — explaining why Title VII, the ADA, and the ADEA apply to AI hiring tools right now, without any new AI legislation.\n\nThen answer: why is it strategically dangerous for HR to think 'there isn't an AI law yet, so we're fine'?\n\nYou have just completed Phase III. You know the cases. You know the law. Tomorrow you walk into the crime scene."
    }
  ]
},

// ─── PHASE IV: HR'S CRIME SCENE ─────────────────────────────────────────────

{
  id: 17,
  title: "The HR Fingerprint",
  subtitle: "Every place AI touches the employee lifecycle — building the complete map",
  phase: 4,
  readTime: 40,
  listenTime: 25,
  teaser: "Before we can govern AI in HR, we have to know where it is. Today we build the map — every touchpoint, every decision, every risk.",
  content: [
    {
      type: "scene",
      heading: "Why We Need a Map",
      text: "You've spent three weeks learning about AI governance failures and the laws written in response to them.\n\nNow we turn to the specific rooms where AI is making decisions about people at work.\n\nThe employee lifecycle is a useful frame: from the moment a person first encounters your company as a candidate, through onboarding, development, performance, compensation, and eventual departure, AI can be — and increasingly is — present at every stage.\n\nMost HR leaders don't have a complete map of where AI is operating in their organization. Tools get purchased by different teams. Vendors bundle AI features into SaaS platforms without announcing them. What starts as a 'workflow automation' quietly becomes an AI-influenced decision.\n\nThe map is the first governance act. You can't govern what you haven't located."
    },
    {
      type: "finding",
      label: "THE MAP: WHERE AI TOUCHES HR",
      text: "ATTRACT: Job posting optimization (which roles to advertise, where, to whom). Programmatic job advertising (algorithmic targeting of candidates — Facebook housing ad risk applies here). Candidate sourcing (AI-generated prospect lists from LinkedIn and other platforms).\n\nHIRE: Resume screening and ranking. Chatbot pre-screening conversations. Video interview analysis (facial expression, voice tone, word choice). Assessment scoring. Background check flagging.\n\nONBOARD: Personalized onboarding content. Document processing. Benefits enrollment assistance.\n\nDEVELOP: Learning recommendation engines. Internal mobility and job matching. Mentorship pairing algorithms.\n\nMANAGE: Performance management AI (feedback drafting, rating calibration, productivity tracking). Schedule optimization. Workload distribution. Attendance and behavior monitoring.\n\nREWARD: Compensation banding recommendations. Merit increase suggestions. Equity refresh algorithms. Benefits utilization analysis.\n\nRETAIN: Flight risk scoring. Engagement sentiment analysis. Succession planning recommendations.\n\nSEPARATE: Voluntary separation targeting models. Severance eligibility screening. Exit interview analysis."
    },
    {
      type: "scene",
      heading: "The Invisible AI",
      text: "Here's the governance challenge most HR teams don't see coming: much of the AI in the HR lifecycle isn't purchased as an AI product.\n\nYour ATS now has an AI matching score built in — it came with the software update you approved last quarter. Your HRIS has a 'talent insights' module your vendor bundled in free. Your performance management platform added an AI feedback drafting tool in a recent release.\n\nMost of the AI operating in HR today came in through the side door of SaaS product updates.\n\nThis means your AI inventory can't be built by asking HR what AI tools they bought. It requires auditing the tools you have for AI features you may not have consciously adopted."
    },
    {
      type: "icm",
      text: "The map-building exercise is the Interview phase of ICM applied to your entire HR technology stack.\n\nFor each system: walk me through exactly what AI features are active. What decisions do they influence? Who sees the outputs? Are those outputs advisory or does the system filter before a human ever looks?\n\nThe goal isn't a vendor list. It's a decision map — for each touchpoint in the lifecycle, what is the AI doing, and what would happen if it were wrong?\n\nDays 18 through 23 walk through the six highest-risk touchpoints on this map. Today is the establishing shot. Tomorrow the investigation gets specific."
    },
    {
      type: "assignment",
      heading: "Build Your First Map",
      text: "Using the lifecycle categories above (Attract, Hire, Onboard, Develop, Manage, Reward, Retain, Separate), identify at least one AI system active in your organization at each stage.\n\nFor each one:\n- Is it explicitly AI, or a feature bundled into another tool?\n- Who in HR knows it's there?\n- Who is responsible for monitoring it?\n\nThen: across attract, hire, onboard, develop, manage, reward, and exit, where do you think AI creates the biggest upside and the biggest governance risk in your organization?"
    }
  ]
},

{
  id: 18,
  title: "The Invisible Interviewer",
  subtitle: "HireVue, video interview AI, and the case that forced the industry to reckon with what it was actually measuring",
  phase: 4,
  readTime: 50,
  listenTime: 35,
  teaser: "One company's AI analyzed 25,000 facial data points per interview. Another used voice analysis. Neither could fully explain what they were looking for — or whether it was legal.",
  content: [
    {
      type: "scene",
      heading: "The Interview That Watched You Back",
      text: "Millions of job seekers have recorded video interview responses to questions displayed on their screen — answers delivered to an empty room, evaluated later by software.\n\nHireVue, the largest vendor in this space, built a system that analyzed candidates' facial expressions, eye movements, and voice characteristics to generate competency scores.\n\nAt its peak, HireVue's platform had analyzed more than 100 million interviews. Clients included major banks, retailers, and tech companies.\n\nIn 2019, the AI Now Institute filed a complaint with the Federal Trade Commission. The Electronic Privacy Information Center (EPIC) followed with its own FTC complaint. The charge: HireVue's facial analysis was based on unproven pseudoscience, lacked transparency, and discriminated against people with disabilities.\n\nHireVue's response, in 2021: they dropped facial analysis entirely."
    },
    {
      type: "case-intro",
      caseNumber: "CASE #2021-01",
      heading: "The Face Reader",
      location: "South Jordan, Utah — deployed worldwide",
      text: "HireVue's AI interview scoring system worked by analyzing thousands of data points from recorded video responses. The system tracked facial movements, micro-expressions, word choice, speech patterns, and tone.\n\nThe algorithm had been trained on a population of 'successful' employees — people who had thrived in specific roles at specific companies. It learned to associate certain patterns with success and built a scoring model.\n\nThe problems:\n\nFIRST: Facial expression analysis has weak scientific support as a predictor of job performance. The research linking micro-expressions to personality traits or competencies is contested and, in some studies, has failed to replicate.\n\nSECOND: The system analyzed behaviors that can be significantly affected by disability. People with facial paralysis, speech impairments, autism spectrum characteristics, anxiety disorders, or language differences could receive systematically different scores unrelated to their actual job qualifications.\n\nTHIRD: Candidates had no way to understand how they were being scored, no way to challenge the results, and in many hiring processes, no way to advance without completing the video interview.\n\nThe ADA question was simple and damning: if a candidate cannot perform the facial or vocal behaviors the algorithm is looking for — not because they can't do the job, but because they have a disability — and there is no accommodation pathway, that is potentially illegal discrimination.\n\nHireVue dropped facial analysis in 2021. They retained voice and language analysis."
    },
    {
      type: "quote",
      text: "I was interviewed by an AI bot for a job. I kept thinking: what is it seeing? What does it want from me? I smiled constantly because I didn't know what else to do.",
      attribution: "Job candidate, The Verge, 2024"
    },
    {
      type: "finding",
      label: "THE BROADER LESSON",
      text: "Dropping the most controversial feature (facial analysis) while retaining similar features (voice analysis) does not resolve the underlying governance problem. If you cannot explain what your AI is measuring, why that measurement predicts job success, and how candidates with disabilities can be assessed fairly — you haven't solved it. You've moved it."
    },
    {
      type: "icm",
      text: "The Interview question that should have been asked before HireVue deployed facial analysis:\n\n\"What are we claiming this system measures, and what peer-reviewed evidence supports the validity of those measurements as predictors of job success?\"\n\nA follow-up: \"For candidates who cannot produce the facial or vocal cues this system is trained to read — because of a disability, a language difference, or simply a different cultural display norm — what happens to their score?\"\n\nIf the vendor cannot answer both questions with specific, validated evidence — not marketing claims — the tool should not be deployed in a consequential hiring process.\n\nThis is the vendor assessment problem we'll tackle directly in Day 25. Buying the tool doesn't mean you've validated it. And as we established in Day 16, if it's not valid for all candidates, it may be illegal."
    },
    {
      type: "terms",
      terms: [
        { term: "Predictive Validity", definition: "The degree to which a selection tool accurately predicts job performance. AI hiring tools must demonstrate predictive validity — that what they measure actually correlates with success in the specific role — to be legally defensible under disparate impact analysis." },
        { term: "Adverse Impact", definition: "When a selection procedure results in a substantially lower selection rate for members of a protected group compared to the highest-selected group. The EEOC's four-fifths rule: a selection rate less than 80% of the best group's rate is evidence of adverse impact." },
        { term: "Accommodation (hiring AI)", definition: "An alternative assessment pathway for candidates who cannot use the standard AI-based process due to a disability. Required by the ADA. Must be available, not theoretical — 'contact HR' buried in fine print is not sufficient." }
      ]
    },
    {
      type: "assignment",
      heading: "The Assessment Audit",
      text: "If your organization uses any AI-based candidate assessment tool — video interviews, game-based assessments, voice analysis, anything — answer these questions:\n\n1. What does the vendor claim the tool measures?\n2. What evidence have they provided that it predicts job success in your specific roles?\n3. What accommodation process exists for candidates who cannot use the tool as designed?\n4. Can candidates find out how they were scored, and is there an appeals process?\n\nWhich hiring tasks feel appropriate for AI assistance, and which ones still need clear human judgment — and the legal right to override?"
    }
  ]
},

{
  id: 19,
  title: "The Performance Paradox",
  subtitle: "When AI rates your work — and the automation bias problem that makes human review ceremonial",
  phase: 4,
  readTime: 45,
  listenTime: 30,
  teaser: "AI-assisted performance reviews. AI-generated feedback. Automated performance improvement plans. At what point does AI-supported management become algorithmic management?",
  content: [
    {
      type: "scene",
      heading: "The Manager Who Reviewed 40 Files in 90 Minutes",
      text: "We introduced the concept of automation bias in Day 10: the human tendency to trust and defer to automated recommendations, especially when the system is presented as objective and the reviewer is busy.\n\nPerformance management is where this becomes most dangerous.\n\nConsider a typical scenario: an AI performance management system has generated ratings for 40 employees on a manager's team. The manager opens each file. The AI has suggested ratings, drafted narrative feedback, and flagged three employees for performance improvement plans. The manager clicks through. Some files take 20 seconds. The complex ones take two minutes.\n\nAt the end of 90 minutes, 40 performance reviews have been 'completed.'\n\nBut were they? Or were they approved?\n\nThe difference matters enormously for governance — and for the employees whose careers those documents will follow."
    },
    {
      type: "case-intro",
      caseNumber: "OECD REPORT, 2023",
      heading: "Algorithmic Management at Work",
      location: "Worldwide — documented across multiple industries",
      text: "The OECD defines algorithmic management as 'the use of data-driven tools to monitor, evaluate, and direct workers in real time.'\n\nIn its 2023 report on algorithmic management in the workplace, the OECD documented the spread of these systems across industries — from gig platforms (which we covered in Day 8) to traditional office environments.\n\nKey findings:\n\nPERFORMANCE MONITORING: AI systems that track keystrokes, application usage, communication patterns, and work output have become standard in many knowledge work environments. The data feeds directly into performance evaluations.\n\nFEEDBACK GENERATION: AI systems that draft performance review language based on logged data are increasingly common. In some organizations, managers primarily edit rather than author performance narratives.\n\nPIP TRIGGERING: Systems that automatically flag employees for Performance Improvement Plans based on measured outputs — without requiring a manager to identify the pattern first.\n\nTHE ACCOUNTABILITY GAP: When AI flags an employee for a PIP and a manager approves it in a brief review, who made the decision? The employee may experience it as a manager's judgment. The manager may experience it as confirming what the data showed. Neither is fully accurate — and neither is fully accountable."
    },
    {
      type: "finding",
      label: "THE GOVERNANCE RISK",
      text: "AI-generated performance assessments can encode the same biases as AI hiring tools — if the training data reflects historical patterns where certain groups were rated lower, the AI will rate them lower. Research has documented that AI feedback systems can replicate gender, race, and disability biases present in historical reviews. The difference from hiring: the employee is already inside the organization and may have no visibility into how the system assessed them."
    },
    {
      type: "icm",
      text: "Two ICM questions that should precede any AI performance management deployment:\n\n\"When the AI generates a performance rating or feedback narrative, what specific data is it drawing on — and has that data been validated as a fair and accurate measure of performance for all employee groups?\"\n\n\"What is the human review standard? Not 'a manager reviews it' — but specifically: how long should that review take, what must the manager look at beyond the AI output, and under what conditions are they authorized to override the recommendation?\"\n\nThe second question is the one most organizations have never answered. Meaningful human oversight isn't created by putting a checkbox in front of a manager. It's created by designing a process where overriding the AI is as natural as accepting it — and where the review leaves a trail."
    },
    {
      type: "terms",
      terms: [
        { term: "Algorithmic Management", definition: "The use of AI systems to monitor, evaluate, direct, and discipline workers in real time — moving managerial functions from humans to software. Documented to increase work intensity and reduce worker autonomy." },
        { term: "Automation Bias", definition: "The tendency to over-trust automated recommendations and under-scrutinize them, especially under time pressure. A major risk in AI-assisted performance reviews where the AI recommendation shapes the manager's frame before they assess." },
        { term: "Performance Improvement Plan (PIP)", definition: "A formal document placing an employee on notice that their performance is insufficient and specifying required improvements. AI-triggered PIPs raise due process and discrimination concerns when the triggering logic is opaque." }
      ]
    },
    {
      type: "assignment",
      heading: "The Review Quality Test",
      text: "Think about the last performance review cycle at your organization.\n\n1. What role did AI or automated tools play in generating ratings, drafting feedback, or flagging employees?\n2. What was the expected time for a manager to complete each review?\n3. How often do managers override or significantly modify AI-generated content?\n\nAt what point does AI-supported performance management become algorithmic management? What is the line your organization has drawn — and is it written down anywhere?"
    }
  ]
},

{
  id: 20,
  title: "The Pay Gap Machine",
  subtitle: "How algorithmic compensation systems can automate historical inequity — and what governance looks like",
  phase: 4,
  readTime: 45,
  listenTime: 30,
  teaser: "Market data feeds. Automated salary banding. AI offer recommendations. When pay decisions run on historical data, historical pay gaps don't close — they scale.",
  content: [
    {
      type: "scene",
      heading: "The Formula That Felt Objective",
      text: "For decades, compensation professionals have been moving toward more systematic, data-driven pay decisions — market surveys, salary bands, compa-ratios, pay equity analyses.\n\nThe goal was objectivity. Reduce manager discretion. Reduce the variability that allowed bias to creep in through individual decisions.\n\nAI compensation tools are the logical extension of this trend. An algorithm that processes market data, internal equity factors, performance scores, and role requirements to produce an offer recommendation feels like the ultimate in objective pay-setting.\n\nThe problem: what the algorithm calls objective, researchers call encoding the past.\n\nIf the market data reflects a labor market where women and people of color have historically been underpaid, the algorithm learns that underpaying them is market-rate. If the internal equity factors include historical pay — the employee's current salary, last salary increase, time in role — they carry every bias that went into those historical numbers.\n\nThe algorithm didn't create the pay gap. But deployed without governance, it automates it forward."
    },
    {
      type: "case-intro",
      caseNumber: "CASE #2023-07",
      heading: "The Uber Pay Algorithm Challenge",
      location: "United Kingdom — 2023",
      text: "In 2023, Uber drivers in the UK served legal demands on the company to halt its AI-driven pay system.\n\nThe drivers, represented by the App Drivers & Couriers Union, challenged Uber's algorithmic pay-setting on multiple grounds: lack of transparency about how the algorithm calculated earnings, inability to contest algorithmic decisions, and concern that the system produced racially disparate pay outcomes for drivers working similar routes.\n\nThe case drew on the UK General Data Protection Regulation (GDPR), which gives workers rights against solely automated decisions that significantly affect them — including the right to explanation and the right to human review.\n\nUber's response was to provide more transparency about how rates were calculated.\n\nThe case established a pattern that HR professionals in all industries need to understand: algorithmic pay systems are not immune from discrimination law. Workers are developing legal strategies to challenge them. And the GDPR right to explanation — increasingly mirrored in US state laws — requires employers to be able to explain how automated pay decisions are made."
    },
    {
      type: "finding",
      label: "THE CALIFORNIA STANDARD",
      text: "California's Civil Rights Council regulations on automated employment decision systems explicitly include compensation within their scope. An AI system that materially influences pay decisions — offer amounts, merit increases, equity grants — is subject to the same disparate impact analysis as a hiring tool. HR professionals in California are already operating under this standard. It is likely to spread."
    },
    {
      type: "icm",
      text: "Two ICM interview questions for any AI compensation tool:\n\n\"What data sources does this system use, and have those sources been analyzed for historical bias? Specifically: does the market data or internal equity data reflect historical pay disparities by gender, race, or other protected characteristics?\"\n\n\"When the system produces a recommendation that differs significantly from what a manager or recruiter would have offered, what is the process to investigate why — and is there a mechanism to flag potential disparate impact before the offer goes out?\"\n\nMost compensation teams have never been asked these questions about their tools. That's not a criticism — it's an observation about where governance attention has historically focused. Pay equity analysis has gotten more sophisticated. AI pay tool governance has not kept pace."
    },
    {
      type: "terms",
      terms: [
        { term: "Compa-Ratio", definition: "An employee's actual pay divided by the midpoint of their salary band. Used to assess pay positioning within a range. AI systems using compa-ratios can perpetuate historical pay disparities if the ratio reflects past underpayment." },
        { term: "Market Pricing Data", definition: "Survey data on what comparable roles pay in the external market. Used to set salary bands. If the underlying surveys reflect a market with historical pay disparities, AI tools trained on that data reproduce those disparities as 'market rate.'" },
        { term: "Right to Explanation", definition: "A legal right — established under GDPR and emerging in US state laws — for individuals to receive a meaningful explanation of automated decisions that significantly affect them, including pay decisions." }
      ]
    },
    {
      type: "assignment",
      heading: "The Pay Tool Audit",
      text: "If your organization uses AI or algorithmic tools in any part of compensation decisions — offer generation, merit recommendations, equity refresh, pay band placement — answer these questions:\n\n1. What data sources does the tool use, and have those sources been analyzed for historical bias?\n2. Does the tool produce recommendations that differ by demographic group for employees in comparable roles? Has anyone checked?\n3. Can a manager explain to an employee why they received a specific pay recommendation?\n\nIf AI recommends a pay move, what facts would you insist on seeing before approving it?"
    }
  ]
},

{
  id: 21,
  title: "The Always-On Workplace",
  subtitle: "Employee monitoring, surveillance, and the governance line between legitimate oversight and control",
  phase: 4,
  readTime: 50,
  listenTime: 35,
  teaser: "During COVID, employee monitoring software sales increased 300%. France fined Amazon $35 million. The question isn't whether to monitor — it's what, why, and who knows.",
  content: [
    {
      type: "scene",
      heading: "The Pandemic Accelerant",
      text: "When offices closed in March 2020, a specific anxiety gripped many employers: how do we know people are actually working?\n\nThe answer, for many organizations, was surveillance software.\n\nSales of employee monitoring tools — sometimes called 'bossware' — increased by an estimated 300% during the first year of the pandemic. Tools that tracked keystrokes, took periodic screenshots, monitored application usage, tracked mouse movements, measured time in video calls, and analyzed email patterns proliferated across industries.\n\nBy 2022, some form of digital employee monitoring was standard in many white-collar environments. Workers who had never been directly observed were now leaving digital trails that managers, HR, and AI systems could analyze.\n\nThe governance questions this raises are not hypothetical. They're playing out in courts, labor relations boards, and HR offices right now."
    },
    {
      type: "case-intro",
      caseNumber: "CASE #2022-09",
      heading: "Amazon's $35 Million Fine",
      location: "France — CNIL ruling, 2022",
      text: "In September 2022, France's data protection authority — the CNIL — fined Amazon France Logistique €32 million (approximately $35 million USD) for 'excessively intrusive' monitoring of warehouse workers.\n\nThe specific violations:\n\nSCANNER RATE TRACKING: Amazon's system tracked the time between each scan of a package. If a worker paused for more than 10 minutes — even to use the bathroom — the system flagged it as 'idle time' or 'latency.' The algorithm tracked this in real time and generated reports on each worker's 'productivity.'\n\nINTERRUPTION MONITORING: The system even tracked 'stow interruptions' — the seconds between putting down one package and picking up the next.\n\nFREQUENCY OF MEASUREMENT: The CNIL found that the monitoring was not proportionate to a legitimate business purpose. It wasn't safety monitoring or quality control — it was continuous measurement of every micro-movement a worker made throughout their shift.\n\nThe CNIL ruled this violated the GDPR principle of data minimization — you can only collect data necessary for a specific legitimate purpose. Tracking whether a worker moved their hands every 10 seconds for an entire shift was not necessary for any legitimate purpose the company could articulate.\n\nThe privacy regulator didn't prohibit monitoring. It required proportionality."
    },
    {
      type: "quote",
      text: "The rise of bossware means workers have nowhere to hide from management. The question is whether this is about productivity — or about control.",
      attribution: "ITPro, The Rise of Bossware, 2023"
    },
    {
      type: "finding",
      label: "THE PROPORTIONALITY PRINCIPLE",
      text: "Every monitoring governance framework — GDPR, ICO guidance, NLRB guidance, state wiretapping laws — converges on the same principle: monitoring must be proportionate to a legitimate purpose. Safety monitoring is different from productivity surveillance. Quality assurance sampling is different from continuous keystroke logging. The question isn't whether you can monitor. It's: what are you monitoring, why, and does the benefit justify the intrusion on dignity and autonomy?"
    },
    {
      type: "icm",
      text: "An ICM interview for any monitoring program would ask:\n\n\"What decisions will this monitoring data be used to make? Who will see it? How long will it be retained?\"\n\n\"If an employee asked why they were being monitored and what was done with the data, could you give them a specific, honest answer?\"\n\n\"Is the level of monitoring we're doing proportionate to the business need — or are we collecting data because we can, not because we need it?\"\n\nThe third question is the hardest. 'We can collect this data' is not a governance justification. 'We need this data for this specific purpose' is. If the purpose can't be articulated specifically, the monitoring shouldn't be implemented."
    },
    {
      type: "terms",
      terms: [
        { term: "Bossware", definition: "Software that continuously monitors employee behavior — keystrokes, screenshots, location, communication patterns. Associated with surveillance practices that go beyond legitimate business oversight into continuous tracking of worker activity." },
        { term: "Data Minimization", definition: "A GDPR principle requiring organizations to collect only the data necessary for a specified, explicit, legitimate purpose. Applied by the CNIL in fining Amazon for its warehouse monitoring program." },
        { term: "Section 7 Rights (NLRA)", definition: "Under the National Labor Relations Act: employees' rights to organize, discuss wages and working conditions, and engage in collective action. The NLRB has specifically warned that AI monitoring can chill these rights by creating a chilling effect on protected activity." }
      ]
    },
    {
      type: "assignment",
      heading: "The Monitoring Audit",
      text: "Identify one form of employee monitoring your organization currently uses — time tracking, productivity measurement, communication analysis, anything.\n\nAsk:\n1. What specifically is being collected?\n2. What decision does it inform?\n3. Are employees fully aware that this monitoring occurs and how the data is used?\n4. Is the level of monitoring proportionate to the stated purpose?\n\nWhat kinds of monitoring feel legitimate for safety or security — and what kinds start to undermine trust and dignity? Where is your organization's line, and is it written down?"
    }
  ]
},

{
  id: 22,
  title: "The Prediction Machine",
  subtitle: "Flight risk scores, talent forecasts, and the governance questions predictive people analytics can't answer for you",
  phase: 4,
  readTime: 45,
  listenTime: 30,
  teaser: "Software that predicts who's about to quit, who's a flight risk, who has high potential. Predicted by what? For what purpose? And who gets told?",
  content: [
    {
      type: "scene",
      heading: "When the Algorithm Knows Before You Do",
      text: "A manager opens their HRBP dashboard on a Monday morning. Beside three of their direct reports' names is a small indicator: a flight risk score.\n\nSarah: High Risk. Marcus: Medium Risk. Aisha: High Risk.\n\nThe manager didn't ask for this information. The system generated it automatically from data the employees don't know is being analyzed — their engagement survey responses, internal mobility searches, email metadata patterns, time spent on internal job postings, frequency of 1:1 cancellations, and more.\n\nWhat does the manager do with this information?\n\nIn organizations with good governance: they use it as a prompt to have a better career conversation. They look for context. They ask questions they might not have thought to ask.\n\nIn organizations with poor governance: they stop putting Sarah and Aisha on stretch assignments. They invest more in Marcus because he seems more stable. They make resource decisions based on predictions without telling the predicted-upon employees why.\n\nThe algorithm gave the manager a starting point. The manager's judgment — and the governance framework around it — determines whether it helps or harms."
    },
    {
      type: "finding",
      label: "THE GOVERNANCE QUESTIONS",
      text: "For any predictive people analytics tool, governance requires answering these questions before deployment: (1) What data is the prediction based on, and is that data a valid predictor of the outcome being forecast? (2) Who sees the predictions, and what decisions are they authorized to make based on them? (3) Do employees know this analysis is occurring? (4) Is the model validated for disparate impact — does it predict risk equally accurately across demographic groups? (5) What happens when the prediction is wrong?"
    },
    {
      type: "scene",
      heading: "The Compounding Risk",
      text: "Predictive people analytics has a compounding problem that other AI HR tools don't.\n\nIf a flight risk model flags Sarah as high-risk and her manager responds by giving her fewer development opportunities, Sarah becomes more likely to leave. The prediction creates the outcome it predicted.\n\nThis is called a self-fulfilling prophecy — and it's a known risk in predictive analytics generally. In HR, it has specific legal implications: if the model disproportionately flags employees of a particular demographic as flight risks, and those employees then receive fewer opportunities as a result, the model has created discriminatory outcomes through a mechanism that no one designed but everyone contributed to.\n\nThe fix is not to avoid predictions. It's to govern what happens after the prediction arrives — specifically, what decisions it can and cannot influence, and how those decisions are reviewed."
    },
    {
      type: "icm",
      text: "ICM's 60/30/10 principle applies directly to predictive people analytics:\n\n60% deterministic: the data collection, processing, and model scoring can and should be systematized.\n\n30% rules-based: the rules for who can see predictions, what decisions they can influence, and what requires human review can and should be codified. Not left to each manager's judgment.\n\n10% human judgment: the actual conversation with the employee about their engagement, their career, their challenges — that cannot be delegated to the model.\n\nThe failure mode in most organizations is that the 10% judgment is applied to decide whether to care about the prediction at all, while the 30% rules layer is left unwritten. Every manager makes their own call on what to do when the dashboard says 'High Risk.' That's not governance. That's the absence of governance."
    },
    {
      type: "terms",
      terms: [
        { term: "Flight Risk Score", definition: "An AI-generated prediction of the likelihood that an employee will voluntarily leave the organization within a specified timeframe. Based on patterns in behavioral, performance, and engagement data." },
        { term: "Self-Fulfilling Prediction", definition: "When a predictive system's output changes how people are treated, which then causes the predicted outcome — creating a feedback loop the model was not designed to produce. A specific governance risk in flight risk and potential scoring." },
        { term: "Predictive Validity (HR analytics)", definition: "The degree to which a predictive model accurately forecasts outcomes for the population it's applied to. Flight risk models must be validated for accuracy and for disparate impact across demographic groups before use in decisions." }
      ]
    },
    {
      type: "assignment",
      heading: "The Prediction Governance Framework",
      text: "If your organization uses any form of predictive people analytics — flight risk, high potential, attrition forecasting, anything — design the governance rules for that specific tool.\n\nAnswer:\n1. Who can see the predictions?\n2. What decisions is this output authorized to influence?\n3. What decisions is it explicitly NOT authorized to influence?\n4. How are employees informed that this analysis occurs?\n5. What's the process when a prediction appears to be wrong?\n\nWhen does predictive people analytics become helpful planning, and when does it become overconfident forecasting about people?"
    }
  ]
},

{
  id: 23,
  title: "The Legal Crossroads",
  subtitle: "Labor law, the NLRB, and how AI in the workplace became a collective bargaining issue",
  phase: 4,
  readTime: 50,
  listenTime: 35,
  teaser: "The NLRB said AI monitoring can violate workers' rights to organize. The NYT union said their company's AI standards were 'woefully inadequate.' AI governance is no longer just an HR compliance issue — it's a labor relations issue.",
  content: [
    {
      type: "scene",
      heading: "The Memo That Changed the Frame",
      text: "In October 2022, NLRB General Counsel Jennifer Abruzzo issued a memo that reframed how AI in the workplace should be understood.\n\nMemo GC 23-02 addressed a topic that many HR leaders hadn't connected to AI: Section 7 of the National Labor Relations Act.\n\nSection 7 protects employees' rights to organize, discuss wages and working conditions with each other, and engage in collective action — whether or not they are members of a union.\n\nThe General Counsel's argument: electronic monitoring and algorithmic management systems can violate these rights. When employers use AI to monitor communications, track which employees are meeting with union organizers, measure productivity changes before and after union conversations, or generate 'risk scores' based on behavior associated with organizing activity — these tools can chill protected speech and activity.\n\nThe memo didn't say AI monitoring is illegal. It said the NLRB will scrutinize it the same way it scrutinizes other management practices that could deter protected activity."
    },
    {
      type: "case-intro",
      caseNumber: "NLRB GC 23-02",
      heading: "AI and the Right to Organize",
      location: "National Labor Relations Board — Washington, DC, 2022",
      text: "The NLRB memo identified several specific AI and monitoring practices that could interfere with Section 7 rights:\n\nELECTRONIC SURVEILLANCE: Monitoring email and message content, tracking physical movements, or analyzing communication metadata in ways that reveal employees' organizing activity or discussions about working conditions.\n\nALGORITHMIC PRODUCTIVITY MANAGEMENT: Using AI to set work pace or penalize productivity reductions that could be associated with employees taking time to discuss working conditions with colleagues.\n\nCHILLING EFFECT: Even surveillance that doesn't explicitly target union activity can create a chilling effect — employees who know they are being monitored closely may self-censor discussions that the law protects.\n\nThe memo called for a balancing test: legitimate business justifications for monitoring must be weighed against the impact on employees' ability to exercise their rights freely.\n\nFor HR professionals: this means AI monitoring programs need to be reviewed not just for privacy compliance, but for labor relations compliance. In unionized workplaces especially, AI tools that affect working conditions may be subject to bargaining obligations."
    },
    {
      type: "quote",
      text: "The New York Times union told management their AI standards were 'woefully inadequate.' AI is no longer a tech department issue. It's a bargaining table issue.",
      attribution: "Axios, reporting on NYT labor negotiations, 2024"
    },
    {
      type: "finding",
      label: "THE EMERGING LANDSCAPE",
      text: "AI governance in the workplace now intersects with four legal domains simultaneously: employment discrimination law (Title VII, ADA, ADEA), AI-specific regulation (NYC LL144, Colorado SB 205, EU AI Act), data privacy law (GDPR, CPRA, state wiretapping laws), and labor law (NLRA, state labor relations acts). A compliance approach that addresses only one of these domains misses the others. Comprehensive HR AI governance must be cross-functional — involving Legal, Privacy, HR, Labor Relations, and People Analytics."
    },
    {
      type: "icm",
      text: "Phase IV ends where Phase III ended: with the question of who owns the governance problem.\n\nEvery case in Phase IV — hiring AI, performance management, compensation algorithms, monitoring, prediction systems — has the same structural failure underneath it. Nobody ran the Interview for all the stakeholders who should have been in the room.\n\nThe engineer building the system interviewed the business requirement.\n\nNobody interviewed the employee whose career the system would affect.\n\nNobody interviewed the union rep who represents their interests.\n\nNobody interviewed the EEOC charge investigator who would eventually review the outcomes.\n\nICM is not a checklist. It's a commitment to understanding a process from every perspective that matters — before you automate it.\n\nPhase V is about building the structure that makes that commitment permanent."
    },
    {
      type: "terms",
      terms: [
        { term: "Section 7 Rights", definition: "Under the National Labor Relations Act: the right of employees to engage in concerted activity for mutual aid or protection — including organizing, discussing wages, and collective bargaining. Protected regardless of union membership." },
        { term: "Chilling Effect", definition: "When surveillance or monitoring causes employees to self-censor protected activity — not because of explicit prohibition, but because of fear of observation and consequences. The NLRB specifically addresses this as a legal concern with AI monitoring." },
        { term: "Bargaining Obligation", definition: "The employer's legal duty to negotiate with a union over changes to terms and conditions of employment. AI tools that affect work pace, monitoring, performance evaluation, or job structure may trigger bargaining obligations in unionized workplaces." }
      ]
    },
    {
      type: "assignment",
      heading: "The Cross-Functional Compliance Review",
      text: "Think about one AI tool your organization uses that affects employees after they're hired — performance, monitoring, compensation, prediction.\n\nList every legal domain it touches:\n- Employment discrimination law (Title VII, ADA, ADEA)?\n- AI-specific regulation (NYC LL144, Colorado SB 205)?\n- Privacy law (GDPR, CPRA, state law)?\n- Labor law (NLRA, state equivalents)?\n\nFor each domain it touches: who in your organization is responsible for that domain's compliance?\n\nAre all those people in the same conversation about this tool? If they're not, that's your governance gap.\n\nYou have now mapped Phase IV. Tomorrow you start building the response."
    }
  ]
},

// ─── PHASE V: BUILDING THE TASK FORCE ──────────────────────────────────────

{
  id: 24,
  title: "The Inventory",
  subtitle: "How to identify, catalog, and risk-tier every AI system in your organization",
  phase: 5,
  readTime: 40,
  listenTime: 25,
  teaser: "Most organizations don't know how many AI systems they have. This episode walks you through finding them all and sorting them by risk.",
  content: [
    {
      type: "scene",
      heading: "The Invisible Infrastructure",
      text: "Before you can govern it, you have to find it.\n\nMost HR leaders, when asked how many AI systems their organization uses, guess a number. The actual number is almost always higher — often dramatically higher.\n\nThis is not because people are careless. It's because AI has become infrastructure. It's embedded in platforms you already use. It arrives under SaaS licenses. It's described in product updates as 'enhanced capabilities' and 'intelligent features.' It's turned on by default.\n\nA 2023 survey found that 83% of organizations using AI in HR couldn't provide a complete inventory of those systems. Not because they didn't have the systems — but because nobody had written them all down.\n\nYou can't govern what you haven't mapped."
    },
    {
      type: "case-intro",
      caseNumber: "CASE FILE — DISCOVERY",
      heading: "The Litigation Discovery Problem",
      location: "U.S. Federal Courts, Ongoing",
      text: "When a lawsuit involves AI-assisted decisions, the first thing opposing counsel does is ask for the inventory.\n\nThey send a broad discovery request: every AI tool, every algorithm, every automated system involved in any decision affecting the plaintiffs.\n\nThe HR department scrambles. IT starts pulling vendor contracts. Someone finds a Slack message about a product that was piloted eighteen months ago. The software company gets subpoenaed.\n\nIn multiple cases involving AI discrimination claims, the inventory that emerged during discovery was larger than what HR could have produced before the lawsuit.\n\nThis is not a hypothetical. In the Mobley v. Workday case, in EEOC investigations, in state agency audits — the pattern recurs. Companies using AI tools in hiring and HR decisions are often unable to produce a complete, accurate list of those tools on short notice.\n\nThe lesson: your AI inventory shouldn't be something you build under subpoena. It should be something you maintain continuously, so you can answer any question — from an employee, a regulator, or a judge — with the same answer you'd give on a Tuesday morning when nothing is on fire."
    },
    {
      type: "quote",
      text: "You cannot manage what you haven't mapped. The organizations that get into trouble with AI in HR almost always have the same first problem: they don't have a complete, honest inventory of what they're running.",
      attribution: "NIST AI Risk Management Framework — Govern function, paraphrased"
    },
    {
      type: "finding",
      label: "THE FOUR PLACES AI HIDES",
      text: "1. PURPOSE-BUILT HR AI TOOLS — The systems you bought specifically for AI capabilities: ATS scoring, video interview analysis, performance feedback generation, flight risk prediction.\n\n2. PLATFORM-EMBEDDED AI — Features inside tools you already have: HRIS predictive analytics, scheduling optimization, attrition forecasting built into your engagement platform. These often get turned on during a product update.\n\n3. SHADOW AI — Tools individual employees or teams adopted without formal approval: ChatGPT for writing performance reviews, AI writing assistants for offer letters, individual subscriptions to scoring tools.\n\n4. LEGACY AI — Systems built or deployed years ago that are no longer actively monitored but are still running: old rule-based scoring systems, recommendation engines in talent marketplaces, automated filtering logic nobody updated when the job requirements changed.\n\nYour inventory is only complete when it covers all four categories. Most programs only know about category one."
    },
    {
      type: "icm",
      text: "The ICM interview for inventory has one core question: 'What automated systems affect this decision?'\n\nYou ask it for every significant HR process: sourcing, screening, interviewing, hiring, onboarding, performance, compensation, promotion, termination, monitoring.\n\nFor each process, you interview three people: the HR owner, the technology owner, and the employee or manager closest to the actual decision.\n\nThe HR owner knows what they bought. The technology owner knows what they deployed. The employee knows what they actually use.\n\nYou only have the full picture when all three answers match — and the answers almost never match on the first interview.\n\nThe gaps between what was bought, what was deployed, and what is actually being used: that's your governance inventory problem."
    },
    {
      type: "terms",
      terms: [
        { term: "AI System Inventory", definition: "A comprehensive catalog of all artificial intelligence and automated decision-making systems used by an organization, including purpose-built tools, platform features, and legacy systems. The foundation of any governance program — you cannot manage what you haven't documented." },
        { term: "Shadow AI", definition: "AI tools adopted by employees or teams outside of official IT and HR procurement processes. Often represents the largest gap in organizational AI inventories, particularly as AI becomes embedded in everyday productivity tools." },
        { term: "Risk Tier (AI)", definition: "A classification of an AI system based on the significance of the decisions it influences. High risk: hiring, promotion, pay, termination. Medium risk: scheduling, monitoring, benefits navigation. Low risk: document drafting, information retrieval. Tier determines the level of oversight required." }
      ]
    },
    {
      type: "assignment",
      heading: "Map Your Stack",
      text: "Start your AI inventory — even if it's just for one HR process you own.\n\nPick one process: hiring, performance reviews, compensation, engagement — something you're directly involved in.\n\nFor that process, answer:\n1. What automated systems are involved at any step?\n2. For each system: what decision does it influence?\n3. For each system: who approved its use, and when?\n4. For each system: when was it last reviewed for accuracy or fairness?\n5. What would you find if you asked every individual involved what tools they're using personally?\n\nWhen you finish, estimate: if you did this exercise for every HR process in your organization, how long would it take?\n\nThat duration tells you something important about your governance readiness."
    }
  ]
},

{
  id: 25,
  title: "The Vendor Problem",
  subtitle: "When your AI was built by someone else — procurement governance and third-party risk",
  phase: 5,
  readTime: 45,
  listenTime: 30,
  teaser: "Most HR AI is bought, not built. The Workday lawsuit established something important: buying the tool doesn't transfer the liability.",
  content: [
    {
      type: "scene",
      heading: "The Indemnification Clause",
      text: "One sentence in a vendor contract is worth reading more carefully than almost anything else.\n\nIt's usually buried in section 14. Or section 19. Wherever the lawyers put the indemnification and limitation of liability provisions.\n\nIt says something like: 'Vendor shall not be liable for any claims arising from Client's use of the Software in violation of applicable law.'\n\nTranslation: if you use this tool in a way that breaks the law — even if the tool was designed in a way that makes breaking the law likely — the liability is yours, not theirs.\n\nBuying the tool doesn't transfer accountability.\n\nThat's the Vendor Problem."
    },
    {
      type: "case-intro",
      caseNumber: "CASE NO. 23-CV-00770",
      heading: "Mobley v. Workday",
      location: "U.S. District Court, Northern District of California, 2023",
      text: "Derek Mobley applied for jobs at more than 100 companies between 2019 and 2020. He was rejected from all of them — companies using Workday's AI hiring and screening tools.\n\nMobley, a Black man in his forties with a mood disorder, filed a class action lawsuit alleging that Workday's AI screening algorithms discriminated against him and others on the basis of race, age, and disability.\n\nThe central legal question was novel: can a software vendor who is not the employer be held liable under federal anti-discrimination laws?\n\nWorkday moved to dismiss, arguing they were a vendor — not an employer, not an employment agency — and therefore not covered by Title VII, the ADEA, or the ADA.\n\nThe court largely denied that motion. It found that if Workday's tools were a proximate cause of employment decisions — if their algorithms were materially influencing who got hired — the case could proceed against the vendor directly.\n\nFor HR professionals, the significance goes beyond the legal outcome: vendors are not a liability firewall. The employee filing the complaint doesn't care whether the bias came from your code or their code. The EEOC doesn't either.\n\nThe employer who signed the contract and used the tool is accountable for the outcomes the tool produces."
    },
    {
      type: "quote",
      text: "Buying the tool doesn't transfer the accountability. The employer is still the employer. Signing a software contract doesn't give you permission to outsource your legal obligations.",
      attribution: "Employment law commentary on Mobley v. Workday"
    },
    {
      type: "finding",
      label: "THE SIX CONTRACT TERMS THAT MATTER",
      text: "When evaluating or renegotiating any AI vendor contract, these are the provisions that determine your governance position:\n\n1. AUDIT RIGHTS — Can you require an independent bias audit using your own customer data, not pooled client data? Who pays? How often? What happens if the audit finds problems?\n\n2. MODEL CHANGE NOTICE — Must the vendor notify you before material changes to the underlying model, scoring logic, or feature weights? How much notice? What counts as 'material'?\n\n3. VALIDATION DOCUMENTATION — Are you entitled to the technical validation documentation for the model as applied to your specific use case? Or only the vendor's standard marketing materials?\n\n4. DATA HANDLING — Who owns the data your candidates and employees generate through the tool? Can the vendor use your data to train their model? What are your obligations to those individuals if they do?\n\n5. ADVERSE IMPACT REPORTING — Does the vendor provide adverse impact analysis as a contract deliverable, or only on request, or not at all?\n\n6. EXIT RIGHTS — What happens to candidate and employee data when you end the contract? Can you retrieve it in a portable format? Is there a transition assistance obligation?"
    },
    {
      type: "icm",
      text: "Vendor due diligence is an ICM interview you conduct before you sign.\n\nThe interview has three subjects: the vendor's claims, the vendor's evidence, and the vendor's contract.\n\nClaims without evidence are a red flag. Evidence that can't be independently verified is a yellow flag. Contracts that prevent you from independently verifying evidence are a governance failure.\n\nThe vendor discount — 'sign now for 15% off' — is a pressure tactic that exploits urgency to prevent diligence. Good governance treats a signed contract as a governance artifact, not just a procurement transaction.\n\nProcurement owns the contract. Governance owns the question: does this contract give us the rights we need to actually govern this tool?"
    },
    {
      type: "terms",
      terms: [
        { term: "Proximate Cause (AI liability)", definition: "The legal concept that an AI vendor's tool may be directly responsible for discriminatory outcomes if it materially influences employment decisions — even if the vendor is not the employer. The Mobley v. Workday case established this as a viable legal theory." },
        { term: "Adverse Impact Analysis", definition: "A statistical evaluation of whether a selection tool produces significantly different pass rates across demographic groups. The 4/5ths rule (80% rule) is the standard threshold: if a protected group passes at less than 80% of the highest-passing group's rate, adverse impact is indicated." },
        { term: "Vendor Governance Risk", definition: "The governance exposure created by relying on a third-party vendor for AI that influences employment decisions. Includes: inability to audit, lack of model change notice, pooled vs. customer-specific validation, and contractual terms that prevent independent review." }
      ]
    },
    {
      type: "assignment",
      heading: "The Vendor Governance Checklist",
      text: "Review one AI vendor contract you currently have — or ask your procurement or legal team for access to one.\n\nUsing the six terms from today's Finding, audit the contract:\n1. Do you have audit rights using your own customer data?\n2. Are you entitled to model change notice before updates?\n3. Does the contract give you access to independent validation documentation?\n4. What are the data handling provisions for candidate and employee data?\n5. Is adverse impact reporting a contract deliverable?\n6. What are your rights when the contract ends?\n\nFor every provision that doesn't exist or is ambiguous: what would you add in the next negotiation cycle?\n\nThe goal isn't to make the vendor your compliance officer. It's to make sure you have the information you need to make decisions about a tool that's making decisions about people."
    }
  ]
},

{
  id: 26,
  title: "The Audit",
  subtitle: "Bias auditing, algorithmic auditing, and what an independent review actually looks like",
  phase: 5,
  readTime: 45,
  listenTime: 30,
  teaser: "NYC Local Law 144 requires annual bias audits for AI hiring tools. What does an audit actually involve — and what does a real finding look like?",
  content: [
    {
      type: "scene",
      heading: "The Number That Changed Employment Law",
      text: "There's a number that has governed employment screening since 1978.\n\nEighty percent.\n\nMore precisely: the four-fifths rule. If a selection procedure passes members of a protected group at less than 80% of the rate it passes the highest-passing group, that disparity is significant enough to indicate potential discrimination — and requires investigation.\n\nThis rule comes from the EEOC's Uniform Guidelines on Employee Selection Procedures. It was written for paper-and-pencil tests and structured interviews. But it applies equally to AI screening systems. The medium doesn't change the obligation.\n\nThe bias audit is the systematic process of running that calculation — and others — to determine whether an AI tool is producing discriminatory outcomes in practice.\n\nNYC Local Law 144 was the first law to mandate it, publicly, annually. It will not be the last."
    },
    {
      type: "case-intro",
      caseNumber: "EEOC INVESTIGATION — AI VIDEO INTERVIEWS",
      heading: "The HireVue Investigation",
      location: "U.S. Equal Employment Opportunity Commission, 2021–2023",
      text: "HireVue is one of the largest video interview AI platforms in the world. Used by hundreds of major employers for initial candidate screening, it analyzed candidates' words, voice patterns, and — for a period — facial expressions to generate competency scores.\n\nIn 2021, the Electronic Privacy Information Center filed a complaint with the FTC arguing that HireVue's facial expression analysis was not valid science, and that candidates weren't adequately informed about how they were being scored.\n\nHireVue discontinued facial expression analysis in 2021, before regulators acted.\n\nSeparately, the EEOC has investigated multiple employers using AI video interview tools. In several cases, candidates with disabilities — including speech impairments, hearing conditions, and neurodivergence — were systematically scored lower not because of job-relevant factors, but because their natural communication patterns didn't match the model's expectations.\n\nThe audit lesson: validating a tool means testing it against the population that will actually use it. A tool validated on one demographic group may produce disparate results when deployed broadly. A genuine bias audit tests the tool using your data, your candidates, your context — not the vendor's aggregate performance report."
    },
    {
      type: "quote",
      text: "An annual audit is a snapshot. What you actually need is a governance program. The audit is evidence. The governance is what you do with the evidence.",
      attribution: "NIST AI Risk Management Framework, Measure function"
    },
    {
      type: "finding",
      label: "WHAT AN AUDIT ACTUALLY MEASURES",
      text: "A full algorithmic audit for an HR AI tool covers four dimensions:\n\n1. ADVERSE IMPACT ANALYSIS — Does the tool produce statistically significant disparities in selection rates across race, sex, age, disability, or other protected classes? The 4/5ths rule is the threshold for investigation; full statistical significance testing is the standard practice.\n\n2. VALIDITY ANALYSIS — Does the tool actually predict what it claims to predict? Predictive validity: do high scorers actually perform better on the job? Content validity: do the competencies being assessed actually relate to job requirements?\n\n3. CROSS-GROUP FAIRNESS — Does the tool maintain consistent predictive validity across demographic groups? A tool can show no adverse impact on selection rates but still predict accurately for one group while performing poorly for another.\n\n4. PROCESS AUDIT — Were the implementation, training, testing, and deployment procedures documented, consistent, and legally defensible?\n\nFor NYC Local Law 144 specifically: the bias audit must be conducted by an independent auditor with no financial relationship with the employer or vendor, published publicly, and repeated annually. 'Independent' has teeth — the vendor cannot conduct their own audit and call it compliant."
    },
    {
      type: "icm",
      text: "The ICM interview for a bias audit starts before the audit — during the design of the tool.\n\nA pre-deployment ICM interview should ask:\n— What training data is this model built on?\n— Is that training data representative of the applicant population this tool will evaluate?\n— Does the job requirement analysis underlying this model reflect current job reality?\n— What is the intended selection rate, and what will happen if the actual rate produces adverse impact?\n— What accommodation pathway exists for candidates who can't participate in the standard tool format?\n\nThese questions don't require a statistician. They require someone willing to ask them before signing the contract — before the tool is live, before real candidates are affected.\n\nMost bias audits find problems that were already present at the design stage. The interview is the instrument that catches those problems before they become litigation."
    },
    {
      type: "terms",
      terms: [
        { term: "Four-Fifths Rule (80% Rule)", definition: "The EEOC standard under which adverse impact is indicated when a selection procedure passes a protected group at less than 80% of the rate for the highest-passing group. Not a legal safe harbor — a threshold that triggers investigation and documentation obligations." },
        { term: "Predictive Validity", definition: "The degree to which a selection tool accurately predicts future job performance. High predictive validity means high scorers actually perform better on the job. Required for legal defensibility of any employment screening tool under the EEOC Uniform Guidelines." },
        { term: "Independent Bias Auditor", definition: "Under NYC Local Law 144: an individual or firm that conducts the bias audit with no current employment or financial relationship with the employer or the vendor. The audit summary must be publicly posted on the employer's careers website. The independence requirement exists to prevent vendors from self-certifying compliance." }
      ]
    },
    {
      type: "assignment",
      heading: "Read an Audit Like a Lawyer",
      text: "Find one bias audit summary that has been publicly published. NYC Local Law 144 requires employers to post these on their careers sites, so several real examples exist.\n\nSearch for '[company name] bias audit NYC Local Law 144' — major companies like HireVue clients, Workday customers, and others have published them.\n\nRead it, then answer:\n1. What demographic comparisons does the audit report?\n2. What specific decision step does this audit cover — the full screening process, or just one tool?\n3. Does the report cover only adverse impact, or also predictive validity?\n4. How is the training or comparison dataset described?\n5. Who conducted the audit, and how is their independence established?\n6. If you were reviewing this audit as an EEOC investigator or plaintiff's attorney, what follow-up questions would you ask?\n\nA published bias audit is both a legal document and a governance artifact. Reading it like one tells you a great deal about the organization's governance posture."
    }
  ]
},

{
  id: 27,
  title: "The Task Force",
  subtitle: "Building an AI governance committee — roles, decision rights, and operating rhythm",
  phase: 5,
  readTime: 40,
  listenTime: 25,
  teaser: "You've learned the cases. You know the laws. Now: who sits in the room that makes decisions about AI, and what authority do they actually have?",
  content: [
    {
      type: "scene",
      heading: "The Room Where It Happens",
      text: "Every governance program has a room — physical or virtual — where the people with decision authority over AI systems meet.\n\nIf that room doesn't exist, the decisions happen anyway. They happen in vendor sales calls. They happen in software procurement processes where the buyer is evaluating features, not risk. They happen when a manager clicks 'enable' on a new platform capability. They happen everywhere except where they should: in a structured, documented, cross-functional review.\n\nBuilding an AI governance committee means designing that room.\n\nWho sits in it. What authority they have. What evidence they require before a decision is made. How they document their choices. And crucially — who can say 'not yet,' and have that decision respected."
    },
    {
      type: "case-intro",
      caseNumber: "GOVERNANCE MODEL",
      heading: "Microsoft's Responsible AI Board",
      location: "Redmond, Washington — 2019 to Present",
      text: "Microsoft is one of the few large organizations to publicly discuss the mechanics of its internal AI governance structure — not just its principles.\n\nTheir model: a cross-functional Aether Committee (AI and Ethics in Engineering and Research) supported by a dedicated Responsible AI Standards team. The committee has real decision-making authority — including the ability to halt product features — not just advisory or reporting functions.\n\nThe design principle they have been public about: the committee must have authority, not just visibility. A governance committee that can only observe or advise is a reporting function. A governance committee that can pause a deployment, require additional evidence, or escalate to executive leadership is a governance function.\n\nFor HR AI specifically, the implication is direct: whoever sits in the HR AI governance room needs to be able to say 'not yet' — and have that decision respected by the business unit, the HRIS team, and the vendor.\n\nWithout that authority, the room is theater."
    },
    {
      type: "quote",
      text: "Governance without authority is theater. The committee needs to be able to stop things, not just document them. The hardest part of building an AI governance committee isn't designing it — it's getting leadership to give it real power.",
      attribution: "HR technology governance practitioner"
    },
    {
      type: "finding",
      label: "THE GOVERNANCE COMMITTEE — CORE MEMBERS",
      text: "A functional HR AI governance committee needs representation from seven domains:\n\n1. LEGAL & EMPLOYMENT LAW — Regulatory exposure, new law monitoring, compliance with Title VII, ADA, ADEA, NYC LL144, Colorado SB 205, NLRA.\n\n2. PRIVACY & DATA PROTECTION — What data is collected, how it's used, whether data subject rights are addressed, vendor data handling obligations.\n\n3. HR OPERATIONS — The practical reality of how tools are being used versus how they were approved. Closest to actual deployment.\n\n4. PEOPLE ANALYTICS — Technical documentation review, vendor claim evaluation, bias testing commission or execution.\n\n5. INFORMATION SECURITY — Vendor security practices, data handling, access controls, incident response.\n\n6. EMPLOYEE RELATIONS / LABOR RELATIONS — Employee experience signals, accommodation request management, collective bargaining implications in unionized contexts.\n\n7. BUSINESS / LINE HR — The actual use case and business purpose the tool was acquired to serve. Governance needs to know what it's governing.\n\nThe committee also needs a defined mechanism for employee voice: how do affected employees surface concerns, request accommodations, or appeal AI-influenced decisions? Without this, the committee governs at a distance from the people it's protecting."
    },
    {
      type: "icm",
      text: "The governance committee is the institutionalization of the ICM interview.\n\nWithout the committee, the interview happens once — when a vendor does a demo and sales. With the committee, the interview becomes a recurring practice: at intake, at periodic review, at audit, at decommissioning.\n\nThe committee is the room where someone asks: 'Who did we interview before we deployed this? Who is missing from the picture we have of this tool's impact?'\n\nAnd has the authority to answer: 'We're not approving continued use until we talk to them.'\n\nEvery case in Phase IV had this same structural failure: no one had authority to pause the process and ask who hadn't been heard from yet. The committee is the structure that creates that authority — and uses it."
    },
    {
      type: "terms",
      terms: [
        { term: "AI Governance Committee", definition: "A standing cross-functional body responsible for reviewing, approving, monitoring, and decommissioning AI systems within an organization. Distinct from a task force (temporary) or advisory board (no authority) — it has actual decision-making power, including the authority to pause deployments." },
        { term: "Intake Process", definition: "The structured review a proposed AI tool must complete before organizational approval. Typically covers: use case documentation, risk classification, legal review, technical assessment, pilot scope, accommodation plan, monitoring cadence, and escalation criteria." },
        { term: "Decommissioning Trigger", definition: "A pre-defined condition under which an AI tool will be paused, narrowed, or retired. Examples: audit findings showing adverse impact above threshold, active EEOC charge or litigation, failure to produce required validation evidence, vendor acquisition, or material model change without notice." }
      ]
    },
    {
      type: "assignment",
      heading: "Design the Room",
      text: "You're building SummitPeak Systems' HR AI governance committee from scratch — the fictional company you'll meet in full on Day 29.\n\nUsing what you've learned over Phase V, design the structure:\n1. Who are the seven members — by function and role, not by name?\n2. What authority does the committee have that a normal advisory group doesn't?\n3. What must any new AI tool provide before the committee approves it for use?\n4. How often does the committee meet, and what triggers an emergency session outside the regular cadence?\n5. Who does the committee report to? Who monitors whether the committee itself is functioning?\n\nThis is a design exercise, not a research exercise. You have built the knowledge to answer these questions. Trust it."
    }
  ]
},

{
  id: 28,
  title: "The Score Card",
  subtitle: "Metrics, monitoring, and how you know your governance program is actually working",
  phase: 5,
  readTime: 40,
  listenTime: 25,
  teaser: "You can't manage what you don't measure. The metrics that separate real governance programs from compliance theater — and why most programs only measure the wrong things.",
  content: [
    {
      type: "scene",
      heading: "The Version That Looks Right on Paper",
      text: "There's a version of an AI governance program that looks exactly right on paper.\n\nIt has a committee. It has a policy. It has a vendor assessment process. It has an annual bias audit schedule.\n\nAnd it does nothing.\n\nThe governance exists as a set of documents in a SharePoint folder. The committee meets twice a year, approves everything, and never asks hard questions. The vendor assessments are completed by copying the vendor's own documentation into a template. The bias audits are scheduled, but findings are never acted upon.\n\nThis is governance theater. It has all the forms of accountability without any of the substance.\n\nThe score card is how you tell the difference."
    },
    {
      type: "case-intro",
      caseNumber: "CFPB INVESTIGATION — CREDIT AI",
      heading: "The Missing Metrics Problem",
      location: "Consumer Financial Protection Bureau — 2023",
      text: "In 2023, the Consumer Financial Protection Bureau found evidence that automated credit decision systems — AI tools embedded in mortgage and consumer lending — were producing racially discriminatory outcomes in communities across the country.\n\nOne finding that applies far beyond financial services: several of the companies had governance programs on paper. They had fair lending policies. They had review processes. They had compliance teams.\n\nWhat they didn't have: metrics that would have caught the problem before it became a regulatory finding.\n\nSpecifically — they were measuring inputs and activities, not outcomes. They were tracking whether reviews were completed, whether documentation was filed. They were not routinely measuring the actual adverse impact of their AI systems on outcomes for protected groups.\n\nThe CFPB called this the difference between activity metrics and outcome metrics.\n\nActivity metrics tell you governance happened.\n\nOutcome metrics tell you governance worked.\n\nOnly one of them prevents the lawsuit."
    },
    {
      type: "quote",
      text: "Activity metrics tell you governance happened. Outcome metrics tell you governance worked. You need both. But only one of them tells you whether the tool is actually harming anyone.",
      attribution: "Regulatory compliance principle — CFPB fair lending guidance"
    },
    {
      type: "finding",
      label: "THE GOVERNANCE SCORECARD FRAMEWORK",
      text: "A functioning AI governance program tracks metrics in four categories:\n\n1. INVENTORY HEALTH\n— Percentage of AI systems with current documentation and defined risk tier\n— Days since last review for each high-risk system\n— Count of systems added, modified, or retired in the last 90 days\n\n2. PROCESS COMPLIANCE\n— Percentage of new tools that completed intake before deployment\n— Count of tools deployed without formal review\n— Bias audit completion rate versus scheduled dates\n\n3. OUTCOME MONITORING\n— Adverse impact ratios by tool, updated at least quarterly\n— Accommodation request volume and resolution rate\n— Employee complaint volume related to AI-influenced decisions\n— Percentage of AI-assisted decisions with documented human review\n\n4. GOVERNANCE HEALTH\n— Committee attendance rate by required function\n— Count of decommissioning triggers activated versus investigated\n— Count of tools paused or narrowed after review\n— Board report completion by scheduled quarter\n\nA program that only tracks category two (process compliance) knows whether governance happened. A program that tracks category three (outcome monitoring) knows whether it's working."
    },
    {
      type: "icm",
      text: "The score card is the monitoring layer that makes governance continuous instead of episodic.\n\nWithout it, governance is a series of point-in-time decisions: intake, audit, committee review. These are necessary. But they only catch problems when someone happens to look.\n\nThe score card is what makes someone look, regularly, at whether the system is producing the outcomes it was designed to produce — and avoiding the harms it was designed to prevent.\n\nThe ICM interview is the beginning of governance. The score card is how you know if the governance is still doing its job, long after the interview is over.\n\nAt SummitPeak Systems — which you'll meet tomorrow — none of these metrics existed. The systems ran. Nobody measured. And by the time the EEOC charge arrived, the evidence gap was years wide."
    },
    {
      type: "terms",
      terms: [
        { term: "Activity Metric", definition: "A measurement of whether a governance process occurred — whether a review happened, whether an audit was conducted, whether documentation was filed. Necessary but insufficient: confirms governance happened, not that it worked." },
        { term: "Outcome Metric", definition: "A measurement of whether a governance process produced the intended result — whether adverse impact is within acceptable bounds, whether accommodation requests were resolved, whether AI-influenced decisions are producing fair outcomes. The category that distinguishes real governance from compliance theater." },
        { term: "Governance Maturity", definition: "A spectrum from ad hoc (governance responds only to incidents) through defined (governance has documented policy and process) through managed (governance has metrics and active monitoring) to optimizing (governance uses data to continuously improve). Most HR AI programs are currently at level one or two." }
      ]
    },
    {
      type: "assignment",
      heading: "Build the Baseline",
      text: "You have completed Phase V. Before the capstone, build your starting score card.\n\nFor one AI system you're familiar with — real or hypothetical — define the metrics you'd track across the four categories:\n\n1. Inventory Health: What three pieces of documentation would you require to be current for this system?\n2. Process Compliance: What two process checkpoints would you verify actually happened before this tool went live?\n3. Outcome Monitoring: What two outcome metrics would you measure at least quarterly?\n4. Governance Health: What one indicator would tell you the governance committee is doing real work, not just meeting?\n\nThen ask: if someone had been tracking these metrics for SummitPeak Systems, which of the problems in tomorrow's scenario would have been caught before a lawsuit was filed?\n\nYou're ready for the capstone."
    }
  ]
},

// ─── PHASE VI: THE CAPSTONE ─────────────────────────────────────────────────

{
  id: 29,
  title: "The Capstone: The Scenario",
  subtitle: "A fictional company. Eight AI systems. Two pending lawsuits. A board asking questions.",
  phase: 6,
  readTime: 60,
  listenTime: 45,
  teaser: "Day 29 gives you the scenario. Day 30 is your verdict. Everything you've learned over 30 days leads here.",
  content: [
    {
      type: "scene",
      heading: "The File Lands on Your Desk",
      text: "It's 5:30 p.m. on a Thursday.\n\nThe CHRO walks into your office and sets down a folder.\n\n'I need a governance assessment by tomorrow morning,' she says. 'The board's Human Capital and Risk Committee is asking questions. Legal has two open EEOC charges. And I just found out we have eight AI systems in HR that nobody has ever formally reviewed.'\n\nShe leaves. You open the folder.\n\nThis is what you find."
    },
    {
      type: "case-intro",
      caseNumber: "CAPSTONE FILE — SUMMITPEAK SYSTEMS, INC.",
      heading: "The Scenario",
      location: "Denver, Colorado — April 2026",
      text: "SummitPeak Systems, Inc. is a fictional U.S.-based, publicly traded industrial technology company with approximately 5,000 employees. Headquartered in Denver, with corporate offices in New York City, Austin, and Raleigh, and two U.S. manufacturing sites.\n\nThe company makes about 1,150 external hires and 300 to 350 promotions per year. HR runs on a modern SaaS stack.\n\nHere is what does not exist: no formal HR AI governance structure. No standing cross-functional review forum. No single inventory of AI systems. No standardized AI intake process. No defined policy for when an AI tool may advise versus materially influence a people decision.\n\nInformation Security has reviewed some vendors for cybersecurity. But HR, Legal, Privacy, Employee Relations, and People Analytics have never operated under a shared governance model.\n\nSummitPeak's HR team has activated or purchased eight AI systems over the last three years:\n\nCandidPath TalentSphere — External résumé ranking and candidate matching. Live since January 2023. Used for corporate, sales, and service hiring — roughly 18,000 applicants in 2025. Top-ranked applicants are auto-advanced for recruiter review. No current validation file or adverse-impact analysis on record.\n\nInterviewVue Insight — One-way video interviewing with AI-generated scoring, transcript summaries, and competency flags. Live since April 2023. Used for early-career sales, customer support, and engineering roles — roughly 4,200 candidates in 2025. Recruiters have been trained to treat the composite score as the primary screening signal.\n\nSkillGraph Marketplace — Internal talent marketplace, project matching, and promotion-readiness suggestions. Live since September 2024. Used across salaried populations, including NYC-linked roles. 'Ready in six months' signals began appearing in manager views in late 2025. No documented rule for how recommendations are used in promotion decisions.\n\nPulseLens CommentIQ — Employee survey sentiment analysis and theme extraction. Live since October 2024. Used on annual engagement and quarterly pulse survey comments. Output feeds 'manager attention' lists. Employees were promised anonymity at the team level, but no written standard exists for how AI summaries are reviewed.\n\nAttritIQ Retention Signal — Predicted attrition risk and 'regrettable loss' scoring. Live since January 2025. Visible to HRBPs and approximately 180 managers. Refreshes monthly. Managers have started using it in succession and retention conversations.\n\nCompWise Merit Advisor — Offer guidance, merit increase suggestions, and pay-band recommendations. Live since March 2025. Used for higher-level offers and the annual merit cycle. HR says managers often accept the suggested range unless Compensation intervenes.\n\nCasePilot HR Assist — Employee-facing HR chatbot and HR case summarization. Live since August 2025. Answers questions on leave, benefits, compensation, and performance; also summarizes prior HR cases for shared services staff. No formal rule exists on what kinds of employee data can be used in prompts or retrieved in summaries.\n\nReviewDraft Coach — Generative drafting of performance feedback and calibration summaries. Live since January 2026. Used by 430 managers in the most recent performance cycle. No prompt guardrails, no prohibited-use guidance, and no audit trail distinguishing edits from pasted final text."
    },
    {
      type: "finding",
      label: "WHAT LANDED ON YOUR DESK THIS WEEK",
      text: "LEGAL SITUATION ONE — On April 2, 2026, SummitPeak received notice of two EEOC charges and one internal complaint alleging disability discrimination. The core allegation: InterviewVue Insight and CandidPath TalentSphere were used in ways that screened people out without a clear accommodation path. One applicant states a speech impairment affected their video-interview score. One internal candidate who is deaf alleges they were told the company 'could not bypass the platform.' Outside counsel has issued a litigation hold for interview videos, scores, recruiter notes, accommodation requests, and documentation of any human review.\n\nLEGAL SITUATION TWO — On April 10, 2026, Legal received a complaint acknowledgment from the New York City Department of Consumer and Worker Protection regarding CandidPath TalentSphere and SkillGraph Marketplace for NYC-linked hiring and promotions. Legal cannot find a public bias-audit summary on the careers site, cannot confirm a current independent audit has been conducted, and cannot confirm the company consistently provided required notices with accommodation instructions before use.\n\nBOARD REQUEST — On April 21, 2026, the Chair of the Human Capital and Risk Committee sent the following to the CHRO, General Counsel, and CFO: 'For the May committee meeting, I want a clear governance report on every AI system currently used in HR. I need to understand what decisions these tools influence, what legal exposure we face, whether any tools should be paused, what contract decisions are pending, and what operating model management will implement so this does not recur.'\n\nEMPLOYEE COMPLAINTS SURFACED THIS WEEK:\n— A deaf employee said the promotion process 'had a machine stage with no real alternative.'\n— Two managers admitted they used AttritIQ to avoid putting 'likely leavers' on stretch assignments.\n— Three employees returning from leave said they stopped appearing in SkillGraph recommendation lists for internal roles.\n— Shared services showed CasePilot gave conflicting answers on parental-leave and stock vesting during disability leave.\n— Several employees said PulseLens summaries felt so specific that anonymous survey comments no longer felt anonymous.\n— HRBPs reported that managers copied ReviewDraft Coach language directly into final performance reviews.\n\nVENDOR RENEWAL PRESSURE — The InterviewVue Insight contract is up for renewal. Annual spend: $385,000. Non-renewal notice is due May 8, 2026. If SummitPeak does nothing, the contract auto-renews for two more years. The vendor has offered a 15% discount for early renewal and says it can provide its standard annual 'bias memo,' produced using pooled client data, coordinated by the vendor's own analytics team. SummitPeak has no separate audit rights for model updates, no access to customer-specific validation data, and no contractual requirement that the vendor notify SummitPeak before material model changes.\n\nINTERNAL AUDIT NOTE — There is no central AI inventory in HR. Three tools were enabled under broader software licenses and bypassed any dedicated procurement review. Five tools have no retained validation, bias, or change-management evidence in HR files. No documented company-wide standard exists for accommodation requests, human override, appeals, or decommissioning.\n\nONE MORE FACT NOT YET A REGULATOR LETTER — SummitPeak is headquartered in Colorado and hires in Colorado. No one has mapped its HR tools against Colorado's AI law, which will soon require a risk-management program, impact assessments, annual review, notices, data correction opportunities, appeal rights, and public disclosures for high-risk AI used in employment. This is an approaching governance deadline."
    },
    {
      type: "icm",
      text: "Before you write a single word of your assessment — stop.\n\nRun the ICM audit on how SummitPeak got here.\n\nFor each of the eight AI systems, ask: Who was interviewed before this tool went live?\n\nDid anyone interview the candidates who would be scored? The employees whose promotion readiness would be predicted? The deaf employee who would be told 'we cannot bypass the platform'?\n\nDid anyone interview the HRBP who would receive monthly attrition scores about their own direct reports? The manager who would copy generated text into a performance review?\n\nDid anyone interview outside counsel about what a litigation hold for this tool's outputs would require?\n\nThis is the ICM question that every case in this course has turned on: Who was missing from the picture before this went live?\n\nAt SummitPeak, the answer for every tool is the same: the people most affected by the tool were never in the room.\n\nTomorrow, you'll write the assessment. Tonight, think about who should have been asked — and what question would have changed everything."
    },
    {
      type: "terms",
      terms: [
        { term: "Litigation Hold", definition: "A legal directive to preserve all documents and data that may be relevant to pending or anticipated litigation. Once issued, deleting or modifying covered materials is potentially obstruction of justice. For AI systems: holds can cover model outputs, scores, training data, implementation records, and vendor communications." },
        { term: "Consequential HR Decision", definition: "An employment decision with significant impact on an individual's livelihood, compensation, career trajectory, or continued employment — including hiring, promotion, pay setting, performance assessment, and termination. These are the decisions where AI governance obligations are highest." },
        { term: "Advisory vs. Materially Influential AI", definition: "The distinction between AI that surfaces information or options for human decision-makers (advisory) and AI whose outputs directly drive or are treated as determinative in employment decisions (materially influential). The governance standard for materially influential AI is significantly higher." }
      ]
    },
    {
      type: "assignment",
      heading: "Read the File",
      text: "Your assignment tonight is preparation, not production.\n\nRead the scenario carefully. Then answer these five questions — not for submission, but to organize your thinking:\n\n1. Which of the eight systems are materially influencing consequential HR decisions? Which are advisory? How do you rank them by risk?\n\n2. What are SummitPeak's three most urgent legal exposures in the next 90 days — including at least one that hasn't yet produced a regulator letter?\n\n3. Which systems, if any, should be paused or narrowed? What would you require before allowing continued use?\n\n4. Should SummitPeak renew InterviewVue Insight — yes, yes with conditions, or no? What evidence or contract changes does your position require?\n\n5. What governance operating model should exist after the immediate clean-up so the board gets oversight, not a one-time memo?\n\nTomorrow you write the verdict. Tonight you think like an investigator who has read everything and needs to close the file."
    }
  ]
},

{
  id: 30,
  title: "The Capstone: Your Verdict",
  subtitle: "Design your HR AI governance framework — and present what you'd do first",
  phase: 6,
  readTime: 60,
  listenTime: 45,
  teaser: "You've spent 30 days learning the cases, the law, the frameworks. Today, you're the investigator who closes the file.",
  content: [
    {
      type: "scene",
      heading: "Day 30",
      text: "Thirty cases.\n\nThe warehouse worker fired by an algorithm. The Black applicants screened out by a résumé tool trained on biased data. The nurses whose promotions were blocked by a performance system that had never been audited. The union workers whose organizing conversations were analyzed by a productivity tracker. The candidates told there was no alternative to the video interview platform they couldn't use.\n\nYou've seen how these cases happened. You've seen the laws written in response. You've seen the frameworks built to prevent the next ones.\n\nNow you're in the room.\n\nThe CHRO is waiting for your assessment. The General Counsel is waiting for your risk map. The board is waiting for your governance proposal.\n\nThis is what you came here to do."
    },
    {
      type: "finding",
      label: "YOUR DELIVERABLE — THE CAPSTONE PACKAGE",
      text: "Submit one capstone package with a main memo and three appendices:\n\nMAIN MEMO — A board-ready governance assessment of 1,800 to 2,200 words, addressed to the CHRO and General Counsel, written so it can be repurposed for the Human Capital and Risk Committee. Structure it using the six sections below.\n\nAPPENDIX A — A one-page AI system register covering all eight tools, with: owner, use case, decision affected, geography, data type, risk level, and your keep / pause / narrow / retire recommendation.\n\nAPPENDIX B — A ninety-day remediation roadmap with owner, deadline, and decision point for each major action.\n\nAPPENDIX C — A one-page recommendation on whether to renew InterviewVue Insight, renew with conditions, or terminate and replace with a temporary manual process.\n\nTHE SIX MEMO SECTIONS:\n1. Executive Diagnosis — State plainly whether SummitPeak's current posture is governable, what the three most urgent risks are, and what executive decisions are needed this week.\n2. System Inventory and Decision Map — Classify each system by what decision it influences, who uses it, where, and whether it is advisory or materially influential.\n3. Legal and Regulatory Map — Which systems create immediate legal exposure, near-term regulatory exposure, or internal policy and trust exposure.\n4. Controls and Evidence Review — For each higher-risk system: what evidence exists and what is missing. Validation, bias audit, notice, accommodation process, human review, logging, vendor change terms, data handling, incident response, appeal path.\n5. Risk Treatment Decisions — Keep, keep with conditions, narrow, pause, or retire. Where you recommend continued use, specify the condition that must be met first.\n6. Operating Model and Board Reporting — Who owns intake, who approves use, what documentation is mandatory, what monitoring occurs, what triggers escalation, and what the board receives quarterly."
    },
    {
      type: "quote",
      text: "The difference between good governance and checkbox compliance is judgment. A good answer knows that a bias audit is useful but not sufficient. It knows the employer is accountable even when the vendor supplied the tool. It notices the issue that is approaching even if no regulator has raised it yet.",
      attribution: "NIST AI RMF — Govern function, combined with EEOC and NYC AEDT guidance"
    },
    {
      type: "finding",
      label: "THE FIVE QUESTIONS YOUR MEMO MUST ANSWER",
      text: "1. WHICH SYSTEMS ARE MATERIALLY INFLUENTIAL? — Do not treat all eight as equal. Show that you understand the difference between a lower-stakes assistant and a tool sitting inside hiring, promotion, pay, or retention decisions.\n\n2. WHAT ARE THE THREE MOST URGENT EXPOSURES? — Include at least one issue that is not yet the subject of an active complaint. You are expected to spot the visible fires and the approaching one.\n\n3. WHICH SYSTEMS SHOULD BE PAUSED OR NARROWED? — 'Human in the loop' is not enough. Specify who the human is, what authority they have, and what must exist before continued use is allowed.\n\n4. SHOULD SUMMITPEAK RENEW INTERVIERVUE INSIGHT? — Pick one position: renew, renew with conditions, or do not renew. State the exact evidence, contract changes, and interim hiring controls your position requires.\n\n5. WHAT GOVERNANCE OPERATING MODEL PREVENTS THIS FROM RECURRING? — Name the forum, the core functions, the intake standard, the required artifacts, and the monitoring cadence. The board should receive oversight, not a one-time clean-up memo."
    },
    {
      type: "icm",
      text: "ICM CLOSING REFLECTION — The Final Investigation\n\nAfter you complete your governance memo, write one final reflection of 250 to 400 words answering this question:\n\nWhat would an ICM interview have caught before these problems started?\n\nUse at least three examples from the SummitPeak case. For each example, name:\n— the question the company failed to ask up front,\n— the stakeholder who should have been in the room,\n— the decision that would have changed,\n— and the control that should have existed before launch.\n\nA strong reflection will not say 'they needed more governance.'\n\nIt will say, with precision, which front-end question was missing, which decision should never have gone live without an answer, and which problem in this case was therefore predictable.\n\nICM is not a checklist. It is a discipline — the practice of refusing to automate a process you don't fully understand, as seen from every perspective that matters.\n\nFor 30 days, you've studied what happens when organizations skip that discipline.\n\nNow you know what to ask. You know who needs to be in the room. You know what a governance program looks like when it has authority, not just documentation.\n\nThe file is open. Close it well."
    },
    {
      type: "terms",
      terms: [
        { term: "Governance Assessment", definition: "A structured evaluation of an organization's AI governance posture — covering inventory, legal exposure, control gaps, risk classification, and operating model. Different from a compliance audit (which checks rules were followed) in that it evaluates whether the underlying governance structure is adequate to prevent future harm." },
        { term: "Remediation Roadmap", definition: "A time-phased action plan for closing governance gaps, typically organized into immediate (0–30 days), near-term (31–60 days), and structured (61–90 days) horizons. Each action should have an owner, deadline, and a defined decision point — not just a target completion date." },
        { term: "Board-Ready Communication", definition: "A document or presentation designed for a board committee audience: decision-focused rather than descriptive, risk-ranked rather than comprehensive, specific about accountability rather than general about policy. A board-ready governance assessment gives the board a decision, a risk view, and a governance cadence — not a narrative of events." }
      ]
    },
    {
      type: "assignment",
      heading: "Close the File",
      text: "Produce your capstone package.\n\nMain memo: 1,800–2,200 words. Six sections. Addressed to the CHRO and General Counsel. Board-ready.\n\nAppendix A: One-page AI system register — all eight tools, with risk level and your keep/pause/narrow/retire recommendation.\n\nAppendix B: 90-day remediation roadmap — owner, deadline, decision point per action.\n\nAppendix C: One-page InterviewVue Insight renewal recommendation — one position, your evidence, and your interim controls.\n\nICM Reflection: 250–400 words. Three examples. Four questions per example. Specific, not general.\n\nUse the self-scoring rubric: score yourself 1–4 on inventory and scoping, legal issue-spotting, prioritization, governance operating model, vendor management, and communication. A credible capstone is 18 or above. A board-ready capstone is 21 or above.\n\nYou've spent 30 days becoming someone who knows what to ask.\n\nThe last thing you do is prove it."
    }
  ]
}

];
