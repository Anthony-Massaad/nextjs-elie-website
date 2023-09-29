import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  pageTitle: string;
}

const PageContainer: FC<Props> = ({ children, pageTitle }) => {
  return <div className={`${pageTitle} page-container`}>{children}</div>;
};

export default PageContainer;
