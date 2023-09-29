import { ReactElement } from "react";
import { map } from "lodash";
import { InformationInterface } from "@/data/glamourNails";

const Information = ({ title, infos }: InformationInterface): ReactElement => {
  return (
    <div>
      <h3>{title}</h3>
      {map(infos, (info, idx) => (
        <p key={idx}>{info}</p>
      ))}
    </div>
  );
};

export default Information;
