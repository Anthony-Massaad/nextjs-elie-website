import SlideReveal from "@/animations/SlideReveal";
import { BrandDetailsInterface } from "@/globals/interfaces";
import { map } from "lodash";
import { FC } from "react";

interface Props {
  classname?: string;
  brandDetails: BrandDetailsInterface[];
}

const BrandDetails: FC<Props> = ({ classname, brandDetails }) => {
  return (
    <div className={`details-container ${classname ? classname : ""}`}>
      {map(brandDetails, (detail, idx) => (
        <>
          {detail.typography && (
            <div className="detail" key={idx}>
              <SlideReveal>
                <h3>{detail.typography.title}</h3>
              </SlideReveal>
              {map(detail.typography.body, (body, index) => (
                <SlideReveal>
                  <p key={index}>{body}</p>
                </SlideReveal>
              ))}
            </div>
          )}

          {detail.colors && (
            <div className="detail" key={idx}>
              <SlideReveal>
                <h3>Colors</h3>
              </SlideReveal>
              <SlideReveal>
                <div className="colors">
                  {map(detail.colors, (color, idx) => (
                    <div
                      key={idx}
                      style={{ backgroundColor: color.color }}
                      className="color-block"
                    ></div>
                  ))}
                </div>
              </SlideReveal>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default BrandDetails;
