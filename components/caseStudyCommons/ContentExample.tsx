import SlideReveal from "@/animations/SlideReveal";
import { FC } from "react";
import Image from "next/image";
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
          <Image
            src={imgSrc}
            alt=""
            width={500}
            height={500}
            quality={100}
            layout="responsive"
            objectFit="contain"
            loading="lazy"
          />
          {text && <p>*{text}</p>}
        </div>
      </SlideReveal>
    </div>
  );
};

export default ContentExample;
