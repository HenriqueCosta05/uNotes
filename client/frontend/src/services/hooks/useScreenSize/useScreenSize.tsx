import { useState, useEffect } from "react";

export function getBreakPoint(windowWidth: number): string {
  if (windowWidth) {
    if (windowWidth < 480) {
      return "sm";
    } else if (windowWidth < 1024) {
      return "md";
    } else if (windowWidth < 1200) {
      return "lg";
    } else {
      return "xlg";
    }
  } else {
    return "undefined";
  }
}

export default function useScreenSize() {
    const isWindowClient = typeof window === "object";
    const [windowSize, setWindowSize] = useState(
    isWindowClient ? window.innerWidth : undefined
    );

    useEffect(() => {
        function setSize() {
            setWindowSize(window.innerWidth)
        }

        if (isWindowClient) {
            window.addEventListener("resize", setSize)
            return () => window.removeEventListener("resize", setSize);
        }
    }, [isWindowClient, setWindowSize])
    return windowSize;

}
