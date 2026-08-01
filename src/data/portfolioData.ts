export interface Project {
  id: string;
  title: string;
  category: 'AI & ML' | 'Full Stack' | 'IoT & Systems' | 'Analytics';
  description: string;
  tools: string[];
  iconName: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  iconName: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  status: string;
}

export interface EducationItem {
  degree: string;
  specialization?: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  gradeLabel: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Nithila ML",
  title: "Software Development Instructor @ NxtWave",
  subTitles: [
    "Full Stack Development Explorer",
    "Aspiring Software Engineer",
    "AI Enthusiast",
    "Computer Science Graduate"
  ],
  statusBadge: "Currently Working at NxtWave",
  company: "NxtWave Disruptive Technologies Pvt. Ltd.",
  location: "Hyderabad",
  rolePeriod: "April 2026 – Present",
  degree: "Integrated M.Tech in Computer Science",
  specialization: "Specialization in Business Analytics",
  university: "Vellore Institute of Technology (VIT) - Chennai",
  cgpa: "7.94",
  email: "nithilamlm30@gmail.com",
  phone: "+91 98430 11935",
  linkedIn: "https://www.linkedin.com/in/nithila-maran-427a59298",
  github: "https://github.com/NITHILA02",
  bio: "Passionate about deriving actionable insights from data using machine learning and big data analytics. Proficient in SQL, Python, Power BI, and R, with a keen interest in bridging the gap between technology and business strategy. Eager to apply analytical and programming skills to develop innovative, business-focused solutions."
};

export const ABOUT_SUMMARY = "Passionate about deriving actionable insights from data using machine learning and big data analytics. Proficient in SQL, Python, Power BI, and R, with a keen interest in bridging the gap between technology and business strategy. Eager to apply analytical and programming skills to develop innovative, business-focused solutions.";

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Integrated M.Tech in Computer Science",
    specialization: "Specialization in Business Analytics",
    institution: "Vellore Institute of Technology (VIT) - Chennai",
    location: "Chennai, India",
    period: "2021 – 2026 (Pursuing: 5th Year | 10th Sem)",
    grade: "7.94",
    gradeLabel: "CGPA"
  },
  {
    degree: "HSC – Computer Science",
    institution: "San Academy Pallikaranai",
    location: "Chennai, India",
    period: "2020 – 2021",
    grade: "89.80%",
    gradeLabel: "Percentage"
  },
  {
    degree: "SSLC",
    institution: "Crescent English High School",
    location: "Dubai, UAE",
    period: "2018 – 2019",
    grade: "69.60%",
    gradeLabel: "Percentage"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Software Development Instructor",
    company: "NxtWave Disruptive Technologies Pvt. Ltd.",
    location: "Hyderabad",
    period: "April 2026 – Present",
    status: "Present Role"
  }
];

// STRICT RESUME SKILLS PLUS GENERATIVE AI AND NODE.JS ONLY
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "R", "Java", "C++"],
    iconName: "Code2"
  },
  {
    title: "BI Tools",
    skills: ["Tableau Public", "Power BI Desktop"],
    iconName: "BarChart3"
  },
  {
    title: "Database",
    skills: ["MongoDB", "SQL"],
    iconName: "Database"
  },
  {
    title: "Front-end & Web Technologies",
    skills: ["HTML5", "CSS3", "Node.js"],
    iconName: "Layout"
  },
  {
    title: "AI & Emerging Tech",
    skills: ["Generative AI"],
    iconName: "Cpu"
  },
  {
    title: "Simulation Tools",
    skills: ["MATLAB / Simulink"],
    iconName: "Cpu"
  },
  {
    title: "Developer Tools",
    skills: ["VS Code", "Jupyter Notebook"],
    iconName: "Terminal"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "bess-simulation",
    title: "Simulation & Performance Analysis of BESS",
    category: "Analytics",
    description: "Developed a table-based battery energy storage system model in MATLAB/Simulink to analyze SOC and voltage behavior under varying load conditions. Implemented an epoch-based simulation approach and built a Linear Regression model in Python.",
    tools: ["MATLAB/Simulink", "Python"],
    iconName: "BatteryCharging",
    githubUrl: "https://github.com/NITHILA02"
  },
  {
    id: "reactive-power-mgmt",
    title: "Reactive Power Management & Visual Analytics",
    category: "Analytics",
    description: "Implemented a PSO-based optimization model in Python to automate capacitor bank switching, improving power factor and reducing reactive power losses. Built interactive Power BI dashboards to visualize switching patterns.",
    tools: ["Python", "Power BI"],
    iconName: "Zap",
    githubUrl: "https://github.com/NITHILA02",
    liveUrl: "https://github.com/NITHILA02"
  },
  {
    id: "ecommerce-chatbot",
    title: "E-commerce Chatbot Assistant",
    category: "Full Stack",
    description: "Designed and implemented a dynamic e-commerce platform integrated with an AI-powered chatbot for real-time customer interactions. Enhanced user engagement by providing automated assistance.",
    tools: ["HTML", "CSS", "JavaScript"],
    iconName: "Bot",
    githubUrl: "https://github.com/NITHILA02",
    liveUrl: "https://github.com/NITHILA02"
  },
  {
    id: "agro-ai",
    title: "Agro AI: Soil Classification & Crop Recommendation",
    category: "AI & ML",
    description: "Developed a machine learning-based system for soil classification and crop recommendation. Leveraged environmental and soil composition data to provide precise crop suggestions.",
    tools: ["Python", "Scikit-Learn", "Pandas"],
    iconName: "Sprout",
    githubUrl: "https://github.com/NITHILA02"
  },
  {
    id: "smart-dustbin",
    title: "Smart Dustbin Monitoring System",
    category: "IoT & Systems",
    description: "Developed an IoT-powered smart dustbin equipped with sensors for real-time waste level detection. Integrated GSM for automated alerts and GPS for location tracking.",
    tools: ["Arduino IDE", "GSM", "Ultrasonic & Moisture Sensors"],
    iconName: "Radio",
    githubUrl: "https://github.com/NITHILA02"
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: "NPTEL Online Certification - Forest and Their Management",
    issuer: "NPTEL",
    year: "2024",
    description: "Successfully completed the NPTEL Online Certification Course on Forest and Their Management."
  },
  {
    title: "Coursera Certification - HR Analytics",
    issuer: "Coursera",
    year: "2025",
    description: "Completed specialized certification on HR Analytics and data-driven workforce decision making."
  },
  {
    title: "Depression Survey & Clinical Data Collaboration",
    issuer: "Private Hospital Collaboration",
    year: "2024",
    description: "Conducted surveys on individuals experiencing depression and collaborated with a private hospital to support mental health research and analysis."
  },
  {
    title: "National Service Scheme (NSS) Club Member",
    issuer: "NSS VIT",
    year: "2023",
    description: "Active member contributing to community service initiatives and social welfare programs."
  }
];
