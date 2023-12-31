import { Container, Stepper, Typography } from "@mui/joy";
import { usePageEffect } from "../core/page";
import CollapsibleList from "../components/CollapsableList/CollapsableList";
import {
  cognizantExperienceData,
  cognizantExperienceDatesData,
  nichesolvExperienceData,
  nichesolvExperienceDatesData,
  thoughtworksExperienceData,
  thoughtworksExperienceDatesData,
} from "../data/experience-data";
import StyledStep from "../components/StyledStep/StyledStep";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SectionSubHeading from "../components/CustomTypographies/SectionSubHeading/SectionSubHeading";
import SectionHeading from "../components/CustomTypographies/SectionHeading/SectionHeading";
import { useStore } from "jotai";
import { isDropDownOptionClickedAtom } from "../core/store";
import { debounce } from "@mui/material";

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
  const store = useStore();

  const debouncedNavigate = debounce((id: string) => {
    // ensure only one navigate call will be made in 10ms
    navigate(`/experience#${id}`);
    store.set(isDropDownOptionClickedAtom, false);
  }, 10);

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
          if (
            id &&
            !initialRender.current &&
            !store.get(isDropDownOptionClickedAtom)
          ) {
            debouncedNavigate(id);
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

      <section style={{ minHeight: "50vh" }}>
        <a href={`#${EExperienceCompanies.Thoughtworks}`}>
          <SectionHeading title="Thoughtworks" />
        </a>
        <section
          id={EExperienceCompanies.Thoughtworks}
          style={{ height: "0px" }}
        ></section>
        <Stepper orientation={"vertical"}>
          <StyledStep indicatorDates={thoughtworksExperienceDatesData["DAM"]}>
            <SectionSubHeading>Data Access Manager</SectionSubHeading>
            <CollapsibleList
              punchLine={
                "Building Data Product Access Management Frontend for existing Data Products in AWS LakeFormation"
              }
              details={thoughtworksExperienceData["DAM"]}
            ></CollapsibleList>
          </StyledStep>
          <StyledStep indicatorDates={thoughtworksExperienceDatesData["DPMC"]}>
            <SectionSubHeading>
              Data Product/Mesh Creater Pack
            </SectionSubHeading>
            <CollapsibleList
              punchLine={
                "Fully Automated Starter Kit for Data Product creation from JSON Files"
              }
              details={thoughtworksExperienceData["DPMC"]}
            ></CollapsibleList>
          </StyledStep>
          <StyledStep
            indicatorDates={thoughtworksExperienceDatesData["PFGPOC"]}
          >
            <SectionSubHeading>
              Predict Future Growth Using Data Products POC
            </SectionSubHeading>
            <CollapsibleList
              punchLine={
                "POC for Multistage Growth Prediction among segments leveraging Data Mesh"
              }
              details={thoughtworksExperienceData["PFGPOC"]}
            ></CollapsibleList>
          </StyledStep>
          <StyledStep indicatorDates={thoughtworksExperienceDatesData["MSC"]}>
            <SectionSubHeading>Miscellaneous</SectionSubHeading>
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
          <SectionHeading title="Cognizant" needMarginTop />
        </a>
        <Stepper orientation={"vertical"}>
          <StyledStep indicatorDates={cognizantExperienceDatesData["PCRM"]}>
            <SectionSubHeading>Pharma CRM</SectionSubHeading>
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
          <SectionHeading title="NicheSolv" needMarginTop />
        </a>
        <Stepper orientation={"vertical"}>
          <StyledStep indicatorDates={nichesolvExperienceDatesData["MSC"]}>
            <SectionSubHeading>
              Dashboard Plugins, Data Scripts, UI Design
            </SectionSubHeading>
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
          <SectionHeading title="Zero Dollar Security" needMarginTop />
        </a>
        <Stepper orientation={"vertical"}>
          <StyledStep>
            <SectionSubHeading>
              Dashboard Plugins, Data Scripts, UI Design
            </SectionSubHeading>
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
