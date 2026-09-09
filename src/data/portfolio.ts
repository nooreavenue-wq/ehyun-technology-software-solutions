



export type ProjectCategory =
  | "Business & Productivity"
  | "AI & Emerging Technology"
  | "Consumer & Lifestyle"
  | "Education & Community"
  | "Success Stories & Case Studies"
  | "Product Design & UI/UX";

export const projectCategories: ProjectCategory[] = [
  "Business & Productivity",
  "AI & Emerging Technology",
  "Consumer & Lifestyle",
  "Education & Community",
  "Success Stories & Case Studies",
  "Product Design & UI/UX",
];

export type ProjectLinks = {
  playStore?: string;
  appStore?: string;
  website?: string;
  figma?: string;
  caseStudyDoc?: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  year: string;
  category: ProjectCategory;
  industry: string;
  projectType: string;
  role: string;
  client: string;
  country: string;
  overview: string;
  challenge: string;
  objective: string;
  approach: string;
  solution: string;
  outcome: string;
  technologies: string[];
  image: string;
  links: ProjectLinks;
};

// NOTE: Project names, clients, countries and descriptions below are the studio's
// real shipped work. Images are seeded placeholders (via picsum.photos) — swap in
// real product screenshots/photography before publishing.
const img = (seed: string) => `https://picsum.photos/seed/${seed}/1600/900`;

