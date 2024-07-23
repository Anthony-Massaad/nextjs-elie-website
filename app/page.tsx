"use client";

import Container from "@/components/Container";
import React, { useEffect, FC } from "react";
import HomeContent from "@/components/home/HomeContent";
import headingStyling from "@/hooks/headerStyling";

const Home: FC = () => {
  const { headerStyle, topLeftStyle } = headingStyling();

  useEffect(() => {
    headerStyle("#fff", "var(--color-theme)", "transparent");
    topLeftStyle("var(--initials-color)");
  }, []);

  return (
    <Container>
      <HomeContent />
    </Container>
  );
};

export default Home;
