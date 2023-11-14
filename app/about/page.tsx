"use client";

import Container from "@/components/Container";
import LinkPage from "@/components/LinkPage";
import PageContainer from "@/components/PageContainer";
import Image from "next/image";
import { FC } from "react";

const About: FC = () => {
  return (
    <PageContainer pageTitle="about">
      <Container>
        <div className="about-container">
          <div className="content">
            <Image
              src="/assets/images/aboutPfp.png"
              width="305"
              height="407"
              alt="image"
            />
            <div className="about">
              <h2>
                Hi There{" "}
                <Image
                  src="/assets/images/handPeace.png"
                  width="50"
                  height="50"
                  alt="hand peace"
                />
              </h2>
              <p>
                My name is Elie. I am a UX / Product designer in Toronto,
                Canada. I love solving complex problems into simple, intuitive,
                and beautiful designs.
              </p>
              <p>
                Before becoming a UX designer, I had 8 years as a IT Business
                Analyst where I learned that many of the problems encountered
                when using technology usually stemmed from a lack of intuitive
                design as opposed to the user’s competency. This realisation
                embarked my journey in learning UX design from designLab where I
                learned the entire design process. With my experience in
                business and UX Design, I develop solutions that meet both the
                needs of the business and users. With my Business Analyst
                background, I'm well versed in data analyst, designing and
                developing dashboard, and using data to support business
                decisions. This is also essential in UX design as it’s important
                to support designs with data.
              </p>
              <p>
                I am a curious and experimental person who loves to design
                something different but still follows and adheres to design
                principles and data-driving decisions. However, more and more
                interfaces are looking the same, so as my mentor Al Lucca has
                taught me, it’s important to sometimes break patterns to
                creatively design a product that is unique, but still works.
              </p>
              <LinkPage link="/contact">Let's Connect!</LinkPage>
            </div>
          </div>
        </div>
      </Container>
    </PageContainer>
  );
};

export default About;
