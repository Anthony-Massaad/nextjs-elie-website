"use client";

import Container from "@/components/Container";
import React, { useEffect, FC, useContext } from "react";
import HomeContent from "@/components/home/HomeContent";
import headingStyling from "@/hooks/headerStyling";
import { HomeContentContext } from "@/providers/HomeContentProvider";
import { NavigationContext } from "@/providers/NavigationProvider";

const Home: FC = () => {
  const { headerStyle, topLeftStyle } = headingStyling();
  const { homeContentIndex } = useContext(HomeContentContext);
  const { indexChange } = useContext(NavigationContext);

  useEffect(() => {
    headerStyle("#fff", "var(--color-theme)", "transparent");
    topLeftStyle("var(--initials-color)");
    indexChange(homeContentIndex);
  }, []);

  return (
    <Container>
      <HomeContent />
    </Container>
  );
};

export default Home;
