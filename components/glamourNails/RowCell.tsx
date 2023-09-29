import { RowCellInterface } from "@/data/glamourNails";
import { ReactElement } from "react";

const RowCell = ({ problem, description }: RowCellInterface): ReactElement => {
  return (
    <div className="row-cell">
      <div>
        <h3>{problem}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default RowCell;
