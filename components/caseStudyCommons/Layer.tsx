import { FC, ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  children: ReactNode;
  classnames?: string;
  headerTxtColor?: string;
  threshold?: number;
}

const Layer: FC<Props> = ({
  children,
  classnames = "",
  headerTxtColor,
  threshold = 0.5,
}) => {
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (headerTxtColor && inView) {
      document.documentElement.style.setProperty(
        "--header-color",
        headerTxtColor
      );
    }
    console.log("In View");
  }, [inView]);

  return (
    <div ref={ref} className={`layer ${classnames}`}>
      {children}
    </div>
  );
};

export default Layer;
