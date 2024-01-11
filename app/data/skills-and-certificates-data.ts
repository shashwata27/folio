import { TSkillGroup } from "../routes/SkillsAndCerts";

export const SkillsData: TSkillData[] = [
  { name: "Python", value: 80, experience: 3, skillGroup: "Language" },
  { name: "Java", value: 75, experience: 2, skillGroup: "Language" },
  { name: "HTML5", value: 70, experience: 2, skillGroup: "Language" },
  { name: "CSS3", value: 70, experience: 2, skillGroup: "Language" },
  { name: "JavaScript", value: 75, experience: 2, skillGroup: "Language" },
  { name: "React.js", value: 80, experience: 2, skillGroup: "Framework" },
  { name: "SpringBoot", value: 75, experience: 2, skillGroup: "Framework" },
  { name: "PySpark", value: 70, experience: 1, skillGroup: "Framework" },
  { name: "Pandas", value: 70, experience: 1, skillGroup: "Framework" },
  { name: "MySQL", value: 75, experience: 2, skillGroup: "Database" },
  { name: "MongoDB", value: 70, experience: 1, skillGroup: "Database" },
  { name: "Git", value: 75, experience: 2, skillGroup: "Tool" },
  { name: "GitHub Workflows", value: 70, experience: 1, skillGroup: "Tool" },
  { name: "Salesforce", value: 75, experience: 2, skillGroup: "Technology" },
  { name: "Communication", value: 80, experience: 3, skillGroup: "Soft Skill" },
  { name: "Team Building", value: 75, experience: 2, skillGroup: "Soft Skill" },
  {
    name: "Giving Feedback",
    value: 70,
    experience: 1,
    skillGroup: "Soft Skill",
  },
];

type TSkillData = {
  name: string;
  value: number;
  experience: number;
  skillGroup: TSkillGroup;
};
