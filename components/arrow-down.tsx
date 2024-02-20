import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const ArrowDown = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Show the component only when at the top of the page
      setIsVisible(scrollTop >= 0 && scrollTop < 100);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={cn(!isVisible && "hidden")}>
      <Button
        variant="empty"
        className="group mb-10 flex h-20 w-20   p-0 opacity-50 hover:animate-none hover:cursor-pointer hover:opacity-100 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21 21"
          className="animate-double-bounce text-white ease-in-out group-hover:animate-none"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m6.5 13.499l4 4.001l4-4.001m-4 4.001v-13"
          />
        </svg>
      </Button>
    </div>
  );
};

export default ArrowDown;
