export const profile = {
  name: 'Hemanth SS',
  tagline: 'Senior Engineer | AI Consultant | Systems Architect',
  bio: 'From industrial systems to intelligent software, I bring 9+ years of experience building products that connect hardware, sensing, automation, and AI into dependable real-world systems.',
  email: 'hemanthss.career@gmail.com',
  phone: '+91 8086 936 541',
  location: 'Bengaluru, India',
  linkedin: 'https://linkedin.com/in/hemanthss',
  stats: [
    { num: '9+', label: 'Years across product engineering' },
    { num: '4', label: 'Core engineering domains' },
    { num: 'E2E', label: 'Requirements to deployment' },
    { num: 'HW + AI', label: 'Bridge across physical and digital systems' },
  ],
  highlights: [
    'Thermal imaging, sensing, and embedded product development',
    'Vision systems, OpenCV pipelines, and production validation',
    'LLM applications, multi-agent workflows, and full-stack delivery',
  ],
}

export const featuredWork = [
  {
    company: 'Tonbo Imaging',
    title: 'Spartan Thermal Weapon Sight',
    category: 'Thermal Imaging Product',
    mediaType: 'image',
    media: '/media/spartan.jpg',
    summary:
      'Spartan is one of the smallest thermal weapon sights in its class, designed as a true clip-on for small and medium caliber weapons while also supporting stand-alone, handheld, and helmet-mounted use.',
    impact:
      'Contributed across the product lifecycle, helping turn demanding field requirements into a rugged, test-ready thermal imaging system.',
    contributions: [
      'Gathered and translated product requirements into validation-ready engineering inputs.',
      'Supported end-to-end product development, including functional design and system-level testing.',
      'Executed environmental, EMI/EMC, and firing-related qualification activities.',
      'Developed test jigs and participated in field trials, product training, and user-facing validation.',
    ],
  },
  {
    company: 'Tonbo Imaging',
    title: 'Arjun Multi-Purpose Thermal Sight',
    category: 'Weapon Sight Platform',
    mediaType: 'image',
    media: '/media/arjun.jpg',
    summary:
      'Arjun is a compact, lightweight uncooled thermal imaging sight optimized for small, medium, and large caliber sniper weapons, with deployment options as a stand-alone sight, clip-on, handheld scope, or helmet-mounted unit.',
    impact:
      'Played a central role in delivering the Arjun 17u and 12u variants by coordinating development across multiple engineering disciplines.',
    contributions: [
      'Owned complete product development activities for Arjun 17u and 12u variants.',
      'Bridged firmware, mechanical, and electronic hardware teams to keep integration aligned.',
      'Drove product integration, subsystem coordination, and verification testing.',
    ],
  },
  {
    company: 'Tonbo Imaging',
    title: 'TUVE 12u Thermal Core',
    category: 'Thermal Video Engine',
    mediaType: 'image',
    media: '/media/tuve.jpg',
    summary:
      'TUVE is a compact, low-power uncooled thermal imaging core built for system integrators who need a flexible thermal engine with strong image processing and peripheral support.',
    impact:
      'Improved calibration efficiency and validation reliability for the 12u sensor pipeline used in thermal imaging product development.',
    contributions: [
      'Collaborated with FPGA engineers to develop thermal calibration workflows for the 12u sensor.',
      'Performed sensor calibration for 12u devices from BAE Athena and Lynred.',
      'Automated the calibration process to reduce manual effort and improve consistency.',
      'Built Python-based image pipeline validation workflows for faster engineering feedback.',
    ],
  },
  {
    company: 'Pramana',
    title: 'Vision-Based Sensing System for Scanner Cluster',
    category: 'Computer Vision System',
    mediaType: 'video',
    media: '/media/pramana-vision.mp4',
    summary:
      'Designed a vision-based sensing system to detect slide presence and basket position or orientation before scanning and during sanity checks, replacing a robotic arm-driven inspection step.',
    impact:
      'Owned the NPI pipeline from requirements capture and sensor evaluation through OpenCV algorithm development, system integration, and production deployment, improving cycle time and detection accuracy on a CTQ-critical workflow.',
    contributions: [
      'Captured system requirements and evaluated candidate sensors for the scanner cluster.',
      'Designed and integrated the complete vision solution into the production environment.',
      'Developed OpenCV-based detection logic for slide presence and basket orientation validation.',
      'Delivered a production-ready system that replaced a robotic inspection approach with a simpler and faster vision workflow.',
    ],
  },
]

export const domains = [
  'Sensor Systems',
  'Thermal Imaging',
  'Edge AI',
  'Computer Vision',
  'LLM Engineering',
  'Multi-Agent AI',
  'System Integration',
  'Industrial Automation',
]

