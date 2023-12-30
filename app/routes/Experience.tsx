import { Container, Stepper, Typography } from "@mui/joy";
import { usePageEffect } from "../core/page";
import CollapsibleList from "../components/CollapsableList/CollapsableList";
import {
  cognizantExperienceData,
  nichesolvExperienceData,
  thoughtworksExperienceData,
} from "../data/experience-data";
import StyledStep from "../components/StyledStep/StyledStep";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

enum EExperienceCompanies {
  Thoughtworks = "thoughtworks",
  Cognizant = "cognizant",
  Nicheslov = "nichesolv",
  ZeroDollarSecurity = "zerodollarsecurity",
}
export const Component = function Experience(): JSX.Element {
  usePageEffect({ title: "Experience" });
  const navigate = useNavigate();
  const { hash } = useLocation();

  useEffect(() => {
    navigate("/experience#thoughtworks");
  }, []);

  useEffect(() => {
    const targetElement = document.querySelector(hash);
    targetElement!.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <Container sx={{ py: 2, maxHeight: "90vh", overflow: "auto" }}>
      <Typography sx={{ mb: 4 }} level="h1" gutterBottom>
        Experience
      </Typography>
      <a
        id={EExperienceCompanies.Thoughtworks}
        href={`#${EExperienceCompanies.Thoughtworks}`}
      >
        <Typography level="h3" sx={{ mb: 1 }}>
          Thoughtworks
        </Typography>
      </a>
      <Stepper orientation={"vertical"}>
        <StyledStep>
          <Typography level="h4" sx={{ pt: 1 }} gutterBottom>
            Data Access Manager
          </Typography>
          <CollapsibleList
            punchLine={
              "Building Data Product Access Management Frontend for existing Data Products in AWS LakeFormation"
            }
            details={thoughtworksExperienceData["DAM"]}
          ></CollapsibleList>
        </StyledStep>
        <StyledStep>
          <Typography level="h4" sx={{ pt: 1 }} gutterBottom>
            Data Product/Mesh Creater
          </Typography>
          <CollapsibleList
            punchLine={
              "Fully Automated Starter Kit for Data Product creation from JSON Files"
            }
            details={thoughtworksExperienceData["DPMC"]}
          ></CollapsibleList>
        </StyledStep>
        <StyledStep>
          <Typography level="h4" sx={{ pt: 1 }} gutterBottom>
            Predict Future Growth Using Data Products POC
          </Typography>
          <CollapsibleList
            punchLine={
              "POC for Multistage Growth Prediction among segments leveraging Data Mesh"
            }
            details={thoughtworksExperienceData["PFGPOC"]}
          ></CollapsibleList>
        </StyledStep>
        <StyledStep>
          <Typography level="h4" sx={{ pt: 1 }} gutterBottom>
            Miscellaneous
          </Typography>
          <CollapsibleList
            punchLine={"Learning Explorations"}
            details={thoughtworksExperienceData["MSC"]}
          ></CollapsibleList>
        </StyledStep>
      </Stepper>

      <a
        id={EExperienceCompanies.Cognizant}
        href={`#${EExperienceCompanies.Cognizant}`}
      >
        <Typography level="h3" sx={{ mt: 6, mb: 1 }}>
          Cognizant
        </Typography>
      </a>
      <Stepper orientation={"vertical"}>
        <StyledStep>
          <Typography level="h4" sx={{ pt: 1 }} gutterBottom>
            Pharma CRM
          </Typography>
          <CollapsibleList
            punchLine={
              "Building CRM software to book & schedule checkins for medical procedures"
            }
            details={cognizantExperienceData["PCRM"]}
          ></CollapsibleList>
        </StyledStep>
      </Stepper>

      <a
        id={EExperienceCompanies.Nicheslov}
        href={`#${EExperienceCompanies.Nicheslov}`}
      >
        <Typography level="h3" sx={{ mt: 6, mb: 1 }}>
          NicheSolv
        </Typography>
      </a>
      <Stepper orientation={"vertical"}>
        <StyledStep>
          <Typography level="h4" sx={{ pt: 1 }} gutterBottom>
            Dashboard Plugins, Data Scripts, UI Design
          </Typography>
          <CollapsibleList
            punchLine={"UI & Data Projects"}
            details={nichesolvExperienceData["MSC"]}
          ></CollapsibleList>
        </StyledStep>
      </Stepper>

      <a
        id={EExperienceCompanies.ZeroDollarSecurity}
        href={`#${EExperienceCompanies.ZeroDollarSecurity}`}
      >
        <Typography level="h3" sx={{ mt: 6, mb: 1 }}>
          Zero Dollar Security
        </Typography>
      </a>
      <Stepper orientation={"vertical"}>
        <StyledStep>
          <Typography level="h4" sx={{ pt: 1 }} gutterBottom>
            Dashboard Plugins, Data Scripts, UI Design
          </Typography>
          <CollapsibleList
            punchLine={"UI Design"}
            details={nichesolvExperienceData["MSC"]}
          ></CollapsibleList>
        </StyledStep>
      </Stepper>
    </Container>
  );
};
