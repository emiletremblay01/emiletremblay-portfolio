import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, MotionStyle } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  initial?: "bottom" | "right" | "left";
  distance?: number;
  style?: MotionStyle;
}

export const Reveal = ({
  children,
  className,
  delay = 0.3,
  initial = "bottom",
  distance = 75,
  style,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={cn("relative w-fit overflow-hidden", className)}>
      <motion.div
        style={style}
        variants={{
          bottom: {
            opacity: 0,
            y: distance,
          },
          right: {
            opacity: 0,
            x: distance,
          },
          left: {
            opacity: 0,
            x: -distance,
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
          },
        }}
        initial={initial}
        animate={mainControls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: delay }}
      >
        {style ? <motion.div style={style}>{children}</motion.div> : children}
      </motion.div>
    </div>
  );
};
