import { SideBySideImgVidInterface } from "@/globals/interfaces";
import { FC, useMemo } from "react";
import Container from "../Container";
import SlideReveal from "@/animations/SlideReveal";
import LazyLoadVideo from "./LazyLoadVideo";

interface Props {
  sideBySideLst: SideBySideImgVidInterface[];
  classname?: string;
}

const SideBySideVideo: FC<Props> = ({ sideBySideLst, classname = "" }) => {
  return (
    <div className={`side-by-side-container ${classname}`}>
      <Container>
        <div className="ex-container">
          {sideBySideLst.map((item, idx) => (
            <div
              className="img-container"
              key={idx}
              style={{ top: `${3 * idx}rem` }}
            >
              <SlideReveal>
                {item.text && <p>{item.text}</p>}
                <LazyLoadVideo src={item.src} />
              </SlideReveal>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default SideBySideVideo;
