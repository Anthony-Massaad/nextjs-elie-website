import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface InitialAnimationStates {
  isLoaded: boolean;
  moveInitials: boolean;
  introFades: boolean;
}

interface AppActions {
  scrollingAction: boolean;
  sectionButtonClick: boolean;
}

interface ProviderContextProps {
  appIsFullyLoaded: boolean;
  moveInitials: boolean;
  introFadeContent: boolean;
  allowHomeScroll: boolean;
  allowButtonClick: boolean;
  setAppIsFullyLoaded: Dispatch<SetStateAction<boolean>>;
  setMoveInitials: Dispatch<SetStateAction<boolean>>;
  setIntroFadeContent: Dispatch<SetStateAction<boolean>>;
  setAllowHomeScroll: Dispatch<SetStateAction<boolean>>;
  setAllowButtonClick: Dispatch<SetStateAction<boolean>>;
}

interface ProviderProps {
  children: ReactNode;
}

export const AppBooleanStateContext = createContext<ProviderContextProps>(
  {} as ProviderContextProps
);

const AppBooleanStates: FC<ProviderProps> = ({ children }) => {
  const timer = useRef<any>();
  const [appIsFullyLoaded, setAppIsFullyLoaded] = useState(false);
  const [moveInitials, setMoveInitials] = useState(false);
  const [introFadeContent, setIntroFadeContent] = useState(false);
  const [allowHomeScroll, setAllowHomeScroll] = useState(false);
  const [allowButtonClick, setAllowButtonClick] = useState(false);

  useEffect(() => {
    if (introFadeContent && appIsFullyLoaded) {
      timer.current = setTimeout(() => {
        setAllowHomeScroll(true);
        setAllowButtonClick(true);
      }, 1000);
    }
    return () => clearTimeout(timer.current);
  }, [introFadeContent, appIsFullyLoaded]);

  return (
    <AppBooleanStateContext.Provider
      value={{
        appIsFullyLoaded,
        moveInitials,
        introFadeContent,
        allowHomeScroll,
        allowButtonClick,
        setAppIsFullyLoaded,
        setMoveInitials,
        setIntroFadeContent,
        setAllowHomeScroll,
        setAllowButtonClick,
      }}
    >
      {children}
    </AppBooleanStateContext.Provider>
  );
};

export default AppBooleanStates;
