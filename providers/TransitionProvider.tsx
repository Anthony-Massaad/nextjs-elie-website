import { AnimatePresence } from "framer-motion";
import { FC, ReactNode, createContext, useState } from "react";

interface RouterAnimationStates {
  isSlideOpen: boolean;
  isSlideReveal: boolean;
}

interface Props {
  children: ReactNode;
}

interface ProviderContext {
  routerSliderAnimations: RouterAnimationStates;
  triggerTransition: () => void;
  revealContentTransition: () => void;
  resetTransition: () => void;
}

export const TransitionContext = createContext<ProviderContext>(
  {} as ProviderContext
);

const TransitionProvider: FC<Props> = ({ children }) => {
  const [routerSliderAnimations, setRouterSliderAnimations] =
    useState<RouterAnimationStates>({
      isSlideOpen: false,
      isSlideReveal: false,
    });

  const triggerTransition = (): void => {
    setRouterSliderAnimations({ isSlideOpen: true, isSlideReveal: false });
  };

  const revealContentTransition = (): void => {
    setRouterSliderAnimations({ isSlideOpen: false, isSlideReveal: true });
  };

  const resetTransition = (): void => {
    setRouterSliderAnimations({ isSlideOpen: false, isSlideReveal: false });
  };

  return (
    <TransitionContext.Provider
      value={{
        routerSliderAnimations,
        triggerTransition,
        revealContentTransition,
        resetTransition,
      }}
    >
      <AnimatePresence>{children}</AnimatePresence>
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;
