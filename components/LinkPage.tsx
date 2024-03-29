import { HomeContentContext } from "@/providers/HomeContentProvider";
import { TransitionContext } from "@/providers/TransitionProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ReactElement,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";

interface Props {
  link: string;
  children: ReactNode;
  changeHomeContentIndex?: boolean;
}

const LinkPage = ({
  link,
  children,
  changeHomeContentIndex = true,
}: Props): ReactElement => {
  const [disabled, setDisabled] = useState(false);

  const { routerSliderAnimations, triggerTransition } =
    useContext(TransitionContext);
  const { setHomeContentIndex, homeContentIndex } =
    useContext(HomeContentContext);

  const [switchNav, setSwitchNav] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const routerSwitch = async (): Promise<void> => {
      await new Promise(() => router.push(link));
    };

    if (routerSliderAnimations.isSlideReveal && switchNav) {
      routerSwitch();
      setSwitchNav(false);
    }
  }, [routerSliderAnimations.isSlideReveal]);

  const handleNavChange = (e: any) => {
    e.preventDefault();
    changeHomeContentIndex && setHomeContentIndex(homeContentIndex + 1);
    setDisabled(true);
    triggerTransition();
    setSwitchNav(true);
  };

  return (
    <Link
      href={link}
      className={`next-case-study${disabled ? " pointer-none" : ""}`}
      onClick={handleNavChange}
    >
      <span>{children}</span>
      <div>
        <svg viewBox="0 0 17 14">
          <path d="M0,7.5v-1C0,6.2,0.2,6,0.5,6h13.2L9.2,1.6C9.1,1.5,9.1,1.3,9.1,1.2s0.1-0.3,0.1-0.4l0.7-0.7 C10,0.1,10.2,0,10.3,0s0.3,0.1,0.4,0.1l6.1,6.1C16.9,6.4,17,6.6,17,6.8v0.4c0,0.2-0.1,0.4-0.2,0.5l-6.1,6.1 c-0.1,0.1-0.2,0.1-0.4,0.1s-0.3-0.1-0.4-0.1l-0.7-0.7c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.1,0.1-0.3,0.1-0.3L13.7,8H0.5 C0.2,8,0,7.8,0,7.5z"></path>
        </svg>
      </div>
    </Link>
  );
};

export default LinkPage;
