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
    rootMargin: "-200px 0px -200px 0px", // 400px height
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
