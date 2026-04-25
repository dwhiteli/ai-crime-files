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
  teaser: "Amazon, IBM, and others: AI systems recommending who to fire. No appeals process. No human review. No warning.",
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
      text: "In March 2018, ProPublica reporters Peter Gosselin and Ariana Tobin published an investigation into IBM's workforce strategy.\n\nOver the previous five years, IBM had laid off tens of thousands of workers. The reporters documented that these layoffs had disproportionately affected older employees — workers over 40, who are protected from age discrimination by the Age Discrimination in Employment Act (ADEA).\n\nWhat made the IBM case significant for AI governance was what the investigation found about the internal tools IBM was using.\n\nIBM had developed and sold AI-powered HR tools — including tools called \"Watson Candidate Assistant\" and systems for \"workforce rebalancing\" — the corporate euphemism for deciding who to cut. The company that was selling AI HR solutions to the world was also using AI internally to manage its own workforce reductions.\n\nFormer IBM employees filed hundreds of age discrimination complaints with the EEOC. IBM denied the allegations, arguing its restructuring was about skills, not age.\n\nBut the core question remained: when an AI system recommends which employees to cut, and a manager approves that recommendation in a routine workflow, who made the decision to end that person's career?"
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
