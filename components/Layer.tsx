import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  classnames?: string;
}

const Layer: FC<Props> = ({ children, classnames = "" }) => {
  return <div className={`layer ${classnames}`}>{children}</div>;
};

export default Layer;
