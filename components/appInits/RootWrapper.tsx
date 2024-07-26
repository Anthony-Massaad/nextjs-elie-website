import { colorStylingNames } from "@/globals/constants";
import { ClassStates } from "@/globals/interfaces";
import { AppBooleanStateContext } from "@/providers/AppBooleanStates";
import { ColorSchemeContext } from "@/providers/ColorSchemeProvider";
import { joinClassStates } from "@/utils/helper";
import { usePathname } from "next/navigation";
import { FC, ReactNode, useContext, useEffect, useMemo, useState } from "react";

interface Props {
  children: ReactNode;
}

const RootWrapper: FC<Props> = ({ children }) => {
  const [overflowCss, setOverflowCSS] = useState("hidden");
  const [joinedClassStates, setJoinedClassStates] = useState("");
  const [isHome, setIsHome] = useState(false);
  const { colorScheme } = useContext(ColorSchemeContext);
  const { appIsFullyLoaded } = useContext(AppBooleanStateContext);
  const pathName = usePathname();

  const classStates: ClassStates = useMemo((): ClassStates => {
    return {
      customBackgroundColor: colorScheme[
        colorStylingNames.backgroundGradientColor
      ]
        ? "gradient-background"
        : "solid-background",
      preLoadColor: !appIsFullyLoaded ? "bg-black" : "",
    };
  }, [appIsFullyLoaded, colorScheme]);

  useEffect(() => {
    if (pathName !== "/") {
      // flip for backbutton
      setOverflowCSS("auto");
      setIsHome(false);
    } else {
      // flip for initials
      setOverflowCSS("hidden");
      setIsHome(true);
    }
  }, [pathName]);

  useEffect(() => {
    const classes = joinClassStates(classStates);
    setJoinedClassStates(classes ? " " + classes : classes);
  }, [classStates]);

  return (
    <div
      id="wrapper"
      className={`${
        isHome && appIsFullyLoaded ? "background-blur " : ""
      }${overflowCss}${joinedClassStates}`}
    >
      {children}
    </div>
  );
};

export default RootWrapper;
