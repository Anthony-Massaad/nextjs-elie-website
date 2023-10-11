"use client";
import RouterTransition from "@/animations/RouterTransition";
import SlideReveal from "@/animations/SlideReveal";
import Container from "@/components/Container";
import PageContainer from "@/components/PageContainer";
import Introduction from "@/components/caseStudyCommons/Introduction";
import RowCell from "@/components/caseStudyCommons/RowCell";
import { informations, userNeeds } from "@/data/youtubeMusic";
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
        <div className="music-mobile-app-ex">
          <Container>
            <div className="ex-container">
              <div className="img-container">
                <SlideReveal>
                  <img src="/assets/youtubeMusic/musicApp.png" alt="" />
                </SlideReveal>
              </div>
              <div className="img-container">
                <SlideReveal delay={0.3}>
                  <img src="/assets/youtubeMusic/musicApp.png" alt="" />
                </SlideReveal>
              </div>
              <div className="img-container">
                <SlideReveal delay={0.35}>
                  <img src="/assets/youtubeMusic/musicApp.png" alt="" />
                </SlideReveal>
              </div>
            </div>
          </Container>
        </div>

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
      </RouterTransition>
    </PageContainer>
  );
};

export default YoutubeMusic;
