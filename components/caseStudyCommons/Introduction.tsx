import { InformationInterface } from "@/globals/interfaces";
import { FC } from "react";
import Container from "../Container";
import SlideReveal from "@/animations/SlideReveal";
import { map } from "lodash";

interface Props {
  title: string;
  description: string;
  informations: InformationInterface[];
}

const Introduction: FC<Props> = ({ title, description, informations }) => {
  return (
    <div className="introduction-layer">
      <Container>
        <div className="introduction">
          <SlideReveal>
            <h1>{title}</h1>
          </SlideReveal>

          <div className="intro-description">
            <SlideReveal>
              <p className="description">{description}</p>
            </SlideReveal>
            <div className="additional-info">
              {map(informations, (information, idx) => (
                <SlideReveal key={idx}>
                  <>
                    <h3>{information.title}</h3>
                    {map(information.infos, (info, index) => (
                      <p key={index}>{info}</p>
                    ))}
                  </>
                </SlideReveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Introduction;
