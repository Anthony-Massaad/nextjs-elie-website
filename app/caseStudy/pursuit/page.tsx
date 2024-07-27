"use client";
import SlideReveal from "@/animations/SlideReveal";
import Container from "@/components/Container";
import LinkPage from "@/components/LinkPage";
import PageContainer from "@/components/PageContainer";
import BrandDetails from "@/components/caseStudyCommons/BrandDetails";
import ImageCarousel from "@/components/caseStudyCommons/ImageCarousel";
import Introduction from "@/components/caseStudyCommons/Introduction";
import RowCell from "@/components/caseStudyCommons/RowCell";
import SideBySideVideo from "@/components/caseStudyCommons/SideBySideVideo";
import {
  brandDetailsLayer,
  businessRequirementsImages,
  informations,
  sideBySideExample,
  userNeeds,
  userNeedsImages,
  pursuitLearned,
  userFlows,
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
        description={`Pursuit is an innovative startup aiming to revolutionize golf training by integrating Electroencephalography (EEG) technology. 
          The goal is to provide golf coaches and players with a cutting-edge tool to monitor and enhance mental focus and relaxation during training sessions. 
          By leveraging EEG data, the system helps players optimize their mental state, ultimately boosting their performance on the course. Currently, 
          the use of EEG devices in sports is unprecedented, making Pursuit a pioneer in applying this advanced technology to elevate athletic 
          training and performance.`}
        informations={informations}
      />

      <div className="layer white">
        <SideBySideVideo
          sideBySideLst={sideBySideExample}
          classname="side-by-side-app-ex"
        />
        <Container>
          <SlideReveal>
            <h1>Initial Discovery</h1>
          </SlideReveal>
          <SlideReveal>
            <p>
              Extensive interviews were conducted with Golf Coaches and Players
              to understand:
            </p>
          </SlideReveal>
          <SlideReveal>
            <ul className="decimal-listing">
              <li>
                What tools are they currently using to track their Golf
                Analytics and other performance statistics?
              </li>
              <li>How do they currently measure their mental game?</li>
              <li>
                What specific statistics do they value in there mental game?
              </li>
              <li>What is their golf routine like?</li>
              <li>
                How are they tracking their analytics (e.g. total average, game,
                round, or shot)?
              </li>
            </ul>
          </SlideReveal>
          <SlideReveal>
            <img
              className="margin"
              src="/assets/pursuit/initialDiscovery.png"
              alt=""
            />
          </SlideReveal>
          <SlideReveal>
            <h2 className="marginy-t">Performance analytics devices</h2>
          </SlideReveal>
          <SlideReveal>
            <p>
              To measure their health, fitness, and overall performance metrics,
              athletes are mostly using:
            </p>
          </SlideReveal>
          <SlideReveal>
            <ul>
              <li>Apple Watch</li>
              <li>Whoop</li>
              <li>Oura Ring</li>
            </ul>
          </SlideReveal>
          <SlideReveal>
            <p>
              However, even though these devices track overall health and
              fitness metrics, they do not track focus, concentration, or
              relaxation levels when a athlete is performing on a golf course.
            </p>
          </SlideReveal>
          <SlideReveal>
            <p>
              <strong>Performance analytics conclusion:</strong> The devices
              that athletes are using track overall health metrics such as heart
              rate, recovery and more; however, There is no device that tracks
              focus and relaxation during training sessions by leveraging EEG
              data. Possible integration with these tools may be possible to
              give a holistic view on all performance metric, but for a minimal
              viable product, the goal is to measure and track focus levels
              while performing.
            </p>
          </SlideReveal>
          <SlideReveal>
            <h2 className="marginy-t">Golf Analytics Devices</h2>
          </SlideReveal>
          <SlideReveal>
            <p>
              The primary tracking tool used by golf professionals to monitor
              their performance is TrackMan, an industry-leading device. Despite
              the availability of automated tools to track golf performance,
              both pros and junior players often prefer to manually input their
              practice performance into an application. This preference
              highlights an interesting trend: higher-level players favour
              manual data entry over automated solutions.
            </p>
          </SlideReveal>
          <SlideReveal>
            <p>
              <strong>Golf Analytics Devices Conclusion:</strong> In the future,
              integrating TrackMan to measure the correlation between focus and
              golf performance could be highly beneficial. However, most elite
              athletes are currently comfortable with manually inputting their
              data.
            </p>
          </SlideReveal>
          <SlideReveal>
            <h2 className="marginy-t">Athletes Measuring Their Mental Game</h2>
          </SlideReveal>
          <SlideReveal>
            <p>
              Currently, athletes are journaling and measuring their mental
              performance based on how their feel. There is is no metric based
              apps to help them with this. Athletes identified that they would
              like to be able to measure their focus and relaxation levels
              throughout their golf training.
            </p>
          </SlideReveal>
          <SlideReveal>
            <p>
              This is a great opportunity for Pursuit as athletes are yearning
              to find tools and data to improve their focus and mental
              performance on the golf course.
            </p>
          </SlideReveal>
          <SlideReveal>
            <h1 className="marginy-t">
              Initial Ideation and mid-fidelity wireframes
            </h1>
          </SlideReveal>
          <SlideReveal>
            <p>
              The following sections will highlight the final screens and the
              business and user needs they are designed to meet. However, this
              section focuses on the ideation phase. Before designing the
              screens, the following steps are always completed:
            </p>
          </SlideReveal>
          <SlideReveal>
            <ul className="decimal-listing">
              <li>User Flows: Finalize how screens will flow</li>
              <li>
                Low/Mid-Fidelity Wireframes: Identify and approve initial
                designs
              </li>
            </ul>
          </SlideReveal>
          <SlideReveal>
            <h2 className="marginy-t">User Flows</h2>
          </SlideReveal>
          <SlideReveal>
            <ImageCarousel images={userFlows} />
          </SlideReveal>
          <SlideReveal>
            <h2 className="marginy-t">Mid-Fidelity Wireframes</h2>
          </SlideReveal>
          <SlideReveal>
            <img className="margin" src="/assets/pursuit/mid-fi.png" alt="" />
          </SlideReveal>
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
            <SideBySideVideo
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
          <SideBySideVideo
            sideBySideLst={needs}
            key={idx}
            classname="business-needs"
          />
        ))}

        <Container>
          <SlideReveal>
            <h1>Prototype and Testing</h1>
          </SlideReveal>
          <SlideReveal>
            <h2>Testing Methodology and Goals</h2>
          </SlideReveal>
          <SlideReveal>
            <p>
              Due to time constraints, we tested the designs with five coaches
              and players to gather overall feedback. It is important to note
              that only the designs were tested, not the development work
              required to integrate the devices with the application. This
              integration still needs to be completed before full functionality
              can be tested.
            </p>
          </SlideReveal>
          <SlideReveal>
            <p>Our user testing goals included:</p>
          </SlideReveal>
          <SlideReveal>
            <ul>
              <li>Providing an easy and fluid onboarding experience</li>
              <li>
                Simplifying the process of starting a golf course training match
              </li>
              <li>
                Allowing users to filter through different tracking requirements
                (e.g., round, shot, or entire practice match) once the training
                match has started
              </li>
              <li>
                Ensuring metrics are easy to understand and can be quickly
                digested
              </li>
              <li>
                Enabling users to complete the practice match and access player
                results seamlessly
              </li>
            </ul>
          </SlideReveal>
          <SlideReveal>
            <h2 className="marginy-t">Testing Results</h2>
          </SlideReveal>
          <SlideReveal>
            <ul>
              <li>
                Users successfully completed the onboarding experience without
                any issues. They were able to identify whether they were signing
                up as a user or a coach.
              </li>
              <li>
                Users were able to start a practice match easily and confirmed
                that the steps taken were correct and easy to understand.
              </li>
              <li>
                The quick filters in the practice match adhered to industry
                standards, and users quickly became familiar with them.
              </li>
              <li>
                Users appreciated the overall score card of how they are
                performing combining all metrics in a metric section and found
                the quick, easy-to-see snapshot of the metric results helpful.
                However, they noted that they need to see this implemented with
                the device to assess the accuracy and relevance of these metrics
                in the field.
              </li>
              <li>
                Users were able to find the player after the practice match and
                filter through the different matches.
              </li>
            </ul>
          </SlideReveal>
          <SlideReveal>
            <p>
              Further testing is required once the implementation is complete to
              evaluate functionality and data accuracy.
            </p>
          </SlideReveal>
          <SlideReveal>
            <h1 className="marginy-t">Brand Colours</h1>
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
