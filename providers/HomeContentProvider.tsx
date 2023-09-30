import useStorage from "@/hooks/useStorage";
import { isNumber, toNumber, toString } from "lodash";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AppBooleanStateContext } from "./AppBooleanStates";

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
  const horizontalBreakPoint = useMemo((): number => {
    return 960;
  }, []);
  const [homeContentIndex, setHomeContentIndex] = useState(0);
  const { getItem, setItem } = useStorage();
  const { appIsFullyLoaded } = useContext(AppBooleanStateContext);

  useEffect(() => {
    if (appIsFullyLoaded) {
      setItem("homeIndex", toString(homeContentIndex), "session");
    } else {
      const idx = getItem("homeIndex", "session");
      if (idx) {
        setHomeContentIndex(toNumber(idx));
      }
    }
  }, [homeContentIndex]);

  return (
    <HomeContentContext.Provider
      value={{ horizontalBreakPoint, homeContentIndex, setHomeContentIndex }}
    >
      {children}
    </HomeContentContext.Provider>
  );
};

export default HomeContentProvider;
