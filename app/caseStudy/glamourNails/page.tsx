"use client";

import RouterTransition from "@/animations/RouterTransition";
import SlideReveal from "@/animations/SlideReveal";
import Container from "@/components/Container";
import PageContainer from "@/components/PageContainer";
import RowCell from "@/components/caseStudyCommons/RowCell";
import Stats from "@/components/glamourNails/Stats";
import {
  brandDetailsLayer,
  enhanceBookingSystemStats,
  glamourNailsLearned,
  informations,
  problems,
  userNeeds,
  websiteBuilderStats,
} from "@/data/glamourNails";
import { FC, useEffect } from "react";
import Introduction from "@/components/caseStudyCommons/Introduction";
import LinkPage from "@/components/LinkPage";
import ContentExample from "@/components/caseStudyCommons/ContentExample";
import BrandDetails from "@/components/caseStudyCommons/BrandDetails";
import headingStyling from "@/hooks/headerStyling";
import VideoExample from "@/components/caseStudyCommons/VideoExample";

const GlamourNails: FC = () => {
  const { headerStyle, topLeftStyle } = headingStyling();

  useEffect(() => {
    headerStyle(
      "var(--body-text-color)",
      "var(--color-theme)",
      `rgba(252, 207, 229, 1)`
    );
    topLeftStyle("var(--body-text-color)");
  }, []);

  return (
    <>
      <PageContainer pageTitle="glamour-nails">
        <Introduction
          title={`Designing a beautiful Website and booking experience`}
          description={`Glamour Nails and Salon, a small local nail salon business
                      in Ottawa, Ontario, does not have a digital website. Their
                      operation is mostly manual, taking appointments by phone
                      and recording customer appointments using a paper book
                      calendar. I reached out to them to design and develop a
                      website that will meet their business and user needs.`}
          informations={informations}
        />
        <VideoExample
          videoSrc="/assets/glamourNails/glamour-nails-full-desktop-designs-(1).mp4"
          text="Final mobile Design"
          media="desktop"
        />
        <div className="layer-2">
          <Container>
            <SlideReveal>
              <h1>Defining the Business Problems</h1>
            </SlideReveal>
            <SlideReveal>
              <p className="intro">
                I personally never went to a nail salon before, so I needed to
                learn more about their business, how they operate, and what are
                the problems that need to be solved. I interviewed the owners
                and 2 of their staff.
              </p>
            </SlideReveal>
            <RowCell rowCells={problems} />
          </Container>
        </div>
        <VideoExample
          videoSrc="/assets/glamourNails/glamour-nails-full-mobile-(2).mp4"
          text="Final mobile Design"
          media="mobile"
        />
        <div className="layer-3">
          <Container>
            <SlideReveal>
              <h1>Discovering User Needs</h1>
            </SlideReveal>
            <SlideReveal>
              <p className="intro">
                I interviewed 8 users that go to a nail salon to gather insights
                on their needs and what they look for in a nail salon booking
                experience.
              </p>
            </SlideReveal>
            <RowCell rowCells={userNeeds} />
          </Container>
        </div>
        <VideoExample
          media="desktop"
          videoSrc="/assets/glamourNails/glamour-nails-desktop-screen-recording-(3).mp4"
          text="Designing a clear easy and simple way to for customers to see
            the nail salons services"
        />
        <div className="layer-4">
          <Container>
            <SlideReveal>
              <h1>Enhancing the experience, not removing</h1>
            </SlideReveal>
            <div className="enhancment">
              <SlideReveal>
                <h2>The Booking System</h2>
              </SlideReveal>
              <SlideReveal>
                <p className="intro">
                  To gain insights into the preferred booking methods of
                  different age groups, I conducted a survey. I had assumed that
                  younger clients would be more inclined to book online, while
                  older clients would prefer calling.
                </p>
              </SlideReveal>
              <SlideReveal>
                <Stats stats={enhanceBookingSystemStats} />
              </SlideReveal>
              <div className="more-info">
                <SlideReveal>
                  <p>
                    To cater to the needs of all customers, including older ones
                    who prefer to call, we needed a booking system that is:
                  </p>
                </SlideReveal>
                <SlideReveal>
                  <ul>
                    <li>easy to use</li>
                    <li>customizable</li>
                    <li>sends automated reminders</li>
                    <li>allows customers to rebook or cancel online</li>
                    <li>
                      has email integration, and can add bookings from other
                      channels
                    </li>
                  </ul>
                </SlideReveal>
                <SlideReveal>
                  <p>
                    I analysed a few booking system and recommended Square Up as
                    it meets all these requirements, is familiar to users who
                    have used it with other self-care businesses and found it
                    convenient, and the business already uses square up’s
                    services to process payments.
                  </p>
                </SlideReveal>
              </div>
            </div>
            <div className="enhancment">
              <SlideReveal>
                <h2>The website builder</h2>
              </SlideReveal>
              <SlideReveal>
                <p className="intro">
                  Choosing the website builder before designing was important as
                  website builders differ in technical and design constraints.
                </p>
              </SlideReveal>
              <SlideReveal>
                <Stats stats={websiteBuilderStats} />
              </SlideReveal>
              <div className="more-info">
                <SlideReveal>
                  <p>We wanted a website builder that:</p>
                </SlideReveal>
                <SlideReveal>
                  <ul>
                    <li>Integrates with booking systems</li>
                    <li>Has fast loading times and is responsive </li>
                    <li>
                      Has the most design flexibility as we wanted to design
                      something unique
                    </li>
                  </ul>
                </SlideReveal>
              </div>
              <div className="more-info">
                <SlideReveal>
                  <p>
                    I analysed the four main website builders: Webflow,
                    Squarespace, Wix, and Wordpress. I recommended Webflow
                    because:
                  </p>
                </SlideReveal>
                <SlideReveal>
                  <ul>
                    <li>Complete control of in design customisation</li>
                    <li>
                      Faster loading speeds than all the other website builder
                      as it has the cleanest background code
                    </li>
                    <li>
                      <u>Guaranteed uptime of 99.9%</u> (higher than any other
                      website builder)
                    </li>
                    <li>
                      SEO is already good out of the box (they also have ways to
                      make it even better)
                    </li>
                    <li>Create thoughtful animations and interactions</li>
                  </ul>
                </SlideReveal>
              </div>
            </div>
          </Container>
        </div>
        <VideoExample
          videoSrc="/assets/glamourNails/glamour-nails-mobile-services-(4).mp4"
          text="Designing a clear easy and simple way to for customers to see
            the nail salons services on the mobile website"
          media="mobile"
        />
        <div className="layer-5">
          <Container>
            <SlideReveal>
              <h1>Designing the initial Concept</h1>
            </SlideReveal>

            <div className="side-by-side-images">
              <SlideReveal>
                <img src="/assets/glamourNails/design1.png" alt="" />
              </SlideReveal>
              <SlideReveal>
                <img src="/assets/glamourNails/design2.png" alt="" />
              </SlideReveal>
            </div>
            <SlideReveal>
              <p>
                Initial user testing loved the one page design to show all of
                Glamour Nails information; however, users were confused about
                service category headers before the our service’s services and
                they communicated the the services section, although clear, was
                not engaging. Updates were made based on initial feedback.
              </p>
            </SlideReveal>
          </Container>
        </div>
        <div className="layer-6">
          <Container>
            <SlideReveal>
              <h1>Creating a Brand and putting it all together</h1>
            </SlideReveal>
            <BrandDetails brandDetails={brandDetailsLayer} />
            <SlideReveal>
              <div className="side-by-side-images">
                <img src="/assets/glamourNails/fullDesktop.png" alt="" />
                <img src="/assets/glamourNails/fullMobile.png" alt="" />
              </div>
            </SlideReveal>
          </Container>
        </div>
        <div className="layer-7">
          <Container>
            <SlideReveal>
              <h1>Prototype and Testing</h1>
            </SlideReveal>
            <ContentExample
              imgSrc="/assets/glamourNails/mobile-image.png"
              text={`Testing the mobile booking system using Square’s booking
            flow. I designed it so it matches exactly how it would be
            using square’s booking extension.`}
              media="mobile"
            />
            <div className="more-info">
              <SlideReveal>
                <h3>Testing Results:</h3>
              </SlideReveal>
              <SlideReveal>
                <ul>
                  <li>
                    All users have successfully went thought the services
                    sections in both the mobile and desktop versions. The loved
                    the services cards and how it made the services clear and
                    know what they are getting.
                  </li>
                  <li>
                    All users were able to go through Square’s booking process.
                    They communicated how easy it was and also appreciated that
                    they can pick a specific design.
                  </li>
                  <li>
                    Users loved the colours and communicated how it aligns with
                    a nail salon’s brand (I thought pink would throw off some
                    men, but it didn’t! They loved it)
                  </li>
                  <li>
                    All the information needed for a nail salon was there and
                    properly conveyed!
                  </li>
                </ul>
              </SlideReveal>
            </div>
            <SlideReveal>
              <h1>What I Learned and Next Steps</h1>
            </SlideReveal>
            <RowCell rowCells={glamourNailsLearned} />
            <LinkPage link={"/caseStudy/youtubeMusic"}>
              Check out the next Case Study
            </LinkPage>
          </Container>
        </div>
      </PageContainer>
    </>
  );
};

export default GlamourNails;
