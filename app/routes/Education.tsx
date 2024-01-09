import { Card, Container, Stepper, Typography } from "@mui/joy";
import { usePageEffect } from "../core/page";
import StyledStep from "../components/StyledStep/StyledStep";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SectionSubHeading from "../components/CustomTypographies/SectionSubHeading/SectionSubHeading";
import SectionHeading from "../components/CustomTypographies/SectionHeading/SectionHeading";
import { debounce } from "@mui/material";

import CollapsibleList from "../components/CollapsableList/CollapsableList";
import { educationData, educationDates } from "../data/education-data";
import MarksCard from "../components/MarksCard/MarksCard";

export enum EEducationInstitution {
  RCCIIT = "rcciit",
  BidhanNagarMunicipalHighSchool = "bidhannagarmunicipalhighschool",
  BidhanNagarMunicipalSchool = "bidhannagarmunicipalschool",
}
export const Component = function Education(): JSX.Element {
  usePageEffect({ title: "Education" });
  const navigate = useNavigate();
  const { hash } = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const initialRender = useRef(true);

  const debouncedNavigate = debounce((id: string) => {
    // ensure only one navigate call will be made in 10ms
    navigate(`/education#${id}`);
  }, 500);

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
        .querySelector("#education")!
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <Container
      sx={{ py: 2, maxHeight: "90vh", overflow: "auto" }}
      ref={containerRef}
    >
      <Typography id={"education"} sx={{ mb: 4 }} level="h1" gutterBottom>
        Education
      </Typography>

      <section
        id={EEducationInstitution.RCCIIT}
        style={{ height: "0px" }}
      ></section>
      <section style={{ minHeight: "50vh" }}>
        <a href={`#${EEducationInstitution.RCCIIT}`}>
          <SectionHeading title="RCCIIT" />
        </a>
        <Stepper orientation={"vertical"} sx={{ minHeight: "50vh" }}>
          <StyledStep indicatorDates={educationDates["RCCIIT"]}>
            <SectionSubHeading>
              B.Tech Degree in Electronics & Communication Stream
            </SectionSubHeading>
            <Card orientation="horizontal" variant="plain">
              <CollapsibleList
                punchLine={"Culture, Hackathons, Completions"}
                details={educationData["RCCIIT"]}
              ></CollapsibleList>
              <MarksCard type="DGPA" value="8.83" />
            </Card>
          </StyledStep>
        </Stepper>
      </section>

      <section
        id={EEducationInstitution.BidhanNagarMunicipalHighSchool}
        style={{ minHeight: "50vh" }}
      >
        <a href={`#${EEducationInstitution.BidhanNagarMunicipalHighSchool}`}>
          <SectionHeading
            title="BidhanNagarMunicipalHighSchool"
            needMarginTop
          />
        </a>
        <Stepper orientation={"vertical"} sx={{ minHeight: "50vh" }}>
          <StyledStep
            indicatorDates={educationDates["BidhanNagarMunicipalHighSchool"]}
          >
            <SectionSubHeading>12th Boards,WBCHSE</SectionSubHeading>
            <Card orientation="horizontal" variant="plain">
              <CollapsibleList
                punchLine={"Culture, Hackathons, Completions"}
                details={educationData["BidhanNagarMunicipalHighSchool"]}
              ></CollapsibleList>
              <MarksCard type="Percentage" value="74.20%" />
            </Card>
          </StyledStep>
        </Stepper>
      </section>

      <section
        id={EEducationInstitution.BidhanNagarMunicipalSchool}
        style={{ minHeight: "50vh" }}
      >
        <a href={`#${EEducationInstitution.BidhanNagarMunicipalSchool}`}>
          <SectionHeading title="BidhanNagarMunicipalSchool" needMarginTop />
        </a>
        <Stepper orientation={"vertical"} sx={{ minHeight: "50vh" }}>
          <StyledStep
            indicatorDates={educationDates["BidhanNagarMunicipalSchool"]}
          >
            <SectionSubHeading>10th Boards,WBBSE</SectionSubHeading>
            <Card orientation="horizontal" variant="plain">
              <CollapsibleList
                punchLine={"Culture, Hackathons, Completions"}
                details={educationData["BidhanNagarMunicipalSchool"]}
              ></CollapsibleList>
              <MarksCard type="Percentage" value="84.00%" />
            </Card>
          </StyledStep>
        </Stepper>
      </section>
    </Container>
  );
};
