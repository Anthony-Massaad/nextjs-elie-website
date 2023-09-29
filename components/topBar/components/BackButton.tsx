import { TransitionContext } from "@/providers/TransitionProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ReactElement, useContext, useEffect, useState } from "react";

const BackButton = (): ReactElement => {
  const { routerSliderAnimations, triggerTransition } =
    useContext(TransitionContext);

  const [switchNav, setSwitchNav] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (routerSliderAnimations.isSlideReveal && switchNav) {
      router.push("/");
      setSwitchNav(false);
    }
  }, [routerSliderAnimations.isSlideReveal]);

  const handleNavChange = (e: any) => {
    e.preventDefault();
    triggerTransition();
    setSwitchNav(true);
  };

  return (
    <div className="back-button">
      <Link href="/" onClick={handleNavChange}>
        <div>
          <svg viewBox="0 0 17 14" width="30" height="15">
            <path d="M17,6.5v1C17,7.8,16.8,8,16.5,8H3.3l4.4,4.4c0.1,0.1,0.1,0.2,0.1,0.4s-0.1,0.3-0.1,0.4 l-0.7,0.7C7,13.9,6.8,14,6.7,14s-0.3-0.1-0.4-0.1L0.2,7.7C0.1,7.6,0,7.4,0,7.2V6.8c0-0.2,0.1-0.4,0.2-0.5l6.1-6.1 C6.5,0.1,6.6,0,6.7,0S7,0.1,7.1,0.1l0.7,0.7C7.9,1,7.9,1.1,7.9,1.2c0,0.1-0.1,0.3-0.1,0.3L3.3,6h13.2C16.8,6,17,6.2,17,6.5z"></path>
          </svg>
        </div>
        <span>Back home</span>
      </Link>
    </div>
  );
};

export default BackButton;
