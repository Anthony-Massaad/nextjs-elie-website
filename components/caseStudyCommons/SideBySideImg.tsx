import { SideBySideImgVidInterface } from "@/globals/interfaces";
import { FC } from "react";
import Container from "../Container";
import SlideReveal from "@/animations/SlideReveal";
import { map } from "lodash";

interface Props {
  sideBySideLst: SideBySideImgVidInterface[];
  classname?: string;
}

const SideBySideImg: FC<Props> = ({ sideBySideLst, classname = "" }) => {
  return (
    <div className={`side-by-side-container ${classname}`}>
      <Container>
        <div className="ex-container">
          {map(sideBySideLst, (item, idx) => (
            <div
              className="img-container"
              key={idx}
              style={{ top: `${3 * idx}rem` }}
            >
              <SlideReveal>
                {item.text && <p>{item.text}</p>}
                <img src={item.src} alt="" />
              </SlideReveal>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default SideBySideImg;
