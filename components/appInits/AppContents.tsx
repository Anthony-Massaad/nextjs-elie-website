import { FC, ReactNode, useContext } from "react";
import Header from "../topBar/Header";
import TopLeft from "../topBar/TopLeft";
import LoadBar from "./LoadBar";
import { AppBooleanStateContext } from "@/providers/AppBooleanStates";

interface Props {
  children: ReactNode;
}

const AppContents: FC<Props> = ({ children }) => {
  const { appIsFullyLoaded } = useContext(AppBooleanStateContext);

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
