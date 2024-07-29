import { SideBySideImgVidInterface } from "@/globals/interfaces";
import { FC, useMemo } from "react";
import Container from "../Container";
import SlideReveal from "@/animations/SlideReveal";

interface Props {
  sideBySideLst: SideBySideImgVidInterface[];
  classname?: string;
}

interface VideoProps {
  src: string;
  text?: string;
}

const MemoizedVideo: FC<VideoProps> = ({ src, text }) => {
  const memoizedSource = useMemo(
    () => <source src={src} type="video/mp4" />,
    [src]
  );

  return (
    <SlideReveal>
      {text && <p>{text}</p>}
      <video autoPlay loop muted playsInline controls={false}>
        {memoizedSource}
        Your browser does not support the video tag.
      </video>
    </SlideReveal>
  );
};

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
              <MemoizedVideo src={item.src} text={item.text} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default SideBySideVideo;
