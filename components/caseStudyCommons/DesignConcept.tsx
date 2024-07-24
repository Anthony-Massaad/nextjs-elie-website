import SlideReveal from "@/animations/SlideReveal";
import { FC } from "react";

interface Props {
  headerTitle?: string;
  src: string;
}

const DesignConcept: FC<Props> = ({ headerTitle, src }) => {
  return (
    <div className="design-concept">
      <SlideReveal>
        {headerTitle && <h3>{headerTitle}</h3>}
        <div className="img-container">
          <img src={src} alt="" />
        </div>
      </SlideReveal>
    </div>
  );
};

export default DesignConcept;