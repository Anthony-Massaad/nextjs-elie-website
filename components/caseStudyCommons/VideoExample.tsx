import SlideReveal from "@/animations/SlideReveal";
import { FC, useMemo } from "react";

interface Props {
  classname?: string;
  videoSrc: string;
  text?: string;
  media: "desktop" | "mobile";
}

const VideoExample: FC<Props> = ({ classname = "", videoSrc, text, media }) => {
  const memoizedSource = useMemo(
    () => <source src={videoSrc} type="video/mp4" />,
    [videoSrc]
  );

  return (
    <div className={`content-example ${classname}`}>
      <SlideReveal>
        <div className={media}>
          <video autoPlay loop muted>
            {memoizedSource}
            Your browser does not support the video tag.
          </video>
          {text && <p>*{text}</p>}
        </div>
      </SlideReveal>
    </div>
  );
};

export default VideoExample;
