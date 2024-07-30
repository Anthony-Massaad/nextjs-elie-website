import React, {
  FC,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Variants, motion } from "framer-motion";
import { TransitionContext } from "@/providers/TransitionProvider";

interface Props {
  children: ReactNode;
}

const RouterTransition: FC<Props> = ({ children }) => {
  const { routerSliderAnimations, revealContentTransition, resetTransition } =
    useContext(TransitionContext);
  const [variant, setVariant] = useState<Variants | undefined>(undefined);
  const ref = useRef(null);

  useEffect(() => {
    if (routerSliderAnimations.isSlideReveal) {
      setVariant({
        hidden: { width: "100%", left: 0 },
        visible: { width: "100%", left: "100%" },
      });
    } else if (routerSliderAnimations.isSlideOpen) {
      setVariant({
        hidden: { width: 0, left: 0 },
        visible: { width: "100%", left: 0 },
      });
    } else {
      setVariant({
        hidden: { width: 0, left: 0 },
        visible: { width: 0, left: 0 },
      });
    }
  }, [
    routerSliderAnimations.isSlideOpen,
    routerSliderAnimations.isSlideReveal,
  ]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        zIndex: 2005,
      }}
    >
      {routerSliderAnimations.isSlideOpen ||
      routerSliderAnimations.isSlideReveal ? (
        <motion.div
          variants={variant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onAnimationComplete={() => {
            if (routerSliderAnimations.isSlideOpen) {
              revealContentTransition();
            } else if (routerSliderAnimations.isSlideReveal) {
              setTimeout(() => {
                resetTransition();
              }, 500);
            }
          }}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
            background: "var(--color-theme)",
            zIndex: 2005,
          }}
        />
      ) : null}
      {children}
    </div>
  );
};

export default RouterTransition;
