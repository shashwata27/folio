import { Typography } from "@mui/joy";
import SkillCard from "../components/SkillCard/SkillCard";
import { SkillsData } from "../data/skills-and-certificates-data";
import { usePageEffect } from "../core/page";
import { useLocationToScroll } from "../core/useLocationToScroll";
import AutoScrollContainer from "../components/AutoScrollContainer/AutoScrollContainer";

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
  const baseURI = "skills-and-certificates";

  usePageEffect({ title: "Skills and Certificates" });
  useLocationToScroll(baseURI);
  return (
    <AutoScrollContainer baseURI={baseURI}>
      <div id={baseURI} style={{ height: 0 }} />

      <section id={ESkillsAndCertificates.Skills} />
      <section>
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

      <section
        id={ESkillsAndCertificates.Certificates}
        style={{ minHeight: "50vh" }}
      >
        <Typography id={"experience"} sx={{ mb: 4 }} level="h1" gutterBottom>
          Certificates
        </Typography>
      </section>
    </AutoScrollContainer>
  );
};
