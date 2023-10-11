"use client";
import RouterTransition from "@/animations/RouterTransition";
import SlideReveal from "@/animations/SlideReveal";
import Container from "@/components/Container";
import PageContainer from "@/components/PageContainer";
import BeforeAfter from "@/components/caseStudyCommons/BeforeAfter";
import Introduction from "@/components/caseStudyCommons/Introduction";
import RowCell from "@/components/caseStudyCommons/RowCell";
import SideBySideImg from "@/components/caseStudyCommons/SideBySideImg";
import {
  beforeAfter,
  featuresExample,
  informations,
  learned,
  musicMobileAppEx,
  userNeeds,
} from "@/data/youtubeMusic";
import { FC } from "react";

const YoutubeMusic: FC = () => {
  return (
    <PageContainer pageTitle="youtube-music">
      <RouterTransition>
        <Introduction
          title={`Designing a collaborative feature for Youtube Music`}
          description={`Youtube Music was released to replace Google Play Music in November 12, 2015. 
          Even though it was released as Google Play Music successor, it lacks so many features 
          that users loved with Google Play and other Music Streaming apps. 
          This project adds a new feature to improve Youtube Music as well as make screen redesigns.`}
          informations={informations}
        />
        <SideBySideImg
          sideBySideLst={musicMobileAppEx}
          classname="music-mobile-app-ex"
        />

        <div className="layer user-needs">
          <Container>
            <SlideReveal>
              <h1>Discovering User Needs</h1>
            </SlideReveal>
            <SlideReveal>
              <p className="intro">
                I interviewed 10 Youtube Music Users around the world to
                understand their needs and their current challenges with youtube
                music. To do this, I posted on reddit for users that are
                interested in this project and conducted interviews via Zoom.
              </p>
            </SlideReveal>
            <RowCell rowCells={userNeeds} />
          </Container>
        </div>
        <div className="layer features-container">
          <Container>
            <SlideReveal>
              <h1>Screen Redesigns and adding collaborative feature</h1>
            </SlideReveal>
            <BeforeAfter beforeAfterLst={beforeAfter} />

            <SlideReveal>
              <h1>Prototype and Testing</h1>
            </SlideReveal>
            <SlideReveal>
              <p>
                The same 10 reddit users that were interviewed at the start of
                the project, were also used for testing. Three work flows were
                tested:
              </p>
            </SlideReveal>
            <SlideReveal>
              <ul className="testing">
                <li>Adding a new friend</li>
                <li>Finding your current friends</li>
                <li>Making a new playlist and adding collaborators</li>
              </ul>
            </SlideReveal>
            <SlideReveal>
              <p>
                It was important that the users complete the flows quickly, with
                no errors, and that they liked the redesigns and new feature.
              </p>
            </SlideReveal>
          </Container>
          <SideBySideImg
            sideBySideLst={featuresExample}
            classname="feature-example"
          />
          <div className="results-container">
            <Container>
              <SlideReveal>
                <h3>Testing Results:</h3>
              </SlideReveal>
              <SlideReveal>
                <ul className="results">
                  <li>
                    Users communicated that they like the collaborative feature
                    as many other music streaming apps have had it, especially
                    Spotify.
                  </li>
                  <li>
                    Users provided positive feedback to the library redesign.
                    They appreciate the folder structure and also you can
                    customise and pin music.
                  </li>
                  <li>
                    Users completed creating the collaborative playlist without
                    error and easily. Users also provided positive feedback on
                    adding users directly instead of needing to send a link.
                  </li>
                  <li>
                    Users want to keep the search icon in the navigation bar
                    instead of the top right corner of the screen as it makes it
                    easier to use the app with one hand.
                  </li>
                </ul>
              </SlideReveal>
            </Container>
          </div>
        </div>
        <div className="layer learned">
          <Container>
            <SlideReveal>
              <h1>What I have Learned</h1>
            </SlideReveal>
            <RowCell rowCells={learned} />
          </Container>
        </div>
      </RouterTransition>
    </PageContainer>
  );
};

export default YoutubeMusic;
