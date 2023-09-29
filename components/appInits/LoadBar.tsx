import { colorStylingNames } from "@/globals/constants";
import { ClassStates } from "@/globals/interfaces";
import { AppBooleanStateContext } from "@/providers/AppBooleanStates";
import { ColorSchemeContext } from "@/providers/ColorSchemeProvider";
import { joinClassStates } from "@/utils/helper";
import React, {
  ReactElement,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const LoadBar = (): ReactElement => {
  const { appIsFullyLoaded, setMoveInitials } = useContext(
    AppBooleanStateContext
  );
  const { colorScheme } = useContext(ColorSchemeContext);

  const [joinedClassStates, setJoinedClassStates] = useState("");

  // Use useMemo to compute classStates only when its dependencies change
  // this allows for one render and change dynamically. instead of multiple
  const classStates: ClassStates = useMemo((): ClassStates => {
    return {
      loadBar: !appIsFullyLoaded ? "load-bar" : "",
      customBackgroundColor: colorScheme[colorStylingNames.sectionNextColor]
        ? "custom-background-color"
        : "",
      customGradientColor: colorScheme[
        colorStylingNames.sectionNextGradientBorderColor
      ]
        ? "custom-gradient-background-color"
        : "",
    };
  }, [appIsFullyLoaded, colorScheme]);

  useEffect(() => {
    const classes = joinClassStates(classStates);
    setJoinedClassStates(classes ? " " + classes : classes);
  }, [classStates]);

  return (
    <div
      className={`section-next${joinedClassStates}`}
      onAnimationEnd={() => {
        if (!appIsFullyLoaded) {
          // move the topleft component
          setMoveInitials(true);
        }
      }}
    ></div>
  );
};

export default LoadBar;
