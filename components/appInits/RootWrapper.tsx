import { colorStylingNames } from "@/globals/constants";
import { isEmpty } from "lodash";
import { usePathname } from "next/navigation";
import { FC, ReactNode, useContext, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

const RootWrapper: FC<Props> = ({ children }) => {
  //   const { colorStyle } = useContext(GlobalContext);
  const [overflowCss, setOverflowCSS] = useState("hidden");
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
    <div id="wrapper" className={`${overflowCss}`}>
      {children}
    </div>
  );
};

export default RootWrapper;
