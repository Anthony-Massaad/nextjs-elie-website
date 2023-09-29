import homeContent from "@/data/homeContent";
import { colorStylingNames } from "@/globals/constants";
import { ClassStates, TextAnimations } from "@/globals/interfaces";
import { AppBooleanStateContext } from "@/providers/AppBooleanStates";
import { ColorSchemeContext } from "@/providers/ColorSchemeProvider";
import { HomeContentContext } from "@/providers/HomeContentProvider";
import { TransitionContext } from "@/providers/TransitionProvider";
import { joinClassStates } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useContext, useEffect, useMemo, useState } from "react";
import PillsNav from "./PillsNav";
import ArrowNext from "./ArrowNext";

interface HomeContentProps {
  resetAnimations?: () => void;
  textAnimations?: TextAnimations;
  imagePos?: number;
  imageRotation?: number;
}

const HomeContent: FC<HomeContentProps> = ({
  resetAnimations,
  textAnimations = {
    textLeft: false,
    textDown: false,
    textRight: false,
    textUp: false,
  },
  imagePos = 0,
  imageRotation = 0,
}) => {
  const { homeContentIndex, horizontalBreakPoint } =
    useContext(HomeContentContext);
  const { colorScheme } = useContext(ColorSchemeContext);
  const { routerSliderAnimations, triggerTransition } =
    useContext(TransitionContext);
  const { appIsFullyLoaded, introFadeContent, allowButtonClick } = useContext(
    AppBooleanStateContext
  );

  const [sectionInfoJoinedClassStates, setSectionInfoJoinedClassStates] =
    useState("");
  const [sectionJoinedClassStates, setSectionJoinedClassStates] = useState("");
  const [sectionImageJoinedClassStates, setSectionImageJoinedClassStates] =
    useState("");

  const [sectionButtonJoinedClassStates, setSectionButtonJoinedClassStates] =
    useState("");

  const [switchNav, setSwitchNav] = useState(false);
  const router = useRouter();

  // Use useMemo to compute classStates only when its dependencies change
  // this allows for one render and change dynamically. instead of multiple
  const sectionInfoClassStates: ClassStates = useMemo((): ClassStates => {
    return {
      textUp: textAnimations.textUp ? "animate-up" : "",
      textDown: textAnimations.textDown ? "animate-down" : "",
      textRight: textAnimations.textRight ? "animate-right" : "",
      textLeft: textAnimations.textLeft ? "animate-left" : "",
    };
  }, [
    textAnimations.textDown,
    textAnimations.textLeft,
    textAnimations.textRight,
    textAnimations.textUp,
  ]);

  const sectionClassStates: ClassStates = useMemo((): ClassStates => {
    return {
      fadeIn: introFadeContent && appIsFullyLoaded ? "fade-in" : "",
    };
  }, [introFadeContent, appIsFullyLoaded]);

  const sectionButtonClassStates: ClassStates = useMemo((): ClassStates => {
    return {
      backgroundColor: colorScheme[colorStylingNames.buttonGradientColor]
        ? "gradient-background"
        : "solid-background",
      boxShadow: colorScheme[colorStylingNames.buttonBoxShadow]
        ? "box-shadow"
        : "",
      pointerEvent: !allowButtonClick ? "disable-pointer" : "",
    };
  }, [colorScheme]);

  const sectionImageClassStates: ClassStates = useMemo((): ClassStates => {
    return {
      customBorder: colorScheme[colorStylingNames.imageBorderColor]
        ? "custom-border-color"
        : "",
    };
  }, [colorScheme]);

  useEffect(() => {
    const classes = joinClassStates(sectionInfoClassStates);
    setSectionInfoJoinedClassStates(classes ? " " + classes : classes);
  }, [sectionInfoClassStates]);

  useEffect(() => {
    const classes = joinClassStates(sectionClassStates);
    setSectionJoinedClassStates(classes ? " " + classes : classes);
  }, [sectionClassStates]);

  useEffect(() => {
    const classes = joinClassStates(sectionButtonClassStates);
    setSectionButtonJoinedClassStates(classes ? " " + classes : classes);
  }, [sectionButtonClassStates]);

  useEffect(() => {
    const classes = joinClassStates(sectionImageClassStates);
    setSectionImageJoinedClassStates(classes ? " " + classes : classes);
  }, [sectionImageClassStates]);

  useEffect(() => {
    const routerSwitch = async (): Promise<void> => {
      await new Promise(() => router.push(homeContent[homeContentIndex].href));
    };

    if (routerSliderAnimations.isSlideReveal && switchNav) {
      routerSwitch();
      setSwitchNav(false);
    }
  }, [routerSliderAnimations.isSlideReveal]);

  const handleNavChange = (e: any) => {
    e.preventDefault();
    triggerTransition();
    setSwitchNav(true);
  };

  return (
    <>
      <PillsNav />
      <section className={`section${sectionJoinedClassStates}`}>
        <div className="section-info">
          <div
            className={`section-info-wrapper${sectionInfoJoinedClassStates}`}
            onAnimationEnd={resetAnimations}
          >
            <h1 className="section-title">
              {homeContent[homeContentIndex].title}
            </h1>
            <p className="section-para">
              {homeContent[homeContentIndex].bodyDescription}
            </p>
            <Link
              href={homeContent[homeContentIndex].href}
              className={`section-button${sectionButtonJoinedClassStates}`}
              onClick={handleNavChange}
            >
              <span>{homeContent[homeContentIndex].buttonText}</span>
              <div>
                <svg viewBox="0 0 17 14">
                  <path d="M0,7.5v-1C0,6.2,0.2,6,0.5,6h13.2L9.2,1.6C9.1,1.5,9.1,1.3,9.1,1.2s0.1-0.3,0.1-0.4l0.7-0.7 C10,0.1,10.2,0,10.3,0s0.3,0.1,0.4,0.1l6.1,6.1C16.9,6.4,17,6.6,17,6.8v0.4c0,0.2-0.1,0.4-0.2,0.5l-6.1,6.1 c-0.1,0.1-0.2,0.1-0.4,0.1s-0.3-0.1-0.4-0.1l-0.7-0.7c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.1,0.1-0.3,0.1-0.3L13.7,8H0.5 C0.2,8,0,7.8,0,7.5z"></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <img
          className={`section-image${sectionImageJoinedClassStates}`}
          src={homeContent[homeContentIndex].imageSrc}
          style={
            window.innerWidth > horizontalBreakPoint
              ? {
                  top: `${imagePos}px`,
                  transform: `rotateX(${imageRotation}deg)`,
                }
              : {
                  left: `${imagePos}px`,
                  transform: `rotateY(${imageRotation}deg)`,
                }
          }
          alt=""
        />
      </section>
      <ArrowNext />
    </>
  );
};

export default HomeContent;
