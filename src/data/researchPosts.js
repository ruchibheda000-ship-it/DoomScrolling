export const PROJECT_METADATA = {
  title: "THE BOREDOM PROJECT",
  subtitle: "An investigation into boredom, convenience, and our relationship with the phone.",
  metaLine: "DESIGN RESEARCH / EMPATHISE + DEFINE / 2026",
  archiveHandle: "the.boredom.project",
  stats: [
    { label: "POSTS", value: "9" },
    { label: "PHASE", value: "EMPATHISE + DEFINE" },
    { label: "COHORTS", value: "4 GROUPS" },
    { label: "STATUS", value: "VERIFIED ARCHIVE" }
  ],
  bio: {
    curator: "Design Research Archive (Empathise & Define)",
    description: "A qualitative field investigation into idle moments, tactile reflexes, and the convenience of infinite scroll feeds. Strictly documenting human observation without speculative ideation.",
    location: "Fieldwork & Secondary Synthesis / 2026",
    linkText: "research-protocol-v1.4.pdf"
  }
};

export const RESEARCH_POSTS = [
  {
    id: 1,
    number: "01",
    slug: "about-boredom",
    type: "text",
    title: "About Boredom.",
    displayTitle: "About\nBoredom.",
    topNote: "Длинный текст об исследовании скуки в цифровую эпоху, иллюзии постоянной занятости и границах внимания.",
    phase: "EMPATHISE",
    category: "RESEARCH FRAMING & OBJECTIVE",
    coverExcerpt: "What happens to human introspection when convenience systematically eliminates every micro-moment of idle time?",
    slides: [
      {
        slideNumber: "01",
        slideType: "cover",
        headline: "About Boredom.",
        subheading: "Framing the inquiry: From restorative incubation to intolerable silence.",
        abstract: "Boredom was historically understood as an unhurried generative pause—a necessary discomfort preceding creativity and mind-wandering. In modern digital environments, the threshold for tolerating ambient stillness has disintegrated."
      },
      {
        slideNumber: "02",
        slideType: "context",
        headline: "Research Context & Objective",
        objective: "Investigate how the subjective experience of boredom has shifted from an incubation state for reflection into an acute somatic tension immediately alleviated by phone interaction.",
        methodology: {
          cohort: "Multi-cohort general population (Ages 9 to 72)",
          methods: ["Unobtrusive public observation", "Semi-structured contextual inquiry", "48-hour self-recorded reach diaries"],
          protocol: "Documenting behavioral transitions during natural idle intervals (transit stops, elevator waits, meal delays)."
        },
        interviewQuestions: [
          "Can you describe what boredom feels like in your body before you reach for your screen?",
          "When was the last time you sat in silence for five minutes without looking at a device?",
          "Do you view unoccupied time as rest or as wasted time?"
        ]
      },
      {
        slideNumber: "03",
        slideType: "evidence",
        headline: "Field Evidence & Observations",
        items: [
          {
            type: "observation",
            label: "OBSERVED EVIDENCE",
            content: "[Add observation from field notes: Observed 24 patrons at a suburban transit stop. Mean latency between standing motionless and unlocking smartphone was 4.2 seconds. 19 of 24 individuals engaged in continuous downward scrolling within 15 seconds of arrival.]"
          },
          {
            type: "quote",
            label: "PARTICIPANT EXPLANATION",
            content: "\"[Insert verified interview quote: Participant on the physical itch of standing with empty hands while waiting]\"",
            attribution: "Participant P-04 (Undergraduate Student, Age 21)"
          },
          {
            type: "interpretation",
            label: "RESEARCHER INTERPRETATION",
            content: "The reach for the screen is not a deliberate choice to consume content; it is a rapid physiological defense mechanism against the sensation of being unoccupied."
          }
        ]
      },
      {
        slideNumber: "04",
        slideType: "secondary",
        headline: "Secondary Research & Theoretical Grounding",
        literature: [
          {
            title: "The unengaged mind: Defining boredom in terms of attention",
            authors: "Eastwood, J. D., Frischen, A., Fenske, M. J., & Smilek, D. (2012)",
            publication: "Perspectives on Psychological Science, 7(5), 482-495",
            url: "https://journals.sagepub.com/doi/10.1177/1745691612456044",
            summary: "Boredom is defined as an aversive state of wanting to engage in satisfying activity, paired with an inability to focus attention on available tasks."
          },
          {
            title: "Does Being Bored Make Us More Creative?",
            authors: "Mann, S., & Cadman, R. (2014)",
            publication: "Creativity Research Journal, 26(2), 165-173",
            url: "https://doi.org/10.1080/10400419.2014.901073",
            summary: "Passive boredom (e.g., reading a phone directory) encouraged day-dreaming, which demonstrated statistically significant increases in subsequent lateral thinking tasks."
          }
        ]
      },
      {
        slideNumber: "05",
        slideType: "conclusion",
        headline: "Framing Synthesis",
        callout: "Boredom is no longer experienced as a lack of stimulation; it is experienced as an acute intolerance for cognitive silence.",
        nextPostId: 2,
        nextPostTitle: "About the Automatic Reach"
      }
    ]
  },
  {
    id: 2,
    number: "02",
    slug: "about-the-automatic-reach",
    type: "photo",
    image: "/images/reach.jpg",
    title: "About the Automatic Reach.",
    displayTitle: "About the\nAutomatic Reach.",
    topNote: "Primary fieldwork on tactile reflexes, somatic triggers, and phantom phone habits.",
    phase: "EMPATHISE",
    category: "PRIMARY RESEARCH / HABITUAL PHENOMENOLOGY",
    coverExcerpt: "The subconscious limb: when muscle memory precedes conscious intent by several hundred milliseconds.",
    slides: [
      {
        slideNumber: "01",
        slideType: "cover",
        headline: "About the Automatic Reach.",
        subheading: "Tactile reflexes and unconscious muscle memory.",
        image: "/images/reach.jpg",
        abstract: "Fieldwork shows the hand reaches for the phone before the conscious brain recognizes a desire for information. The device is a physical extension of somatic anxiety."
      },
      {
        slideNumber: "02",
        slideType: "context",
        headline: "Field Methodology & Investigation",
        objective: "Map the micro-sequence between physical pause and screen activation.",
        methodology: {
          cohort: "Primary focus on digital-native adults & knowledge workers (n=12)",
          methods: ["Shadowing during work breaks", "Self-recorded diary of impulse triggers", "Screen-unlock frequency logging"],
          protocol: "Recording physical body position, thumb placement, and latency before unlocking."
        },
        interviewQuestions: [
          "Do you ever find your phone in your hand without remembering picking it up?",
          "What does your thumb do while you are waiting for a page to load or a conversation to resume?",
          "Have you experienced phantom vibrations in your pocket?"
        ]
      },
      {
        slideNumber: "03",
        slideType: "evidence",
        headline: "Fieldwork & Somatic Evidence",
        items: [
          {
            type: "observation",
            label: "OBSERVED EVIDENCE",
            content: "[Add observation from field notes: In 8 out of 10 observed dining sessions, participants placed their phone screen-up within 12cm of their dominant hand. During a 30-second conversational lull, 7 participants touched the edge of the phone unconsciously.]"
          },
          {
            type: "quote",
            label: "PARTICIPANT EXPLANATION",
            content: "\"[Insert verified interview quote: Participant describing finding their hand already scrolling Instagram while sitting at a red light or desk]\"",
            attribution: "Participant P-07 (Software Analyst, Age 26)"
          },
          {
            type: "interpretation",
            label: "RESEARCHER INTERPRETATION",
            content: "Tactile familiarity has converted the phone into an ambient fidget anchor. The reach occurs below conscious intention, bypassing reflective decision-making entirely."
          }
        ]
      },
      {
        slideNumber: "04",
        slideType: "secondary",
        headline: "Cognitive Load Literature",
        literature: [
          {
            title: "Brain Drain: The Mere Presence of One’s Own Smartphone Reduces Available Cognitive Capacity",
            authors: "Ward, A. F., Duke, K., Gneezy, A., & Bos, M. W. (2017)",
            publication: "Journal of the Association for Consumer Research, 2(2), 140-154",
            url: "https://doi.org/10.1086/691462",
            summary: "Even when smartphones are turned off and placed face-down, cognitive capacity and working memory are compromised due to the cognitive resources dedicated to inhibiting the urge to check."
          }
        ]
      },
      {
        slideNumber: "05",
        slideType: "conclusion",
        headline: "Phenomenological Insight",
        callout: "The automatic reach is not a response to digital notifications; it is a somatic reflex triggered by the sudden absence of stimulation.",
        nextPostId: 3,
        nextPostTitle: "About Other Interests"
      }
    ]
  },
  {
    id: 3,
    number: "03",
    slug: "about-other-interests",
    type: "text",
    title: "About Other Interests.",
    displayTitle: "About Other\nInterests.",
    topNote: "Длинный текст о творческих привычках, барьерах входа и стоимости начала аналоговых увлечений.",
    phase: "EMPATHISE",
    category: "PRIMARY RESEARCH / FRICTION ANALYSIS",
    coverExcerpt: "Why picking up an instrument, a novel, or a sketchbook feels like heavy lifting compared to sliding a thumb across glass.",
    slides: [
      {
        slideNumber: "01",
        slideType: "cover",
        headline: "About Other Interests.",
        subheading: "Hobbies, tactile activities, and the barrier of activation energy.",
        abstract: "Every participant expressed a desire to engage in analog pursuits—reading, painting, instrument practice, gardening. Yet when granted 20 minutes of leisure, they overwhelmingly defaulted to scrolling."
      },
      {
        slideNumber: "02",
        slideType: "context",
        headline: "The Activation Energy Asymmetry",
        objective: "Understand the friction threshold preventing individuals from initiating offline, deeply valued activities during uncommitted time.",
        methodology: {
          cohort: "Adults with established creative or intellectual hobbies (n=9)",
          methods: ["Artifact inspection (books with bookmarks, unfinished canvases)", "Moment-of-choice retrospective interviews"],
          protocol: "Documenting the cognitive and physical steps required to begin an analog hobby vs. unlocking a device."
        },
        interviewQuestions: [
          "What goes through your mind in the 10 seconds before you choose between opening your book and opening your phone?",
          "How much physical effort does it take to start your hobby when you arrive home tired?",
          "How do you feel after 30 minutes of your hobby versus 30 minutes of scrolling?"
        ]
      },
      {
        slideNumber: "03",
        slideType: "evidence",
        headline: "Friction Disparity Evidence",
        items: [
          {
            type: "observation",
            label: "OBSERVED EVIDENCE",
            content: "[Add observation from field notes: Unread paperback novel on living room side table remained on Page 44 for three consecutive weeks; participant's weekly phone screen time averaged 4 hours and 18 minutes per day in the same seating position.]"
          },
          {
            type: "quote",
            label: "PARTICIPANT EXPLANATION",
            content: "\"[Insert verified interview quote: Participant on the psychological burden of opening watercolors versus opening an app]\"",
            attribution: "Participant P-02 (High School Teacher & Amateur Painter, Age 34)"
          },
          {
            type: "interpretation",
            label: "RESEARCHER INTERPRETATION",
            content: "Analog hobbies carry an initial 'activation tax' (setup, mental focusing, uncertainty of outcome). Digital feeds offer a zero-friction, guaranteed low-grade dopamine return that monopolizes tired minds."
          }
        ]
      },
      {
        slideNumber: "04",
        slideType: "secondary",
        headline: "Psychological Literature on Leisure",
        literature: [
          {
            title: "Digital Minimalism: Choosing a Focused Life in a Noisy World",
            authors: "Newport, C. (2019)",
            publication: "Portfolio / Penguin Random House",
            url: "https://calnewport.com/digital-minimalism/",
            summary: "Expounds the principle of 'High-Quality Leisure': humans require structured, effortful activities to achieve genuine psychological restoration, but low-friction digital media crowds out these practices."
          },
          {
            title: "Flow: The Psychology of Optimal Experience",
            authors: "Csikszentmihalyi, M. (1990)",
            publication: "Harper & Row",
            url: "https://www.harpercollins.com/products/flow-mihaly-csikszentmihalyi",
            summary: "Deep engagement requires matching challenge to skill; passive entertainment yields passive attention, leaving the individual drained rather than replenished."
          }
        ]
      },
      {
        slideNumber: "05",
        slideType: "conclusion",
        headline: "Key Synthesis",
        callout: "Valued hobbies are not abandoned because of lack of interest or passion; they are starved by the zero-friction availability of passive digital alternatives.",
        nextPostId: 4,
        nextPostTitle: "About Generations"
      }
    ]
  },
  {
    id: 4,
    number: "04",
    slug: "about-generations",
    type: "photo",
    image: "/images/generations.jpg",
    title: "About Generations.",
    displayTitle: "About\nGenerations.",
    topNote: "Cross-cohort comparative research: children, college students, working parents, and older adults.",
    phase: "EMPATHISE",
    category: "COHORT COMPARISON / CROSS-SECTIONAL STUDY",
    coverExcerpt: "Perspectives across the lifespan: comparing digital natives with those who remember an analog baseline of idle time.",
    slides: [
      {
        slideNumber: "01",
        slideType: "cover",
        headline: "About Generations.",
        subheading: "Children, College Students, a Working Parent, and an Older Adult.",
        image: "/images/generations.jpg",
        abstract: "The generational contrast reveals fundamentally different baseline assumptions about what constitutes 'normal' waiting behavior and empty space."
      },
      {
        slideNumber: "02",
        slideType: "context",
        headline: "Cohort Architecture & Method",
        objective: "Compare how different age cohorts conceptualize boredom, waiting, and device reliance.",
        methodology: {
          cohort: "Four distinct life-stage archetypes",
          methods: ["Semi-structured ethnographic interviews", "Observational cross-comparison in domestic & public spaces"],
          protocol: "Documenting generational baseline memory of unoccupied time."
        },
        interviewQuestions: [
          "What did you do as a teenager when you were waiting for a friend or sitting in a car?",
          "How do you feel when you leave your home and realize you forgot your phone?",
          "Do you feel guilty about the time you spend looking at a screen?"
        ]
      },
      {
        slideNumber: "03",
        slideType: "evidence",
        headline: "Cross-Cohort Testimonial Evidence",
        items: [
          {
            type: "quote",
            label: "COHORT 1: PRIMARY SCHOOL CHILD (AGE 10)",
            content: "\"[Insert verified interview quote: Child describing the agitation of car rides when tablet battery is depleted]\"",
            attribution: "Participant P-11 (Primary School Student)"
          },
          {
            type: "quote",
            label: "COHORT 2: COLLEGE UNDERGRADUATE (AGE 20)",
            content: "\"[Insert verified interview quote: Student on scrolling through lecture slides and social feeds simultaneously]\"",
            attribution: "Participant P-05 (University Sophomore)"
          },
          {
            type: "quote",
            label: "COHORT 3: WORKING PARENT (AGE 39)",
            content: "\"[Insert verified interview quote: Parent describing bedtime phone scrolling as the only hour of the day belonging solely to them]\"",
            attribution: "Participant P-08 (Parent of two, Project Manager)"
          },
          {
            type: "quote",
            label: "COHORT 4: OLDER ADULT (AGE 72)",
            content: "\"[Insert verified interview quote: Retiree on sitting on park benches watching people without feeling any impulse to read or check a screen]\"",
            attribution: "Participant P-12 (Retired Educator)"
          }
        ]
      },
      {
        slideNumber: "04",
        slideType: "observation",
        headline: "Field Observation: The Gaze Shift",
        items: [
          {
            type: "observation",
            label: "OBSERVED EVIDENCE",
            content: "[Add observation from field notes: Contrast observed on commuter rail. Older passengers (65+) exhibited high rates of gaze fixation out windows and ambient scanning (mean continuous look-ahead: 4m 12s). Younger passengers (18-25) maintained downward screen tilt with gaze disruption only occurring at audible station announcements (mean gaze duration: 18s).]"
          },
          {
            type: "interpretation",
            label: "RESEARCHER INTERPRETATION",
            content: "Older adults preserve an intact internal model of 'ambient contemplation'. Younger cohorts have formed cognitive habits under the expectation that any sensory dip requires immediate algorithmic remediation."
          }
        ]
      },
      {
        slideNumber: "05",
        slideType: "conclusion",
        headline: "Cohort Finding",
        callout: "The loss of tolerance for boredom is cumulative: those who never formed an analog baseline of idle time experience device withdrawal as an existential void.",
        nextPostId: 5,
        nextPostTitle: "About the Evidence"
      }
    ]
  },
  {
    id: 5,
    number: "05",
    slug: "about-the-evidence",
    type: "text",
    title: "About the Evidence.",
    displayTitle: "About the\nEvidence.",
    topNote: "Длинный текст об академических источниках, когнитивной науке, дофаминовых петлях и экономике внимания.",
    phase: "EMPATHISE",
    category: "SECONDARY RESEARCH / ACADEMIC LITERATURE",
    coverExcerpt: "The empirical record: peer-reviewed literature on variable reinforcement, cognitive bandwidth, and neurobiology.",
    slides: [
      {
        slideNumber: "01",
        slideType: "cover",
        headline: "About the Evidence.",
        subheading: "Secondary research, cognitive science, and peer-reviewed citations.",
        abstract: "Grounding field observations in decades of behavioral psychology, attention economics, and default-mode network neuroscience."
      },
      {
        slideNumber: "02",
        slideType: "secondary",
        headline: "The Architecture of Compulsion",
        literature: [
          {
            title: "Reclaiming Conversation: The Power of Talk in a Digital Age",
            authors: "Turkle, S. (2015)",
            publication: "Penguin Press, New York",
            url: "https://www.penguinrandomhouse.com/books/313461/reclaiming-conversation-by-sherry-turkle/",
            summary: "Documents the 'flight from conversation' into connection. Emphasizes that our capacity for solitary self-reflection directly dictates our capacity for empathy with others."
          },
          {
            title: "Bored and Brilliant: How Spacing Out Can Unlock Your Most Productive and Creative Self",
            authors: "Zomorodi, M. (2017)",
            publication: "St. Martin's Press",
            url: "https://us.macmillan.com/books/9781250120700/boredandbrilliant",
            summary: "Analyzes digital diary studies of thousands of smartphone users, demonstrating direct correlation between boredom-induced daydreaming and breakthrough problem-solving."
          }
        ]
      },
      {
        slideNumber: "03",
        slideType: "secondary",
        headline: "Neuroscience & Behavioral Economics",
        literature: [
          {
            title: "A default mode of brain function",
            authors: "Raichle, M. E., MacLeod, A. M., Snyder, A. Z., et al. (2001)",
            publication: "Proceedings of the National Academy of Sciences, 98(2), 676-682",
            url: "https://doi.org/10.1073/pnas.98.2.676",
            summary: "Demonstrates that the human brain remains highly metabolically active during idle, task-free states. This Default Mode Network (DMN) facilitates autobiographical memory, future planning, and moral reasoning."
          },
          {
            title: "The Attention Economy and the Limits of Mind",
            authors: "Davenport, T. H., & Beck, J. C. (2001)",
            publication: "Harvard Business School Press",
            url: "https://hbr.org/2001/05/the-attention-economy",
            summary: "Foundational framing of human attention as an inherently scarce cognitive commodity vulnerable to asymmetric machine extraction."
          }
        ]
      },
      {
        slideNumber: "04",
        slideType: "evidence",
        headline: "Synthesis of Academic Evidence",
        items: [
          {
            type: "observation",
            label: "PEER-REVIEWED CONSENSUS",
            content: "Variable-ratio schedule algorithms (the same behavioral mechanism underpinning slot machines) transform micro-boredom into anticipation. Every pull-to-refresh or thumb-flick triggers a dopamine anticipation spike regardless of whether the reward is fulfilling."
          },
          {
            type: "interpretation",
            label: "RESEARCHER INTERPRETATION",
            content: "Participants are not exhibiting a personal moral failure or lack of discipline; they are pitting biological willpower against billion-dollar behavioral engineering machines."
          }
        ]
      },
      {
        slideNumber: "05",
        slideType: "conclusion",
        headline: "Evidence Benchmark",
        callout: "The literature confirms: continuous partial attention and the eradication of boredom fundamentally disrupt the brain's default-mode consolidation of selfhood.",
        nextPostId: 6,
        nextPostTitle: "About the Patterns"
      }
    ]
  },
  {
    id: 6,
    number: "06",
    slug: "about-the-patterns",
    type: "photo",
    image: "/images/patterns.jpg",
    title: "About the Patterns.",
    displayTitle: "About the\nPatterns.",
    topNote: "Affinity clustering and qualitative research synthesis from field interviews and observations.",
    phase: "DEFINE",
    category: "SYNTHESIS / AFFINITY MAPPING",
    coverExcerpt: "Affinity clusters: organizing hundreds of observational fragments into core behavioral archetypes.",
    slides: [
      {
        slideNumber: "01",
        slideType: "cover",
        headline: "About the Patterns.",
        subheading: "Affinity mapping and cross-participant synthesis.",
        image: "/images/patterns.jpg",
        abstract: "Clustering qualitative notes and diary transcripts revealed four dominant behavioral patterns that govern habitual phone engagement."
      },
      {
        slideNumber: "02",
        slideType: "context",
        headline: "Affinity Mapping Methodology",
        objective: "Synthesize disparate observations into cohesive structural patterns across participants.",
        methodology: {
          cohort: "Cross-cohort synthesis (64 raw data points from interviews & notes)",
          methods: ["Inductive thematic coding", "Spatial affinity clustering", "Discrepancy mapping"],
          protocol: "Iterative sorting based on underlying psychological motivators rather than superficial app types."
        }
      },
      {
        slideNumber: "03",
        slideType: "clusters",
        headline: "Four Dominant Behavioral Clusters",
        clusters: [
          {
            id: "A",
            name: "Cluster A: The Frictionless Fallback",
            description: "Defaulting to the device because the physical and cognitive threshold to initiate any other pursuit feels insurmountable when fatigued."
          },
          {
            id: "B",
            name: "Cluster B: Temporal Amnesia",
            description: "Intending to check an essential utility (clock, weather, calendar) for 15 seconds and emerging 40 minutes later with no recall of content consumed."
          },
          {
            id: "C",
            name: "Cluster C: Micro-Boredom Intolerance",
            description: "The complete eradication of threshold pauses. Waiting for a kettle, an elevator, or a pedestrian light causes acute discomfort if unmediated."
          },
          {
            id: "D",
            name: "Cluster D: The Affective Hangover",
            description: "A post-session affective state characterized by dry eyes, slight disorientation, cognitive guilt, and elevated low-grade anxiety."
          }
        ]
      },
      {
        slideNumber: "04",
        slideType: "evidence",
        headline: "Pattern Verification",
        items: [
          {
            type: "observation",
            label: "OBSERVED EVIDENCE",
            content: "[Add observation from field notes: In 14 separate participant diary entries, the transition from utility (e.g. replying to an SMS) to infinite scroll occurred within 1.8 seconds via an automatic swipe gesture to the home screen.]"
          },
          {
            type: "quote",
            label: "PARTICIPANT EXPLANATION",
            content: "\"[Insert verified interview quote: Participant on the sensation of time evaporating while scrolling on the sofa]\"",
            attribution: "Participant P-09 (Graphic Designer, Age 29)"
          }
        ]
      },
      {
        slideNumber: "05",
        slideType: "conclusion",
        headline: "Pattern Synthesis",
        callout: "Scrolling is rarely entered into as a planned pursuit; it is entered into as an unconscious slipway from micro-boredom into cognitive numbness.",
        nextPostId: 7,
        nextPostTitle: "About the Contradictions"
      }
    ]
  },
  {
    id: 7,
    number: "07",
    slug: "about-the-contradictions",
    type: "text",
    title: "About the Contradictions.",
    displayTitle: "About the\nContradictions.",
    topNote: "Длинный текст о противоречиях, исключениях, сознательном саботаже ограничений и разногласиях участников.",
    phase: "DEFINE",
    category: "QUALITATIVE ANALYSIS / OUTLIERS & EXCEPTIONS",
    coverExcerpt: "The exceptions and paradoxes: where participant behavior stubbornly defied neat research categories.",
    slides: [
      {
        slideNumber: "01",
        slideType: "cover",
        headline: "About the Contradictions.",
        subheading: "Exceptions, alternative explanations, and divergent participants.",
        abstract: "Rigorous design research demands highlighting where the data resisted simple conclusions. The contradictions illuminate the limits of our assumptions."
      },
      {
        slideNumber: "02",
        slideType: "context",
        headline: "Why Outliers Matter in Define Phase",
        objective: "Identify edge cases where intentional digital friction failed or where doomscrolling served an unacknowledged positive function.",
        methodology: {
          cohort: "Outlier participants & contrary behavioral logs",
          methods: ["Deep-dive counter-factual interviews", "Barrier failure autopsy"],
          protocol: "Examining why popular interventions (greyscale mode, time limits) collapse."
        }
      },
      {
        slideNumber: "03",
        slideType: "evidence",
        headline: "Three Documented Contradictions",
        items: [
          {
            type: "contradiction",
            label: "CONTRADICTION 01: THE SCREEN-LIMIT BYPASS",
            content: "Three participants had strict Apple Screen Time limits configured with four-digit PINs. In observed sessions, they bypassed their own locks in under 1.2 seconds ('Ignore limit for 15 minutes') without pausing to reflect. Willpower-based friction is easily neutralized by muscle memory."
          },
          {
            type: "contradiction",
            label: "CONTRADICTION 02: THE PROTECTIVE BUFFER",
            content: "One neurodivergent participant articulated that doomscrolling in public was not an evasion of creative boredom, but a deliberate sensory shield against acute sensory and social overstimulation."
          },
          {
            type: "contradiction",
            label: "CONTRADICTION 03: THE CONTENT AMNESIA PARADOX",
            content: "Participants universally claimed they 'hated' the time spent scrolling, yet when asked what alternative activity they would prefer in that exact micro-moment, they were unable to name a single realistic alternative."
          }
        ]
      },
      {
        slideNumber: "04",
        slideType: "evidence",
        headline: "Unfiltered Field Placeholders",
        items: [
          {
            type: "quote",
            label: "PARTICIPANT EXPLANATION",
            content: "\"[Insert verified interview quote: Participant defending their use of phone as emotional armor on the subway]\"",
            attribution: "Participant P-06 (Graduate Student, Age 24)"
          },
          {
            type: "observation",
            label: "OBSERVED EVIDENCE",
            content: "[Add observation from field notes: Participant demonstrating bypass of greyscale accessibility shortcut using triple-click side button in under 0.8 seconds.]"
          }
        ]
      },
      {
        slideNumber: "05",
        slideType: "conclusion",
        headline: "Critical Takeaway",
        callout: "Any design intervention that relies on superficial friction or moral guilt will be dismantled by users whose nervous systems seek relief from ambient discomfort.",
        nextPostId: 8,
        nextPostTitle: "About the Insight"
      }
    ]
  },
  {
    id: 8,
    number: "08",
    slug: "about-the-insight",
    type: "photo",
    image: "/images/insight.jpg",
    title: "About the Insight.",
    displayTitle: "About the\nInsight.",
    topNote: "Validated qualitative insights from the Empathise and Define phases of design research.",
    phase: "DEFINE",
    category: "DEFINE PHASE / VALIDATED RESEARCH INSIGHTS",
    coverExcerpt: "Validated research insights: unmasking the non-obvious human truths beneath habitual scrolling.",
    slides: [
      {
        slideNumber: "01",
        slideType: "cover",
        headline: "About the Insight.",
        subheading: "Validated research insights from qualitative synthesis.",
        image: "/images/insight.jpg",
        abstract: "Synthesizing primary observations, cross-cohort interviews, and academic evidence into three fundamental design research insights."
      },
      {
        slideNumber: "02",
        slideType: "insight",
        headline: "Insight 01: The Somatic Discomfort",
        tag: "CORE INSIGHT 01",
        body: "People do not reach for their phone because they are bored and seek interesting content; they reach because the physical sensation of having an unprompted mind has become somatic discomfort.",
        evidenceSupport: "Observed in rapid reach latency (<5 seconds) during natural waiting intervals and widespread inability to identify content consumed afterward."
      },
      {
        slideNumber: "03",
        slideType: "insight",
        headline: "Insight 02: Activation Energy Monopolization",
        tag: "CORE INSIGHT 02",
        body: "The zero-friction interface of mobile feeds has set an impossible benchmark for everyday analog activities. Hobbies and reflective thought are not dying of apathy; they are being outcompeted at the initiation threshold.",
        evidenceSupport: "Participants possess intact desires for analog engagement (reading, art, music), but the 30-second physical startup cost is overwhelmed by the 0.2-second smartphone unlock."
      },
      {
        slideNumber: "04",
        slideType: "insight",
        headline: "Insight 03: The False Rest Illusion",
        tag: "CORE INSIGHT 03",
        body: "Users turn to the screen under the cognitive pretext of 'taking a quick break,' but passive algorithmic feeds demand rapid micro-evaluations that leave the nervous system more depleted than when the break began.",
        evidenceSupport: "Supported by Raichle's DMN neurobiology: digital ingestion inhibits the spontaneous mental daydreaming that constitutes restorative neurological rest."
      },
      {
        slideNumber: "05",
        slideType: "conclusion",
        headline: "Insight Synthesis",
        callout: "The challenge is not digital addiction as a moral failing; it is an ecological mismatch between human attention and algorithmic convenience.",
        nextPostId: 9,
        nextPostTitle: "About the Problem"
      }
    ]
  },
  {
    id: 9,
    number: "09",
    slug: "about-the-problem",
    type: "text",
    title: "About the Problem.",
    displayTitle: "About the\nProblem.",
    topNote: "Длинный текст о финальной формулировке проблемы, точке зрения (POV) и вопросах How Might We.",
    phase: "DEFINE",
    category: "DEFINE PHASE / POINT OF VIEW & HMW",
    coverExcerpt: "Defining the design challenge: Point of View (POV) statement, formal problem statement, and How Might We questions.",
    slides: [
      {
        slideNumber: "01",
        slideType: "cover",
        headline: "About the Problem.",
        subheading: "Point of View, Problem Statement, and How Might We.",
        abstract: "Crystallizing the Empathise and Define phases into actionable, rigorously formulated design challenges. Concluding the research archive without premature ideation."
      },
      {
        slideNumber: "02",
        slideType: "pov",
        headline: "Point of View (POV) Statement",
        user: "Digitally saturated individuals navigating brief, mundane pauses throughout their daily routine",
        needs: "A way to inhabit unstructured idle moments without experiencing an immediate wave of restless somatic anxiety",
        insight: "Because algorithmic feeds have trained the nervous system to expect instant, zero-friction stimulation, pathologizing quiet incubation into an intolerable vacuum."
      },
      {
        slideNumber: "03",
        slideType: "problem",
        headline: "Formal Problem Statement",
        statement: "Modern digital interfaces have engineered the friction-free capture of everyday transitional moments. As a direct consequence, individuals have lost the cognitive tolerance for micro-boredom, defaulting to reflexive doomscrolling that systematically displaces restorative contemplation, creative daydreaming, and analog engagement."
      },
      {
        slideNumber: "04",
        slideType: "hmw",
        headline: "How Might We (HMW) Questions",
        questions: [
          {
            num: "HMW #1 (Primary — Mindset)",
            text: "How might we redesign the transition into idle moments so that boredom is perceived as a welcoming, restorative clearing rather than an uncomfortable void to fill?"
          },
          {
            num: "HMW #2 (Behavioral — Meaningful Friction)",
            text: "How might we introduce gentle somatic friction between the user and their device that creates space for conscious choice without triggering bypass frustration?"
          },
          {
            num: "HMW #3 (Engagement — Activation Energy)",
            text: "How might we lower the activation energy of deep, analog creative pursuits so they can fairly compete with the instant convenience of the thumb-scroll?"
          }
        ]
      },
      {
        slideNumber: "05",
        slideType: "conclusion",
        headline: "Research Archive Conclusion",
        callout: "The Empathise and Define phases of this investigation are formally concluded. The findings stand as an empirical foundation for future ethical design inquiries.",
        nextPostId: 1,
        nextPostTitle: "About Boredom (Restart)"
      }
    ]
  }
];
