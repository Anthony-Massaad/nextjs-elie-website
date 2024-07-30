import SlideReveal from "@/animations/SlideReveal";
import { FC } from "react";
import Image from "next/image";
interface Props {
  headerTitle?: string;
  src: string;
}

const DesignConcept: FC<Props> = ({ headerTitle, src }) => {
  return (
    <div className="design-concept">
      <SlideReveal>
        {headerTitle && <h2>{headerTitle}</h2>}
        <div className="img-container">
          <Image
            src={src}
            alt=""
            width={500}
            height={500}
            quality={100}
            layout="responsive"
            objectFit="contain"
            loading="lazy"
          />
        </div>
      </SlideReveal>
    </div>
  );
};

export default DesignConcept;
