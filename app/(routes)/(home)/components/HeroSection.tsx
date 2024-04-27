"use client";
import { getIntroDone, setIntroDone } from "@/hooks/useIntroStore";
import ArrowDown from "@/components/arrow-down";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
type HeroSectionProps = {
  children: React.ReactNode;
};
export function HeroSection({ children }: HeroSectionProps) {
  const router = useRouter();
  const [firstLineTyped, setFirstLineTyped] = useState<boolean>(false);
  const [typingFinished, setTypingFinished] = useState<boolean>(false);
  const isIntroDone = getIntroDone();
  useEffect(() => {
    if (isIntroDone) {
      return;
    }
    if (typingFinished) {
      document.body.style.overflow = "";
      setIntroDone(true);
      router.refresh();
      return;
    }
    document.body.style.overflow = "hidden";
  }, [typingFinished]);
  return (
    <section className="relative h-screen">
      <div className="absolute bottom-1/2 left-1/2 flex h-20 w-full -translate-x-1/2 flex-col items-center justify-center">
        <TypeAnimation
          sequence={[
            "Hi,",
            200,
            "Hi, my name is Emile Tremblay.",
            300,
            () => {
              setFirstLineTyped(true);
            },
          ]}
          speed={60}
          wrapper="span"
          cursor={false}
          repeat={0}
          style={{
            whiteSpace: "pre-line",
          }}
          className="flex-none text-sm sm:text-lg"
        />
        <div className="h-10">
          {firstLineTyped && (
            <TypeAnimation
              sequence={[
                "I create things for the web.",
                () => {
                  setTypingFinished(true);
                },
              ]}
              wrapper="span"
              cursor={false}
              speed={60}
              repeat={0}
              style={{
                whiteSpace: "pre-line",
              }}
              className="text-center text-xs sm:text-base"
            />
          )}
        </div>
      </div>
      <div className="absolute bottom-0 flex w-full justify-center">
        {/* Arrow */}
        <div className={cn("cursor-pointer", !typingFinished && "opacity-0")}>
          {children}
        </div>
      </div>
    </section>
  );
}
