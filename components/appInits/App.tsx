"use client";

import { FC, ReactNode } from "react";
import RootWrapper from "./RootWrapper";
import AppContents from "./AppContents";
import HomeContentProvider from "@/providers/HomeContentProvider";
import ColorSchemeProvider from "@/providers/ColorSchemeProvider";
import TransitionProvider from "@/providers/TransitionProvider";
import AppBooleanStates from "@/providers/AppBooleanStates";
import RouterTransition from "@/animations/RouterTransition";
import { Toaster } from "react-hot-toast";
import NavigationProvider from "@/providers/NavigationProvider";
interface Props {
  children: ReactNode;
}

const App: FC<Props> = ({ children }) => {
  return (
    <AppBooleanStates>
      <HomeContentProvider>
        <ColorSchemeProvider>
          <TransitionProvider>
            <RouterTransition>
              <RootWrapper>
                <NavigationProvider>
                  <AppContents>{children}</AppContents>
                  <Toaster position="top-center" />
                </NavigationProvider>
              </RootWrapper>
            </RouterTransition>
          </TransitionProvider>
        </ColorSchemeProvider>
      </HomeContentProvider>
    </AppBooleanStates>
  );
};

export default App;
