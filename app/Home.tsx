"use client";
import RouterTransition from "@/animations/RouterTransition";
import Container from "@/components/Container";
import homeContent from "@/data/homeContent";
import { map } from "lodash";
import React, { useState, useRef, useEffect, FC } from "react";
import HomeContent from "@/components/home/HomeContent";
import { useAnimation } from "framer-motion";

export const Home: FC = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const sectionRef = useRef(null);
  const textControl = useAnimation();

  const textVariants = {
    animateUp: {
      y: 0,
      opacity: 1,
      transition: {
        y: { duration: 0.5 },
        opacity: { duration: 0.5 },
      },
    },
    animateDown: {
      y: 60,
      opacity: 0,
      transition: {
        y: { duration: 0.5 },
        opacity: { duration: 0.5 },
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const sectionTop = rect.top + scrollPosition;
      const sectionBottom = sectionTop + rect.height;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const direction = scrollPosition > sectionTop ? "down" : "up";
        setScrollDirection(direction);

        // Trigger animation based on scroll direction
        if (direction === "up") {
          textControl.start("animateUp");
        } else {
          textControl.start("animateDown");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [textControl]);

  return (
    <RouterTransition>
      <Container>
        <div className="sections-container">
          {map(homeContent, (item, index) => (
            <HomeContent contentIndex={index} key={index} />
          ))}
        </div>
      </Container>
    </RouterTransition>
  );
};
