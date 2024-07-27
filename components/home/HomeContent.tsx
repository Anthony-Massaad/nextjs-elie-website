import homeContent, { HomeContentStructure } from "@/data/homeContent";
import { colorStylingNames } from "@/globals/constants";
import { ClassStates, TextAnimations } from "@/globals/interfaces";
import { AppBooleanStateContext } from "@/providers/AppBooleanStates";
import { ColorSchemeContext } from "@/providers/ColorSchemeProvider";
import { HomeContentContext } from "@/providers/HomeContentProvider";
import { TransitionContext } from "@/providers/TransitionProvider";
import { joinClassStates } from "@/utils/helper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FC,
  ReactElement,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import PillsNav from "./PillsNav";
import useSectionInView from "@/hooks/UseSectionInView";
import { NavigationContext } from "@/providers/NavigationProvider";

interface HomeContentProps {}

const HomeContent: FC<HomeContentProps> = ({}) => {
  const { homeContentIndex, setHomeContentIndex } =
    useContext(HomeContentContext);

  const { isNavToSection } = useContext(NavigationContext);

  const { colorScheme } = useContext(ColorSchemeContext);
  const { routerSliderAnimations, triggerTransition } =
    useContext(TransitionContext);

  const { appIsFullyLoaded, introFadeContent, allowButtonClick } = useContext(
    AppBooleanStateContext
  );
  const { allowHomeScroll } = useContext(AppBooleanStateContext);

  const [sectionInfoJoinedClassStates, setSectionInfoJoinedClassStates] =
    useState("");
  const [sectionJoinedClassStates, setSectionJoinedClassStates] = useState("");
  const [sectionImageJoinedClassStates, setSectionImageJoinedClassStates] =
    useState("");

  const [sectionButtonJoinedClassStates, setSectionButtonJoinedClassStates] =
    useState("");

  const [switchNav, setSwitchNav] = useState(false);
  const router = useRouter();

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
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  useEffect(() => {
    if (!videoRefs.current.length) return;

    const playPauseVideos = async () => {
      videoRefs.current.forEach(async (video, index) => {
        if (video) {
          try {
            if (homeContentIndex === index) {
              await Promise.resolve(video.play());
            } else {
              await Promise.resolve(video.pause());
            }
          } catch (error) {}
        }
      });
    };

    playPauseVideos();
  }, [homeContentIndex]);

  useEffect(() => {
    if (!allowHomeScroll) return;

    const handleWheel = (event: WheelEvent) => {
      if (isNavToSection) {
        event.preventDefault();
        return;
      }

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
    };

    if (!parentSectionsRef.current) {
      console.error("Could not find parent sections");
      return;
    }

    parentSectionsRef.current.addEventListener("wheel", handleWheel);

    return () => {
      if (parentSectionsRef.current) {
        parentSectionsRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, [homeContentIndex, allowHomeScroll, isNavToSection]);

  const ContentSection = (
    index: number,
    item: HomeContentStructure
  ): ReactElement => {
    const { ref, inView } = useSectionInView(
      index,
      setHomeContentIndex,
      isNavToSection
    );
    return (
      <section
        className={`section${sectionJoinedClassStates}`}
        id={`panel-${index}`}
        key={index}
      >
        <div className="section-info">
          <div
            className={`section-info-wrapper${sectionInfoJoinedClassStates}`}
            id={`section-info-wrapper-${index}`}
            style={{
              visibility: `${
                homeContentIndex === index ? "visible" : "hidden"
              }`,
              opacity: `${homeContentIndex === index ? "1" : "0"}`,
            }}
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
        <div
          className={`video-container${
            homeContentIndex === index ? "" : " overlay"
          }`}
          ref={ref}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el as HTMLVideoElement)}
            className={` section-image${sectionImageJoinedClassStates}`}
            style={{
              boxShadow: `${
                homeContentIndex === index
                  ? "0px 2px 30px 0px #f4f4f440"
                  : "none"
              }`,
            }}
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
    );
  };

  return (
    <>
      <PillsNav />
      <div className="parent-sections" ref={parentSectionsRef}>
        {homeContent.map((item, index) => ContentSection(index, item))}
      </div>
    </>
  );
};

export default HomeContent;
