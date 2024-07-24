import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const useSectionInView = (
  index: number,
  setHomeContentIndex: (index: number) => void,
  isNavToSection: boolean,
  threshold: number = 1
) => {
  const { ref, inView } = useInView({
    threshold: threshold,
    rootMargin: `${window.innerHeight / 2}px 0px ${
      window.innerHeight / 2
    }px 0px`,
    root: null,
  });

  useEffect(() => {
    if (isNavToSection) return;
    if (inView) {
      setHomeContentIndex(index);
    }
  }, [inView, isNavToSection]);

  return { ref, inView };
};

export default useSectionInView;
