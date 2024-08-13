import { FC, ReactNode, useContext, useEffect, useState } from "react";
import Header from "../topBar/Header";
import TopLeft from "../topBar/TopLeft";
import LoadBar from "./LoadBar";
import { usePathname, useRouter } from "next/navigation";
import { AppBooleanStateContext } from "@/providers/AppBooleanStates";
import { delay, isEmpty, last, split } from "lodash";
import { TransitionContext } from "@/providers/TransitionProvider";
import { RerouteIndexes, rerouteIndexes } from "@/globals/constants";
import { HomeContentContext } from "@/providers/HomeContentProvider";
import { NavigationContext } from "@/providers/NavigationProvider";

interface Props {
  children: ReactNode;
}

const AppContents: FC<Props> = ({ children }) => {
  const { appIsFullyLoaded, introFadeContent } = useContext(
    AppBooleanStateContext
  );
  const { routerSliderAnimations, triggerTransition } =
    useContext(TransitionContext);
  const { setHomeContentIndex } = useContext(HomeContentContext);
  const pathName = usePathname();
  const { indexChange } = useContext(NavigationContext);
  const router = useRouter();
  const [designatedReloadRoute, setDesignatedReloadRoute] = useState("");
  const [designatedReloadIndex, setDesignatedReloadIndex] = useState(-1);

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
      delay(
        () => {
          if (designatedReloadIndex !== -1) {
            setHomeContentIndex(designatedReloadIndex);
            indexChange(designatedReloadIndex);
            setDesignatedReloadIndex(-1);
          }
          triggerTransition();
        },
        300,
        "later"
      );
    }
  }, [appIsFullyLoaded, introFadeContent]);

  useEffect(() => {
    if (pathName !== "/") {
      const lastWord = last(split(pathName, "/")) as string;
      if (lastWord in rerouteIndexes) {
        const routeIndex = rerouteIndexes[lastWord as keyof RerouteIndexes];
        setDesignatedReloadIndex(routeIndex);
      }
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
