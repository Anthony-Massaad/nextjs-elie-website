import React, { ReactElement } from "react";
import { map } from "lodash";
import { StatsInterface } from "@/globals/interfaces";

interface Props {
  stats: StatsInterface[];
}

const Stats = ({ stats }: Props): ReactElement => {
  return (
    <div className="stats">
      {map(stats, (stat, idx) => (
        <div className="stat" key={idx}>
          <h4>{stat.value}</h4>
          <p>{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
