import { Card, Stepper, Typography } from "@mui/joy";
import { usePageEffect } from "../core/page";
import StyledStep from "../components/StyledStep/StyledStep";

import SectionSubHeading from "../components/CustomTypographies/SectionSubHeading/SectionSubHeading";
import SectionHeading from "../components/CustomTypographies/SectionHeading/SectionHeading";

import CollapsibleList from "../components/CollapsableList/CollapsableList";
import { educationData, educationDates } from "../data/education-data";
import MarksCard from "../components/MarksCard/MarksCard";
import SakuraCanvas from "../animations/SakuraCanvas";
import { useOutetContext } from "../components";
import AutoScrollContainer from "../components/AutoScrollContainer/AutoScrollContainer";
import { useLocationToScroll } from "../core/useLocationToScroll";

export enum EEducationInstitution {
  RCCIIT = "rcciit",
  BidhanNagarMunicipalHighSchool = "bidhannagarmunicipalhighschool",
  BidhanNagarMunicipalSchool = "bidhannagarmunicipalschool",
}
export const Component = function Education(): JSX.Element {
  const { openSidebar } = useOutetContext();
  const baseURI = "education";

  usePageEffect({ title: "Education" });
  useLocationToScroll(baseURI);

  const minHeightStyle = { minHeight: "40vh" };
  return (
    <AutoScrollContainer baseURI={baseURI}>
      <SakuraCanvas openSidebar={openSidebar} />

      <Typography id={baseURI} sx={{ mb: 4 }} level="h1" gutterBottom>
        Education
      </Typography>

      <section id={EEducationInstitution.RCCIIT} style={minHeightStyle}>
        <a href={`#${EEducationInstitution.RCCIIT}`}>
          <SectionHeading title="RCCIIT" />
        </a>
        <Stepper orientation={"vertical"} sx={minHeightStyle}>
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
        style={minHeightStyle}
      >
        <a href={`#${EEducationInstitution.BidhanNagarMunicipalHighSchool}`}>
          <SectionHeading
            title="BidhanNagarMunicipalHighSchool"
            needMarginTop
          />
        </a>
        <Stepper orientation={"vertical"} sx={minHeightStyle}>
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
        style={minHeightStyle}
      >
        <a href={`#${EEducationInstitution.BidhanNagarMunicipalSchool}`}>
          <SectionHeading title="BidhanNagarMunicipalSchool" needMarginTop />
        </a>
        <Stepper orientation={"vertical"} sx={minHeightStyle}>
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
    </AutoScrollContainer>
  );
};
