"use client";

import RouterTransition from "@/animations/RouterTransition";
import Container from "@/components/Container";
import homeContent from "@/data/homeContent";
import { TextAnimations } from "@/globals/interfaces";
import { AppBooleanStateContext } from "@/providers/AppBooleanStates";
import { HomeContentContext } from "@/providers/HomeContentProvider";
import { every, map } from "lodash";
import React, { useState, useRef, useEffect, FC, useContext } from "react";
import HomeContext from "@/contexts/HomeContext";
import HomeContent from "@/components/home/HomeContent";
import { useAnimation } from "framer-motion";
import useScrollSnap from "react-use-scroll-snap";

const Home: FC = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const textControl = useAnimation();
  const sectionsContainerRef = useRef<any>(null);

  useEffect(() => {
    // Function to handle scroll animations
    const handleScroll = () => {
      if (!sectionsContainerRef.current) return;
      const container = sectionsContainerRef.current;
      const sections = document.querySelectorAll(".section") as any;

      sections.forEach((section: any, index: number) => {
        const rect = section.getBoundingClientRect();
        const scrollPosition = container.scrollTop;
        const sectionTop = rect.top + scrollPosition;
        const sectionBottom = sectionTop + rect.height;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          // Determine the direction of scroll (up or down)
          const direction = scrollPosition > sectionTop ? "down" : "up";

          // Apply the corresponding text animation class
          const textElements = section.querySelectorAll(
            ".section-info-wrapper"
          );
          textElements.forEach((textElement: any) => {
            if (direction === "up") {
              console.log("up for section, ", index);
              textElement.classList.remove("animate-down");
              textElement.classList.add("animate-up");
            } else {
              console.log("down for section ", index);
              textElement.classList.remove("animate-up");
              textElement.classList.add("animate-down");
            }
          });
        }
      });
    };

    const wrapperElement = document.querySelector("#wrapper");
    if (wrapperElement) {
      console.log("in");
      wrapperElement.addEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <RouterTransition>
      <Container>
        <div
          className="sections-container"
          id="sections-container-id"
          ref={sectionsContainerRef}
        >
          {map(homeContent, (item, index) => (
            <HomeContent contentIndex={index} key={index} />
          ))}
        </div>
      </Container>
    </RouterTransition>
  );
};

export default Home;
