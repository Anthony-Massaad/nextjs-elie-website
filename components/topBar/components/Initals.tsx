import { ClassStates } from "@/globals/interfaces";
import { AppBooleanStateContext } from "@/providers/AppBooleanStates";
import { joinClassStates } from "@/utils/helper";
import React, {
  ReactElement,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const Initials = (): ReactElement => {
  const { appIsFullyLoaded } = useContext(AppBooleanStateContext);
  const [joinedClassStates, setJoinedClassStates] = useState("");

  const classStates: ClassStates = useMemo((): ClassStates => {
    return {
      fadeInInitials: !appIsFullyLoaded ? "fade-in-initials" : "",
      preLoadColor: !appIsFullyLoaded ? "white-fill" : "",
    };
  }, [appIsFullyLoaded]);

  useEffect(() => {
    const classes = joinClassStates(classStates);
    setJoinedClassStates(classes ? " " + classes : classes);
  }, [classStates]);

  return (
    <div className={`name-initials${joinedClassStates}`} id="em-initials">
      <svg
        width="75"
        height="30"
        viewBox="0 0 75 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.249 29.6512C17.2392 29.6512 19.1273 29.3291 20.8327 28.7452L19.6163 25.1087C18.3076 25.612 16.8476 25.8972 15.3037 25.8972C9.34618 25.8972 4.91904 21.9255 4.31783 16.2129H27.5466C27.6013 15.6689 27.6013 15.0704 27.6013 14.5808C27.492 6.09345 22.1903 0 14.1013 0C5.90285 0 0 6.09345 0 14.5263C0 23.2857 6.44941 29.6512 15.249 29.6512ZM4.37248 12.5677C5.13767 7.34478 8.90893 3.80841 14.0466 3.80841C19.0749 3.80841 22.6276 6.96394 23.1741 12.5677H4.37248Z"
        />
        <path d="M28.4211 22.1432C27.5812 24.1955 26.0063 25.9646 23.9393 27.2691L22.6304 23.3559C23.5583 22.5826 24.3042 21.6706 24.8138 20.6742L28.4211 22.1432Z" />
        <path d="M32.4776 28.563H36.6315V13.275C36.6315 7.72562 39.7469 3.80841 44.9939 3.80841C49.2024 3.80841 51.6619 6.31107 51.6619 10.5547V28.563H55.8157V13.275C55.8157 7.72562 58.9311 3.80841 64.1781 3.80841C68.332 3.80841 70.7915 6.31107 70.7915 10.5547V19.4954H75V10.2827C75 3.80841 71.4474 0 65.4352 0C61.336 0 57.5101 1.68658 55.0506 5.54939H54.9959C53.5748 2.01301 50.6234 0 46.2509 0C41.8238 0 38.2165 1.9042 36.5768 5.11414H36.5222L36.0849 1.08812H32.4776V28.563Z" />
        <path d="M75 22.8958H70.7915V28.563H75V22.8958Z" />
      </svg>
    </div>
  );
};

export default Initials;
