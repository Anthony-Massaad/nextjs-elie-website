import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}

interface ProviderContextProps {
  homeContentIndex: number;
  setHomeContentIndex: Dispatch<SetStateAction<number>>;
  horizontalBreakPoint: number;
}

export const HomeContentContext = createContext<ProviderContextProps>(
  {} as ProviderContextProps
);

const HomeContentProvider: FC<Props> = ({ children }) => {
  const horizontalBreakPoint = 960;
  const [homeContentIndex, setHomeContentIndex] = useState(0);

  return (
    <HomeContentContext.Provider
      value={{ horizontalBreakPoint, homeContentIndex, setHomeContentIndex }}
    >
      {children}
    </HomeContentContext.Provider>
  );
};

export default HomeContentProvider;
