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
import PostItNotes from "@/components/caseStudyCommons/PostItNotes";
import Link from "next/link";
import DesignConcept from "@/components/caseStudyCommons/DesignConcept";
import CircularProgressBar from "@/components/caseStudyCommons/CircularProgressBar";

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
          description={`Glamour Nails and Salon, a small local nail salon business in Ottawa, 
            Ontario, does not have a digital website. Their operation is mostly manual, 
            taking appointments by phone and recording customer appointments using a paper book calendar. 
            I reached out to them to design and develop a website that will meet their business and user needs.`}
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
              <h1 className="margin-top-sub">Defining the Business Problems</h1>
            </SlideReveal>
            <SlideReveal>
              <p className="intro">
                I personally never went to a nail salon before, so I needed to
                learn more about their business, how they operate, and what are
                the problems that need to be solved. I interviewed the owners
                and 2 of their staff.
              </p>
            </SlideReveal>
            <PostItNotes
              src="/assets/glamourNails/businessNeedsNotes.png"
              link="https://www.figma.com/board/2uhShKN3aPNBeGx7RvmmWX/Affinity-diagram-for-Glamour-Nails?node-id=0-1&t=cziCDVdUIH0iW4Ib-0"
              linkText="*Click here to the complete affinity from all of my interviews"
            />
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
              <h1 className="margin-top-sub">Discovering User Needs</h1>
            </SlideReveal>
            <SlideReveal>
              <p className="intro">
                I interviewed 8 users that go to a nail salon to gather insights
                on their needs and what they look for in a nail salon booking
                experience.
              </p>
            </SlideReveal>
            <PostItNotes
              src="/assets/glamourNails/userNeedsNotes.png"
              link="https://www.figma.com/board/2uhShKN3aPNBeGx7RvmmWX/Affinity-diagram-for-Glamour-Nails?node-id=0-1&t=cziCDVdUIH0iW4Ib-0"
              linkText="*Click here to the complete affinity from all of my interviews"
            />
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
              <h1 className="margin-top-sub margin-b-0">
                Enhancing the experience, not removing
              </h1>
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
                    Zoho bookings completed a{" "}
                    <Link
                      className="blue-link"
                      target="_blank"
                      href="https://www.zoho.com/bookings/alternatives-comparisons/the-best-appointment-scheduling-apps.html"
                    >
                      comprehensive analysis
                    </Link>{" "}
                    on the major 8 booking systems in the market. There are many
                    great options; however, I recommended square to the owner
                    for the following reasons:
                  </p>
                </SlideReveal>
                <SlideReveal>
                  <ul className="margin-b-0">
                    <li>
                      We can customise the services, prices, and employees
                      selection
                    </li>
                    <li>
                      The business already uses square services for their
                      payments
                    </li>
                    <li>
                      Automatic reminders and rebooking options are included
                    </li>
                    <li>
                      I consulted multiple nail salon and beauty service owners
                      that use it and love it
                    </li>
                  </ul>
                </SlideReveal>
              </div>
            </div>
            <div className="enhancment">
              <SlideReveal>
                <h2>The website builder</h2>
              </SlideReveal>
              <SlideReveal>
                <p className="intro">
                  Website builders vary in technical and design constraints, as
                  such choosing the website builder before designing was
                  important. WebFX collects and reports on{" "}
                  <Link
                    className="blue-link"
                    href="https://www.webfx.com/web-design/statistics/#"
                    target="_blank"
                  >
                    website statistics
                  </Link>
                  , and I extracted have extracted (4) statistics that are
                  important:
                </p>
              </SlideReveal>
              <SlideReveal>
                <CircularProgressBar stats={websiteBuilderStats} />
              </SlideReveal>
              <div className="more-info">
                <SlideReveal>
                  <p>This means we want a website builder:</p>
                </SlideReveal>
                <SlideReveal>
                  <ul className="margin-b-0">
                    <li>
                      Has the most design flexibility as we wanted to design a
                      unique website
                    </li>
                    <li>Integrates with Square booking system</li>
                    <li>
                      Has fast loading times, is responsive, and mobile friendly
                    </li>
                  </ul>
                </SlideReveal>
              </div>
              <SlideReveal>
                <h2>The website Competitive Analysis</h2>
              </SlideReveal>
              <SlideReveal>
                <img
                  src="/assets/glamourNails/websiteBuilderAnalysisTable.png"
                  alt=""
                  className="website-builder-analysis intro margin-b-between"
                />
              </SlideReveal>
              <div className="padding-b-sub">
                <SlideReveal>
                  <p>
                    I recommended weblflow because it has everything to
                    business, design and user requirements:
                  </p>
                </SlideReveal>
                <SlideReveal>
                  <ul>
                    <li>We get complete control of in design customisation</li>
                    <li>
                      Faster loading speeds than all the other website builder
                      as it has the cleanest background code
                    </li>
                    <li>
                      <Link
                        href="https://www.tooltester.com/en/reviews/webflow-review/"
                        target="_blank"
                        className="blue-link"
                      >
                        Guaranteed uptime of 99.9%
                      </Link>{" "}
                      (higher than any other website builder)
                    </li>
                    <li>Mobile friendly</li>
                    <li>
                      SEO is already good out of the box (they also have ways to
                      make it even better)
                    </li>
                    <li>Create thoughtful animations and interactions</li>
                    <li>Square space booking integration</li>
                  </ul>
                </SlideReveal>
              </div>
            </div>
          </Container>
        </div>
        <div className="layer-5">
          <Container>
            <SlideReveal>
              <h1 className="margin-top-sub">Designing the initial Concept</h1>
            </SlideReveal>
            <SlideReveal>
              <p className="margin-b-0">
                Websites now follow similar design patterns. Even though it’s
                important to design a unique website, it is also important to
                follow critical design patterns to make users’ lives easier.
                Hubspot has out lines these critical elements to design a
                website with purpose. I used most of these critical elements as
                well adding a few additions. that I followed and used throughout
                that website:
              </p>
            </SlideReveal>
            <DesignConcept
              headerTitle="Initial Wireframe"
              src="/assets/glamourNails/initialWireframe.png"
            />

            <div className="more-info design-rational">
              <SlideReveal>
                <p>Design Rational:</p>
              </SlideReveal>
              <SlideReveal>
                <ul>
                  <li>
                    <strong>Headline</strong> - tell visitors what the business
                    has to offer within 3 seconds of opening the website
                  </li>
                  <li>
                    <strong>Sub-headline</strong> - supplement the headline by
                    offering a brief description of what you do or what you
                    offer
                  </li>
                  <li>
                    primary call to action - the primary action you want
                    visitors to take. In tis case, we want our visitors to book
                    an appointment.
                  </li>
                  <li>
                    <strong>Supporting image</strong> - most people are visual.
                    This image completes the hero section. The image should
                    capture emotion, drive action, and visually tell the story
                    you’re writing about.
                  </li>
                  <li>
                    <strong>Navigation</strong> - the navigation at the top of
                    the page is a consistent design principle and most websites.
                    This has to be clear for users to navigate the website
                  </li>
                  <li>
                    <strong>Services</strong> - Provide information on the
                    services we are offering. In this case, we will provide our
                    list of services, their description, and their price. I have
                    also put it right under the hero section because it is the
                    second most important information for users.
                  </li>
                  <li>
                    <strong>Social Proof</strong> - social proof is a powerful
                    indication of trust. For this business, I am using reviews
                    from previous clients and linking the business instagram to
                    show their work, giving new users a look on how this
                    business performs.
                  </li>
                </ul>
              </SlideReveal>
            </div>

            <div className="more-info">
              <SlideReveal>
                <p>Additional additions:</p>
              </SlideReveal>
              <SlideReveal>
                <ul className="margin-b-0">
                  <li>
                    About us section: I wanted to give visitors a glimpse about
                    the store and the owners. Like many Canadians, the owners
                    are immigrants who came to start a better life and they are
                    now providing services to the community in ottawa.
                  </li>
                  <li>
                    The team - I added a section on the team so that the users
                    can see who are providing the services and their specialty.
                    It’s important ofr users to choose what employee can do
                    their nails.
                  </li>
                </ul>
              </SlideReveal>
            </div>

            <SlideReveal>
              <h2>Initial Feedback</h2>
            </SlideReveal>
            <SlideReveal>
              <p className="intro">
                I sought out initial feedback as it’s important to make design
                changes now rather than later. It is more time consuming and
                expensive to make design changes on a high fidelity concept.
              </p>
            </SlideReveal>
            <SlideReveal>
              <p>
                Initial feedback loved the one overall page design as it’s
                simple and easy to navigate. They also mentioned how all but one
                of the sections are there - the location section is missing.
              </p>
            </SlideReveal>
            <SlideReveal>
              <p className="intro">They also had feedback on the following:</p>
            </SlideReveal>
            <DesignConcept src="/assets/glamourNails/feedback1.png" />
            <SlideReveal>
              <ul className="bad-listing intro margin-b-0">
                <li>
                  Users were confused about the pellets design. They didn’t know
                  if it had a function to filter the page or why it was there.
                </li>
                <li>
                  Users thought the services section is basic, uninteresting and
                  always used.
                </li>
              </ul>
            </SlideReveal>
            <DesignConcept
              src="/assets/glamourNails/updatedWireframe.png"
              headerTitle="Updated Wireframe"
            />
            <div className="more-info">
              <SlideReveal>
                <p>
                  I have updated wireframes to reflect the initial feedback:
                </p>
              </SlideReveal>
              <div className="padding-b-sub">
                <SlideReveal>
                  <ul>
                    <li>
                      Removed the pellets from the design as it served no
                      purpose
                    </li>
                    <li>
                      Updated the services section with service cards, visuals,
                      the description, cost, time it would take, and a book now
                      call to action. This speaks to the users needs of
                      providing a better understanding about the service. The
                      section also has quick filters to filter through the
                      different services. This is consistent with other design
                      principles that google uses.
                    </li>
                    <li>
                      Added the location, hours of operation, and phone number.
                    </li>
                  </ul>
                </SlideReveal>
              </div>
            </div>
          </Container>
        </div>
        <div className="layer-6">
          <Container>
            <SlideReveal>
              <h1 className="margin-top-sub margin-b-0">
                Creating a Brand and putting it all together
              </h1>
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
              <h1 className="margin-b-0">Prototype and Testing</h1>
            </SlideReveal>
            <div className="more-info">
              <SlideReveal>
                <h2>Methodology</h2>
              </SlideReveal>
              <SlideReveal>
                <ul>
                  <li>
                    I tested the mobile booking system experience with the same
                    8 users I have interviewed at the start of this project.
                  </li>
                  <li>
                    3 scenarios were asked on using the overall website at
                    negating from start to finish of the booking experience
                  </li>
                </ul>
              </SlideReveal>
            </div>
            <ContentExample
              imgSrc="/assets/glamourNails/mobile-image.png"
              text={`Testing the mobile booking system using Square’s booking
            flow. I designed it so it matches exactly how it would be
            using square’s booking extension.`}
              media="mobile"
            />
            <div className="more-info">
              <SlideReveal>
                <h2>Testing Results:</h2>
              </SlideReveal>
              <SlideReveal>
                <ul className="margin-b-0">
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
                    Many users thought that this design gives them the
                    impression that the nail salon really cares about their
                    business and they would give them a shot just from the
                    website alone.
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
