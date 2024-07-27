import SlideReveal from "@/animations/SlideReveal";
import { StatsInterface } from "@/globals/interfaces";
import { map } from "lodash";
import { FC } from "react";

interface Props {
  stats: StatsInterface[];
}

const CircularProgressBar: FC<Props> = ({ stats }) => {
  const radius = 70;
  const stroke = 15;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const calculateProgress = (value: any) => {
    return parseFloat(value) / 100;
  };

  return (
    <div className="progress-stats">
      {map(stats, (stat, idx) => (
        <div
          key={idx}
          style={{ textAlign: "center", margin: "20px" }}
          className="stat"
        >
          <svg height={radius * 2} width={radius * 2}>
            <circle
              stroke="#EF69B0"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              stroke="#CFE4FC"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={circumference + " " + circumference}
              strokeDashoffset={
                circumference - calculateProgress(stat.value) * circumference
              }
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              transform={`rotate(-90 ${radius} ${radius})`}
              style={{ transition: "stroke-dashoffset 0.35s" }}
              strokeLinecap="round"
            />
            <text
              x="50%"
              y="50%"
              dy=".3em"
              textAnchor="middle"
              style={{ fontSize: "2rem", fill: "#000" }}
            >
              {stat.value}
            </text>
          </svg>
          <p>{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CircularProgressBar;
