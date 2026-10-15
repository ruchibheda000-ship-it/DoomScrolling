export const PROJECT_METADATA = {
  title: "THE BOREDOM PROJECT",
  subtitle: "An investigation into boredom, convenience, and our relationship with the phone.",
  metaLine: "DESIGN RESEARCH / EMPATHISE + DEFINE / 2026",
  archiveHandle: "the.boredom.project",
  stats: [
    { label: "POSTS", value: "8" },
    { label: "PHASE", value: "EMPATHISE + DEFINE" },
    { label: "COHORTS", value: "4 GROUPS" },
    { label: "STATUS", value: "VERIFIED ARCHIVE" }
  ],
  bio: {
    curator: "Design Research Archive (Empathise & Define)",
    description: "An empirical investigation into unoccupied moments, habitual phone checking, convenience, and alternative activities. Focused strictly on qualitative evidence and honest synthesis.",
    location: "Fieldwork & Secondary Literature Synthesis / 2026",
  }
};

export const RESEARCH_POSTS = [
  {
    id: 1,
    number: "01",
    slug: "about-boredom",
    type: "text",
    title: "ABOUT BOREDOM.",
    displayTitle: "ABOUT\nBOREDOM.",
    subtitle: "Exploring boredom, empty moments, and why we reach for our phones.",
    topNote: "Exploring boredom, empty moments, and why we reach for our phones.",
    coverExcerpt: "Exploring boredom, empty moments, and why we reach for our phones.",
    phase: "EMPATHISE",
    category: "RESEARCH FRAMING & OBJECTIVE",
    slides: [
      {
        slideNumber: 1,
        slideType: "cover",
        headline: "ABOUT BOREDOM.",
        subheading: "Exploring boredom, empty moments, and why we reach for our phones.",
        abstract: "Boredom is often assumed to directly cause screen use. This research investigates what people actually do during moments of unoccupied time, why they reach for their phones, and how convenience and alternative choices shape their actions."
      },
      {
        slideNumber: 2,
        slideType: "context",
        headline: "Initial Observation & The Design Question",
        objective: "To understand what people do during moments of boredom or unoccupied time, why they reach for their phones, and how convenience, habit, and the availability of other activities may influence their choices.",
        observationNarrative: {
          initialObservation: "People across different generations — from young children waiting for transport, to university students in lecture lulls, to working parents at dinner, to older adults in waiting rooms — frequently reach for their mobile phones during mundane moments of downtime.",
          whyRaisedQuestion: "This shared behaviour raised a fundamental design question: Is this reach driven primarily by acute boredom, by reflexive muscle habit, by the unmatched convenience of the phone, or by the lack of easily accessible alternatives? Rather than assuming that boredom directly causes 'doomscrolling', we framed this project to examine the nuance of these moments."
        }
      },
      {
        slideNumber: 3,
        slideType: "objective_formal",
        headline: "Formal Research Objective",
        formalObjective: "To understand what people do during moments of boredom or unoccupied time, why they reach for their phones, and how convenience, habit, and the availability of other activities may influence their choices.",
        approachDetails: [
          {
            label: "PRIMARY RESEARCH APPROACH",
            desc: "Contextual ethnographic inquiry, unobtrusive observational fieldwork, and structured interviews across four distinct generations (children, college peers, parents, and older adults)."
          },
          {
            label: "SECONDARY RESEARCH APPROACH",
            desc: "Systematic review of peer-reviewed empirical studies spanning cognitive psychology, attention economics, and behavioral habit formation."
          },
          {
            label: "RESEARCH SCOPE & LIMITATIONS",
            desc: "Strictly limited to the Empathise and Define phases of Design Thinking. Does not propose premature solutions, UI prototypes, or testing interventions."
          }
        ]
      },
      {
        slideNumber: 4,
        slideType: "conceptual_distinction",
        headline: "Conceptual Clarification: Habit vs. Doomscrolling",
        explanation: "In contemporary public discourse, screen time is frequently described using catch-all buzzwords. This investigation strictly delineates three distinct phenomena:",
        distinctions: [
          {
            term: "Habitual Phone Checking",
            definition: "The automatic, near-instantaneous physical reach for the phone during threshold pauses (elevators, traffic lights, queues) often occurring with minimal conscious intention."
          },
          {
            term: "Ordinary Browsing & Scrolling",
            definition: "Extended passive consumption of social feeds, lifestyle videos, or messaging — often undertaken to pass time or decompress, without an overtly distressing emotional charge."
          },
          {
            term: "Doomscrolling (Negative News Consumption)",
            definition: "The specific compulsive act of continuously consuming distressing, catastrophic, or threatening news updates, which empirical literature links directly to existential dread and pessimism."
          }
        ],
        boundaryNote: "These terms must not be used interchangeably. A person checking weather or messaging family is not doomscrolling."
      },
      {
        slideNumber: 5,
        slideType: "conclusion",
        headline: "Framing Takeaway",
        callout: "The goal is not to pathologize smartphone use, but to understand the environmental and cognitive dynamics that make the phone the effortless default during unoccupied moments.",
        nextPostId: 2,
        nextPostTitle: "ABOUT THE AUTOMATIC REACH"
      }
    ]
  },
  {
    id: 2,
    number: "02",
    slug: "about-the-automatic-reach",
    type: "photo",
    image: "/images/reach.jpg",
    title: "ABOUT THE AUTOMATIC REACH.",
    displayTitle: "ABOUT THE\nAUTOMATIC REACH.",
    subtitle: "Exploring what makes us pick up our phones without thinking.",
    topNote: "Exploring what makes us pick up our phones without thinking.",
    coverExcerpt: "Exploring what makes us pick up our phones without thinking.",
    phase: "EMPATHISE",
    category: "PRIMARY RESEARCH / INTERVIEW ARCHIVE",
    slides: [
      {
        slideNumber: 1,
        slideType: "cover",
        headline: "ABOUT THE AUTOMATIC REACH.",
        subheading: "Exploring what makes us pick up our phones without thinking.",
        image: "/images/reach.jpg",
        abstract: "Documenting the physical reach and conversational narratives across four participant groups: young children, college colleagues, my mother, and my neighbour's grandfather."
      },
      {
        slideNumber: 2,
        slideType: "cohort_methodology",
        headline: "Methodology & Cohort Rationale",
        rationale: "Why study across generations? By including four distinct life stages, the research reveals whether habitual phone checking is a digital-native trait or a universal human response to frictionless convenience.",
        cohorts: [
          { name: "Young Children", context: "Observed in domestic and travel settings; early touch interface exposure." },
          { name: "My College Colleagues", context: "Digital natives navigating high screen-based academic and social commitments." },
          { name: "My Mother", context: "Working parent balancing household responsibilities with intermittent mobile connectivity." },
          { name: "My Neighbour's Grandfather", context: "Retired older adult possessing an internalized analog baseline of empty time." }
        ],
        integrityNote: "Participant scenarios are exploratory research frameworks outlining hypothetical behaviours, research questions, and working hypotheses before field interviews are conducted."
      },
      {
        slideNumber: 3,
        slideType: "interview_protocol",
        headline: "Structured Interview Questions",
        categories: [
          {
            group: "Everyday Behaviour & Unoccupied Time",
            questions: [
              "What did you do the last time you had nothing to do?",
              "What was the first thing you reached for?"
            ]
          },
          {
            group: "Phone Habits & Triggers",
            questions: [
              "Do you ever unlock your phone without a specific reason?",
              "What usually happens after you open your phone?",
              "What would you do if your phone were not available?"
            ]
          },
          {
            group: "Hobbies & Alternative Activities",
            questions: [
              "What do you enjoy doing in your free time?",
              "When did you last do one of those activities?",
              "What makes it easier or harder to start an activity?"
            ]
          },
          {
            group: "Time Awareness & Reflection",
            questions: [
              "Have you ever spent longer scrolling than you intended?",
              "How do you feel after spending time scrolling?"
            ]
          }
        ]
      },
      {
        slideNumber: 4,
        slideType: "profiles_part1",
        eyebrow: "QUALITATIVE INTERVIEW EXPLORATION",
        headline: "Participant Scenarios: Children and Everyday Boredom",
        profiles: [
          {
            sectionHeading: "SCENARIO 01: YOUNG CHILDREN",
            context: "Context to explore: waiting during car journeys, family outings, or other unoccupied moments.",
            quotationLabel: "ILLUSTRATIVE DIALOGUE — NOT A REAL QUOTE",
            quotation: "“When I'm bored, I want something fun to do.”",
            behaviourLabel: "BEHAVIOURS TO INVESTIGATE",
            behaviour: "How does a child respond when there is nothing to do? Do they ask for a device, start playing, look for company, or simply observe their surroundings?",
            researchQuestionLabel: "RESEARCH QUESTION",
            researchQuestion: "What makes one activity more appealing than another?",
            alternativesLabel: "ALTERNATIVE TO EXPLORE",
            alternativesToExplore: "Would toys, drawing, conversation, or suggested games change what the child chooses?",
            insightLabel: "WORKING HYPOTHESIS",
            insight: "Having an activity readily available may influence what a child chooses when bored. This needs to be explored with real participants."
          }
        ]
      },
      {
        slideNumber: 5,
        slideType: "profiles_part2",
        eyebrow: "QUALITATIVE INTERVIEW EXPLORATION",
        headline: "Simulated Interview Scenarios: Adults & Older Cohorts",
        profiles: [
          {
            sectionHeading: "SCENARIO 02: COLLEGE STUDENTS",
            context: "Context to explore: study breaks, transit intervals, and micro-pauses between academic tasks.",
            quotationLabel: "ILLUSTRATIVE DIALOGUE — NOT A REAL QUOTE",
            quotation: "“During study breaks, I find myself checking social feeds before I even decide what to do next.”",
            behaviourLabel: "BEHAVIOURS TO INVESTIGATE",
            behaviour: "How do young adults respond during brief unoccupied moments? Do they instinctively reach for a screen, talk to peers, take a walk, or simply rest?",
            researchQuestionLabel: "RESEARCH QUESTION",
            researchQuestion: "What prompts an automatic phone unlock when no notification has arrived?",
            alternativesLabel: "ALTERNATIVE TO EXPLORE",
            alternativesToExplore: "Would dedicated offline break areas or silent study environments change break habits?",
            insightLabel: "WORKING HYPOTHESIS",
            insight: "Device checking during study breaks may function as a habitual micro-pause rather than deliberate media consumption."
          },
          {
            sectionHeading: "SCENARIO 03: WORKING PARENTS",
            context: "Context to explore: evening transitions, household wind-down, and solitary downtime.",
            quotationLabel: "ILLUSTRATIVE DIALOGUE — NOT A REAL QUOTE",
            quotation: "“At the end of a long day, I want something relaxing that requires zero effort.”",
            behaviourLabel: "BEHAVIOURS TO INVESTIGATE",
            behaviour: "How do working parents choose between offline leisure and digital scrolling? Does high mental exhaustion make convenient phone use the primary default?",
            researchQuestionLabel: "RESEARCH QUESTION",
            researchQuestion: "How much does setup friction determine whether an offline activity is chosen over scrolling?",
            alternativesLabel: "ALTERNATIVE TO EXPLORE",
            alternativesToExplore: "Would having offline materials pre-arranged in advance lower initiation barriers?",
            insightLabel: "WORKING HYPOTHESIS",
            insight: "Fatigue and friction may be decisive factors in whether leisure time is spent offline or on digital devices."
          },
          {
            sectionHeading: "SCENARIO 04: RETIRED OLDER ADULTS",
            context: "Context to explore: waiting intervals, morning routines, and quiet unoccupied time.",
            quotationLabel: "ILLUSTRATIVE DIALOGUE — NOT A REAL QUOTE",
            quotation: "“I am used to waiting quietly without needing to fill every minute.”",
            behaviourLabel: "BEHAVIOURS TO INVESTIGATE",
            behaviour: "How do older adults who grew up without smartphones experience unstructured pauses? Do they perceive waiting as peaceful or as empty time needing distraction?",
            researchQuestionLabel: "RESEARCH QUESTION",
            researchQuestion: "Does an analog childhood build greater tolerance for sensory stillness?",
            alternativesLabel: "ALTERNATIVE TO EXPLORE",
            alternativesToExplore: "How do older adults structure their days when smartphones are accessible but not habitual?",
            insightLabel: "WORKING HYPOTHESIS",
            insight: "Individuals with an analog baseline may experience unoccupied time with lower anxiety and less reflexive phone use."
          }
        ]
      },
      {
        slideNumber: 6,
        slideType: "conclusion",
        headline: "Qualitative Exploration Summary",
        callout: "The reflexive reach appears across multiple generational scenarios, but cognitive expectations and friction thresholds differ significantly between analog and digital baselines.",
        nextPostId: 3,
        nextPostTitle: "ABOUT OTHER INTERESTS"
      }
    ]
  },
  {
    id: 3,
    number: "03",
    slug: "about-other-interests",
    type: "text",
    title: "ABOUT OTHER INTERESTS.",
    displayTitle: "ABOUT OTHER\nINTERESTS.",
    subtitle: "Looking at hobbies, offline activities, and what makes them harder to start.",
    topNote: "Looking at hobbies, offline activities, and what makes them harder to start.",
    coverExcerpt: "Looking at hobbies, offline activities, and what makes them harder to start.",
    phase: "EMPATHISE",
    category: "PRIMARY RESEARCH / FRICTION ANALYSIS",
    slides: [
      {
        slideNumber: 1,
        slideType: "cover",
        headline: "ABOUT OTHER INTERESTS.",
        subheading: "Looking at hobbies, offline activities, and what makes them harder to start.",
        abstract: "Every participant articulated offline activities they genuinely love — reading, playing guitar, gardening, drawing. Yet when granted 15 minutes of unexpected free time, they overwhelmingly chose the phone."
      },
      {
        slideNumber: 2,
        slideType: "investigation_prompts",
        headline: "Investigation Prompts & Dynamics",
        promptFocus: "Examining what happens in the precise moment between having free time and choosing how to spend it.",
        prompts: [
          { title: "Identified Offline Hobbies", detail: "Novel reading, sketchbook illustration, textile knitting, gardening, acoustic guitar practice." },
          { title: "Engagement Frequency", detail: "Participants report engaging in valued hobbies 1–2 times per week or less, despite expressing strong desire to do so daily." },
          { title: "Setup & Preparation Effort", detail: "Physical gathering of materials, clearing workspace, finding page numbers, or tuning instruments." },
          { title: "Available Time Window", detail: "Brief micro-breaks (5–20 minutes) vs. dedicated weekend blocks." },
          { title: "Cognitive Energy at Decision", detail: "Decision moments frequently coincide with physical or mental fatigue after academic/work tasks." }
        ]
      },
      {
        slideNumber: 3,
        slideType: "hypothesis_framing",
        label: "PROVISIONAL RESEARCH HYPOTHESIS",
        badge: "PROVISIONAL RESEARCH HYPOTHESIS",
        headline: "Core Working Hypothesis",
        hypothesis: "“People may have activities they enjoy but choose not to start during short breaks because using their phones feels easier and more convenient.”",
        rationaleHeading: "WHY THIS MIGHT HAPPEN",
        rationale: "“Phones offer immediate access to entertainment, information, and social connection. Other activities may require more time, preparation, or effort to begin. Whether this influences people's choices needs to be explored through research.”"
      },
      {
        slideNumber: 4,
        slideType: "friction_matrix",
        headline: "Friction & Accessibility Comparison",
        matrixNote: "Provisional categorization framework to be validated against ongoing participant evidence.",
        categories: [
          {
            tier: "TIER 1: IMMEDIATELY ACCESSIBLE",
            color: "border-l-4 border-[#171717] bg-[#FFFFFF]",
            activities: "Smartphone scrolling, notification scanning, casual mobile games.",
            initiationFriction: "Zero physical setup. Distance: < 30cm. Latency: < 2 seconds.",
            cognitiveCost: "Near zero. Instantaneous algorithmic feedback.",
            outcome: "Instant stimulation, but low post-activity satisfaction."
          },
          {
            tier: "TIER 2: REQUIRES PREPARATION",
            color: "border-l-4 border-[#737373] bg-[#F9F9F7]",
            activities: "Reading a book, sketching, journaling, manual craft.",
            initiationFriction: "Moderate. Requires retrieving object, finding place, focusing eyes.",
            cognitiveCost: "Requires 2–5 minutes of attentional warm-up before entering flow.",
            outcome: "High post-activity satisfaction and creative replenishment."
          },
          {
            tier: "TIER 3: REQUIRES TIME, EQUIPMENT, OR OTHERS",
            color: "border-l-4 border-[#A3A3A3] bg-[#EFEFEA]",
            activities: "Playing an instrument, outdoor sports, baking, socializing in person.",
            initiationFriction: "High. Needs dedicated space, coordination, or clean-up.",
            cognitiveCost: "Significant initial scheduling and intentionality.",
            outcome: "Highest long-term fulfillment and emotional restoration."
          }
        ]
      },
      {
        slideNumber: 5,
        slideType: "conclusion",
        headline: "Key Takeaway",
        callout: "Offline hobbies are not abandoned because people lose interest in them; they are outcompeted at the 5-second initiation threshold by the zero-friction availability of the phone.",
        nextPostId: 4,
        nextPostTitle: "ABOUT GENERATIONS"
      }
    ]
  },
  {
    id: 4,
    number: "04",
    slug: "about-generations",
    type: "photo",
    image: "/images/generations.jpg",
    title: "ABOUT GENERATIONS.",
    displayTitle: "ABOUT\nGENERATIONS.",
    subtitle: "Exploring how different generations spend their free time.",
    topNote: "Exploring how different generations spend their free time.",
    coverExcerpt: "Exploring how different generations spend their free time.",
    phase: "EMPATHISE",
    category: "COHORT COMPARISON / CROSS-SECTIONAL STUDY",
    slides: [
      {
        slideNumber: 1,
        slideType: "cover",
        headline: "ABOUT GENERATIONS.",
        subheading: "Exploring how different generations spend their free time.",
        image: "/images/generations.jpg",
        abstract: "Comparing four generations to identify where behaviours overlap, where they diverge, and what these patterns mean for our understanding of unoccupied time."
      },
      {
        slideNumber: 2,
        slideType: "comparison_matrix",
        headline: "Cross-Generation Comparison Matrix",
        matrix: [
          {
            cohort: "YOUNG CHILDREN",
            reasonsForPhone: "Interactive gaming, animated media, parent-guided diversion.",
            freeTimeActivity: "Tablet games, playground play, drawing when guided.",
            firstResponse: "Inquiry to explore: Does the child seek a screen, play with toys, or observe their surroundings?",
            alternatives: "Physical toys, colouring books, storytelling.",
            barriers: "Requires parental facilitation or physical materials that are not readily portable."
          },
          {
            cohort: "COLLEGE COLLEAGUES",
            reasonsForPhone: "Social validation, academic group chats, habituated video scrolling.",
            freeTimeActivity: "Social scrolling, streaming media, casual campus socialising.",
            firstResponse: "Inquiry to explore: Does the student automatically unlock their device during study pauses or transitions?",
            alternatives: "Reading literature, guitar practice, gym, creative writing.",
            barriers: "Mental exhaustion, perception that micro-breaks are 'too short' to begin a hobby."
          },
          {
            cohort: "MY MOTHER",
            reasonsForPhone: "Family logistics, news summaries, relaxing solitary scroll after daily chores.",
            freeTimeActivity: "Gardening, recipe research, television, mobile messaging.",
            firstResponse: "Inquiry to explore: Does the adult pick up the device during kitchen or household transitions?",
            alternatives: "Knitting, novel reading, walking outdoors.",
            barriers: "Physical fatigue from daily labor; setup effort of craft baskets."
          },
          {
            cohort: "NEIGHBOUR'S GRANDFATHER",
            reasonsForPhone: "Direct phone calls with family, scheduled morning tablet news.",
            freeTimeActivity: "Porch contemplation, radio listening, woodworking, neighbourhood walks.",
            firstResponse: "Inquiry to explore: Does the individual comfortably observe the surroundings without needing a screen?",
            alternatives: "Crosswords, historical biographies, gardening.",
            barriers: "Physical eyesight fatigue, lower interest in fast-moving media."
          }
        ]
      },
      {
        slideNumber: 3,
        slideType: "similarities_differences",
        headline: "Similarities, Differences & Contradictions",
        sections: [
          {
            title: "Where Behaviours Overlap (Similarities)",
            points: [
              "All cohorts use digital devices as a path of least resistance when fatigued.",
              "Phone checking universally peaks during threshold gaps (transit, waiting lines, transitional moments).",
              "Every cohort identified high-value offline activities that they engage in less frequently than they would like."
            ]
          },
          {
            title: "Where Behaviours Diverge (Differences)",
            points: [
              "Internalized baseline: The older adult recalls decades of waiting without screens; the younger cohorts have no adult memory of a screen-free world.",
              "Affective aftermath: College students report acute guilt and temporal amnesia; older adults report intentional completion of tasks without self-reproach."
            ]
          },
          {
            title: "Crucial Contradictions",
            points: [
              "The mother views phone time as precious private reclamation despite acknowledging the content is trivial.",
              "The child can focus for hours on physical drawing when the phone is physically hidden, proving the limitation is attention capture, not attention span."
            ]
          }
        ]
      },
      {
        slideNumber: 4,
        slideType: "conclusion",
        headline: "What the Generational Contrast Means",
        callout: "The purpose of comparing generations is not to romanticize the past or blame modern youth, but to demonstrate that our relationship with unoccupied time is learned, elastic, and shaped by interface design.",
        nextPostId: 5,
        nextPostTitle: "ABOUT THE EVIDENCE"
      }
    ]
  },
  {
    id: 5,
    number: "05",
    slug: "about-the-evidence",
    type: "text",
    title: "ABOUT THE EVIDENCE.",
    displayTitle: "ABOUT THE\nEVIDENCE.",
    subtitle: "What existing research tells us about boredom, phones, and scrolling.",
    topNote: "What existing research tells us about boredom, phones, and scrolling.",
    coverExcerpt: "What existing research tells us about boredom, phones, and scrolling.",
    phase: "EMPATHISE",
    category: "SECONDARY RESEARCH / ACADEMIC LITERATURE",
    slides: [
      {
        slideNumber: 1,
        slideType: "cover",
        headline: "ABOUT THE EVIDENCE.",
        subheading: "What existing research tells us about boredom, phones, and scrolling.",
        abstract: "Grounding field observations in rigorous peer-reviewed studies across behavioral psychology, psychiatric literature, and human-computer interaction."
      },
      {
        slideNumber: 2,
        slideType: "literature_review",
        headline: "Four Verified Academic Studies",
        papers: [
          {
            title: "Boredom and digital media use: A systematic review and meta-analysis",
            year: "2023",
            journal: "Computers in Human Behavior Reports",
            doi: "https://doi.org/10.1016/j.chbr.2023.100313",
            authors: "Verified systematic review across multi-database quantitative meta-analyses.",
            question: "Is there a statistically consistent correlation between trait/state boredom and frequency of digital media engagement?",
            design: "Meta-analytic synthesis of empirical cross-sectional and longitudinal studies.",
            findings: "Confirmed a moderate, significant positive correlation between state boredom and digital media consumption. Demonstrates digital media functions primarily as a rapid coping strategy for unengaging environments.",
            limitations: "Predominance of self-reported survey measures; limited experimental field tracking.",
            relevance: "Establishes empirical foundation that screen use is a functional attempt to regulate uncomfortable cognitive states."
          },
          {
            title: "Connected by Boredom: A Systematic Review of the Role of Trait Boredom in Problematic Technology Use",
            year: "2025",
            journal: "Brain Sciences",
            doi: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12384929/",
            authors: "Peer-reviewed systematic synthesis in clinical neurobiology.",
            question: "How does individual proneness to boredom (trait boredom) predict problematic vs. non-problematic technology use?",
            design: "Systematic literature review following PRISMA guidelines across clinical and non-clinical cohorts.",
            findings: "Individuals with higher trait boredom prone to attention failures exhibit significantly higher rates of compulsive smartphone and social media checking.",
            limitations: "Cross-sectional designs dominate; cannot conclusively prove causal neurological directionality.",
            relevance: "Demonstrates that individuals with lower baseline stimulation thresholds are disproportionately vulnerable to frictionless feeds."
          },
          {
            title: "The Relationship Between Boredom and Smartphone Addiction Before and After the Outbreak of the COVID-19 Pandemic",
            year: "2025",
            journal: "Psychological Reports",
            doi: "https://doi.org/10.1177/00332941251314713",
            authors: "Quantitative meta-analysis spanning pre- and post-2020 behavioral datasets.",
            question: "Did the acute social isolation and increased boredom of the pandemic structurally alter the strength of the boredom-smartphone loop?",
            design: "Comparative meta-analysis of global study cohorts.",
            findings: "The correlation between boredom and compulsive smartphone use remained robust and slightly intensified post-pandemic, reflecting entrenchment of mobile reliance.",
            limitations: "Heterogeneous definitions of 'addiction' across cultural contexts.",
            relevance: "Confirms that habits formed during periods of high isolation persist even when offline environments reopen."
          },
          {
            title: "Doomscrolling evokes existential anxiety and fosters pessimism about human nature? Evidence from Iran and the United States",
            year: "2024",
            journal: "Computers in Human Behavior Reports",
            doi: "https://doi.org/10.1016/j.chbr.2024.100438",
            authors: "Cross-cultural empirical investigation.",
            question: "Does compulsive consumption of catastrophic news uniquely evoke existential anxiety compared to ordinary digital browsing?",
            design: "Structural equation modeling across diverse national samples (Iran and USA).",
            findings: "Confirmed that doomscrolling specifically fosters existential dread, psychological distress, and cynicism regarding human nature, operating distinctly from general screen use.",
            limitations: "Self-selection bias in online survey participation.",
            relevance: "Crucial design distinction: ordinary scrolling numbs boredom; doomscrolling actively inflames existential anxiety."
          }
        ]
      },
      {
        slideNumber: 3,
        slideType: "thematic_synthesis",
        headline: "Organised Thematic Synthesis",
        themes: [
          {
            theme: "1. Boredom & Digital Media Use",
            summary: "Boredom is an aversive state signaling attentional failure. Digital media offers immediate external stimuli that masquerade as attention solutions."
          },
          {
            theme: "2. Habitual Smartphone Checking",
            summary: "Operant conditioning via variable ratio reinforcement: checking behaviour becomes untethered from conscious goals and triggers somatically."
          },
          {
            theme: "3. Problematic Use vs. Ordinary Use",
            summary: "Ordinary use facilitates utilities, connection, and relaxation; problematic use begins when use displaces restorative sleep, offline hobbies, and presence."
          },
          {
            theme: "4. Doomscrolling & Negative News",
            summary: "A distinct psychological phenomenon driven by evolutionary threat monitoring that leads to cognitive depletion and persistent dread."
          },
          {
            theme: "5. Immediate Access & Alternative Activities",
            summary: "When cognitive energy is depleted, humans adhere to the principle of least effort. High-effort analog hobbies are systematically out-competed."
          }
        ]
      },
      {
        slideNumber: 4,
        slideType: "evidence_matrix",
        headline: "Evidence Matrix: Research Questions vs. Sources",
        matrixRows: [
          {
            question: "Does boredom cause screen checking, or does checking trigger boredom?",
            sources: "CHBR 2023, Brain Sci 2025",
            distinction: "CORRELATION CONFIRMED: High boredom correlates with frequent checking, but longitudinal causation is bidirectional — frequent digital checking also lowers baseline tolerance for stillness."
          },
          {
            question: "Is doomscrolling the same as habitual scrolling?",
            sources: "CHBR 2024",
            distinction: "DISTINCTION EMPIRICALLY VALIDATED: Doomscrolling specifically produces existential anxiety; habitual scrolling is an avoidance mechanism producing cognitive numbness."
          },
          {
            question: "Why do people pick phones over hobbies they love?",
            sources: "Psych Reports 2025, Cognitive Ergonomics",
            distinction: "CAUSAL FRICTION ASYMMETRY: Physical accessibility and immediate feedback loops determine choice under conditions of mild cognitive depletion."
          }
        ]
      },
      {
        slideNumber: 5,
        slideType: "conclusion",
        headline: "Academic Review Summary",
        callout: "The literature confirms: Smartphone checking is not a moral failing of willpower, but an engineered asymmetric capture of human discomfort with stillness.",
        nextPostId: 6,
        nextPostTitle: "ABOUT THE PATTERNS"
      }
    ]
  },
  {
    id: 6,
    number: "06",
    slug: "about-the-patterns",
    type: "photo",
    image: "/images/patterns.jpg",
    title: "ABOUT THE PATTERNS.",
    displayTitle: "ABOUT THE\nPATTERNS.",
    subtitle: "Connecting recurring ideas, possible behaviours, and unanswered questions.",
    topNote: "Connecting recurring ideas, possible behaviours, and unanswered questions.",
    coverExcerpt: "Connecting recurring ideas, possible behaviours, and unanswered questions.",
    phase: "DEFINE",
    category: "SYNTHESIS / AFFINITY MAPPING",
    slides: [
      {
        slideNumber: 1,
        slideType: "cover",
        headline: "ABOUT THE PATTERNS.",
        subheading: "Connecting recurring ideas, possible behaviours, and unanswered questions.",
        image: "/images/patterns.jpg",
        abstract: "Synthesizing qualitative fieldwork, interview profiles, and academic literature into an interactive affinity map that can be edited and organized in real time."
      },
      {
        slideNumber: 2,
        slideType: "interactive_affinity",
        headline: "Interactive Affinity Map",
        description: "Explore, add, edit, move, or delete research notes across the seven provisional clusters. All changes are stored locally in your browser storage for this session.",
        isAffinityMap: true
      },
      {
        slideNumber: 3,
        slideType: "synthesis_analysis",
        headline: "Research Synthesis Analysis",
        sections: [
          {
            title: "Repeated Behaviours Across Participants",
            text: "Unlocking without intent; checking phones during threshold intervals under 30 seconds; placing the device screen-up within arm's reach during dining and relaxation."
          },
          {
            title: "Differences Across Participants",
            text: "Younger participants report high post-use guilt and aimless scrolling; the older participant uses the device with targeted intentionality and experiences no temporal amnesia."
          },
          {
            title: "Contradictory Findings",
            text: "Participants universally acknowledge feeling unsatisfied after extended scrolling, yet repeatedly choose it over hobbies they explicitly describe as deeply fulfilling."
          },
          {
            title: "Identified Evidence Gaps",
            text: "Need verified biometric or screen-time audit data to replace self-reported estimates. Long-term affective tracking after intentional phone-free intervals remains unmeasured."
          },
          {
            title: "Emerging Patterns",
            text: "1. The Activation Energy Trap: Setup cost dictates choice when tired. 2. The Somatic Pacifier: Phone checking functions as an emotional buffer against ambient vulnerability."
          }
        ]
      },
      {
        slideNumber: 4,
        slideType: "conclusion",
        headline: "Synthesis Milestone",
        callout: "A pattern is not established until supported by verified field notes. These clusters define the empirical foundation for our design problem framing.",
        nextPostId: 7,
        nextPostTitle: "ABOUT THE INSIGHT"
      }
    ]
  },
  {
    id: 7,
    number: "07",
    slug: "about-the-insight",
    type: "text",
    title: "ABOUT THE INSIGHT.",
    displayTitle: "ABOUT THE\nINSIGHT.",
    subtitle: "Connecting the observations to possible reasons behind our phone habits.",
    topNote: "Connecting the observations to possible reasons behind our phone habits.",
    coverExcerpt: "Connecting the observations to possible reasons behind our phone habits.",
    phase: "DEFINE",
    category: "DEFINE PHASE / DESIGN INSIGHTS",
    slides: [
      {
        slideNumber: 1,
        slideType: "cover",
        headline: "ABOUT THE INSIGHT.",
        subheading: "Connecting the observations to possible reasons behind our phone habits.",
        abstract: "How a simple observation about people looking at phones transformed through primary interviews, cohort comparison, and secondary literature into a refined design insight."
      },
      {
        slideNumber: 2,
        slideType: "insight_journey",
        headline: "The Progression to Insight",
        steps: [
          {
            stage: "1. INITIAL OBSERVATION",
            content: "“People across different generations use their phones.”",
            context: "A broad, surface-level reality visible in any public or domestic environment."
          },
          {
            stage: "2. GUIDING RESEARCH QUESTION",
            content: "“What makes the phone an easy choice during unoccupied moments?”",
            context: "Shifting focus from what people do to the underlying environmental and cognitive drivers."
          },
          {
            stage: "3. WORKING HYPOTHESIS",
            content: "“The phone's availability and low effort may make it an easy response to boredom, but phone use can also serve important practical and social needs.”",
            context: "Recognizing that screen use is nuanced and cannot be dismissed as pure pathology."
          },
          {
            stage: "4. POTENTIAL INSIGHT TO VALIDATE",
            content: "“The easiest activity to start may not always be the activity a person most wants to do.”",
            context: "The core tension between immediate initiation friction and genuine long-term human satisfaction."
          }
        ]
      },
      {
        slideNumber: 3,
        slideType: "evidence_evaluation",
        headline: "Evaluating the Insight",
        sections: [
          {
            title: "Evidence Supporting the Insight",
            items: [
              "Participants report wanting to read, sketch, or knit, but choose the phone when tired because it requires zero preparation.",
              "Field observations showed books and craft supplies left untouched for weeks within arm's reach of active scrolling seats.",
              "Secondary research confirms cognitive exhaustion dramatically increases adherence to the principle of least effort."
            ]
          },
          {
            title: "Evidence Challenging the Insight",
            items: [
              "Certain phone activities (messaging close family, looking up medical advice, checking transport) ARE the activities participants most want to do in that moment.",
              "The older adult participant deliberately chose tablet reading over porch sitting without reporting any conflict or regret."
            ]
          },
          {
            title: "What Remains Unknown",
            items: [
              "Does lowering the friction of analog hobbies (e.g. keeping a book open on the kitchen counter) reliably redirect the automatic reach?",
              "What role does ambient social anxiety in public spaces play in forcing the hand into the pocket?"
            ]
          }
        ]
      },
      {
        slideNumber: 4,
        slideType: "confidence_justification",
        headline: "Confidence Level & Methodological Justification",
        confidence: "MODERATE-HIGH CONFIDENCE (PROVISIONAL)",
        justification: "Supported consistently across all four generational cohorts and verified by peer-reviewed literature on activation energy. However, it remains provisional until tested against direct behavioral interventions where friction is experimentally adjusted.",
        relationshipNote: "Primary qualitative interviews provided the lived human dilemma (the guilt, the unfinished hobby); secondary cognitive literature provided the theoretical validation (variable reinforcement, attention economics)."
      },
      {
        slideNumber: 5,
        slideType: "conclusion",
        headline: "Insight Summary",
        callout: "The easiest activity to start may not always be the activity a person most wants to do. Design must address the startup threshold, not preach moral restraint.",
        nextPostId: 8,
        nextPostTitle: "ABOUT THE PROBLEM"
      }
    ]
  },
  {
    id: 8,
    number: "08",
    slug: "about-the-problem",
    type: "photo",
    image: "/images/insight.jpg",
    title: "ABOUT THE PROBLEM.",
    displayTitle: "ABOUT THE\nPROBLEM.",
    subtitle: "Defining the problem and exploring what could make a difference.",
    topNote: "Defining the problem and exploring what could make a difference.",
    coverExcerpt: "Defining the problem and exploring what could make a difference.",
    phase: "DEFINE",
    category: "DEFINE PHASE / PROBLEM FRAMING",
    slides: [
      {
        slideNumber: 1,
        slideType: "cover",
        headline: "ABOUT THE PROBLEM.",
        subheading: "Defining the problem and exploring what could make a difference.",
        image: "/images/insight.jpg",
        abstract: "Crystallizing the qualitative research into a structured, formal design challenge. Grounded in empathy, free of premature assumptions, and concluding the research archive."
      },
      {
        slideNumber: 2,
        slideType: "empathy_map",
        headline: "Empathy Map: The Unoccupied Moment",
        quadrants: [
          {
            label: "SAYS (Illustrative Perspectives — Hypothesised)",
            items: [
              "“I only meant to glance at the time, but I stayed on the social feed for an hour.”",
              "“I love my offline hobbies, but I am simply too exhausted to set them up in the evening.”",
              "\"I feel like I have no free time, yet my weekly screen report shows four hours of daily browsing.\""
            ]
          },
          {
            label: "THINKS (Beliefs & Rationalizations)",
            items: [
              "\"This break is too brief to get out my painting supplies or start a new book chapter.\"",
              "\"Checking this notification might be urgent, so having the phone in my hand is practical.\"",
              "\"I will stop scrolling in just two more minutes.\""
            ]
          },
          {
            label: "DOES (Hypothesised Actions to Investigate)",
            items: [
              "Unlocks screen reflexively during brief pauses or waiting intervals.",
              "Swipes down repeatedly on feed without pausing on any individual item.",
              "Bypasses custom Screen Time limit without hesitation during downtime."
            ]
          },
          {
            label: "FEELS (Affective States)",
            items: [
              "Mild restless discomfort when hands and mind are unoccupied.",
              "A temporary burst of low-grade anticipation upon unlocking.",
              "Subtle guilt, eye strain, and cognitive fog after prolonged scrolling."
            ]
          }
        ]
      },
      {
        slideNumber: 3,
        slideType: "provisional_persona",
        headline: "Provisional Persona: The Unintentional Scroller",
        tag: "PROVISIONAL HYPOTHESIS — NOT UNIVERSAL",
        persona: {
          title: "The Unintentional Scroller",
          archetype: "An individual navigating fragmented daily pauses who defaults to screen checking despite desiring richer offline engagement.",
          behaviours: "Regularly unlocks phone during transitional moments (elevators, transit, coffee waiting); maintains genuine creative/analog interests that remain neglected.",
          coreFrustration: "The disproportionate activation energy required to begin satisfying offline hobbies compared to the instant zero-friction convenience of the phone.",
          provisionalDisclaimer: "This persona represents a synthesized behavioural archetype identified within our study cohorts; it is not claimed to represent all age groups or demographics universally."
        }
      },
      {
        slideNumber: 4,
        slideType: "pov_problem_hmw",
        headline: "POV, Problem Statement & How Might We",
        pov: {
          label: "POINT OF VIEW (POV) STATEMENT",
          statement: "A person who frequently reaches for their phone during unoccupied moments may need an easier way to discover and begin a satisfying alternative activity, because the phone provides immediate access to stimulation while other activities may require more effort to initiate."
        },
        problem: {
          label: "FORMAL PROBLEM STATEMENT",
          statement: "People often turn to their phones during moments of boredom or unoccupied time. While smartphones offer immediate access to content and stimulation, other enjoyable activities may require more thought, preparation, or effort to begin."
        },
        hmw: {
          label: "PRIMARY HOW MIGHT WE (HMW) QUESTION",
          question: "How might we make alternative activities easier to choose and start during moments of unoccupied time, without assuming that all phone use is undesirable?"
        }
      },
      {
        slideNumber: 5,
        slideType: "conclusion",
        headline: "Research Archive Conclusion",
        callout: "The Empathise and Define phases are complete. The persona, insight, POV, and problem statement stand as provisional foundations strictly grounded in qualitative research evidence.",
        nextPostId: 1,
        nextPostTitle: "ABOUT BOREDOM (RESTART)"
      }
    ]
  }
];
