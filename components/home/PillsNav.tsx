import HomeContext from "@/contexts/HomeContext";
import homeContent from "@/data/homeContent";
import { ClassStates } from "@/globals/interfaces";
import { AppBooleanStateContext } from "@/providers/AppBooleanStates";
import { HomeContentContext } from "@/providers/HomeContentProvider";
import { joinClassStates } from "@/utils/helper";
import { FC, useContext, useEffect, useMemo, useState } from "react";

const PillsNav: FC = () => {
  const { indexChange } = useContext(HomeContext);
  const { homeContentIndex } = useContext(HomeContentContext);
  const { appIsFullyLoaded, introFadeContent } = useContext(
    AppBooleanStateContext
  );

  const [pillJoinedClassStates, setPillJoinedClassStates] = useState("");

  // Use useMemo to compute classStates only when its dependencies change
  // this allows for one render and change dynamically. instead of multiple
  const pillClassStates: ClassStates = useMemo((): ClassStates => {
    return {
      moveFromRight:
        introFadeContent && appIsFullyLoaded ? "move-from-right" : "",
    };
  }, [appIsFullyLoaded, introFadeContent]);

  useEffect(() => {
    const classes = joinClassStates(pillClassStates);
    setPillJoinedClassStates(classes ? " " + classes : classes);
  }, [pillClassStates]);

  return (
    <nav className="pills">
      <ul>
        {homeContent.map((item, idx) => (
          <li onClick={() => indexChange(idx)} key={idx} role="button">
            <span
              className={`pill${pillJoinedClassStates}`}
              style={
                homeContentIndex === idx
                  ? { backgroundColor: `${item.colorTheme}` }
                  : {}
              }
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PillsNav;
