import { Card, Stepper, Typography } from "@mui/joy";
import { usePageEffect } from "../core/page";
import CollapsibleList from "../components/CollapsableList/CollapsableList";
import {
  cognizantExperienceData,
  cognizantExperienceDatesData,
  nichesolvExperienceData,
  nichesolvExperienceDatesData,
  thoughtworksExperienceData,
  thoughtworksExperienceDatesData,
  zeroDollarSecurityExperienceData,
  zeroDollarSecurityExperienceDatesData,
} from "../data/experience-data";
import StyledStep from "../components/StyledStep/StyledStep";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionSubHeading from "../components/CustomTypographies/SectionSubHeading/SectionSubHeading";
import SectionHeading from "../components/CustomTypographies/SectionHeading/SectionHeading";

import SakuraCanvas from "../animations/SakuraCanvas";
import { useOutetContext } from "../components";
import AutoScrollContainer from "../components/AutoScrollContainer/AutoScrollContainer";

enum EExperienceCompanies {
  Thoughtworks = "thoughtworks",
  Cognizant = "cognizant",
  Nicheslov = "nichesolv",
  ZeroDollarSecurity = "zerodollarsecurity",
}
export const Component = function Experience(): JSX.Element {
  const { openSidebar } = useOutetContext();
  usePageEffect({ title: "Experience" });
  const baseURI = "experience";

  const { hash } = useLocation();

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
    <AutoScrollContainer baseURI={baseURI}>
      <SakuraCanvas openSidebar={openSidebar} />
      <Typography id={baseURI} sx={{ mb: 4 }} level="h1" gutterBottom>
        Experience
      </Typography>

      <section
        id={EExperienceCompanies.Thoughtworks}
        style={{ height: "0px" }}
      ></section>
      <section style={{ minHeight: "50vh" }}>
        <a href={`#${EExperienceCompanies.Thoughtworks}`}>
          <SectionHeading title="Thoughtworks" />
        </a>
        <Stepper orientation={"vertical"}>
          <StyledStep indicatorDates={thoughtworksExperienceDatesData["DAM"]}>
            <SectionSubHeading>Data Access Manager</SectionSubHeading>
            <Card variant="plain">
              <CollapsibleList
                punchLine={
                  "Building Data Product Access Management Frontend for existing Data Products in AWS LakeFormation"
                }
                details={thoughtworksExperienceData["DAM"]}
              ></CollapsibleList>
            </Card>
          </StyledStep>
          <StyledStep indicatorDates={thoughtworksExperienceDatesData["DPMC"]}>
            <SectionSubHeading>
              Data Product/Mesh Creater Pack
            </SectionSubHeading>
            <Card variant="plain">
              <CollapsibleList
                punchLine={
                  "Fully Automated Starter Kit for Data Product creation from JSON Files"
                }
                details={thoughtworksExperienceData["DPMC"]}
              ></CollapsibleList>
            </Card>
          </StyledStep>
          <StyledStep
            indicatorDates={thoughtworksExperienceDatesData["PFGPOC"]}
          >
            <SectionSubHeading>
              Predict Future Growth Using Data Products POC
            </SectionSubHeading>
            <Card variant="plain">
              <CollapsibleList
                punchLine={
                  "POC for Multistage Growth Prediction among segments leveraging Data Mesh"
                }
                details={thoughtworksExperienceData["PFGPOC"]}
              ></CollapsibleList>
            </Card>
          </StyledStep>
          <StyledStep indicatorDates={thoughtworksExperienceDatesData["MSC"]}>
            <SectionSubHeading>Miscellaneous</SectionSubHeading>
            <Card variant="plain">
              <CollapsibleList
                punchLine={"Learning Explorations"}
                details={thoughtworksExperienceData["MSC"]}
              ></CollapsibleList>
            </Card>
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
            <Card variant="plain">
              <CollapsibleList
                punchLine={
                  "Building CRM software to book & schedule checkins for medical procedures"
                }
                details={cognizantExperienceData["PCRM"]}
              ></CollapsibleList>
            </Card>
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
            <Card variant="plain">
              <CollapsibleList
                punchLine={"UI & Data Projects"}
                details={nichesolvExperienceData["MSC"]}
              ></CollapsibleList>
            </Card>
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
          <StyledStep
            indicatorDates={zeroDollarSecurityExperienceDatesData["Designer"]}
          >
            <SectionSubHeading>Miscellaneous</SectionSubHeading>
            <Card variant="plain">
              <CollapsibleList
                punchLine={"LOGOs, Social Media Content, UI Design"}
                details={zeroDollarSecurityExperienceData["Designer"]}
              ></CollapsibleList>
            </Card>
          </StyledStep>
        </Stepper>
      </section>
    </AutoScrollContainer>
  );
};
