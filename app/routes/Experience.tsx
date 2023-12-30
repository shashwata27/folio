import { Container, Stepper, Typography } from "@mui/joy";
import { usePageEffect } from "../core/page";
import CollapsibleList from "../components/CollapsableList/CollapsableList";
import {
  cognizantExperienceData,
  nichesolvExperienceData,
  thoughtworksExperienceData,
} from "../data/experience-data";
import StyledStep from "../components/StyledStep/StyledStep";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export enum EExperienceCompanies {
  Thoughtworks = "thoughtworks",
  Cognizant = "cognizant",
  Nicheslov = "nichesolv",
  ZeroDollarSecurity = "zerodollarsecurity",
}
export const Component = function Experience(): JSX.Element {
  usePageEffect({ title: "Experience" });
  const navigate = useNavigate();
  const { hash } = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const initialRender = useRef(true);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9, // Adjust the threshold as needed
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id && !initialRender.current) {
            navigate(`/experience#${id}`);
          }
          initialRender.current = false;
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (containerRef.current) {
      // Observe each section with the specified class
      containerRef.current
        .querySelectorAll("section[id]")
        .forEach((section) => {
          observer.observe(section);
        });
    }

    return () => {
      observer.disconnect(); // Cleanup when component unmounts
    };
  }, [navigate]);

  useEffect(() => {
    if (hash) {
      const targetElement = document.querySelector(hash);
      targetElement!.scrollIntoView({ behavior: "smooth" });
    } else {
      document
        .querySelector("#experience")!
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <Container
      sx={{ py: 2, maxHeight: "90vh", overflow: "auto" }}
      ref={containerRef}
    >
      <Typography id={"experience"} sx={{ mb: 4 }} level="h1" gutterBottom>
        Experience
      </Typography>

      <section
        id={EExperienceCompanies.Thoughtworks}
        style={{ minHeight: "50vh" }}
      >
        <a href={`#${EExperienceCompanies.Thoughtworks}`}>
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
      </section>

      <section
        id={EExperienceCompanies.Cognizant}
        style={{ minHeight: "50vh" }}
      >
        <a href={`#${EExperienceCompanies.Cognizant}`}>
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
      </section>

      <section
        id={EExperienceCompanies.Nicheslov}
        style={{ minHeight: "50vh" }}
      >
        <a href={`#${EExperienceCompanies.Nicheslov}`}>
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
      </section>

      <section
        id={EExperienceCompanies.ZeroDollarSecurity}
        style={{ minHeight: "50vh" }}
      >
        <a href={`#${EExperienceCompanies.ZeroDollarSecurity}`}>
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
      </section>
    </Container>
  );
};
