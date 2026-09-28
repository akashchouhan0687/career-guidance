// js/data.js
const careersData = [
    {
        id: "software-developer",
        name: "Software Developer",
        category: "Technology",
        shortDesc: "Design, build, and maintain software applications and systems.",
        description: "Software developers are the creative minds behind computer programs. They develop applications that allow people to do specific tasks on a computer or another device, and build the underlying systems that run the devices or control networks.",
        skills: ["Programming", "Problem Solving", "Data Structures", "Databases", "Version Control"],
        technologies: ["JavaScript", "Python", "Java", "C++", "Git", "SQL"],
        education: "Commonly a bachelor's degree in computer science. Bootcamps and self-taught paths are also viable with a strong portfolio.",
        roadmap: [
            "Programming Fundamentals",
            "Data Structures & Algorithms",
            "Version Control (Git & GitHub)",
            "Web or Backend Development",
            "Build Projects",
            "Internship / Junior Role"
        ],
        related: ["web-developer", "mobile-app-developer", "data-analyst"]
    },
    {
        id: "web-developer",
        name: "Web Developer",
        category: "Technology",
        shortDesc: "Create and maintain websites and web applications.",
        description: "Web developers build and maintain websites. They are responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle.",
        skills: ["HTML/CSS", "JavaScript", "Responsive Design", "Web APIs", "Problem Solving"],
        technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
        education: "Associate's or bachelor's degree in web design or related field. Coding bootcamps are very common and effective.",
        roadmap: [
            "Internet Basics",
            "HTML, CSS & JavaScript",
            "Frontend Frameworks",
            "Backend Basics & APIs",
            "Full-Stack Projects",
            "Junior Web Developer"
        ],
        related: ["software-developer", "ui-ux-designer"]
    },
    {
        id: "cybersecurity-analyst",
        name: "Cybersecurity Analyst",
        category: "Cybersecurity",
        shortDesc: "Protect computer networks and systems from security breaches.",
        description: "Cybersecurity analysts plan and carry out security measures to protect an organization's computer networks and systems. Their responsibilities are continually expanding as the number of cyberattacks increases.",
        skills: ["Network Security", "Threat Analysis", "Cryptography", "Risk Assessment", "Attention to Detail"],
        technologies: ["Linux", "Wireshark", "Firewalls", "Intrusion Detection Systems", "Python"],
        education: "Bachelor's degree in cybersecurity, computer science, or related field. Certifications like CompTIA Security+ or CISSP are highly valued.",
        roadmap: [
            "IT Fundamentals & Networking",
            "Security Basics (Security+)",
            "Operating Systems (Linux/Windows)",
            "Network Defense & Monitoring",
            "Incident Response",
            "Security Analyst"
        ],
        related: ["ethical-hacker", "security-engineer"]
    },
    {
        id: "ethical-hacker",
        name: "Ethical Hacker",
        category: "Cybersecurity",
        shortDesc: "Identify vulnerabilities in systems before malicious hackers do.",
        description: "Ethical hackers (or penetration testers) simulate cyberattacks on their own systems to find security vulnerabilities. They help organizations improve their security posture by finding weak points.",
        skills: ["Penetration Testing", "Scripting", "Vulnerability Assessment", "Networking", "Creative Problem Solving"],
        technologies: ["Kali Linux", "Metasploit", "Burp Suite", "Python", "Bash"],
        education: "Degree in computer science or cybersecurity. Certifications such as CEH (Certified Ethical Hacker) or OSCP are standard.",
        roadmap: [
            "Networking & OS Deep Dive",
            "Scripting (Python/Bash)",
            "Vulnerability Scanning",
            "Penetration Testing Methodologies",
            "CTF Challenges & Practice",
            "Penetration Tester"
        ],
        related: ["cybersecurity-analyst", "security-engineer"]
    },
    {
        id: "data-analyst",
        name: "Data Analyst",
        category: "AI & Data",
        shortDesc: "Interpret data and turn it into information for decision making.",
        description: "Data analysts translate numbers, trends, and trajectories into digestible and accessible information. They help organizations make better business decisions through data analysis.",
        skills: ["Statistical Analysis", "Data Visualization", "Critical Thinking", "Data Cleaning", "Communication"],
        technologies: ["SQL", "Excel", "Tableau", "Python", "R"],
        education: "Bachelor's degree in mathematics, statistics, computer science, or business. Certifications in data analytics are also common.",
        roadmap: [
            "Spreadsheets (Excel/Google Sheets)",
            "SQL & Database querying",
            "Business Intelligence (Tableau/PowerBI)",
            "Python/R for Data Analysis",
            "Portfolio Projects",
            "Data Analyst"
        ],
        related: ["data-scientist", "business-analyst"]
    },
    {
        id: "data-scientist",
        name: "Data Scientist",
        category: "AI & Data",
        shortDesc: "Extract insights from complex data using advanced analytics.",
        description: "Data scientists build predictive models and machine learning algorithms to analyze complex datasets. They find hidden patterns that help guide strategic decisions.",
        skills: ["Machine Learning", "Statistics", "Data Wrangling", "Programming", "Analytical Thinking"],
        technologies: ["Python", "Pandas", "Scikit-Learn", "SQL", "TensorFlow"],
        education: "Often requires a Master's or Ph.D. in data science, statistics, computer science, or a related quantitative field.",
        roadmap: [
            "Mathematics & Statistics",
            "Python & Data Manipulation",
            "Exploratory Data Analysis",
            "Machine Learning Algorithms",
            "Model Deployment",
            "Data Scientist"
        ],
        related: ["data-analyst", "ai-ml-engineer"]
    },
    {
        id: "ai-ml-engineer",
        name: "AI / ML Engineer",
        category: "AI & Data",
        shortDesc: "Design and build artificial intelligence models and systems.",
        description: "AI and Machine Learning Engineers design and develop AI models, integrating them into applications. They focus on creating algorithms that can learn from and make predictions on data.",
        skills: ["Machine Learning", "Deep Learning", "Mathematics", "Software Engineering", "Algorithms"],
        technologies: ["Python", "PyTorch", "TensorFlow", "Docker", "Cloud Platforms"],
        education: "Bachelor's or Master's degree in computer science, software engineering, or related field with a focus on AI.",
        roadmap: [
            "Software Engineering Basics",
            "Calculus & Linear Algebra",
            "Machine Learning Fundamentals",
            "Deep Learning & Neural Networks",
            "MLOps & Deployment",
            "AI Engineer"
        ],
        related: ["data-scientist", "software-developer"]
    },
    {
        id: "ui-ux-designer",
        name: "UI/UX Designer",
        category: "Design",
        shortDesc: "Design user interfaces and enhance user satisfaction.",
        description: "UI/UX designers focus on the user's experience and the interface of digital products. They ensure applications are intuitive, accessible, and visually appealing.",
        skills: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Empathy"],
        technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Basic HTML/CSS"],
        education: "Degree in design, human-computer interaction, or related field. A strong portfolio demonstrating design processes is the most important requirement.",
        roadmap: [
            "Design Fundamentals",
            "User Research & Empathy",
            "Wireframing & User Flows",
            "High-Fidelity UI Design",
            "Prototyping & Testing",
            "UI/UX Designer"
        ],
        related: ["web-developer", "business-analyst"]
    },
    {
        id: "business-analyst",
        name: "Business Analyst",
        category: "Business",
        shortDesc: "Bridge the gap between IT and business using data analytics.",
        description: "Business analysts analyze an organization or business domain and document its business or processes or systems, assessing the business model or its integration with technology.",
        skills: ["Requirements Gathering", "Business Acumen", "Communication", "Data Analysis", "Process Modeling"],
        technologies: ["Excel", "Jira", "SQL", "Tableau", "Visio"],
        education: "Bachelor's degree in business administration, finance, or IT. CBAP certification is highly regarded.",
        roadmap: [
            "Business Fundamentals",
            "Data Analysis Basics",
            "Requirements Engineering",
            "Agile & Scrum Methodologies",
            "Process Modeling",
            "Business Analyst"
        ],
        related: ["data-analyst", "digital-marketing-specialist"]
    },
    {
        id: "digital-marketing-specialist",
        name: "Digital Marketing Specialist",
        category: "Business",
        shortDesc: "Promote products and services through digital channels.",
        description: "Digital marketing specialists use digital channels like search engines, social media, email, and websites to connect with current and prospective customers.",
        skills: ["SEO/SEM", "Content Strategy", "Data Analytics", "Copywriting", "Social Media Management"],
        technologies: ["Google Analytics", "Ads Platforms", "CMS (WordPress)", "Mailchimp", "Hootsuite"],
        education: "Bachelor's degree in marketing, communications, or business. Practical experience and familiarity with marketing platforms are crucial.",
        roadmap: [
            "Marketing Basics",
            "Content Creation & Copywriting",
            "SEO & Search Marketing",
            "Social Media Strategy",
            "Analytics & Campaign Tracking",
            "Digital Marketer"
        ],
        related: ["business-analyst", "ui-ux-designer"]
    }
];

// Helper functions to get data
const getCareerById = (id) => careersData.find(career => career.id === id);
const getCareersByCategory = (category) => {
    if (category === 'All' || !category) return careersData;
    return careersData.filter(career => career.category === category);
};
const searchCareers = (query) => {
    const q = query.toLowerCase();
    return careersData.filter(career => 
        career.name.toLowerCase().includes(q) || 
        career.category.toLowerCase().includes(q) ||
        career.shortDesc.toLowerCase().includes(q)
    );
};
