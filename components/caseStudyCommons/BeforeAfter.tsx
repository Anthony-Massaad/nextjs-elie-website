import SlideReveal from "@/animations/SlideReveal";
import { BeforeAfterInterface } from "@/globals/interfaces";
import { map } from "lodash";
import { FC } from "react";

interface Props {
  beforeAfterLst: BeforeAfterInterface[];
}

const BeforeAfter: FC<Props> = ({ beforeAfterLst }) => {
  return (
    <div className="before-after-container">
      {map(beforeAfterLst, (element, idx) => (
        <SlideReveal>
          <div className="before-after" key={idx}>
            <div className="sect">
              <p>
                <strong>Problem: </strong>
                {element.problem.text}
              </p>
              <div>
                <img src={element.problem.imgSrc} />
              </div>
            </div>
            <div className="sect arrow">
              <svg
                width="100"
                height="101"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M62.4999 17.1667V38.0001H12.4999C10.1999 38.0001 8.33325 39.8667 8.33325 42.1667V58.8334C8.33325 61.1334 10.1999 63.0001 12.4999 63.0001H62.4999V83.8334L95.8333 50.5001L62.4999 17.1667Z"
                  fill="#DC0038"
                />
              </svg>
            </div>
            <div className="sect">
              <p>
                <strong>Solution: </strong>
                {element.solution.text}
              </p>
              <div>
                <img src={element.solution.imgSrc} />
              </div>
            </div>
          </div>
        </SlideReveal>
      ))}
    </div>
  );
};

export default BeforeAfter;
