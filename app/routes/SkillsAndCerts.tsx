import { Container, Typography } from "@mui/joy";
import SkillCard from "../components/SkillCard/SkillCard";
import { SkillsData } from "../data/skills-and-certificates-data";

enum ESkillsAndCertificates {
  Skills = "skills",
  Certificates = "certificates",
}
export type TSkillGroup =
  | "Language"
  | "Framework"
  | "Database"
  | "Tool"
  | "Cloud"
  | "Soft Skill";

export const Component = function SkillsAndCerts(): JSX.Element {
  return (
    <Container
      sx={{
        py: 2,
        maxHeight: "90vh",
        overflow: "auto",
      }}
    >
      <section id={ESkillsAndCertificates.Skills}>
        <Typography id={"experience"} sx={{ mb: 4 }} level="h1" gutterBottom>
          Skills
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {SkillsData.map((skill) => (
            <SkillCard
              cardGroup={skill.skillGroup}
              name={skill.name}
              value={skill.value}
              experience={skill.experience}
              key={skill.name}
            />
          ))}
        </div>
      </section>

      <section id={ESkillsAndCertificates.Certificates}>
        <Typography id={"experience"} sx={{ mb: 4 }} level="h1" gutterBottom>
          Certificates
        </Typography>
      </section>
    </Container>
  );
};
