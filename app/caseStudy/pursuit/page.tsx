"use client";
import SlideReveal from "@/animations/SlideReveal";
import Container from "@/components/Container";
import LinkPage from "@/components/LinkPage";
import PageContainer from "@/components/PageContainer";
import BrandDetails from "@/components/caseStudyCommons/BrandDetails";
import Introduction from "@/components/caseStudyCommons/Introduction";
import RowCell from "@/components/caseStudyCommons/RowCell";
import SideBySideImg from "@/components/caseStudyCommons/SideBySideImg";
import {
  brandDetailsLayer,
  businessRequirementsImages,
  informations,
  sideBySideExample,
  userNeeds,
  userNeedsImages,
  pursuitLearned,
} from "@/data/pursuit";
import headingStyling from "@/hooks/headerStyling";
import { map } from "lodash";
import { FC, useEffect } from "react";

const Pursuit: FC = () => {
  const { headerStyle, topLeftStyle } = headingStyling();

  useEffect(() => {
    headerStyle("#fff", "var(--color-theme)", "#030303");
    topLeftStyle("#fff");
  }, []);

  return (
    <PageContainer pageTitle="pursuit">
      <Introduction
        title={`Designing a mobile app to Improver Golf players’ mental State`}
        description={`Pursuit is a startup company that wants to use an Electroencephalography (EEG) device for Golf 
          Coach’s and Golf players to track how focused and relaxed they are while training. 
          The goal is to help players create a system to improve their performance by improving their mental state. 
          Currently, EEG devices are not used in the sports industry.`}
        informations={informations}
      />

      <div className="layer white">
        <SideBySideImg
          sideBySideLst={sideBySideExample}
          classname="side-by-side-app-ex"
        />
        <Container>
          <SlideReveal>
            <h1>
              Discovering Business Requirements for Minimum Viable Product
            </h1>
          </SlideReveal>
          <SlideReveal>
            <p className="intro">
              To ensure the success of the Minimum Viable Product (MVP), the
              business owners and I have prioritised and defined the following
              requirements for the product with product owners:
            </p>
          </SlideReveal>
          {map(businessRequirementsImages, (requirement, idx) => (
            <SideBySideImg
              sideBySideLst={requirement}
              key={idx}
              classname="business-requirement"
            />
          ))}
        </Container>
      </div>

      <div className="layer">
        <Container>
          <SlideReveal>
            <h1>Discovering User Needs</h1>
          </SlideReveal>
          <SlideReveal>
            <p className="intro">
              About 20 Pro Golf Coaches and Players were interviewed and these
              users required:
            </p>
          </SlideReveal>
          <RowCell rowCells={userNeeds} />
        </Container>
      </div>

      <div className="layer white">
        {map(userNeedsImages, (needs, idx) => (
          <SideBySideImg
            sideBySideLst={needs}
            key={idx}
            classname="business-needs"
          />
        ))}

        <Container>
          <SlideReveal>
            <h1>Creating a Brand and putting it all together</h1>
          </SlideReveal>
          <BrandDetails brandDetails={brandDetailsLayer} />
        </Container>
      </div>

      <div className="layer learned">
        <Container>
          <SlideReveal>
            <h1>What I have Learned</h1>
          </SlideReveal>
          <RowCell rowCells={pursuitLearned} />
          <LinkPage link={"/caseStudy/glamourNails"}>
            Check out the next Case Study
          </LinkPage>
        </Container>
      </div>
    </PageContainer>
  );
};

export default Pursuit;
