// components/ScrollColorChange.tsx
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const rgbToHex = (r: number, g: number, b: number): string => {
  const toHex = (value: number) => {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const ScrollColorChange: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>("#000000");
  let bg = `bg-[${backgroundColor}]`;
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const red = Math.min(255, Math.floor(scrollPosition / 5));
      const green = Math.min(255, Math.floor(scrollPosition / 10));
      const blue = Math.min(255, Math.floor(scrollPosition / 15));
      setBackgroundColor(rgbToHex(red, green, blue));
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        background: backgroundColor,
        backgroundClip: "text",
        color: "transparent",
      }}
      className={cn(
        " flex h-screen items-center justify-center  transition duration-500 ease-in-out",
      )}
    >
      Your content goes here
    </div>
  );
};

export default ScrollColorChange;
