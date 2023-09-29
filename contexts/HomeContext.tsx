import { FC, ReactNode, createContext } from "react";

interface HomeContentInterface {
  indexChange: (index: number) => void;
}

interface Props {
  children: ReactNode;
}

const HomeContext = createContext<HomeContentInterface>(
  {} as HomeContentInterface
);

export default HomeContext;
