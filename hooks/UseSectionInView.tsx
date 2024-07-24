import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const useSectionInView = (
  index: number,
  setHomeContentIndex: (index: number) => void,
  isNavToSection: boolean,
  threshold: number = 1
) => {
  const calculateRootMargin = () => {
    const windowHeight = window.innerHeight;
    const margin = (windowHeight / 1440) * -200;
    return `${margin}px 0px ${margin}px 0px`;
  };

  const [rootMargin, setRootMargin] = useState(calculateRootMargin());

  useEffect(() => {
    const handleResize = () => {
      setRootMargin(calculateRootMargin());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { ref, inView } = useInView({
    threshold: threshold,
    rootMargin: rootMargin,
    root: null,
  });

  useEffect(() => {
    if (isNavToSection) return;
    if (inView) {
      setHomeContentIndex(index);
    }
  }, [inView, isNavToSection, rootMargin]);

  return { ref, inView };
};

export default useSectionInView;
