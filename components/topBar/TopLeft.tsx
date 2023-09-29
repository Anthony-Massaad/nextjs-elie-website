import React, { FC, useContext, useEffect, useMemo, useState } from "react";
import Initials from "./components/Initals";
import BackButton from "./components/BackButton";
import { joinClassStates } from "@/utils/helper";
import { ClassStates } from "@/globals/interfaces";
import { usePathname } from "next/navigation";
import { isEmpty } from "lodash";
import { AppBooleanStateContext } from "@/providers/AppBooleanStates";

const TopLeft: FC = () => {
  const {
    moveInitials,
    appIsFullyLoaded,
    setMoveInitials,
    setIntroFadeContent,
    setAppIsFullyLoaded,
  } = useContext(AppBooleanStateContext);

  const [topLeftFlip, setTopLeftFlip] = useState(false);
  const [joinedClassStates, setJoinedClassStates] = useState("");
  const pathname = usePathname();
  // Use useMemo to compute classStates only when its dependencies change
  // this allows for one render and change dynamically. instead of multiple
  const classStates: ClassStates = useMemo((): ClassStates => {
    return {
      fadeInInitials: !appIsFullyLoaded ? "fade-in-initials" : "",
      moveInitials: moveInitials ? "move-initials" : "",
    };
  }, [appIsFullyLoaded, moveInitials]);

  useEffect(() => {
    const classes = joinClassStates(classStates);
    setJoinedClassStates(classes ? " " + classes : classes);
  }, [classStates]);

  useEffect(() => {
    if (pathname !== "/") {
      // flip for backbutton
      setTopLeftFlip(true);
    } else {
      // flip for initials
      setTopLeftFlip(false);
    }
  }, [pathname]);

  return (
    <div
      className={`top-left-container${joinedClassStates}${
        topLeftFlip ? " flip" : ""
      }`}
      onAnimationEnd={() => {
        if (moveInitials) {
          setMoveInitials(false);
          setAppIsFullyLoaded(true);
          setIntroFadeContent(true);
        }
      }}
    >
      <div className="top-left-front">
        <Initials />
      </div>
      <div className="top-left-back">
        <BackButton />
      </div>
    </div>
  );
};

export default TopLeft;
