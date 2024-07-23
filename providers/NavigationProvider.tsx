import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { HomeContentContext } from "./HomeContentProvider";

interface Props {
  children: ReactNode;
}

interface NavigationContextProps {
  indexChange: (index: number) => void;
  isNavToSection: boolean;
}

export const NavigationContext = createContext<NavigationContextProps>(
  {} as NavigationContextProps
);

const NavigationProvider: FC<Props> = ({ children }) => {
  const [isNavToSection, setIsNavToSection] = useState(false);
  const [indexGoTo, setIndexGoTo] = useState(0);

  const { homeContentIndex, setHomeContentIndex } =
    useContext(HomeContentContext);

  useEffect(() => {
    if (isNavToSection) {
      const t = setTimeout(
        () => {
          setIsNavToSection(false);
        },
        175 * Math.abs(indexGoTo - homeContentIndex)
      );
      return () => clearTimeout(t);
    }
  }, [isNavToSection, homeContentIndex, indexGoTo, setHomeContentIndex]);

  const indexChange = (index: number): void => {
    setIndexGoTo(index);
    setIsNavToSection(true);
    const elementId = `panel-${index}`;
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <NavigationContext.Provider value={{ indexChange, isNavToSection }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
