import homeContent from "@/data/homeContent";
import { colorStylingNames } from "@/globals/constants";
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
import { HomeContentContext } from "./HomeContentProvider";
import { forIn } from "lodash";

interface Props {
  children: ReactNode;
}

interface colorStyleStructure {
  [key: string]: string | undefined;
}

interface ProviderContextProps {
  colorScheme: colorStyleStructure;
}

export const ColorSchemeContext = createContext<ProviderContextProps>(
  {} as ProviderContextProps
);

const ColorSchemeProvider: FC<Props> = ({ children }) => {
  const { homeContentIndex } = useContext(HomeContentContext);

  const colorScheme: colorStyleStructure = useMemo((): colorStyleStructure => {
    return {
      [colorStylingNames.colorTheme]: homeContent[homeContentIndex].colorTheme,
      [colorStylingNames.titleColor]: homeContent[homeContentIndex].titleColor,
      [colorStylingNames.bodyTextColor]:
        homeContent[homeContentIndex].bodyTextcolor,
      [colorStylingNames.initialsColor]:
        homeContent[homeContentIndex].initialsFill,
      [colorStylingNames.backgroundColor]:
        homeContent[homeContentIndex]?.backgroundColor,
      [colorStylingNames.smileyColor]:
        homeContent[homeContentIndex].smileyColor,
      [colorStylingNames.backgroundGradientColor]:
        homeContent[homeContentIndex].gradient?.backgroundColor,
      [colorStylingNames.buttonGradientColor]:
        homeContent[homeContentIndex].gradient?.buttonColor,
      [colorStylingNames.buttonBoxShadow]:
        homeContent[homeContentIndex].shadows?.buttonColor,
      [colorStylingNames.imageBorderColor]:
        homeContent[homeContentIndex]?.imageBorderColor,
      [colorStylingNames.sectionNextColor]:
        homeContent[homeContentIndex]?.sectionNextColor,
      [colorStylingNames.sectionNextGradientBorderColor]:
        homeContent[homeContentIndex].gradient?.sectionNextColor,
      [colorStylingNames.headerBackgroundColor]:
        homeContent[homeContentIndex].headerBackgroundColor,
      [colorStylingNames.headerGradientBackgroundColor]:
        homeContent[homeContentIndex].gradient?.headerBackgroundColor,
      [colorStylingNames.blurWrapperBackground]:
        homeContent[homeContentIndex].gradient?.blurBackground,
    };
  }, [homeContentIndex]);

  // change color dom dependent on the homeIndex
  useEffect((): void => {
    // // clear the properties
    forIn(colorScheme, (scheme, name) => {
      document.documentElement.style.removeProperty(name);
    });

    forIn(colorScheme, (scheme, name) => {
      if (scheme) {
        // color exists
        document.documentElement.style.setProperty(name, scheme as string);
      }
    });
  }, [homeContentIndex]);

  return (
    <ColorSchemeContext.Provider value={{ colorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export default ColorSchemeProvider;
