import { TSkillGroup } from "../routes/SkillsAndCerts";

export const SkillsData: TSkillData[] = [
  { name: "Python", value: 90, experience: 3, skillGroup: "Language" },
  { name: "Pandas", value: 70, experience: 2, skillGroup: "Framework" },
  { name: "PySpark", value: 70, experience: 1, skillGroup: "Framework" },
  { name: "MySQL", value: 80, experience: 2, skillGroup: "Database" },
  { name: "MongoDB", value: 90, experience: 2, skillGroup: "Database" },
  { name: "AWS Glue", value: 70, experience: 1, skillGroup: "Cloud" },
  { name: "AWS Athena", value: 70, experience: 1, skillGroup: "Cloud" },
  { name: "AWS S3", value: 90, experience: 2, skillGroup: "Cloud" },
  { name: "AWS Secret Manager", value: 70, experience: 1, skillGroup: "Cloud" },
  { name: "AWS SNS", value: 60, experience: 1, skillGroup: "Cloud" },

  { name: "JavaScript", value: 80, experience: 3, skillGroup: "Language" },
  { name: "TypeScript", value: 80, experience: 2, skillGroup: "Language" },
  { name: "HTML5", value: 70, experience: 3, skillGroup: "Language" },
  { name: "CSS3", value: 70, experience: 3, skillGroup: "Language" },
  { name: "React.js", value: 80, experience: 3, skillGroup: "Framework" },
  { name: "Material UI", value: 80, experience: 3, skillGroup: "Framework" },

  { name: "Java", value: 60, experience: 2, skillGroup: "Language" },
  { name: "SpringBoot", value: 60, experience: 2, skillGroup: "Framework" },

  { name: "Git", value: 80, experience: 3, skillGroup: "Tool" },
  { name: "GitHub Workflows", value: 70, experience: 2, skillGroup: "Tool" },
  { name: "Salesforce", value: 60, experience: 1, skillGroup: "Cloud" },

  { name: "Communication", value: 80, experience: 3, skillGroup: "Soft Skill" },
  { name: "Team Building", value: 80, experience: 3, skillGroup: "Soft Skill" },
  {
    name: "Giving Feedback",
    value: 80,
    experience: 3,
    skillGroup: "Soft Skill",
  },
];

type TSkillData = {
  name: string;
  value: number;
  experience: number;
  skillGroup: TSkillGroup;
};
