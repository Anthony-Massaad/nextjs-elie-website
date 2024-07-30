import React, { useState, useMemo, useEffect, useRef, FC } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  src: string;
}

const LazyLoadVideo: FC<Props> = ({ src }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const videoElement = useRef<HTMLVideoElement>(null);

  // Only set the source when the video is in view
  const memoizedSource = useMemo(
    () => <source src={src} type="video/mp4" />,
    [src]
  );

  // Update isLoaded state when inView changes
  useEffect(() => {
    if (inView) {
      console.log("hit");
      setIsLoaded(true);
    }
  }, [inView]);

  // Play video when loaded
  useEffect(() => {
    if (isLoaded && videoElement.current) {
      videoElement.current.play();
    }
  }, [isLoaded, videoElement]);

  return (
    <div ref={ref}>
      <video
        autoPlay={isLoaded}
        loop
        muted
        playsInline
        controls={false}
        ref={videoElement}
      >
        {memoizedSource}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LazyLoadVideo;
