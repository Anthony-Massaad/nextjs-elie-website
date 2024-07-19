import homeContent from "@/data/homeContent";
import { colorStylingNames } from "@/globals/constants";
import { ClassStates, TextAnimations } from "@/globals/interfaces";
import { AppBooleanStateContext } from "@/providers/AppBooleanStates";
import { ColorSchemeContext } from "@/providers/ColorSchemeProvider";
import { HomeContentContext } from "@/providers/HomeContentProvider";
import { TransitionContext } from "@/providers/TransitionProvider";
import { joinClassStates } from "@/utils/helper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useContext, useEffect, useMemo, useRef, useState } from "react";
import PillsNav from "./PillsNav";
import { every, map } from "lodash";

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
  const { homeContentIndex, horizontalBreakPoint, setHomeContentIndex } =
    useContext(HomeContentContext);

  const { colorScheme } = useContext(ColorSchemeContext);
  const { routerSliderAnimations, triggerTransition } =
    useContext(TransitionContext);

  const { appIsFullyLoaded, introFadeContent, allowButtonClick } = useContext(
    AppBooleanStateContext
  );
  const { allowHomeScroll } = useContext(AppBooleanStateContext);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [sectionInfoJoinedClassStates, setSectionInfoJoinedClassStates] =
    useState("");
  const [sectionJoinedClassStates, setSectionJoinedClassStates] = useState("");
  const [sectionImageJoinedClassStates, setSectionImageJoinedClassStates] =
    useState("");

  const [sectionButtonJoinedClassStates, setSectionButtonJoinedClassStates] =
    useState("");

  const [switchNav, setSwitchNav] = useState(false);
  const router = useRouter();

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

  const parentSectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!every(textAnimations, (state: boolean) => state === false)) return;
    if (!allowHomeScroll) return;
    const handleWheel = (event: WheelEvent) => {
      if (
        (event.deltaY > 0 && homeContentIndex + 1 === homeContent.length) ||
        (event.deltaY < 0 && homeContentIndex - 1 === -1)
      ) {
        event.preventDefault();
        return;
      }

      if (
        (event.deltaX > 0 && homeContentIndex + 1 === homeContent.length) ||
        (event.deltaX < 0 && homeContentIndex - 1 === -1)
      ) {
        event.preventDefault();
        return;
      }

      if (event.deltaY > 0) {
        // Scrolling down
        console.log("Scrolling down...");
        setHomeContentIndex((prev) => prev + 1);
      } else {
        // Scrolling up
        console.log("Scrolling up...");
        setHomeContentIndex((prev) => prev - 1);
      }
    };

    if (parentSectionsRef.current) {
      parentSectionsRef.current.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (parentSectionsRef.current) {
        parentSectionsRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, [homeContentIndex]);

  return (
    <>
      <PillsNav />
      <div className="parent-sections" ref={parentSectionsRef}>
        {homeContent.map((item, index) => (
          <section
            className={`section${sectionJoinedClassStates}`}
            id={`panel-${index}`}
            key={index}
          >
            <div className="section-info">
              <div
                className={`section-info-wrapper${sectionInfoJoinedClassStates}`}
                onAnimationEnd={resetAnimations}
                id={`section-info-wrapper-${index}`}
              >
                <h1 className="section-title">{item.title}</h1>
                <p className="section-para">{item.bodyDescription}</p>
                <Link
                  href={item.href}
                  className={`section-button${sectionButtonJoinedClassStates}`}
                  onClick={handleNavChange}
                >
                  <span>{item.buttonText}</span>
                  <div>
                    <svg viewBox="0 0 17 14">
                      <path d="M0,7.5v-1C0,6.2,0.2,6,0.5,6h13.2L9.2,1.6C9.1,1.5,9.1,1.3,9.1,1.2s0.1-0.3,0.1-0.4l0.7-0.7 C10,0.1,10.2,0,10.3,0s0.3,0.1,0.4,0.1l6.1,6.1C16.9,6.4,17,6.6,17,6.8v0.4c0,0.2-0.1,0.4-0.2,0.5l-6.1,6.1 c-0.1,0.1-0.2,0.1-0.4,0.1s-0.3-0.1-0.4-0.1l-0.7-0.7c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.1,0.1-0.3,0.1-0.3L13.7,8H0.5 C0.2,8,0,7.8,0,7.5z"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            <div className="video-container">
              <video
                ref={videoRef}
                className={`overlay section-image${sectionImageJoinedClassStates}`}
                width={500}
                height={400}
                autoPlay
                loop
                muted
              >
                <source src={item.vidSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default HomeContent;
