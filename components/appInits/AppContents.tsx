import { FC, ReactNode, useContext, useEffect, useState } from "react";
import Header from "../topBar/Header";
import TopLeft from "../topBar/TopLeft";
import LoadBar from "./LoadBar";
import { usePathname, useRouter } from "next/navigation";
import { AppBooleanStateContext } from "@/providers/AppBooleanStates";
import { delay, isEmpty } from "lodash";
import { TransitionContext } from "@/providers/TransitionProvider";

interface Props {
  children: ReactNode;
}

const AppContents: FC<Props> = ({ children }) => {
  const { appIsFullyLoaded, introFadeContent } = useContext(
    AppBooleanStateContext
  );
  const { routerSliderAnimations, triggerTransition } =
    useContext(TransitionContext);
  const pathName = usePathname();
  const router = useRouter();
  const [designatedReloadRoute, setDesignatedReloadRoute] = useState("");

  const reroute = async (path: string) => {
    await new Promise(() => router.push(path));
  };

  useEffect(() => {
    if (
      routerSliderAnimations.isSlideReveal &&
      !isEmpty(designatedReloadRoute)
    ) {
      reroute(designatedReloadRoute);
      setDesignatedReloadRoute("");
    }
  }, [routerSliderAnimations.isSlideReveal]);

  useEffect(() => {
    if (
      appIsFullyLoaded &&
      introFadeContent &&
      !isEmpty(designatedReloadRoute)
    ) {
      console.log("route");
      delay(
        () => {
          triggerTransition();
        },
        300,
        "later"
      );
    }
  }, [appIsFullyLoaded, introFadeContent]);

  useEffect(() => {
    if (pathName !== "/") {
      console.log("reroute");
      setDesignatedReloadRoute(pathName);
      reroute("/");
    }
  }, []);

  return (
    <>
      <LoadBar />
      <TopLeft />
      {appIsFullyLoaded && (
        <>
          <Header />
          {children}
        </>
      )}
    </>
  );
};

export default AppContents;
