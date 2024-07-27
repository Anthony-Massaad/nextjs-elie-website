import { FC, useContext, useEffect, useMemo, useRef, useState } from "react";
import { capitalize, map } from "lodash";
import Link from "next/link";
import { AppBooleanStateContext } from "@/providers/AppBooleanStates";
import { TransitionContext } from "@/providers/TransitionProvider";
import { useRouter } from "next/navigation";
import { ClassStates } from "@/globals/interfaces";
import { colorStylingNames } from "@/globals/constants";
import { ColorSchemeContext } from "@/providers/ColorSchemeProvider";
import { joinClassStates } from "@/utils/helper";
import { NavigationContext } from "@/providers/NavigationProvider";
import { usePathname } from "next/navigation";
import { HomeContentContext } from "@/providers/HomeContentProvider";
import HamburgerButton from "./HamburgerButton";
import { motion, useAnimation, Variants } from "framer-motion";

const links: { [key: string]: string } = {
  project: "#top-project",
  about: "/about",
  contact: "/contact",
};

const variantsUl: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
} as const;

const variantsLi: Variants = {
  open: {
    y: 0,
    opacity: 1,
    pointerEvents: "auto",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    pointerEvents: "none",
    transition: {
      y: { stiffness: 1000 },
    },
  },
} as const;

const sidebarVarients: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
} as const;

const Header: FC = () => {
  const { introFadeContent, appIsFullyLoaded } = useContext(
    AppBooleanStateContext
  );
  const { indexChange } = useContext(NavigationContext);
  const [moveFromRight, setMoveFromRight] = useState(false);
  const [linkTo, setLinkTo] = useState("/");

  const [switchNav, setSwitchNav] = useState(false);
  const { routerSliderAnimations, triggerTransition } =
    useContext(TransitionContext);
  const router = useRouter();
  const path = usePathname();

  const [isMobileHeader, setIsMobileHeader] = useState(false);

  const { horizontalBreakPoint } = useContext(HomeContentContext);

  const { colorScheme } = useContext(ColorSchemeContext);

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const navigationClassStates: ClassStates = useMemo((): ClassStates => {
    return {
      backgroundColor: colorScheme[
        colorStylingNames.headerGradientBackgroundColor
      ]
        ? "gradient-background"
        : "solid-background",
    };
  }, [colorScheme]);

  const containerRef = useRef(null);

  const [display, setDisplay] = useState(true);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isHamburgerOpen) {
      mainControls.start("open");
    } else {
      mainControls.start("closed");
    }
  }, [isHamburgerOpen]);

  useEffect(() => {
    console.log(path);
    if (path !== "/") {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  }, [path]);

  useEffect(() => {
    if (window.innerWidth <= horizontalBreakPoint) {
      setIsMobileHeader(true);
      setIsHamburgerOpen(false);
    } else {
      setIsMobileHeader(false);
      setIsHamburgerOpen(false);
    }
    const handleResize = (): void => {
      if (window.innerWidth <= horizontalBreakPoint) {
        setIsMobileHeader(true);
        setIsHamburgerOpen(false);
      } else {
        setIsMobileHeader(false);
        setIsHamburgerOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [navigationClasses, setNavigationClasses] = useState("");

  useEffect(() => {
    const classes = joinClassStates(navigationClassStates);
    setNavigationClasses(classes ? " " + classes : classes);
  }, [navigationClassStates]);

  useEffect(() => {
    const routerSwitch = async (): Promise<void> => {
      await new Promise(() => router.push(linkTo));
    };

    if (routerSliderAnimations.isSlideReveal && switchNav) {
      routerSwitch();
      setSwitchNav(false);
    }
  }, [routerSliderAnimations.isSlideReveal]);

  const handleNavChange = (e: any, link: string) => {
    e.preventDefault();
    setLinkTo(link);
    triggerTransition();
    setSwitchNav(true);
  };

  useEffect(() => {
    setMoveFromRight(introFadeContent && appIsFullyLoaded);
  }, [introFadeContent, appIsFullyLoaded]);

  const toggleHamburgerButton = (): void => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <header className={`${moveFromRight ? "move-from-right" : ""} `}>
      <>
        {isMobileHeader ? (
          <motion.nav
            initial={false}
            animate={isHamburgerOpen ? "open" : "closed"}
            ref={containerRef}
            aria-label="hidden"
            className="hamburger-nav"
          >
            <motion.div className="background" variants={sidebarVarients} />
            <motion.ul variants={variantsUl}>
              {Object.entries(links).map(([name, link], index) => (
                <motion.li
                  variants={variantsLi}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  key={index}
                  initial="closed"
                  animate={mainControls}
                >
                  <motion.div>
                    <Link
                      href={link}
                      onClick={(e: any) =>
                        name === "project"
                          ? indexChange(1)
                          : handleNavChange(e, link)
                      }
                    >
                      {name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
            <HamburgerButton toggleHamburgerButton={toggleHamburgerButton} />
          </motion.nav>
        ) : (
          <ul className={`${!display ? "none " : ""}${navigationClasses}`}>
            {Object.entries(links).map(([name, link], index) => (
              <li key={index}>
                <Link
                  href={link}
                  onClick={(e: any) =>
                    name === "project"
                      ? indexChange(1)
                      : handleNavChange(e, link)
                  }
                >
                  {capitalize(name)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    </header>
  );
};

export default Header;