export const timeline = [
  {
    period: 'Mar 2025 - Present',
    role: 'AI Consultant & Freelancer',
    company: 'Independent | Remote',
    active: true,
    desc: 'Building AI-powered automation systems across healthcare, sales, and industrial use cases, with delivery spanning orchestration, backend services, and frontend applications.',
    tags: ['LangGraph', 'CrewAI', 'RAG', 'FastAPI', 'React', 'Vector DBs'],
  },
  {
    period: 'Oct 2024 - Mar 2025',
    role: 'Senior System Engineer',
    company: 'Pramana | Bengaluru',
    active: false,
    desc: 'Built a production vision system for scanner-cluster sanity checks, replacing a robotic inspection flow with a camera-based solution.',
    tags: ['OpenCV', 'Object Detection', 'System Validation', 'NPI'],
  },
  {
    period: 'Dec 2018 - Oct 2024',
    role: 'System Test Engineer',
    company: 'Tonbo Imaging | Bengaluru',
    active: false,
    desc: 'Contributed to defense-grade electro-optic and thermal imaging products, calibration automation, image pipeline validation, and embedded AI deployment on Jetson platforms.',
    tags: ['Thermal Imaging', 'Jetson', 'Python', 'Calibration', 'Defense Systems', 'Edge AI'],
  },
  {
    period: 'Mar 2017 - Sep 2018',
    role: 'Electrical Engineer',
    company: 'Cogent Automation · Coimbatore',
    active: false,
    desc: 'Started in industrial automation, building PLC and HMI solutions for production systems and real-time sensor monitoring.',
    tags: ['PLC Programming', 'HMI Development', 'Industrial Automation'],
  },
]

export const skills = [
  {
    icon: '[S]',
    name: 'Sensor & Systems Engineering',
    items:
      'Thermal/IR imaging, electro-optic systems, sensor calibration, multi-sensor integration, environmental testing, and system validation.',
  },
  {
    icon: '[E]',
    name: 'Embedded & Edge Platforms',
    items:
      'NVIDIA Jetson Xavier NX, Jetson Orin NX, edge AI inference, model optimization, and real-time deployment.',
  },
  {
    icon: '[AI]',
    name: 'AI & Machine Learning',
    items:
      'LangGraph, CrewAI, RAG, prompt engineering, LangChain, Hugging Face, LLaMA, and multi-agent systems.',
  },
  {
    icon: '[CV]',
    name: 'Computer Vision',
    items:
      'OpenCV, object detection, deep learning, image processing, camera system design, and sensor data pipelines.',
  },
  {
    icon: '[FS]',
    name: 'Software & Full Stack',
    items:
      'Python, FastAPI, React, Streamlit, PostgreSQL, MongoDB, Docker, REST APIs, CI/CD, and Azure.',
  },
  {
    icon: '[IA]',
    name: 'Industrial Automation',
    items:
      'PLC programming, HMI development, special purpose machines, SPI, I2C, UART, and Ethernet protocols.',
  },
]

export const projects = [
  {
    domain: 'AI | LLM',
    name: 'Sales Bot MVP',
    desc: 'Agentic pre-sales assistant with query classification, RAG retrieval, response generation, citation extraction, and real-time SSE streaming.',
    stack: ['LangGraph', 'Weaviate', 'FastAPI', 'React', 'Docker'],
  },
  {
    domain: 'AI | Healthcare',
    name: 'Doctor Support System',
    desc: 'Multi-agent healthcare workflow using CrewAI with specialized agents for symptom analysis, disease mapping, and insurance processing.',
    stack: ['CrewAI', 'GPT-4', 'MongoDB', 'Streamlit', 'FastAPI'],
  },
  {
    domain: 'AI | Platform',
    name: 'Playverse - Chess Tournament AI',
    desc: 'Conversational tournament management built on LangGraph with GPT-4o, hybrid intent routing, and Azure deployment.',
    stack: ['LangGraph', 'GPT-4o', 'React/TS', 'PostgreSQL', 'Azure'],
  },
  {
    domain: 'Edge AI | Defense',
    name: 'Edge AI on Jetson Platforms',
    desc: 'From model integration to embedded optimization on NVIDIA Jetson Xavier NX and Orin NX for real-time edge vision use cases.',
    stack: ['Jetson Xavier NX', 'Jetson Orin NX', 'Edge Inference', 'Python'],
  },
  {
    domain: 'Sensors | Automation',
    name: 'Thermal Sensor Calibration Automation',
    desc: 'Automated calibration and data acquisition pipelines for thermal imaging sensors with signal-processing-based characterization.',
    stack: ['Python', 'Signal Processing', 'Thermal Imaging', 'Data Pipelines'],
  },
]

export const education = [
  {
    year: '2022 - 2023',
    degree: 'Executive PG Diploma in Artificial Intelligence',
    institution: 'IIIT Bangalore',
  },
  {
    year: '2018 - 2020',
    degree: 'B.Voc in Mechatronics',
    institution: 'Ramaiah University of Applied Sciences',
  },
  {
    year: '2011 - 2014',
    degree: 'Diploma in Mechatronics',
    institution: 'NTTF - Nettur Technical Training Foundation',
  },
]
