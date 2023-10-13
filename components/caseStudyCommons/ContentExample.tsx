import SlideReveal from "@/animations/SlideReveal";
import { FC } from "react";

interface Props {
  classname?: string;
  imgSrc: string;
  text?: string;
  media: "desktop" | "mobile";
}

const ContentExample: FC<Props> = ({ classname = "", imgSrc, text, media }) => {
  return (
    <div className={`content-example ${classname}`}>
      <SlideReveal>
        <div className={media}>
          <img src={imgSrc} alt="" />
          {text && <p>*{text}</p>}
        </div>
      </SlideReveal>
    </div>
  );
};

export default ContentExample;
