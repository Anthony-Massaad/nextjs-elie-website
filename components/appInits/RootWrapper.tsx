import { colorStylingNames } from "@/globals/constants";
import { ColorSchemeContext } from "@/providers/ColorSchemeProvider";
import { isEmpty } from "lodash";
import { usePathname } from "next/navigation";
import { FC, ReactNode, useContext, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

const RootWrapper: FC<Props> = ({ children }) => {
  const [overflowCss, setOverflowCSS] = useState("hidden");
  const { colorScheme } = useContext(ColorSchemeContext);
  const pathName = usePathname();

  useEffect(() => {
    if (!isEmpty(pathName)) {
      // flip for backbutton
      setOverflowCSS("auto");
    } else {
      // flip for initials
      setOverflowCSS("hidden");
    }
    console.log(pathName);
  }, [pathName]);

  return (
    <div
      id="wrapper"
      className={`${
        colorScheme[colorStylingNames.backgroundGradientColor]
          ? "gradient-background"
          : "solid-background"
      } ${overflowCss}`}
    >
      {children}
    </div>
  );
};

export default RootWrapper;
