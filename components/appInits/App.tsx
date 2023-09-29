"use client";

import { FC, ReactNode } from "react";
import RootWrapper from "./RootWrapper";
import AppContents from "./AppContents";
import HomeContentProvider from "@/providers/HomeContentProvider";
import ColorSchemeProvider from "@/providers/ColorSchemeProvider";
import TransitionProvider from "@/providers/TransitionProvider";
import AppBooleanStates from "@/providers/AppBooleanStates";

interface Props {
  children: ReactNode;
}

const App: FC<Props> = ({ children }) => {
  return (
    <RootWrapper>
      <AppBooleanStates>
        <HomeContentProvider>
          <ColorSchemeProvider>
            <TransitionProvider>
              <AppContents>{children}</AppContents>
            </TransitionProvider>
          </ColorSchemeProvider>
        </HomeContentProvider>
      </AppBooleanStates>
    </RootWrapper>
  );
};

export default App;
