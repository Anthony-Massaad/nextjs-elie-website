"use client";
import SlideReveal from "@/animations/SlideReveal";
import Container from "@/components/Container";
import Layer from "@/components/Layer";
import PageContainer from "@/components/PageContainer";
import BeforeAfter from "@/components/caseStudyCommons/BeforeAfter";
import ImageCarousel from "@/components/caseStudyCommons/ImageCarousel";
import Introduction from "@/components/caseStudyCommons/Introduction";
import RowCell from "@/components/caseStudyCommons/RowCell";
import SideBySideVideo from "@/components/caseStudyCommons/SideBySideVideo";
import {
  beforeAfter,
  featuresExample,
  informations,
  journeyMapImages,
  learned,
  loFiImages,
  musicMobileAppEx,
  userNeeds,
} from "@/data/youtubeMusic";
import headingStyling from "@/hooks/headerStyling";
import { FC, useEffect } from "react";
import Image from "next/image";

const YoutubeMusic: FC = () => {
  const { headerStyle, topLeftStyle } = headingStyling();

  useEffect(() => {
    headerStyle("#fff", "var(--color-theme)", "#030303");
    topLeftStyle("#fff");
  }, []);

  return (
    <PageContainer pageTitle="youtube-music">
      <Layer>
        <Introduction
          title={`Designing a collaborative feature for Youtube Music`}
          description={`Youtube Music was released to replace Google Play Music in November 12, 2015. 
            Even though it was released as Google Play Music successor, it lacks so many features 
            that users loved with Google Play and other Music Streaming apps. 
            This project adds a new feature to improve Youtube Music as well as make screen redesigns.`}
          informations={informations}
        />
      </Layer>
      <Layer classnames="layer-2">
        <SideBySideVideo
          sideBySideLst={musicMobileAppEx}
          classname="music-mobile-app-ex"
        />
        <Container>
          <SlideReveal>
            <h2>
              Exploring YouTube Music's Position in the Music Streaming Service
              Market
            </h2>
          </SlideReveal>
          <SlideReveal>
            <Image
              src="/assets/youtubeMusic/youtubeMusicPosition.png"
              alt=""
              width={500}
              height={500}
              quality={100}
              layout="responsive"
              objectFit="contain"
              loading="lazy"
            />
          </SlideReveal>
          <SlideReveal>
            <p>
              As of Q3 2023, YouTube Music holds only 8.9% of the total market
              share. Historically, this figure has seen minimal growth over
              time. Considering that YouTube Music is bundled with YouTube
              Premium, this market share appears relatively low.
            </p>
          </SlideReveal>
          <SlideReveal>
            <p className="margin-0">
              To gain deeper insights, I conducted a feature analysis to compare
              the streaming service offerings of YouTube Music with its
              competitors.
            </p>
          </SlideReveal>

          <SlideReveal>
            <h2 className="marginy-t">
              Feature Analysis: YouTube Music vs. Competing Streaming Services
            </h2>
          </SlideReveal>
          <SlideReveal>
            <Image
              src="/assets/youtubeMusic/ytMusicFeatures.png"
              alt=""
              width={500}
              height={500}
              quality={100}
              layout="responsive"
              objectFit="contain"
              loading="lazy"
            />
          </SlideReveal>
          <SlideReveal>
            <p className="margin-0">
              <strong>Feature Analysis Conclusion:</strong> YouTube Music lacks
              several essential features that its competitors offer and that
              users demand. This limitation impairs its ability to attract and
              retain a larger user base.
            </p>
          </SlideReveal>
          <SlideReveal>
            <h2>Youtube Music’s SWOT Analysis</h2>
          </SlideReveal>
          <SlideReveal>
            <Image
              src="/assets/youtubeMusic/SWOT.png"
              alt=""
              width={500}
              height={500}
              quality={100}
              layout="responsive"
              objectFit="contain"
              loading="lazy"
            />
          </SlideReveal>
        </Container>
      </Layer>

      <Layer classnames="user-needs">
        <Container>
          <SlideReveal>
            <h1 className="margin-top-sub">Discovering User Needs</h1>
          </SlideReveal>
          <SlideReveal>
            <p className="intro">
              To gain deeper insights into user experiences, I posted on Reddit
              inviting current users to participate in interviews for this
              project. Surprisingly, I received a lot of interest! More that I
              expected. I conducted in-depth interviews with 10 YouTube Music
              users from around the world, each lasting between 30 minutes to an
              hour, conducted via Zoom.
            </p>
          </SlideReveal>
          <SlideReveal>
            <p>My Reddit post to get user interviewers for this Project</p>
            <div className="reddit-post-img-container">
              <Image
                src="/assets/youtubeMusic/redditPost.png"
                alt=""
                width={500}
                height={500}
                quality={100}
                layout="responsive"
                objectFit="contain"
                loading="lazy"
              />
            </div>
          </SlideReveal>
          <SlideReveal>
            <p>Synthesizing interview Results using an affinity diagram</p>
          </SlideReveal>
          <SlideReveal>
            <Image
              src="/assets/youtubeMusic/interviewResults.png"
              alt=""
              width={500}
              height={500}
              quality={100}
              layout="responsive"
              objectFit="contain"
              loading="lazy"
            />
          </SlideReveal>
          <SlideReveal>
            <p className="margin-b-0">User's needs:</p>
          </SlideReveal>
          <RowCell rowCells={userNeeds} />
          <SlideReveal>
            <p className="margin-b-sub">
              <strong>Discovering users needs conclusion:</strong> the
              interviews echo the findings of the feature analysis, illustrating
              how YouTube Music's deficiency in basic features is perceived as
              crucial by users.
            </p>
          </SlideReveal>
        </Container>
      </Layer>
      <div className="layer features-container">
        <Container>
          <SlideReveal>
            <h1 className="margin-top-sub">
              Exploring the user’s Journey and designing low-fidelity
            </h1>
          </SlideReveal>
          <div>
            <SlideReveal>
              <p className="margin">
                Having identified user pain points and deficiencies in YouTube
                Music's features, I proceeded to create a user journey map. This
                map explores different scenarios and pain points, pinpointing
                where issues arise and identifying potential opportunities for
                improvement.
              </p>
            </SlideReveal>
            <SlideReveal>
              <p className="margin-0">
                I scoped and prioritized features that could be addressed
                through design solutions, focusing particularly on those
                available on the mobile app. Many of these mobile app features
                hold significant potential for enhancing user value. It's worth
                noting that at the time of the project, YouTube was in the
                process of testing and rolling out live lyrics , which was not
                included in this project's design considerations.
              </p>
            </SlideReveal>
            <SlideReveal>
              <h2 className="marginy-t">User's Journey Map</h2>
            </SlideReveal>
            <ImageCarousel images={journeyMapImages} />
            <SlideReveal>
              <p className="margin-t-between margin-b-0">
                After identifying and prioritizing the features to implement, I
                used low-fidelity wireframes for design exploration. This
                approach allowed for quicker iteration, leveraging YouTube
                Music's existing design system and structure to maintain
                consistency without the need for redesign.
              </p>
            </SlideReveal>
            <SlideReveal>
              <h2 className="marginy-t">Low-Fidelity Sketches</h2>
            </SlideReveal>
            <ImageCarousel images={loFiImages} />
          </div>
          <SlideReveal>
            <h1 className="marginy-t">
              Final designs addressing user pain points
            </h1>
          </SlideReveal>
          <BeforeAfter beforeAfterLst={beforeAfter} />

          <SlideReveal>
            <h1>Prototype and Testing</h1>
          </SlideReveal>
          <SlideReveal>
            <p>
              The same 10 reddit users that were interviewed at the start of the
              project, were also used for testing. Three work flows were tested:
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
        <SideBySideVideo
          sideBySideLst={featuresExample}
          classname="feature-example"
        />
        <div className="results-container">
          <Container>
            <SlideReveal>
              <h2>Testing Results:</h2>
            </SlideReveal>
            <SlideReveal>
              <ul className="results margin-b-sub">
                <li>
                  Users communicated that they like the collaborative feature as
                  many other music streaming apps have had it, especially
                  Spotify.
                </li>
                <li>
                  Users provided positive feedback to the library redesign. They
                  appreciate the folder structure and also you can customise and
                  pin music.
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
            <h1 className="margin-top-sub">What I have Learned</h1>
          </SlideReveal>
          <RowCell rowCells={learned} />
        </Container>
      </div>
    </PageContainer>
  );
};

export default YoutubeMusic;
