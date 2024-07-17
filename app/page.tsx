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

  const [snapPositions, setSnapPositions] = useState<number[]>([]);

  useEffect(() => {
    setSnapPositions(
      homeContent.map((_, index) => {
        const videoElement = document.querySelector(`#video-${index}`);
        console.log(videoElement);
        if (!videoElement) {
          console.error(`#video-${index} does not exist...`);
          return 0;
        }
        return videoElement.getBoundingClientRect().top;
      })
    );
  }, [appIsFullyLoaded, introFadeContent]);

  const getClosestSnapPosition = (pos: number) => {
    console.log(snapPositions);
    return snapPositions.reduce((prev, curr) => {
      return Math.abs(curr - pos) < Math.abs(prev - pos) ? curr : prev;
    });
  };

  // for scrollable timer
  useEffect((): any => {
    // wait until text animation is finished
    // if (!every(textAnimations, (state) => state === false)) return;
    // if (!allowHomeScroll) return;

    // const handleTouchStart = (event: any): void => {
    //   if (fingerActionPerformed) return;
    //   // get the starting position movement
    //   touchStartX.current = event.touches[0].clientX;
    //   touchStartY.current = event.touches[0].clientY;
    //   setFingerActionPerformed(true);
    // };

    // const handleTouchMove = (event: any): void => {
    //   if (!touchStartX.current || !touchStartY.current) return;

    //   // determine the distance in which we moved as well as the direction
    //   const touchEndX = event.touches[0].clientX;
    //   const touchEndY = event.touches[0].clientY;
    //   const deltaX = touchEndX - touchStartX.current;
    //   const deltaY = touchEndY - touchStartY.current;

    //   // Adjust sensitivity as needed for scroll speed
    //   const sensitivity = 1;

    //   // Determine the main direction of movement
    //   // deltaX distance is higher, we move horiztonal, otherwise vertical
    //   if (Math.abs(deltaX) > Math.abs(deltaY)) {
    //     // Horizontal scrolling
    //     if (window.innerWidth <= horizontalBreakPoint) {
    //       let direction = deltaX * sensitivity;
    //       // swiping right, moving left
    //       direction =
    //         direction < 0 && homeContentIndex + 1 === homeContent.length
    //           ? 0
    //           : direction;

    //       // swiping left, moveing right
    //       direction =
    //         direction > 0 && homeContentIndex - 1 === -1 ? 0 : direction;
    //       setImagePos(direction);
    //     }
    //   } else {
    //     // Vertical scrolling
    //     if (window.innerWidth > horizontalBreakPoint) {
    //       let direction = deltaY * sensitivity;
    //       // stop downwards scroll, move upwards
    //       direction =
    //         direction > 0 && homeContentIndex - 1 === -1 ? 0 : direction;

    //       // stop upwards scroll, move downwords
    //       direction =
    //         direction < 0 && homeContentIndex + 1 === homeContent.length
    //           ? 0
    //           : direction;
    //       setImagePos(direction);
    //     }
    //   }
    //   event.preventDefault();
    // };

    // const handleTouchEnd = (): void => {
    //   // Reset touch start positions
    //   touchStartX.current = null;
    //   touchStartY.current = null;
    //   if (imagePos <= -75 && homeContentIndex + 1 !== homeContent.length) {
    //     // go downwards
    //     changeHomeIndex(-90, homeContentIndex + 1);
    //   } else if (imagePos >= 75 && homeContentIndex - 1 !== -1) {
    //     // go upwards
    //     changeHomeIndex(90, homeContentIndex - 1);
    //   } else {
    //     setImagePos(0);
    //   }
    //   setFingerActionPerformed(false);
    // };

    const handleScroll = (event: any): void => {
      if (
        (event.deltaY > 0 && homeContentIndex + 1 === homeContent.length) ||
        (event.deltaY < 0 && homeContentIndex - 1 === -1)
      ) {
        return;
      }

      if (
        (event.deltaX > 0 && homeContentIndex + 1 === homeContent.length) ||
        (event.deltaX < 0 && homeContentIndex - 1 === -1)
      ) {
        return;
      }

      const easing = 1;
      if (window.innerWidth > horizontalBreakPoint) {
        // vertical
        const newPos = imagePos - event.deltaY * easing;
        setImagePos(newPos);
        if (Math.abs(newPos) >= window.innerHeight / 3) {
          const closestSnapPosition = getClosestSnapPosition(newPos);
          console.log(closestSnapPosition);
          setImagePos(closestSnapPosition);
          // console.log(snapPositions.indexOf(closestSnapPosition));
          // setHomeContentIndex(snapPositions.indexOf(closestSnapPosition));
        }
      } else {
        // horizontal
        const newPos = imagePos - (event.deltaY || event.deltaX) * easing;
        setImagePos(newPos);
        if (Math.abs(newPos) >= window.innerWidth / 3) {
          const closestSnapPosition = getClosestSnapPosition(newPos);
          setImagePos(closestSnapPosition);
          // setHomeContentIndex(snapPositions.indexOf(closestSnapPosition));
        }
      }
    };

    const handleScrollEvent = (event: any) => {
      clearTimeout(timer.current);
      setScrollStopped(false);
      handleScroll(event);
    };

    const handleSwipeEvent = (event: any) => {
      clearTimeout(timer.current);
      setScrollStopped(false);
      // handleTouchMove(event);
    };

    const wrapperElement = document.querySelector("#wrapper");
    wrapperElement?.addEventListener("wheel", handleScrollEvent);
    // wrapperElement?.addEventListener("touchstart", handleTouchStart);
    wrapperElement?.addEventListener("touchmove", handleSwipeEvent);
    // wrapperElement?.addEventListener("touchend", handleTouchEnd);

    // set the scrolled stop to true when the user stopped scrolling for a certain time
    if (!scrollStopped && !fingerActionPerformed) {
      timer.current = setTimeout(() => {
        setScrollStopped(true);
        // const closestSnapPosition = getClosestSnapPosition(imagePos);
        // setImagePos(closestSnapPosition);
      }, 300);
    }

    // user stopped scrolling mid scroll, reset image position
    if (scrollStopped) {
      // setImagePos(0);
    }

    return () => {
      clearTimeout(timer.current);
      wrapperElement?.removeEventListener("wheel", handleScrollEvent);
      // wrapperElement?.removeEventListener("touchstart", handleTouchStart);
      // wrapperElement?.removeEventListener("touchmove", handleTouchMove);
      // wrapperElement?.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    scrollStopped,
    imagePos,
    textAnimations,
    allowHomeScroll,
    fingerActionPerformed,
  ]);

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
