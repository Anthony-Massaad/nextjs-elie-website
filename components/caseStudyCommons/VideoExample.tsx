import SlideReveal from "@/animations/SlideReveal";
import { FC, useMemo } from "react";
import LazyLoadVideo from "./LazyLoadVideo";

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
          <LazyLoadVideo src={videoSrc} />

          {text && <p>*{text}</p>}
        </div>
      </SlideReveal>
    </div>
  );
};

export default VideoExample;
