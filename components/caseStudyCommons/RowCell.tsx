import SlideReveal from "@/animations/SlideReveal";
import { RowCellInterface } from "@/globals/interfaces";
import { map } from "lodash";
import { FC } from "react";

interface Props {
  rowCells: RowCellInterface[];
}

const RowCell: FC<Props> = ({ rowCells }) => {
  return (
    <div className="row-cells">
      {map(rowCells, (cell, idx) => (
        <SlideReveal key={idx}>
          <div className="row-cell">
            <div>
              <h3>{cell.problem}</h3>
            </div>
            <p>{cell.description}</p>
          </div>
        </SlideReveal>
      ))}
    </div>
  );
};

export default RowCell;
