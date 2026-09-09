// NOTE: Quotes below are placeholder statements meant to demonstrate the layout —
// replace with each leader's real quote before publishing. Photos are placeholders too.
export const leadershipTeam = [
    {
    name: "Martin",
    role: "COO & Managing Director",
    quote:
      "Great technology is only half the equation. The other half is operational discipline — clear timelines, transparent communication, and delivery our clients can actually depend on.",
    image: "/Martin.png",
  },
  {
    name: "Elma Binte Tareq",
    role: "Founder & CEO",
    quote:
      "Our goal has never been to be the biggest software vendor — it's to be the most reliable one. Clients come back to us because we treat their business like it's our own.",
    image: "/Elma Binte Tareq.jpeg",
  },
    {
    name: "Shakawat Hossain Tareq",
    role: "Co-Founder & CEO",
    quote:
      "We started Ehyun because we believe technology should solve real business problems, not just look impressive in a pitch deck. Every project we take on has to earn its place in a client's business.",
    image: "/Shakawat Hossain Tareq.png",
  },

];

// NOTE: The founding story below is placeholder narrative copy — replace with the
// real story of how Ehyun started before publishing.
export const brandStory = {
  eyebrow: "How Ehyun Started",
  title: "Started by two people who were tired of bad software vendors",
  paragraphs: [
    "Ehyun didn't start inside a big office with a big team. It started with a small group of engineers and builders who kept running into the same problem, project after project: software vendors that wrote code fast but never really understood the business behind it.",
    "So we set out to build something different — a studio small enough to stay close to every client, and disciplined enough to deliver like a much bigger one. No account managers between you and the people building your product. Just a founding team that treats every project like it's our own business on the line.",
    "That mindset hasn't changed as we've grown. We're still a young, hands-on team — the kind of startup that would rather turn down a project than deliver something we're not proud of.",
  ],
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export type TeamFunctionGroup = {
  function: string;
  members: TeamMember[];
};

// NOTE: Names and avatars are placeholders.
// Replace them with real team members and photos before publishing.
const avatar = (seed: string) =>
  `https://picsum.photos/seed/${seed}/400/400`;

export const teamByFunction: TeamFunctionGroup[] = [
  {
    function: "IT Management & Project Delivery",
    members: [
      {
        name: "Arif Hasan",
        role: "Head of IT & Technology",
        image: avatar("arif-hasan"),
      },
      {
        name: "Nayeem Rahman",
        role: "Project Manager",
        image: avatar("nayeem-rahman"),
      },
      {
        name: "Sakib Ahmed",
        role: "Technical Lead",
        image: avatar("sakib-ahmed"),
      },
    ],
  },

  {
    function: "Web & Software Engineering",
    members: [
      {
        name: "Tanvir Hossain",
        role: "Senior Web Developer",
        image: avatar("tanvir-hossain"),
      },
      {
        name: "Rafiul Islam",
        role: "Frontend Developer (React/Next.js)",
        image: avatar("rafiul-islam"),
      },
      {
        name: "Hasan Mahmud",
        role: "Backend Developer (Node.js)",
        image: avatar("hasan-mahmud"),
      },
      {
        name: "Fahim Rahman",
        role: "Full-Stack Developer",
        image: avatar("fahim-rahman"),
      },
      {
        name: "Imran Kabir",
        role: "API & Backend Engineer",
        image: avatar("imran-kabir"),
      },
    ],
  },

  {
    function: "Mobile App Development",
    members: [
      {
        name: "Aminul Islam",
        role: "Senior Flutter Developer",
        image: avatar("aminul-islam"),
      },
      {
        name: "Mahin Chowdhury",
        role: "Flutter Developer",
        image: avatar("mahin-chowdhury"),
      },
      {
        name: "Daniel Park",
        role: "React Native Developer",
        image: avatar("daniel-park"),
      },
      {
        name: "Shakib Hasan",
        role: "React Native Developer",
        image: avatar("shakib-hasan"),
      },
      {
        name: "Nabil Ahmed",
        role: "Mobile App Developer",
        image: avatar("nabil-ahmed"),
      },
    ],
  },

  {
    function: "AI & Emerging Technologies",
    members: [
      {
        name: "Adnan Karim",
        role: "AI Engineer",
        image: avatar("adnan-karim"),
      },
      {
        name: "Siam Rahman",
        role: "AI/ML Developer",
        image: avatar("siam-rahman"),
      },
      {
        name: "Rashed Ahmed",
        role: "AI Integration Engineer",
        image: avatar("rashed-ahmed"),
      },
    ],
  },

  {
    function: "Product Design & Quality Assurance",
    members: [
      {
        name: "Nusrat Jahan",
        role: "UI/UX Designer",
        image: avatar("nusrat-jahan"),
      },
      {
        name: "Sadia Rahman",
        role: "Product Designer",
        image: avatar("sadia-rahman"),
      },
      {
        name: "Mehedi Hasan",
        role: "QA Engineer",
        image: avatar("mehedi-hasan"),
      },
      {
        name: "Rumana Akter",
        role: "Software QA Engineer",
        image: avatar("rumana-akter"),
      },
    ],
  },

  {
    function: "DevOps & Infrastructure",
    members: [
      {
        name: "Fahim Ahmed",
        role: "DevOps & Cloud Engineer",
        image: avatar("fahim-ahmed"),
      },
      {
        name: "Shuvo Das",
        role: "Cloud & Deployment Engineer",
        image: avatar("shuvo-das"),
      },
    ],
  },
];

export const processSteps = [
  { n: "01", title: "Discovery", body: "We discuss goals, target users, existing processes, challenges, and expected outcomes — understanding not only what to build, but why." },
  { n: "02", title: "Requirement Analysis", body: "We break the idea into specific requirements: functionality, user flows, technical needs, integrations, security, and scalability." },
  { n: "03", title: "Technical Feasibility", body: "Our technical team evaluates risks, dependencies, and implementation considerations before development begins." },
  { n: "04", title: "Estimation & Planning", body: "We estimate resources, effort, timeline, and milestones to establish a realistic development plan." },
  { n: "05", title: "UI/UX Design", body: "User flows, wireframes, interface design, responsive layouts, and interactive prototypes, built before or alongside development." },
  { n: "06", title: "Development", body: "Implementation according to approved architecture, requirements, and design — organized into manageable, trackable milestones." },
  { n: "07", title: "Quality Assurance", body: "Functional, responsive, API, regression, usability, and performance testing appropriate to the project." },
  { n: "08", title: "Client Review", body: "Structured opportunities to review progress and provide feedback, incorporated according to agreed scope." },
  { n: "09", title: "Deployment", body: "Production environment preparation and application deployment once testing and approval are complete." },
  { n: "10", title: "Maintenance & Support", body: "Ongoing bug fixing, technical support, improvements, feature development, and infrastructure management." },
];

export const industries = [
  { name: "Healthcare", body: "Appointment platforms, patient-facing applications, healthcare management systems, and digital services.", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1600&auto=format&fit=crop" },
  { name: "Education", body: "Learning platforms, student management systems, education portals, and digital learning solutions.", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop" },
  { name: "E-Commerce & Retail", body: "Online stores, product management, order systems, payment integrations, and customer platforms.", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1600&auto=format&fit=crop" },
  { name: "Travel & Hospitality", body: "Booking systems, travel platforms, customer applications, management dashboards, and service platforms.", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop" },
  { name: "Real Estate", body: "Property platforms, customer management systems, listing platforms, and business dashboards.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop" },
  { name: "Entertainment", body: "Content platforms, media applications, subscription systems, and digital experiences.", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1600&auto=format&fit=crop" },
  { name: "Business Services", body: "Custom management systems, CRM solutions, workflow automation, dashboards, and internal business tools.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop" },
  { name: "Technology & SaaS", body: "Cloud-based applications, subscription platforms, business software, and technology products.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop" },
];

export const engagementModels = [
  { title: "Project-Based Development", body: "A defined project delivered according to an agreed scope, timeline, milestones, and deliverables — suited to clearly defined requirements." },
  { title: "Dedicated Development Team", body: "A dedicated team assigned to a client's product or technology needs for an extended period — for continuous development capacity." },
  { title: "Staff Augmentation", body: "Specific technical resources provided according to project requirements, expanding a client's existing technical team." },
  { title: "Long-Term Technology Partnership", body: "An extended technology partner supporting continuous development, maintenance, infrastructure, and new digital initiatives." },
];

export const roadmapPhases = [
  { phase: "01", title: "Foundation", body: "Establish strong internal processes, build the core team, and successfully deliver initial projects." },
  { phase: "02", title: "Delivery", body: "Increase project capacity while maintaining consistent quality and client satisfaction." },
  { phase: "03", title: "Expansion", body: "Develop long-term client relationships, expand international partnerships, and grow the range of services." },
  { phase: "04", title: "Recurring Revenue", body: "Expand maintenance, support, retainer, and subscription-based services." },
  { phase: "05", title: "Product Development", body: "Use cross-project experience to identify recurring problems and develop proprietary SaaS products." },
];

export const teamCapabilities = [
  { title: "Management & Project Operations", body: "Project planning, client communication, requirements, resource allocation, team coordination, and delivery." },
  { title: "Technical Leadership", body: "Technical architecture, technology decisions, code quality, and development standards." },
  { title: "Software Development", body: "Frontend, backend, mobile applications, APIs, databases, and integrations." },
  { title: "UI/UX Design", body: "Intuitive, modern, responsive, and user-centered interface design." },
  { title: "Quality Assurance", body: "Identifying functional issues, usability problems, and inconsistencies before delivery." },
  { title: "DevOps & Infrastructure", body: "Deployment, cloud environments, CI/CD, monitoring, and production management." },
];

export const missionPrinciples = [
  { title: "Understand Before We Build", body: "We take time to understand the business, users, requirements, and objectives before development begins." },
  { title: "Quality Over Quantity", body: "We prioritize reliable delivery and long-term quality rather than accepting projects simply to increase volume." },
  { title: "Transparent Communication", body: "Clear communication throughout the project lifecycle — progress, decisions, challenges, and next steps." },
  { title: "Scalable Solutions", body: "We design and develop solutions that can evolve as our clients' businesses grow." },
  { title: "Long-Term Partnership", body: "Relationships that continue beyond the initial project through maintenance and ongoing support." },
];

export const whyEhyun = [
  { title: "Business-First Approach", body: "We understand the business objective first, then determine the appropriate technical solution." },
  { title: "End-to-End Execution", body: "From discovery and planning through development, testing, deployment, and maintenance." },
  { title: "Transparent Communication", body: "Clients always have visibility into progress, requirements, decisions, and important changes." },
  { title: "Flexible Team Structure", body: "Project resources scale according to actual requirements, not unnecessary overhead." },
  { title: "Modern Technology", body: "Current technologies and practices appropriate to each project's needs." },
  { title: "Quality-Focused Delivery", body: "Testing and QA integrated into the development lifecycle, not treated as an afterthought." },
];
