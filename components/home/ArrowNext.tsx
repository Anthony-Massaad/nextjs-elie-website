import { ClassStates } from "@/globals/interfaces";
import { AppBooleanStateContext } from "@/providers/AppBooleanStates";
import { HomeContentContext } from "@/providers/HomeContentProvider";
import { NavigationContext } from "@/providers/NavigationProvider";
import { joinClassStates } from "@/utils/helper";
import { FC, useContext, useEffect, useMemo, useState } from "react";

const ArrowNext: FC = () => {
  const { homeContentIndex } = useContext(HomeContentContext);
  const { appIsFullyLoaded, introFadeContent } = useContext(
    AppBooleanStateContext
  );

  const { indexChange } = useContext(NavigationContext);

  const [arrowNextJoinedClassStates, setArrowNextJoinedClassStates] =
    useState("");

  const arrowNextClassStates: ClassStates = useMemo((): ClassStates => {
    return {
      fadeUp: introFadeContent && appIsFullyLoaded ? "fade-up" : "",
    };
  }, [introFadeContent, appIsFullyLoaded]);

  useEffect(() => {
    const classes = joinClassStates(arrowNextClassStates);
    setArrowNextJoinedClassStates(classes ? " " + classes : classes);
  }, [arrowNextClassStates]);

  return (
    <>
      {homeContentIndex === 0 && (
        <div
          className={`intro-arrow-next${arrowNextJoinedClassStates}`}
          role="button"
          onClick={() => indexChange(1)}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.23257 14.7675L11.2318 24.7667C11.7018 25.2338 12.3375 25.4959 13.0001 25.4959C13.6628 25.4959 14.2985 25.2338 14.7685 24.7667L24.7676 14.7675C25.2294 14.2973 25.4867 13.6637 25.4838 13.0047C25.4808 12.3456 25.2177 11.7145 24.7516 11.2484C24.2856 10.7824 23.6544 10.5193 22.9954 10.5163C22.3363 10.5133 21.7028 10.7707 21.2326 11.2325L15.5001 16.9649V3C15.5001 2.33696 15.2367 1.70107 14.7678 1.23223C14.299 0.763393 13.6631 0.5 13.0001 0.5C12.337 0.5 11.7011 0.763393 11.2323 1.23223C10.7635 1.70107 10.5001 2.33696 10.5001 3V16.9649L4.76757 11.2325C4.29735 10.7707 3.6638 10.5133 3.00476 10.5163C2.34572 10.5193 1.71453 10.7824 1.24851 11.2484C0.782493 11.7145 0.519368 12.3456 0.516383 13.0047C0.513399 13.6637 0.770797 14.2973 1.23257 14.7675Z"
              fill="black"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default ArrowNext;
