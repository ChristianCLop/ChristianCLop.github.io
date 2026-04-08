export const education = [
  {
    institutionLogo: "/img/experience/UTA.webp",
    institution: "Universidad Técnica de Ambato",

    degree: "Software Engineering",
    degreeKey: "edu.uta.degree",

    type: "degree" as const,
    startDate: "2019",
    endDate: "2025",

    // Default text (English) — the i18nKey tells the runtime what to swap
    description: "Comprehensive program covering software development, systems design, and software engineering principles with hands-on projects and real-world applications.",
    descriptionKey: "edu.uta.description",

    achievements: [
      "Implemented a web application for managing timetables schedules, optimizing classrooms utilization.",
      "Project: Horarios FISEI",
    ],
    achievementKeys: [
      "edu.uta.ach_0",
      "edu.uta.ach_1",
    ],

    skills: [
      { name: "Docker", img: "/icons/skills/docker.svg" },
      { name: "Python", img: "/icons/skills/python.svg" },
      { name: "JavaScript", img: "/icons/skills/javascript.svg" },
      { name: "NestJS", img: "/icons/skills/nestjs.svg" },
      { name: "Next.js", img: "/icons/skills/nextjs.svg" },
      { name: "MySQL", img: "/icons/skills/mysql.svg" },
      { name: "PostgreSQL", img: "/icons/skills/postgresql.svg" },
    ],

    certificates: [
      {
        title: "Bachelor's Degree in Software Engineering",
        titleKey: "edu.uta.title_0",
        img: "/img/education/Degree Senescyt.png",
        link: "https://drive.google.com/file/d/1PGRLylAy_NldSCfa7qfeUqEumQSlSCBC/view?usp=sharing",
        label: "View Certificate",
        labelKey: "edu.uta.cert_0",
      },
      {
        title: "Bachelor's Degree in Software Engineering - University",
        titleKey: "edu.uta.title_1",
        img: "/img/education/Degree U.png",
        link: "https://drive.google.com/file/d/1o11E5Pqd-OB5ZA-44w7M4YRzDOc7ZFdl/view?usp=sharing",
        label: "View Certificate",
        labelKey: "edu.uta.cert_1",
      },
    ],
  },
];
