import { FC, useContext, useEffect, useMemo, useState } from "react";
import { capitalize } from "lodash";
import Link from "next/link";
import { AppBooleanStateContext } from "@/providers/AppBooleanStates";
import { TransitionContext } from "@/providers/TransitionProvider";
import { useRouter } from "next/navigation";
import { ClassStates } from "@/globals/interfaces";
import { colorStylingNames } from "@/globals/constants";
import { ColorSchemeContext } from "@/providers/ColorSchemeProvider";
import { joinClassStates } from "@/utils/helper";

const links: { [key: string]: string } = {
  project: "#top-project",
  about: "/about",
  contact: "/contact",
};

const Header: FC = () => {
  const { introFadeContent, appIsFullyLoaded } = useContext(
    AppBooleanStateContext
  );
  const [moveFromRight, setMoveFromRight] = useState(false);
  const [linkTo, setLinkTo] = useState("/");

  const [switchNav, setSwitchNav] = useState(false);
  const { routerSliderAnimations, triggerTransition } =
    useContext(TransitionContext);
  const router = useRouter();

  const { colorScheme } = useContext(ColorSchemeContext);

  const navigationClassStates: ClassStates = useMemo((): ClassStates => {
    return {
      backgroundColor: colorScheme[
        colorStylingNames.headerGradientBackgroundColor
      ]
        ? "gradient-background"
        : "solid-background",
    };
  }, [colorScheme]);

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

  return (
    <header className={`${moveFromRight ? "move-from-right" : ""}`}>
      <ul className={navigationClasses}>
        {Object.entries(links).map(([name, link], index) => (
          <li key={index}>
            <Link href={link} onClick={(e: any) => handleNavChange(e, link)}>
              {capitalize(name)}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
