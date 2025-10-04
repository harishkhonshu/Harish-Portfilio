import { Project, Skill, Experience, EducationItem } from '../types';

export const aboutContentText = "Final-year Computer Science Engineering student with hands-on experience through internships in penetration testing, ethical hacking, and Python development. Certified in Java programming and trained at Cybernaut Company, with strong skills in Linux, networking protocols, Nmap, and Aircrack-ng. Actively seeking opportunities to apply my knowledge and passion for cybersecurity in real-world projects.";

export const projects: Project[] = [
  {
    name: 'Penetration Testing Frameworks',
    description: 'Real-world assessment methodologies using OWASP guidelines and standard penetration testing frameworks.',
    url: 'https://github.com/harishkhonshu',
    stack: ['Penetration Testing', 'Vulnerability Reporting', 'OWASP'],
  },
  {
    name: 'Vulnerability Scanning Tools',
    description: 'Worked on ethical hacking tasks including vulnerability scanning and exploitation basics.',
    url: 'https://github.com/harishkhonshu',
    stack: ['Ethical Hacking', 'Security Tools', 'Exploitation Basics'],
  },
  {
    name: 'Cybersecurity Automation Scripts',
    description: 'Developed basic scripts and automation tools in Python for cybersecurity tasks.',
    url: 'https://github.com/harishkhonshu',
    stack: ['Python', 'Automation', 'Cybersecurity'],
  },
];

export const skills: Skill[] = [
  { category: 'Programming', items: ['Java (Certified)', 'Python (Basic)'] },
  { category: 'Operating Systems', items: ['Linux (Basics of administration & CLI)'] },
  { category: 'Networking & Protocols', items: ['TCP/IP', 'OSI Model', 'HTTP', 'DNS', 'SSH'] },
  { category: 'Cybersecurity Tools', items: ['Nmap (Port Scanning, Service Detection)', 'Aircrack-ng (Wireless Security)'] },
  { category: 'Leadership', items: ['Managing director of HGRD EDU TECH'] },
];

export const experiences: Experience[] = [
    {
        company: "Hackity Cybersecurity",
        role: "Penetration Testing Intern",
        type: "Remote",
        duration: "1 Month | 2025",
        points: [
            "Assisted senior security analysts in testing web applications and networks.",
            "Performed reconnaissance, scanning, and enumeration tasks.",
            "Contributed to detailed vulnerability reports and suggested mitigations.",
            "Gained hands-on exposure to OWASP guidelines."
        ]
    },
    {
        company: "Caz Brain",
        role: "Ethical Hacking & Cybersecurity Intern",
        type: "Onsite",
        duration: "1 Month | 2025",
        points: [
            "Worked on ethical hacking tasks including vulnerability scanning.",
            "Learned to apply security tools and techniques in practical environments."
        ]
    },
    {
        company: "Cybernaut",
        role: "Python Developer Intern",
        type: "Remote",
        duration: "4 Months | 2024-2025",
        points: [
            "Developed basic scripts and automation tools in Python.",
            "Worked on tasks integrating Python with cybersecurity concepts.",
            "Collaborated remotely with mentors and peers."
        ]
    }
];

export const education: EducationItem[] = [
    {
        institution: "Gnanamani college of technology",
        degree: "B.E - Computer Science and Engineering",
        duration: "2022 - 2026"
    },
    {
        institution: "Govt High Sec School, Pothanur",
        degree: "Maths computer",
        duration: "2022"
    }
];

export const jokes: string[] = [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "I've got a great UDP joke, but I'm not sure you'll get it.",
    "There are 10 types of people in the world: those who understand binary, and those who don't.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "A SQL query goes into a bar, walks up to two tables, and asks, 'Can I join you?'"
];

export const contactDetails = {
    email: "bbharish374@gmail.com",
    github: "https://github.com/harishkhonshu",
    linkedin: "https://www.linkedin.com/in/harishb21",
    phone: "+91 9361541522",
};
