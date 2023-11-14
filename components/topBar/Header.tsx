import { FC, useContext, useEffect, useState } from "react";
import { capitalize } from "lodash";
import Link from "next/link";
import { AppBooleanStateContext } from "@/providers/AppBooleanStates";
import { TransitionContext } from "@/providers/TransitionProvider";
import { useRouter } from "next/navigation";

const links: { [key: string]: string } = {
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
      <ul>
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
