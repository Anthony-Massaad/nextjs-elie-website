import SlideReveal from "@/animations/SlideReveal";
import { FC } from "react";

interface Props {
  classname?: string;
  videoSrc: string;
  text?: string;
  media: "desktop" | "mobile";
}

const VideoExample: FC<Props> = ({ classname = "", videoSrc, text, media }) => {
  return (
    <div className={`content-example ${classname}`}>
      <SlideReveal>
        <div className={media}>
          <video autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {text && <p>*{text}</p>}
        </div>
      </SlideReveal>
    </div>
  );
};

export default VideoExample;