export const caseStudies: CaseStudy[] = [
  // ---------------- Business & Productivity ----------------
  {
    slug: "my-tracks",
    name: "My Tracks",
    year: "2026",
    category: "Business & Productivity",
    industry: "Health & Fitness",
    projectType: "Mobile Application",
    role: "Mobile Development",
    client: "Darren Roe Fitness",
    country: "United States",
    overview:
      "Track your outdoor activities with Map My Tracks, a fitness platform that uses GPS technology to record workouts, analyze performance, and help users achieve their health and fitness goals.",
    challenge:
      "The client needed a single app to record outdoor workouts and translate raw GPS data into insights users could actually act on.",
    objective:
      "Build a GPS-based tracking app that logs routes, pace, and performance while staying simple enough for everyday athletes.",
    approach:
      "We prioritized accurate GPS capture and a lightweight activity model, then layered performance analytics and goal tracking on top.",
    solution:
      "A cross-platform fitness app with GPS route recording, workout history, performance analytics, and progress goals for iOS and Android.",
    outcome:
      "Launched on the App Store and Google Play, giving users a reliable way to track outdoor activity and monitor fitness progress over time.",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Maps SDK"],
    // image: img("my-tracks"),
    image: "/My Tracks.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.mytracksdarren.roe",
      appStore: "https://apps.apple.com/us/app/my-tracks-app/id6744345686",
    },
  },
  {
    slug: "trusted-handyman",
    name: "Trusted Handyman",
    year: "2025",
    category: "Business & Productivity",
    industry: "Home Services",
    projectType: "Marketplace Platform",
    role: "Full Solution",
    client: "Trusted Handyman NG",
    country: "Nigeria",
    overview:
      "Connect with trusted professionals for home maintenance, repairs, and improvement services through a convenient platform designed to simplify service booking and management.",
    challenge:
      "Homeowners had no simple way to find and book vetted professionals for repairs and maintenance work.",
    objective:
      "Create a marketplace connecting customers with trusted home-service professionals for booking, scheduling, and payment in one flow.",
    approach:
      "We mapped the booking journey for both customers and service providers, then built a matching and scheduling system around it.",
    solution:
      "A mobile and web marketplace with service listings, professional profiles, in-app booking, and job status tracking.",
    outcome:
      "Delivered a live marketplace app and website that simplified how customers book and manage home-service requests.",
    technologies: ["Flutter", "Next.js", "Node.js", "PostgreSQL"],
    image: "/Trusted Handyman.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.trusted.handyman&hl=en",
      appStore: "https://apps.apple.com/gb/app/trusted-handyman-ng/id6762031367",
      website: "https://www.trustedhandyman.ng/",
    },
  },
  {
    slug: "nelya",
    name: "Nelya",
    year: "2025",
    category: "Business & Productivity",
    industry: "Healthcare",
    projectType: "Mobile Application",
    role: "Mobile Development",
    client: "Nelya Health",
    country: "United States",
    overview:
      "Take control of your reproductive health with a private tracking platform that helps monitor cycles, predict fertility windows, and track wellness insights securely.",
    challenge:
      "Existing cycle-tracking apps didn't give users enough confidence around data privacy or clarity around fertility predictions.",
    objective:
      "Build a private, secure health-tracking app that helps users understand their cycle and reproductive wellness.",
    approach:
      "We designed the data model around privacy-by-default, then built prediction logic and an easy daily-logging experience.",
    solution:
      "A women's health app with cycle tracking, fertility window prediction, symptom logging, and secure, private data storage.",
    outcome:
      "Delivered a published health app that gives users clear insight into their cycle while keeping personal data protected.",
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    image: "/Nelya.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.nelya.period_tracking",
      appStore: "https://apps.apple.com/us/app/nelya/id6751934126",
    },
  },
  {
    slug: "sitenorm",
    name: "SiteNorm",
    year: "2025",
    category: "Business & Productivity",
    industry: "Environmental Services",
    projectType: "Web & Mobile Application",
    role: "Full Solution",
    client: "SiteNorm Environmental",
    country: "Switzerland",
    overview:
      "Analyze climate conditions, compare precipitation data, and generate reliable site assessments for environmental planning and compliance workflows.",
    challenge:
      "Environmental planning teams needed a faster way to compare climate and precipitation data across sites for compliance reporting.",
    objective:
      "Provide a platform that pulls and compares environmental data to support faster, more reliable site assessments.",
    approach:
      "We integrated multiple climate data sources and designed comparison tools tailored to environmental planning workflows.",
    solution:
      "A web and mobile platform for analyzing climate conditions, comparing precipitation data, and generating structured site assessment reports.",
    outcome:
      "Delivered a working analysis platform that reduced the manual effort involved in environmental compliance assessments.",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    image: "/SiteNorm.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.agroclima.sitenorm&hl=en",
      appStore: "https://apps.apple.com/us/app/sitenorm/id6783234170",
      website: "https://www.sitenorm.com/",
    },
  },

  {
    slug: "ilera",
    name: "Ilera",
    year: "2025",
    category: "Business & Productivity",
    industry: "Healthcare",
    projectType: "Mobile Application",
    role: "Full Solution",
    client: "Ilera Health",
    country: "United States",
    overview:
      "Access healthcare services through a digital platform that connects patients with medical specialists for consultations, treatment guidance, and ongoing care from anywhere.",
    challenge:
      "Patients needed remote access to medical specialists without the delays and friction of in-person scheduling.",
    objective:
      "Deliver a telehealth platform that connects patients with specialists for consultations, treatment guidance, and ongoing care.",
    approach:
      "We built the consultation and scheduling flow around specialist availability, then layered secure video and care records on top.",
    solution:
      "A telehealth app with specialist discovery, appointment booking, secure video consultations, and treatment guidance.",
    outcome:
      "Launched a telehealth platform giving patients remote access to medical specialists from anywhere.",
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    image: "/Ilera.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.medical.rebecca",
      appStore: "https://apps.apple.com/us/app/ilera/id6730120555",
    },
  },

  // ---------------- AI & Emerging Technology ----------------
  {
    slug: "violet",
    name: "Violet",
    year: "2026",
    category: "AI & Emerging Technology",
    industry: "Healthcare",
    projectType: "AI-Powered Application",
    role: "Full Solution",
    client: "NextGen Care Services",
    country: "United States",
    overview:
      "Empower healthcare professionals with an AI-driven platform that provides guidance, knowledge resources, workflow support, and documentation assistance for better care delivery.",
    challenge:
      "Healthcare professionals lacked a single AI-assisted resource for guidance, documentation support, and workflow help during care delivery.",
    objective:
      "Build an AI-driven platform that supports healthcare professionals with knowledge resources, workflow guidance, and documentation assistance.",
    approach:
      "We integrated a large-language-model layer into clinical workflows while keeping outputs structured and easy to verify.",
    solution:
      "An AI-powered platform providing healthcare professionals with guidance, knowledge resources, workflow support, and documentation assistance.",
    outcome:
      "Delivered a live AI support platform now used by healthcare professionals to speed up documentation and everyday workflow decisions.",
    technologies: ["Flutter", "Next.js", "Node.js", "OpenAI API"],
    image: "/Violet.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.violet.nxt",
      appStore: "https://apps.apple.com/us/app/id6762738417",
      website: "https://nextgen-careservices.com/",
    },
  },
  {
    slug: "stumble",
    name: "Stumble",
    year: "2025",
    category: "AI & Emerging Technology",
    industry: "Mental Health & Wellness",
    projectType: "AI-Powered Application",
    role: "Full Solution",
    client: "Join Stumble",
    country: "United States",
    overview:
      "Navigate life transitions with confidence through an AI-powered support platform that combines guided reflection, anonymous communities, and personalized emotional wellness tools.",
    challenge:
      "People going through life transitions had few private, judgment-free spaces to reflect and connect with others going through similar experiences.",
    objective:
      "Create an AI-powered wellness platform combining guided reflection, anonymous community, and personalized emotional support tools.",
    approach:
      "We combined conversational AI guidance with anonymous community features, designed around emotional safety and privacy.",
    solution:
      "An emotional wellness app offering AI-guided reflection prompts, anonymous peer communities, and personalized wellness tools.",
    outcome:
      "Launched on the App Store, giving users a supportive AI-guided space to navigate life transitions with more confidence.",
    technologies: ["Flutter", "Node.js", "OpenAI API"],
    image: "/Stumble.png",
    links: {
      appStore: "https://apps.apple.com/us/app/stumble-app/id6758137794",
      website: "https://www.joinstumble.com/",
    },
  },
  {
    slug: "dokter-for-you",
    name: "Dokter For You",
    year: "2025",
    category: "AI & Emerging Technology",
    industry: "Healthcare",
    projectType: "AI-Powered Application",
    role: "Full Solution",
    client: "Dokter For You",
    country: "France",
    overview:
      "Connect with licensed doctors online through a secure healthcare platform that enables quick consultations, digital prescriptions, and remote medical support without visiting a clinic.",
    challenge:
      "Patients needed a faster route to licensed medical guidance without visiting a clinic, especially for routine consultations and prescriptions.",
    objective:
      "Build a digital healthcare platform enabling quick online consultations, digital prescriptions, and remote medical support.",
    approach:
      "We designed an AI-assisted intake flow to route patients to the right consultation type, then built the consultation and prescription pipeline.",
    solution:
      "A telehealth platform connecting patients with licensed doctors for online consultations, digital prescriptions, and remote medical support.",
    outcome:
      "Delivered a live healthcare platform serving patients across multiple markets with fast, remote access to licensed doctors.",
    technologies: ["React Native", "Node.js", "PostgreSQL"],
    image: "/Dokter For You.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.dokterforyou.app&hl=en",
      appStore: "https://apps.apple.com/us/app/dokter-for-you/id6769878382",
      website: "https://www.dokterforyou.com/fr",
    },
  },
  {
    slug: "task-mama",
    name: "Task Mama",
    year: "2025",
    category: "AI & Emerging Technology",
    industry: "Productivity Software",
    projectType: "AI-Powered Application",
    role: "Full Solution",
    client: "Task Mama",
    country: "United States",
    overview:
      "Boost productivity with an AI-powered assistant that helps users organize tasks, manage priorities, automate workflows, and stay focused on daily goals more efficiently.",
    challenge:
      "Users juggling multiple responsibilities needed an assistant that could prioritize tasks and automate routine planning, not just list to-dos.",
    objective:
      "Build an AI productivity assistant that helps users organize tasks, manage priorities, and automate everyday workflows.",
    approach:
      "We combined task management fundamentals with an AI layer for prioritization suggestions and automated reminders.",
    solution:
      "An AI-powered productivity app for organizing tasks, managing priorities, automating workflows, and staying focused on daily goals.",
    outcome:
      "Delivered a published productivity assistant that helps users manage their day with less manual planning effort.",
    technologies: ["React Native", "Node.js", "OpenAI API"],
    image: "/Task Mama.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=app.taskmama.taskmama&hl=en-US",
      appStore: "https://apps.apple.com/us/app/task-mama/id6752669243",
      website: "https://www.taskmama.app/",
    },
  },
  {
    slug: "chatfam",
    name: "ChatFam",
    year: "2026",
    category: "AI & Emerging Technology",
    industry: "Consumer AI",
    projectType: "AI-Powered Application",
    role: "Full Solution",
    client: "HIT2B Interactive",
    country: "United States",
    overview:
      "Experience meaningful conversations with AI-powered family members through an interactive platform that offers companionship, voice chat, personalization, and a customizable virtual home environment.",
    challenge:
      "The client wanted to give users meaningful companionship experiences through AI characters, not just a generic chatbot interface.",
    objective:
      "Build an AI companion platform offering interactive conversations, voice chat, and a customizable virtual family experience.",
    approach:
      "We designed distinct AI personas with voice and personalization layers, wrapped in a customizable virtual home environment.",
    solution:
      "An AI companion app with interactive family characters, voice chat, personalization options, and a customizable virtual home.",
    outcome:
      "Launched an AI companionship platform offering users an interactive, personalized virtual family experience.",
    technologies: ["Flutter", "Node.js", "OpenAI API"],
    image: "/ChatFam.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.HIT2B.ChatFam",
      appStore: "https://apps.apple.com/us/app/chatfam-your-ai-family/id6755918394",
    },
  },
  {
    slug: "cravecrusher",
    name: "CraveCrusher",
    year: "2025",
    category: "AI & Emerging Technology",
    industry: "Health & Wellness",
    projectType: "AI-Powered Application",
    role: "Full Solution",
    client: "CraveCrusher",
    country: "Canada",
    overview:
      "Overcome food cravings with personalized AI guidance, habit tracking, nutrition insights, and smarter choices to build healthier eating habits.",
    challenge:
      "Users trying to build healthier eating habits needed real-time support in the moment cravings hit, not just static meal plans.",
    objective:
      "Build an AI nutrition coach that helps users manage cravings through personalized guidance and habit tracking.",
    approach:
      "We designed an AI coaching flow that responds to logged cravings with personalized guidance, then layered habit tracking on top.",
    solution:
      "An AI nutrition coaching app offering personalized guidance, craving and habit tracking, and nutrition insights.",
    outcome:
      "Delivered a published app helping users build healthier eating habits through AI-guided, in-the-moment support.",
    technologies: ["Flutter", "Node.js", "OpenAI API"],
    image: "/CraveCrusher.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.app.cravecrusher&hl=en",
    },
  },

  // ---------------- Consumer & Lifestyle ----------------
  {
    slug: "dudu-car-malaysia",
    name: "DUDU Car Malaysia",
    year: "2025",
    category: "Consumer & Lifestyle",
    industry: "Transportation",
    projectType: "Mobile Application",
    role: "Full Solution",
    client: "DUDU Mobility",
    country: "Malaysia",
    overview:
      "Book reliable electric vehicle rides through a sustainable transportation platform designed to provide convenient, affordable, and environmentally conscious travel experiences.",
    challenge:
      "The client wanted to offer an eco-friendly alternative to conventional ride-hailing without compromising booking speed or reliability.",
    objective:
      "Build a ride-booking platform focused on electric vehicles, offering convenient and affordable sustainable travel.",
    approach:
      "We built the booking and dispatch flow around EV fleet availability, with real-time tracking and fare estimation.",
    solution:
      "An EV ride-booking app with real-time driver matching, live tracking, fare estimation, and secure in-app payments.",
    outcome:
      "Launched a live ride-booking platform giving riders in Malaysia an eco-friendly transportation option.",
    technologies: ["Flutter", "Node.js", "Payment Gateway"],
    image: "/DUDU Car Malaysia.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.dudu.android.app&pcampaignid=web_share",
      appStore: "https://apps.apple.com/us/app/dudu-car-malaysia/id6751107228",
    },
  },
  {
    slug: "tassel",
    name: "Tassel",
    year: "2026",
    category: "Consumer & Lifestyle",
    industry: "Faith & Community",
    projectType: "Mobile Application",
    role: "Full Solution",
    client: "Tassel Discipleship",
    country: "United States",
    overview:
      "Connect with mentors, strengthen your faith, and grow through guided discipleship, scripture study, prayer, and community engagement in one supportive platform.",
    challenge:
      "The client wanted to move mentorship and discipleship relationships from scattered messaging apps into one structured platform.",
    objective:
      "Build a faith-based platform connecting mentors and mentees for guided discipleship, scripture study, and prayer.",
    approach:
      "We structured the app around mentor-mentee relationships, then layered scripture study tools and community engagement features on top.",
    solution:
      "A discipleship app with mentor matching, guided scripture study, prayer tools, and community engagement features.",
    outcome:
      "Delivered a live faith-based platform supporting structured discipleship relationships and daily spiritual growth.",
    technologies: ["React Native", "Node.js", "PostgreSQL"],
    image: "/Tassel.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.tasssel.tassel",
      appStore: "https://apps.apple.com/us/app/tassel-discipleship-app/id6754162847",
    },
  },
  {
    slug: "shego",
    name: "SHEGO",
    year: "2025",
    category: "Consumer & Lifestyle",
    industry: "Transportation",
    projectType: "Mobile Application",
    role: "Full Solution",
    client: "SHEGO",
    country: "South Africa",
    overview:
      "Travel with confidence through a women-focused ride-sharing platform that connects female passengers with female drivers for safer, more comfortable, and reliable transportation.",
    challenge:
      "Female passengers needed a ride-sharing option built specifically around safety, matching them only with female drivers.",
    objective:
      "Build a women-focused ride-sharing platform prioritizing rider safety through female-to-female driver matching.",
    approach:
      "We designed a verification and matching system exclusively for female drivers and riders, with safety features built into every trip.",
    solution:
      "A ride-sharing app matching female passengers with female drivers, with live trip tracking and safety-first features.",
    outcome:
      "Launched a live ride-sharing platform giving women a safer, more comfortable transportation option.",
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    image: "/SHEGO.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.shego",
      appStore: "https://apps.apple.com/us/app/shego/id6754325194",
      website: "https://shego.co.za/",
    },
  },
  {
    slug: "fibrepro",
    name: "FibrePro",
    year: "2025",
    category: "Consumer & Lifestyle",
    industry: "Business Services",
    projectType: "Mobile Application",
    role: "Mobile Development",
    client: "FibrePro",
    country: "United States",
    overview:
      "Manage field operations, track work orders, monitor expenses, and organize invoices through one streamlined platform for service professionals and small businesses.",
    challenge:
      "Field service professionals were tracking work orders, expenses, and invoices manually across disconnected tools.",
    objective:
      "Build a field service platform consolidating work order management, expense tracking, and invoicing in one place.",
    approach:
      "We mapped the daily field-technician workflow and built the work order, expense, and invoicing modules around it.",
    solution:
      "A field service management app with work order tracking, expense logging, and invoice management for service professionals.",
    outcome:
      "Delivered a published app that streamlined field operations for service professionals and small businesses.",
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    image: "/FibrePro.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.shaharulsiyam.fibrepro&hl=en",
      appStore: "https://apps.apple.com/us/app/fibrepro/id6754065847",
    },
  },
  {
    slug: "tidybayti",
    name: "TidyBayti",
    year: "2024",
    category: "Consumer & Lifestyle",
    industry: "Home Services",
    projectType: "Marketplace Platform",
    role: "Mobile Development",
    client: "TidyBayti",
    country: "Saudi Arabia",
    overview:
      "Book trusted home cleaning and maintenance professionals, manage service requests, and schedule appointments through one convenient home services platform.",
    challenge:
      "Homeowners had no single trusted place to find and schedule home cleaning and maintenance professionals.",
    objective:
      "Build a home services marketplace for booking trusted cleaning and maintenance professionals with reliable scheduling.",
    approach:
      "We designed a service-request and scheduling flow that matched customers with vetted professionals based on availability.",
    solution:
      "A home services marketplace with professional booking, service request management, and appointment scheduling.",
    outcome:
      "Delivered a live marketplace app that simplified booking trusted home services for customers.",
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    image: "/TidyBayti.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.depaak.tidybayti",
      website: "https://tidybayti.com/",
    },
  },
  {
    slug: "deenyah",
    name: "Deenyah",
    year: "2025",
    category: "Consumer & Lifestyle",
    industry: "Faith & Lifestyle",
    projectType: "Mobile Application",
    role: "Full Solution",
    client: "Deenyah",
    country: "Saudi Arabia",
    overview:
      "Manage daily religious and lifestyle needs through a unified platform offering Islamic services, Umrah and Hajj support, practical daily tools, and faith-based lifestyle solutions in one place.",
    challenge:
      "Users managing daily religious and lifestyle needs relied on multiple disconnected apps and services.",
    objective:
      "Build a unified Islamic lifestyle platform covering daily religious tools, Umrah and Hajj support, and lifestyle services.",
    approach:
      "We structured the platform around daily-use religious tools first, then layered in Umrah/Hajj support and lifestyle service booking.",
    solution:
      "An Islamic lifestyle app with daily religious tools, Umrah and Hajj support services, and practical lifestyle features in one platform.",
    outcome:
      "Delivered a live platform consolidating Islamic lifestyle services that users previously managed across separate apps.",
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    image: "/Deenyah.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.deenyah.customer",
      appStore: "https://apps.apple.com/us/app/deenyah/id6756536239",
      website: "http://deenyah.com/",
    },
  },

  // ---------------- Education & Community ----------------
  {
    slug: "the-mom-app",
    name: "The Mom App",
    year: "2025",
    category: "Education & Community",
    industry: "Family & Lifestyle",
    projectType: "Mobile Application",
    role: "Full Solution",
    client: "The Mom App",
    country: "United States",
    overview:
      "Simplify family life with an all-in-one platform that helps parents manage schedules, tasks, meal planning, notes, and daily responsibilities more efficiently.",
    challenge:
      "Parents were coordinating schedules, tasks, and family notes across multiple disconnected apps and paper lists.",
    objective:
      "Build an all-in-one family organization app for schedules, tasks, meal planning, and daily notes.",
    approach:
      "We designed a shared family workspace structure, then built schedule, task, and meal-planning modules around it.",
    solution:
      "A family organization app with shared scheduling, task lists, meal planning, and note-taking for parents.",
    outcome:
      "Launched a published app that helps parents manage daily family responsibilities from one place.",
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    image: "/The Mom App.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.momapp.family",
      appStore: "https://apps.apple.com/us/app/the-mom-app-official/id6756739178",
    },
  },
  {
    slug: "grambix",
    name: "Grambix",
    year: "2025",
    category: "Education & Community",
    industry: "Education",
    projectType: "Mobile Application",
    role: "Full Solution",
    client: "Grambix",
    country: "Canada",
    overview:
      "Expand your knowledge through a personal growth platform offering bite-sized lessons, ebooks, audiobooks, and practical insights on mindset, AI, investing, and life skills.",
    challenge:
      "Busy learners wanted practical personal-development content in a format that fit into short pockets of free time.",
    objective:
      "Build a personal growth platform delivering bite-sized lessons, ebooks, and audiobooks on mindset, investing, and life skills.",
    approach:
      "We structured content into short, digestible modules and built audio and reading experiences optimized for daily habits.",
    solution:
      "A learning platform offering bite-sized lessons, ebooks, audiobooks, and practical insights across mindset, AI, and investing topics.",
    outcome:
      "Delivered a live learning platform helping users build consistent personal-development habits in small daily sessions.",
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    image: "/Grambix.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.olav.grambix",
      appStore: "https://apps.apple.com/us/app/grambix-ebooks-audiobooks/id6755671097",
      website: "https://grambix.com/",
    },
  },
  {
    slug: "classaty",
    name: "Classaty",
    year: "2025",
    category: "Education & Community",
    industry: "Education",
    projectType: "Web & Mobile Platform",
    role: "Full Solution",
    client: "Classaty",
    country: "Saudi Arabia",
    overview:
      "Manage school activities efficiently through a centralized platform that connects students, parents, and teachers for attendance tracking, assignments, schedules, grades, and real-time academic updates.",
    challenge:
      "Schools needed one system to connect students, parents, and teachers instead of relying on scattered communication channels.",
    objective:
      "Build a school management system covering attendance, assignments, schedules, grades, and real-time academic updates.",
    approach:
      "We designed role-based experiences for students, parents, and teachers around a shared academic data model.",
    solution:
      "A school management platform with attendance tracking, assignment management, schedules, grading, and real-time updates for all stakeholders.",
    outcome:
      "Delivered a live platform that centralized school communication and academic tracking for students, parents, and teachers.",
    technologies: ["Flutter", "Next.js", "Node.js", "PostgreSQL"],
    image: "/Classaty.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.app.classaty",
      appStore: "https://apps.apple.com/us/app/classaty/id6757138420",
    },
  },

  // ---------------- Success Stories & Case Studies ----------------
  // {
  //   slug: "winwhen",
  //   name: "WinWhen",
  //   year: "2026",
  //   category: "Success Stories & Case Studies",
  //   industry: "Family & Lifestyle",
  //   projectType: "Mobile Application",
  //   role: "Full Solution",
  //   client: "WinWhen",
  //   country: "Canada",
  //   overview:
  //     "Stay connected through shared events, schedules, milestones, and family activities in one organized platform designed for seamless planning and coordination.",
  //   challenge:
  //     "Families relied on scattered group chats and calendars to keep track of shared events and milestones.",
  //   objective:
  //     "Build a family coordination platform for shared events, schedules, and milestones in one organized space.",
  //   approach:
  //     "We designed a shared-family data model with synced calendars, then layered milestone tracking and notifications on top.",
  //   solution:
  //     "A family coordination app with shared events, synced schedules, milestone tracking, and activity planning.",
  //   outcome:
  //     "Delivered a working platform that gave families a single, organized place to plan and stay connected.",
  //   technologies: ["React Native", "Node.js", "PostgreSQL"],
  //   image: img("winwhen"),
  //   links: { caseStudyDoc: "https://drive.google.com/file/d/1K9pN74zW6FEiZSYkft_AdhghHmpiwXXW/view?usp=drive_link" },
  // },
  // {
  //   slug: "veiligr",
  //   name: "Veiligr",
  //   year: "2025",
  //   category: "Success Stories & Case Studies",
  //   industry: "Security Services",
  //   projectType: "Mobile Application",
  //   role: "Full Solution",
  //   client: "Veiligr",
  //   country: "Netherlands",
  //   overview:
  //     "The app aims to simplify and enhance the hiring of security services. Users can quickly book options like Home Security, Event Security, or Personal Escort through an easy booking process.",
  //   challenge:
  //     "Booking security services required phone calls and manual coordination, making it slow to arrange coverage on short notice.",
  //   objective:
  //     "Simplify how customers hire security services by making booking home, event, and personal escort security fast and easy.",
  //   approach:
  //     "We designed a streamlined booking flow that let users select a service type and confirm coverage in a few steps.",
  //   solution:
  //     "A security services app offering quick booking for home security, event security, and personal escort services.",
  //   outcome:
  //     "Delivered a working app that reduced the time and effort required to book vetted security services.",
  //   technologies: ["React Native", "Node.js", "PostgreSQL"],
  //   image: img("veiligr"),
  //   links: { caseStudyDoc: "https://drive.google.com/file/d/1wVD-_qtp4tseJN7ldJXMiM9MC-FlQoPk/view?usp=drive_link" },
  // },
  // {
  //   slug: "tastehub",
  //   name: "TasteHub",
  //   year: "2026",
  //   category: "Success Stories & Case Studies",
  //   industry: "Travel & Hospitality",
  //   projectType: "Mobile Application",
  //   role: "Full Solution",
  //   client: "TasteHub",
  //   country: "Italy",
  //   overview:
  //     "Introducing a game-changing app for food lovers! It helps you find the best local restaurants and explore their menus. You can easily book a table and enjoy a great dining experience while saving money!",
  //   challenge:
  //     "Diners struggled to discover new restaurants and book tables without jumping between multiple apps and phone calls.",
  //   objective:
  //     "Build a restaurant discovery and booking app that helps food lovers find, explore, and reserve tables easily.",
  //   approach:
  //     "We combined restaurant discovery and menu browsing with a streamlined table-booking flow to reduce friction for diners.",
  //   solution:
  //     "A restaurant discovery app with menu browsing, table booking, and deals to help users save on dining out.",
  //   outcome:
  //     "Delivered a working app giving food lovers an easier way to discover restaurants and book tables.",
  //   technologies: ["React Native", "Node.js", "PostgreSQL"],
  //   image: img("tastehub"),
  //   links: { caseStudyDoc: "https://drive.google.com/file/d/1TuGtqgZ-43AVlATcwosZMSDhQXMOtN6q/view?usp=drive_link" },
  // },
  // {
  //   slug: "say-my-meds",
  //   name: "Say My Meds",
  //   year: "2026",
  //   category: "Success Stories & Case Studies",
  //   industry: "Healthcare",
  //   projectType: "Mobile Application",
  //   role: "Full Solution",
  //   client: "Say My Meds",
  //   country: "United States",
  //   overview:
  //     "Easily scan any medication to get instant details, including names, dosages, and side effects. Our app is quick, reliable, and keeps you informed about your medications.",
  //   challenge:
  //     "Patients often struggled to quickly identify medications and understand dosage and side-effect information.",
  //   objective:
  //     "Build a medication identification tool that gives users instant, reliable details by scanning a pill or package.",
  //   approach:
  //     "We integrated scan-based identification with a medication database to surface accurate details in seconds.",
  //   solution:
  //     "A medication identification app that scans medications to instantly show names, dosages, and side effects.",
  //   outcome:
  //     "Delivered a working tool that helps users stay informed about their medications quickly and reliably.",
  //   technologies: ["React Native", "Node.js", "Image Recognition"],
  //   image: img("say-my-meds"),
  //   links: { caseStudyDoc: "https://drive.google.com/file/d/1xdj_NlugcAmTxE4-lAN7-JwKScoLe3bK/view?usp=drive_link" },
  // },
  // {
  //   slug: "photo-op",
  //   name: "Photo OP",
  //   year: "2026",
  //   category: "Success Stories & Case Studies",
  //   industry: "Creative Services",
  //   projectType: "Web Platform",
  //   role: "Full Solution",
  //   client: "Photo OP",
  //   country: "Canada",
  //   overview:
  //     "Connect with talented photographers, explore creative portfolios, book photography services, and discover visual inspiration through a dedicated photography marketplace.",
  //   challenge:
  //     "Clients looking for photographers had no single place to browse portfolios and book sessions with confidence.",
  //   objective:
  //     "Build a photography marketplace connecting clients with photographers through portfolios, booking, and discovery tools.",
  //   approach:
  //     "We designed portfolio browsing and booking flows tailored to how clients evaluate and hire creative professionals.",
  //   solution:
  //     "A photography marketplace with portfolio browsing, photographer discovery, service booking, and visual inspiration feeds.",
  //   outcome:
  //     "Delivered a working marketplace that made it easier for clients to find and book the right photographer.",
  //   technologies: ["Next.js", "Node.js", "PostgreSQL"],
  //   image: img("photo-op"),
  //   links: { caseStudyDoc: "https://drive.google.com/file/d/1AgmiYlUt1H0nIyiHvpJ6IDyd7fFpGyH8/view?usp=drive_link" },
  // },
  // {
  //   slug: "hard-work-beats-talent",
  //   name: "Hard Work Beats Talent",
  //   year: "2026",
  //   category: "Success Stories & Case Studies",
  //   industry: "Education",
  //   projectType: "Mobile Application",
  //   role: "Full Solution",
  //   client: "Hard Work Beats Talent",
  //   country: "Switzerland",
  //   overview:
  //     "Turn academic learning into an engaging experience with gamified challenges, progress tracking, and interactive content to enhance motivation and achievement.",
  //   challenge:
  //     "Students often lost motivation with traditional study tools that offered no sense of progress or achievement.",
  //   objective:
  //     "Turn academic learning into a more engaging experience using gamified challenges and progress tracking.",
  //   approach:
  //     "We designed a gamification layer with challenges, streaks, and rewards built around everyday study habits.",
  //   solution:
  //     "A gamified learning app with academic challenges, progress tracking, and interactive content to boost motivation.",
  //   outcome:
  //     "Delivered a working platform that made day-to-day studying more engaging and measurable for students.",
  //   technologies: ["React Native", "Node.js", "PostgreSQL"],
  //   image: img("hard-work-beats-talent"),
  //   links: { caseStudyDoc: "https://drive.google.com/file/d/1ZcJaSaDdzKzPDuvLkxjXoYRcBnvWqvgf/view?usp=drive_link" },
  // },

  // ---------------- Product Design & UI/UX ----------------
  // {
  //   slug: "valentines",
  //   name: "Valentines",
  //   year: "2026",
  //   category: "Product Design & UI/UX",
  //   industry: "Business Services",
  //   projectType: "UI/UX Design",
  //   role: "Product Design",
  //   client: "Valentines Swim & Spa",
  //   country: "Switzerland",
  //   overview:
  //     "Streamline appointment scheduling, customer management, and automated reminders through a centralized platform designed to improve operational efficiency and client engagement.",
  //   challenge:
  //     "The client's swim and spa business relied on phone bookings, causing scheduling conflicts and no-shows.",
  //   objective:
  //     "Design an appointment scheduling experience that simplifies booking, customer management, and automated reminders.",
  //   approach:
  //     "We mapped the booking journey for both staff and customers, then designed a clean, calendar-first interface.",
  //   solution:
  //     "A full UI/UX design for an appointment scheduling platform covering booking flows, customer profiles, and reminder settings.",
  //   outcome:
  //     "Delivered a complete, developer-ready design system and prototype for a scheduling platform focused on operational efficiency.",
  //   technologies: ["Figma", "Design System", "Prototyping"],
  //   image: img("valentines"),
  //   links: { figma: "https://www.figma.com/design/bsjNPXjJDwgzh03PoDPeWQ/Swimming-and-spa" },
  // },
  // {
  //   slug: "football-league",
  //   name: "Football League",
  //   year: "2026",
  //   category: "Product Design & UI/UX",
  //   industry: "Sports & Fitness",
  //   projectType: "UI/UX Design",
  //   role: "Product Design",
  //   client: "Football League AI",
  //   country: "Saudi Arabia",
  //   overview:
  //     "Accelerate athletic development through an AI-powered platform that delivers training feedback, skill tracking, mindset coaching, and performance insights for aspiring players.",
  //   challenge:
  //     "Aspiring players had no structured digital tool for tracking training feedback and skill development over time.",
  //   objective:
  //     "Design an AI player development platform delivering training feedback, skill tracking, and mindset coaching.",
  //   approach:
  //     "We designed dashboard views for performance data alongside coaching content, focused on clarity for young athletes.",
  //   solution:
  //     "A complete UI/UX design for an AI-powered football development app with performance dashboards and coaching modules.",
  //   outcome:
  //     "Delivered a full design system and interactive prototype ready to guide development of the platform.",
  //   technologies: ["Figma", "Design System", "Prototyping"],
  //   image: img("football-league"),
  //   links: { figma: "https://www.figma.com/design/yff9CMJ12Gu7FctqvlIwJi/Football-AI" },
  // },
  // {
  //   slug: "fule4you",
  //   name: "Fule4You",
  //   year: "2026",
  //   category: "Product Design & UI/UX",
  //   industry: "Logistics",
  //   projectType: "UI/UX Design",
  //   role: "Product Design",
  //   client: "Fule4You",
  //   country: "United States",
  //   overview:
  //     "Order fuel directly to your location through a convenient delivery platform that offers real-time pricing, seamless ordering, and reliable service for individuals and businesses.",
  //   challenge:
  //     "Customers and businesses needed a faster way to order fuel without visiting a station in person.",
  //   objective:
  //     "Design an on-demand fuel delivery experience with real-time pricing and simple, reliable ordering.",
  //   approach:
  //     "We designed the ordering flow around location, real-time pricing, and delivery tracking for both individual and business customers.",
  //   solution:
  //     "A complete UI/UX design for a fuel delivery app covering ordering, real-time pricing, and delivery tracking.",
  //   outcome:
  //     "Delivered a polished design system and prototype ready to hand off for development.",
  //   technologies: ["Figma", "Design System", "Prototyping"],
  //   image: img("fule4you"),
  //   links: { figma: "https://www.figma.com/design/hiRZ6MAyoWMXkUcN3Yr0BK/Fuel-Delivery-App-Project" },
  // },
  // {
  //   slug: "eatly",
  //   name: "eATLY",
  //   year: "2026",
  //   category: "Product Design & UI/UX",
  //   industry: "Health & Wellness",
  //   projectType: "UI/UX Design",
  //   role: "Product Design",
  //   client: "eATLY",
  //   country: "Italy",
  //   overview:
  //     "Discover meals and restaurants tailored to your health goals through an AI-powered platform that provides personalized food recommendations, nutrition insights, calorie tracking, and wellness guidance.",
  //   challenge:
  //     "Users wanted meal and restaurant recommendations that actually matched their personal health goals, not generic suggestions.",
  //   objective:
  //     "Design an AI-powered recommendation experience for meals and restaurants tailored to individual health goals.",
  //   approach:
  //     "We designed personalized recommendation feeds alongside calorie and nutrition tracking, focused on quick daily decision-making.",
  //   solution:
  //     "A complete UI/UX design for a diet and meal-tracking app with AI recommendations, nutrition insights, and calorie tracking.",
  //   outcome:
  //     "Delivered a full design system and interactive prototype for a personalized nutrition and dining platform.",
  //   technologies: ["Figma", "Design System", "Prototyping"],
  //   image: img("eatly"),
  //   links: { figma: "https://www.figma.com/design/BTThRMQHBCG1JqtM4S1mIm/AI-Diet-Meal-Tracking-App" },
  // },
  // {
  //   slug: "findr",
  //   name: "FINDR",
  //   year: "2026",
  //   category: "Product Design & UI/UX",
  //   industry: "E-Commerce & Retail",
  //   projectType: "UI/UX Design",
  //   role: "Product Design",
  //   client: "FINDR",
  //   country: "Canada",
  //   overview:
  //     "Find products instantly at nearby stores through a smart discovery platform that provides real-time availability, store locations, operating hours, pricing, and essential shopping information in one place.",
  //   challenge:
  //     "Shoppers often couldn't tell which nearby stores actually had a product in stock before making the trip.",
  //   objective:
  //     "Design a local product discovery experience showing real-time availability, store locations, and pricing.",
  //   approach:
  //     "We designed a location-first discovery flow that surfaces nearby stock availability and store details at a glance.",
  //   solution:
  //     "A complete UI/UX design for a product discovery app with real-time availability, store locations, and pricing information.",
  //   outcome:
  //     "Delivered a full design system and prototype ready to guide development of the discovery platform.",
  //   technologies: ["Figma", "Design System", "Prototyping"],
  //   image: img("findr"),
  //   links: { figma: "https://www.figma.com/design/wDCNoTqKWSCKmjQRcmxtxt/Finder-Mobile-Application" },
  // },
  // {
  //   slug: "taskally",
  //   name: "TaskAlly",
  //   year: "2026",
  //   category: "Product Design & UI/UX",
  //   industry: "Business Services",
  //   projectType: "UI/UX Design",
  //   role: "Product Design",
  //   client: "TaskAlly",
  //   country: "United States",
  //   overview:
  //     "Connect clients with skilled professionals through a service marketplace that enables project posting, freelancer discovery, secure communication, order management, and seamless service delivery.",
  //   challenge:
  //     "Clients and freelancers needed a simpler way to post projects, discover talent, and manage work through to delivery.",
  //   objective:
  //     "Design a freelance services marketplace covering project posting, freelancer discovery, and secure order management.",
  //   approach:
  //     "We designed distinct client and freelancer experiences around a shared project and messaging system.",
  //   solution:
  //     "A complete UI/UX design for a freelance marketplace with project posting, freelancer profiles, messaging, and order tracking.",
  //   outcome:
  //     "Delivered a full design system and interactive prototype ready for development handoff.",
  //   technologies: ["Figma", "Design System", "Prototyping"],
  //   image: img("taskally"),
  //   links: { figma: "https://www.figma.com/design/pZlrC3nUJBng0F50c240lk/TaskAlley" },
  // },
  // {
  //   slug: "ns-security",
  //   name: "NS Security",
  //   year: "2026",
  //   category: "Product Design & UI/UX",
  //   industry: "Smart Home & Security",
  //   projectType: "UI/UX Design",
  //   role: "Product Design",
  //   client: "NS Security",
  //   country: "Switzerland",
  //   overview:
  //     "Monitor home safety through an intuitive dashboard that provides real-time security status, sensor activity, network health, environmental monitoring, and critical alerts in a centralized experience.",
  //   challenge:
  //     "Homeowners with smart security systems had no single dashboard to monitor sensors, alerts, and network health.",
  //   objective:
  //     "Design a home security dashboard giving users real-time status, sensor activity, and critical alerts in one view.",
  //   approach:
  //     "We designed an information-dense but clear dashboard, prioritizing alerts and status at a glance.",
  //   solution:
  //     "A complete UI/UX design for a home security monitoring app with real-time dashboards, sensor activity, and alerts.",
  //   outcome:
  //     "Delivered a full design system and interactive prototype for the security monitoring experience.",
  //   technologies: ["Figma", "Design System", "Prototyping"],
  //   image: img("ns-security"),
  //   links: { figma: "https://www.figma.com/design/PRIc14tpswuwhirPzCe3XV/NS-Security-App-UI" },
  // },
  // {
  //   slug: "diva-talks",
  //   name: "Diva Talks",
  //   year: "2026",
  //   category: "Product Design & UI/UX",
  //   industry: "Consumer & Lifestyle",
  //   projectType: "UI/UX Design",
  //   role: "Product Design",
  //   client: "Diva Talks",
  //   country: "United States",
  //   overview:
  //     "Book trusted pet care services through a convenient platform that connects pet owners with professionals for dog walking, pet sitting, grooming, and personalized pet care management.",
  //   challenge:
  //     "Pet owners needed a trusted, convenient way to book care services like walking, sitting, and grooming.",
  //   objective:
  //     "Design a pet care marketplace connecting owners with vetted professionals for booking and care management.",
  //   approach:
  //     "We designed booking and provider-profile flows tailored to how pet owners choose and trust caregivers.",
  //   solution:
  //     "A complete UI/UX design for a pet care services app with provider discovery, booking, and care management.",
  //   outcome:
  //     "Delivered a full design system and prototype ready to guide development of the pet care platform.",
  //   technologies: ["Figma", "Design System", "Prototyping"],
  //   image: img("diva-talks"),
  //   links: { figma: "https://www.figma.com/design/O5ts0yLWb1DuilENwCDKmG/Pet-Mobile-App" },
  // },
  // {
  //   slug: "velusy",
  //   name: "VELUSY",
  //   year: "2026",
  //   category: "Product Design & UI/UX",
  //   industry: "Beauty & Wellness",
  //   projectType: "UI/UX Design",
  //   role: "Product Design",
  //   client: "VELUSY",
  //   country: "Saudi Arabia",
  //   overview:
  //     "Book beauty and wellness services with ease through a platform that connects users with nearby professionals for hair styling, makeup, massage, nail care, skincare, and personal grooming appointments.",
  //   challenge:
  //     "Users looking for beauty and wellness services had no easy way to compare nearby professionals and book appointments.",
  //   objective:
  //     "Design a beauty and wellness marketplace for booking hair, makeup, massage, nail, and skincare appointments.",
  //   approach:
  //     "We designed a professional-discovery and booking flow optimized for browsing services by category and location.",
  //   solution:
  //     "A complete UI/UX design for a beauty and wellness booking app with professional discovery and appointment scheduling.",
  //   outcome:
  //     "Delivered a full design system and interactive prototype for the beauty services platform.",
  //   technologies: ["Figma", "Design System", "Prototyping"],
  //   image: img("velusy"),
  //   links: { figma: "https://www.figma.com/design/h6dsdrW1YTa76n5IbshWXj/Velin-Beauty-App" },
  // },
  // {
  //   slug: "rihlati-dz",
  //   name: "Rihlati DZ",
  //   year: "2026",
  //   category: "Product Design & UI/UX",
  //   industry: "Travel & Hospitality",
  //   projectType: "UI/UX Design",
  //   role: "Product Design",
  //   client: "Rihlati DZ",
  //   country: "Algeria",
  //   overview:
  //     "Discover and book unforgettable travel experiences through a platform that connects users with curated adventures, group trips, events, camping experiences, and holiday destinations.",
  //   challenge:
  //     "Travelers needed a way to discover and book curated group trips, events, and adventures instead of piecing together travel plans manually.",
  //   objective:
  //     "Design a travel booking experience covering curated adventures, group trips, events, and holiday destinations.",
  //   approach:
  //     "We designed discovery-first browsing with rich trip detail pages and a streamlined booking flow.",
  //   solution:
  //     "A complete UI/UX design for a travel and adventure booking app with curated trips, events, and booking flows.",
  //   outcome:
  //     "Delivered a full design system and interactive prototype for the travel booking platform.",
  //   technologies: ["Figma", "Design System", "Prototyping"],
  //   image: img("rihlati-dz"),
  //   links: { figma: "https://www.figma.com/design/9ZjBnKBL2BwESmULagLM9i/Trip-Event-Booking-Application" },
  // },
  // {
  //   slug: "selling-point",
  //   name: "Selling Point",
  //   year: "2026",
  //   category: "Product Design & UI/UX",
  //   industry: "Business Services",
  //   projectType: "UI/UX Design",
  //   role: "Product Design",
  //   client: "Selling Point",
  //   country: "Canada",
  //   overview:
  //     "Connect clients with skilled professionals through a talent marketplace that enables hiring, service discovery, project collaboration, secure communication, and seamless work delivery.",
  //   challenge:
  //     "Clients and skilled professionals needed a trusted space to connect for hiring, collaboration, and secure project delivery.",
  //   objective:
  //     "Design a talent marketplace enabling hiring, service discovery, and secure project collaboration.",
  //   approach:
  //     "We designed hiring and collaboration flows around trust signals like profiles, reviews, and secure messaging.",
  //   solution:
  //     "A complete UI/UX design for a freelance talent marketplace with hiring flows, service discovery, and secure communication.",
  //   outcome:
  //     "Delivered a full design system and interactive prototype ready for development.",
  //   technologies: ["Figma", "Design System", "Prototyping"],
  //   image: img("selling-point"),
  //   links: { figma: "https://www.figma.com/design/HHdDMGlvvL3QKH1rNYF9iN/SELLING-POINT" },
  // },
  // {
  //   slug: "intake-giardian",
  //   name: "Intake Giardian",
  //   year: "2026",
  //   category: "Product Design & UI/UX",
  //   industry: "Healthcare",
  //   projectType: "UI/UX Design",
  //   role: "Product Design",
  //   client: "Intake Giardian",
  //   country: "United States",
  //   overview:
  //     "Monitor health conditions, track vital signs, manage medications, and receive intelligent health insights through a centralized platform designed to support daily wellness and treatment adherence.",
  //   challenge:
  //     "Patients managing chronic conditions needed a simpler way to track vitals, medications, and health insights daily.",
  //   objective:
  //     "Design a centralized health platform for monitoring conditions, tracking vitals, and managing medications.",
  //   approach:
  //     "We designed simple daily-logging flows paired with clear insight dashboards to support treatment adherence.",
  //   solution:
  //     "A complete UI/UX design for an AI health platform with vitals tracking, medication management, and health insights.",
  //   outcome:
  //     "Delivered a full design system and interactive prototype for the health monitoring platform.",
  //   technologies: ["Figma", "Design System", "Prototyping"],
  //   image: img("intake-giardian"),
  //   links: { figma: "https://www.figma.com/design/iTUmj2nEF0J5N1JcvUBJBP/Intake-Guardian" },
  // },
];

export const getCaseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
export const getCaseStudiesByCategory = (category: ProjectCategory) =>
  caseStudies.filter((c) => c.category === category);
