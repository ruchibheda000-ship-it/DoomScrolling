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
    linkText: "research-protocol-v2.0.pdf"
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
    topNote: "Длинный текст об исследовании скуки в цифровую эпоху, иллюзии постоянной занятости и границах внимания.",
    phase: "EMPATHISE",
    category: "RESEARCH FRAMING & OBJECTIVE",
    coverExcerpt: "Introducing the central observation, core design question, and research objective without assuming causation.",
    slides: [
      {
        slideNumber: 1,
        slideType: "cover",
        headline: "ABOUT BOREDOM.",
        subheading: "An empirical inquiry into unoccupied moments and digital defaults.",
        abstract: "Boredom is often assumed to directly cause screen use. This research investigates what people actually do during moments of unoccupied time, why they reach for their phones, and how convenience and alternative choices shape their actions."
      },
      {
        slideNumber: 2,
        slideType: "context",
        headline: "Initial Observation & The Design Question",
        objective: "To investigate why people across different generations routinely reach for their phones during brief idle intervals, and how the presence of other activities influences that choice.",
        observationNarrative: {
          initialObservation: "People across different generations—from young children waiting for transport, to university students in lecture lulls, to working parents at dinner, to older adults in waiting rooms—frequently reach for their mobile phones during mundane moments of downtime.",
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
            definition: "Extended passive consumption of social feeds, lifestyle videos, or messaging—often undertaken to pass time or decompress, without an overtly distressing emotional charge."
          },
          {
            term: "Doomscrolling (Negative News Consumption)",
            definition: "The specific compulsive act of continuously consuming distressing, apocalyptic, or threatening news updates, which empirical literature links directly to existential dread and pessimism."
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
    topNote: "Primary fieldwork on tactile reflexes, somatic triggers, and phantom phone habits.",
    phase: "EMPATHISE",
    category: "PRIMARY RESEARCH / INTERVIEW ARCHIVE",
    coverExcerpt: "Primary research methodology and interview archive across four multi-generational cohorts.",
    slides: [
      {
        slideNumber: 1,
        slideType: "cover",
        headline: "ABOUT THE AUTOMATIC REACH.",
        subheading: "Primary research methodology, interview archive, and participant profiles.",
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
        integrityNote: "No participant counts, exact ages, interview dates, or demographics are fabricated. Content reflects qualitative fieldwork notes."
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
        headline: "Participant Profiles: Cohorts 1 & 2",
        profiles: [
          {
            cohort: "COHORT 1: YOUNG CHILDREN",
            context: "Observed during transit delays and family meal waiting periods.",
            questionsFocus: "What did you do when you had nothing to do? What was the first thing you reached for?",
            quotation: "\"[Insert participant's actual words: Child describing seeking screen when bored in waiting room]\"",
            observation: "[Add verified observation: Observed physical restlessness after 4 minutes without tactile stimulation; repeated requests for device access.]",
            explanation: "Child stated games and videos are 'much more fun than just sitting looking at the wall.'",
            interpretation: "Low tolerance for sensory stillness when digital entertainment has become the default car/waiting pacifier.",
            contradictions: "When provided physical paper and markers, engaged happily without requesting a phone for over 35 minutes.",
            insight: "Children do not crave 'the phone' abstractly; they seek interactive agency when ambient environments offer zero engagement."
          },
          {
            cohort: "COHORT 2: MY COLLEGE COLLEAGUES",
            context: "Observed in university common rooms, library study breaks, and lecture pauses.",
            questionsFocus: "Do you ever unlock your phone without a specific reason? What happens next?",
            quotation: "\"[Insert participant's actual words: Colleague describing unlocking phone automatically during a 2-minute class pause]\"",
            observation: "[Add verified observation: Colleague unlocked phone 9 times within a 45-minute study session without receiving notifications.]",
            explanation: "Participant explained it is 'just a reflex—I check to see if anyone texted me, and then I find myself on TikTok.'",
            interpretation: "Somatic loop has bypassed conscious reflection; phone acts as an ambient physical fidget anchor.",
            contradictions: "Expressed sincere guilt and downloaded screen-time monitoring apps, but routinely bypassed their own passcode locks.",
            insight: "High awareness of time loss coexists with complete inability to arrest the automatic physical reach."
          }
        ]
      },
      {
        slideNumber: 5,
        slideType: "profiles_part2",
        headline: "Participant Profiles: Cohorts 3 & 4",
        profiles: [
          {
            cohort: "COHORT 3: MY MOTHER",
            context: "Observed in domestic kitchen, late-evening living room, and work transitions.",
            questionsFocus: "What do you enjoy doing in your free time? What makes it easier or harder to start?",
            quotation: "\"[Insert participant's actual words: Mother on bedtime scrolling as her only private moment of the day]\"",
            observation: "[Add verified observation: Unfinished knitting project in basket beside chair; phone resting directly on top of the yarn.]",
            explanation: "Participant explained that after a full day of family care and work, getting out knitting supplies requires more energy than she has.",
            interpretation: "Scrolling serves as 'revenge bedtime procrastination'—not out of deep enjoyment, but as zero-effort private boundary reclaiming.",
            contradictions: "Values offline crafts far higher than social feeds, yet spends 4x more time on the latter due to startup friction.",
            insight: "Fatigue makes activation energy the decisive factor in activity selection."
          },
          {
            cohort: "COHORT 4: MY NEIGHBOUR'S GRANDFATHER",
            context: "Observed on front porch, bus stop bench, and morning breakfast table.",
            questionsFocus: "What did you do the last time you had nothing to do? How do you feel without a phone?",
            quotation: "\"[Insert participant's actual words: Grandfather describing sitting quietly watching morning birds and neighbourhood traffic]\"",
            observation: "[Add verified observation: Sat for 22 minutes on bench without checking phone; kept simple flip/smartphone in zipped coat pocket.]",
            explanation: "Participant explained he uses the phone to call his daughter, but sees waiting as a natural part of being outside.",
            interpretation: "Preserved an analog cognitive baseline: waiting is experienced as ambient presence rather than wasted void.",
            contradictions: "Uses a tablet to read morning newspaper for hours, but does not experience post-session guilt or compulsive reach.",
            insight: "Generational differences stem not from technical literacy, but from the presence or absence of an internalized analog baseline."
          }
        ]
      },
      {
        slideNumber: 6,
        slideType: "conclusion",
        headline: "Primary Fieldwork Summary",
        callout: "The reach is universal across generations, but the emotional cost and cognitive resistance vary drastically based on baseline expectations.",
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
    topNote: "Длинный текст о творческих привычках, барьерах входа и стоимости начала аналоговых увлечений.",
    phase: "EMPATHISE",
    category: "PRIMARY RESEARCH / FRICTION ANALYSIS",
    coverExcerpt: "Exploring the relationship between phone use and the activities people genuinely enjoy outside their screens.",
    slides: [
      {
        slideNumber: 1,
        slideType: "cover",
        headline: "ABOUT OTHER INTERESTS.",
        subheading: "Hobbies, activation energy, and the competition for idle time.",
        abstract: "Every participant articulated offline activities they genuinely love—reading, playing guitar, gardening, drawing. Yet when granted 15 minutes of unexpected free time, they overwhelmingly chose the phone."
      },
      {
        slideNumber: 2,
        slideType: "investigation_prompts",
        headline: "Investigation Prompts & Dynamics",
        promptFocus: "Examining what happens in the precise moment between having free time and choosing how to spend it.",
        prompts: [
          { title: "Identified Hobbies", detail: "Novel reading, sketchbook illustration, textile work, baking, acoustic guitar." },
          { title: "Engagement Frequency", detail: "Participants report engaging in valued hobbies 1–2 times per week or less, despite expressing strong desire to do so daily." },
          { title: "Setup & Preparation Effort", detail: "Physical gathering of materials, clearing workspace, finding page numbers, or tuning instruments." },
          { title: "Available Time Window", detail: "Brief micro-breaks (5–20 minutes) vs. dedicated weekend blocks." },
          { title: "Cognitive Energy at Decision", detail: "Decision moments frequently coincide with physical or mental fatigue after academic/work tasks." }
        ]
      },
      {
        slideNumber: 3,
        slideType: "hypothesis_framing",
        headline: "Core Working Hypothesis",
        badge: "PROVISIONAL RESEARCH HYPOTHESIS",
        hypothesis: "“People may have activities they genuinely enjoy but choose not to begin during short breaks because another option is easier to access.”",
        rationale: "This hypothesis positions phone use not as an addiction of preference, but as an asymmetric triumph of immediate physical availability over delayed, effortful satisfaction."
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
    topNote: "Cross-cohort comparative research: children, college students, working parents, and older adults.",
    phase: "EMPATHISE",
    category: "COHORT COMPARISON / CROSS-SECTIONAL STUDY",
    coverExcerpt: "Comparative analysis across children, college colleagues, working parents, and older adults.",
    slides: [
      {
        slideNumber: 1,
        slideType: "cover",
        headline: "ABOUT GENERATIONS.",
        subheading: "Cross-generational comparison matrix and behavioural contrasts.",
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
            firstResponse: "[Insert verified evidence: Child immediately requests phone when car halts at long lights]",
            alternatives: "Physical toys, colouring books, storytelling.",
            barriers: "Requires parental facilitation or physical materials that are not portable."
          },
          {
            cohort: "COLLEGE COLLEAGUES",
            reasonsForPhone: "Social validation, academic group chats, habituated video scrolling.",
            freeTimeActivity: "Doomscrolling, Netflix, casual campus socialising.",
            firstResponse: "[Insert verified evidence: Student reaches into pocket within 3 seconds of sitting at desk]",
            alternatives: "Reading literature, guitar, gym, creative writing.",
            barriers: "Mental exhaustion, perception that breaks are 'too short' to begin a hobby."
          },
          {
            cohort: "MY MOTHER",
            reasonsForPhone: "Family logistics, news summaries, relaxing solitary scroll after chores.",
            freeTimeActivity: "Gardening, recipe research, television, mobile messaging.",
            firstResponse: "[Insert verified evidence: Mother checks phone while waiting for water to boil in kitchen]",
            alternatives: "Knitting, novel reading, walking outdoors.",
            barriers: "Physical fatigue from daily labor; setup effort of craft baskets."
          },
          {
            cohort: "NEIGHBOUR'S GRANDFATHER",
            reasonsForPhone: "Direct phone calls with family, scheduled morning tablet news.",
            freeTimeActivity: "Porch contemplation, radio listening, woodworking, neighbourhood walks.",
            firstResponse: "[Insert verified evidence: Grandfather sits with hands resting on knees, gazing ambiently]",
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
    topNote: "Длинный текст об академических источниках, когнитивной науке, дофаминовых петлях и экономике внимания.",
    phase: "EMPATHISE",
    category: "SECONDARY RESEARCH / ACADEMIC LITERATURE",
    coverExcerpt: "Dedicated secondary research section analyzing four peer-reviewed studies on boredom, technology, and news consumption.",
    slides: [
      {
        slideNumber: 1,
        slideType: "cover",
        headline: "ABOUT THE EVIDENCE.",
        subheading: "Systematic secondary literature review and empirical grounding.",
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
            distinction: "CORRELATION CONFIRMED: High boredom correlates with frequent checking, but longitudinal causation is bidirectional—frequent digital checking also lowers baseline tolerance for stillness."
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
    topNote: "Affinity clustering and qualitative research synthesis from field interviews and observations.",
    phase: "DEFINE",
    category: "SYNTHESIS / AFFINITY MAPPING",
    coverExcerpt: "Interactive affinity map and qualitative research synthesis across 7 provisional clusters.",
    slides: [
      {
        slideNumber: 1,
        slideType: "cover",
        headline: "ABOUT THE PATTERNS.",
        subheading: "Interactive affinity mapping and synthesis across seven behavioral clusters.",
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
    topNote: "Длинный текст о переходе от наблюдений к подтвержденным инсайтам и границам уверенности.",
    phase: "DEFINE",
    category: "DEFINE PHASE / DESIGN INSIGHTS",
    coverExcerpt: "Tracing the journey from initial observation to a validated design research insight.",
    slides: [
      {
        slideNumber: 1,
        slideType: "cover",
        headline: "ABOUT THE INSIGHT.",
        subheading: "The journey from initial observation to a validated design insight.",
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
    topNote: "Длинный текст о карте эмпатии, персоне, POV, постановке проблемы и вопросе How Might We.",
    phase: "DEFINE",
    category: "DEFINE PHASE / PROBLEM FRAMING",
    coverExcerpt: "Formulating the formal Define phase: Empathy map, provisional persona, POV, problem statement, and HMW.",
    slides: [
      {
        slideNumber: 1,
        slideType: "cover",
        headline: "ABOUT THE PROBLEM.",
        subheading: "Define Phase: Empathy Map, Persona, POV Statement, and How Might We.",
        image: "/images/insight.jpg",
        abstract: "Crystallizing the qualitative research into a structured, formal design challenge. Grounded in empathy, free of premature assumptions, and concluding the research archive."
      },
      {
        slideNumber: 2,
        slideType: "empathy_map",
        headline: "Empathy Map: The Unoccupied Moment",
        quadrants: [
          {
            label: "SAYS (Verbatim & Placeholders)",
            items: [
              "\"[Insert participant's actual words: I only meant to look at the time, but I stayed on the feed for an hour.]\"",
              "\"[Insert participant's actual words: I love my hobbies, but I am just too exhausted to begin.]\"",
              "\"I feel like I have no free time, yet my phone screen time report says 4 hours.\""
            ]
          },
          {
            label: "THINKS (Beliefs & Rationalizations)",
            items: [
              "\"This break is too brief to get out my painting supplies or start a new book chapter.\"",
              "\"Checking this message might be urgent, so having the phone in my hand is practical.\"",
              "\"I will stop scrolling in just two more minutes.\""
            ]
          },
          {
            label: "DOES (Observed Actions)",
            items: [
              "[Add verified observation: Unlocks screen automatically within 4 seconds of sitting in waiting area.]",
              "[Add verified observation: Swipes down repeatedly on feed without pausing on any individual item.]",
              "[Add verified observation: Bypasses custom Screen Time PIN in under 1.2 seconds without hesitation.]"
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
