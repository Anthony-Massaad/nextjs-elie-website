import SlideReveal from "@/animations/SlideReveal";
import { BrandDetailsInterface } from "@/globals/interfaces";
import { map, random } from "lodash";
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
            <div className="detail" key={`detail-${idx}`}>
              <SlideReveal>
                <h2>{detail.typography.title}</h2>
              </SlideReveal>
              {map(detail.typography.body, (body, index) => (
                <SlideReveal>
                  <p key={`body-${index}`}>{body}</p>
                </SlideReveal>
              ))}
            </div>
          )}

          {detail.colors && (
            <div className="detail" key={`detail-${idx + 5}`}>
              <SlideReveal>
                <h2>Colors</h2>
              </SlideReveal>
              <SlideReveal>
                <div className="colors">
                  {map(detail.colors, (color, idx) => (
                    <div
                      key={`color-${idx}`}
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
