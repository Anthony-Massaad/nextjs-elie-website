import { useInView } from "react-intersection-observer";
import { useContext, useEffect, useRef, useState } from "react";
import { HomeContentContext } from "@/providers/HomeContentProvider";
import { TransitionContext } from "@/providers/TransitionProvider";

const useSectionInView = (
  index: number,
  setHomeContentIndex: (index: number) => void,
  isNavToSection: boolean,
  threshold: number = 0.8
) => {
  const { horizontalBreakPoint } = useContext(HomeContentContext);

  const { routerSliderAnimations } = useContext(TransitionContext);

  const calculateRootMargin = () => {
    const windowHeight = window.innerHeight;
    const margin = (windowHeight / 1440) * -200;
    return `${margin}px 0px ${margin}px 0px`;
  };

  const [rootMargin, setRootMargin] = useState(
    window.innerWidth <= horizontalBreakPoint ? "" : calculateRootMargin()
  );

  const { ref, inView } = useInView({
    threshold: threshold,
    rootMargin: rootMargin,
    root: null,
  });

  useEffect(() => {
    if (isNavToSection) return;
    if (
      routerSliderAnimations.isSlideOpen ||
      routerSliderAnimations.isSlideReveal
    )
      return;
    if (inView) {
      setHomeContentIndex(index);
    }
  }, [inView, isNavToSection, rootMargin]);

  useEffect(() => {
    const handleResize = () => {
      setRootMargin(
        window.innerWidth <= horizontalBreakPoint ? "" : calculateRootMargin()
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { ref, inView };
};

export default useSectionInView;
