import { map } from "lodash";
import { FC, ReactNode, useEffect, useRef, LegacyRef } from "react";

interface Props {
  children: ReactNode;
  classnames?: string;
}

const Layer: FC<Props> = ({ children, classnames = "" }) => {
  return <div className={`layer ${classnames}`}>{children}</div>;
};

export default Layer;
