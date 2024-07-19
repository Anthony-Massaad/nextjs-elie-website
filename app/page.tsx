"use client";

import RouterTransition from "@/animations/RouterTransition";
import Container from "@/components/Container";
import homeContent from "@/data/homeContent";
import { TextAnimations } from "@/globals/interfaces";
import { AppBooleanStateContext } from "@/providers/AppBooleanStates";
import { HomeContentContext } from "@/providers/HomeContentProvider";
import { every } from "lodash";
import React, { useState, useRef, useEffect, FC, useContext } from "react";
import HomeContext from "@/contexts/HomeContext";
import HomeContent from "@/components/home/HomeContent";
import headingStyling from "@/hooks/headerStyling";

const Home: FC = () => {
  const { homeContentIndex, horizontalBreakPoint, setHomeContentIndex } =
    useContext(HomeContentContext);

  const { allowHomeScroll } = useContext(AppBooleanStateContext);
  const { appIsFullyLoaded, introFadeContent, allowButtonClick } = useContext(
    AppBooleanStateContext
  );

  // image movement block //
  const [imagePos, setImagePos] = useState(0);
  const [imageRotation, setImageRotation] = useState(0);

  // boolean intiailization
  const [scrollStopped, setScrollStopped] = useState(false);

  // finger actions states
  const [fingerActionPerformed, setFingerActionPerformed] = useState(false);

  const timer = useRef<any>();
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  // text movement block //
  const [textAnimations, setTextAnimations] = useState<TextAnimations>({
    textUp: false,
    textDown: false,
    textRight: false,
    textLeft: false,
  });

  const { headerStyle, topLeftStyle } = headingStyling();

  useEffect(() => {
    headerStyle("var(--body-text-color)", "var(--color-theme)", "transparent");
    topLeftStyle("var(--initials-color)");
  }, []);

  const indexChange = (index: number): void => {
    //setHomeContentIndex(index);
    // index > homeContentIndex ? setImagePos(75) : setImagePos(-75);
    index > homeContentIndex
      ? changeHomeIndex(90, index)
      : changeHomeIndex(-90, index);
  };

  const changeHomeIndex = (degree: number, index: number) => {
    setImageRotation(degree);

    if (degree > 0) {
      window.innerWidth > horizontalBreakPoint
        ? animateTextContent(false, true, false, false)
        : animateTextContent(false, false, true, false);
    } else {
      window.innerWidth > horizontalBreakPoint
        ? animateTextContent(true, false, false, false)
        : animateTextContent(false, false, false, true);
    }

    const timer = setTimeout(() => {
      setImageRotation(0);
      // setImagePos(0);
      setHomeContentIndex(index);
    }, 500);

    return (): void => clearTimeout(timer);
  };

  const resetAnimations = (): void => {
    setTextAnimations({
      textUp: false,
      textDown: false,
      textRight: false,
      textLeft: false,
    });
  };

  const animateTextContent = (
    textUp: boolean,
    textDown: boolean,
    textRight: boolean,
    textLeft: boolean
  ): void => {
    setTextAnimations({
      textUp: textUp,
      textDown: textDown,
      textRight: textRight,
      textLeft: textLeft,
    });
  };

  return (
    <Container>
      <HomeContext.Provider value={{ indexChange }}>
        <HomeContent
          resetAnimations={resetAnimations}
          textAnimations={textAnimations}
          imagePos={imagePos}
          imageRotation={imageRotation}
        />
      </HomeContext.Provider>
    </Container>
  );
};

export default Home;
