"use client";
import { useEffect, useState } from "react";
import { Element, Link as ScrollLink } from "react-scroll";
import { ParallaxProvider } from "react-scroll-parallax";

import { cn } from "@/lib/utils";
import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { AboutSection } from "@/app/(routes)/(home)/components/AboutSection";
import { ProjectsSection } from "@/app/(routes)/(home)/components/ProjectsSection";
import CursorLight from "@/components/CursorLight";
import Navbar from "@/app/(routes)/(home)/components/Navbar";
import ArrowDown from "@/components/arrow-down";
import { TypeAnimation } from "react-type-animation";
import { tech } from "@/types";
import { HeroSection } from "./HeroSection";
import { getIntroDone, setIntroDone } from "@/hooks/useIntroStore";
export default function ClientPage({
  technologies,
}: {
  technologies: tech[] | null;
}) {
  const isIntroDone = getIntroDone();

  const isMobile = useIsMobile();
  const router = useRouter();
  const changeScrollOffset = () => (isMobile ? -10 : -130);

  return (
    <>
      {!isMobile && <CursorLight />}
      <ParallaxProvider>
        {/* Navigation */}
        <Navbar isReadyToMount={isIntroDone}>
          <NavigationMenu className="flex px-10 py-6">
            <div className="flex gap-0 rounded-2xl shadow-md backdrop-blur sm:gap-10">
              <NavigationMenuList className="">
                <ScrollLink
                  className="cursor-pointer"
                  offset={changeScrollOffset()}
                  smooth
                  to="about"
                >
                  <div className="group px-4 py-2 text-secondary-foreground">
                    <p className="relative font-light tracking-tight text-gray-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-[0%] after:rounded-sm after:bg-teal-400 after:duration-300 after:content-[''] group-hover:text-teal-400 group-hover:after:w-full">
                      About
                    </p>
                  </div>
                </ScrollLink>
              </NavigationMenuList>
              <NavigationMenuList>
                <ScrollLink
                  className="cursor-pointer"
                  offset={changeScrollOffset()}
                  smooth
                  to="work"
                >
                  <div className="group px-4 py-2">
                    <p className="relative font-light tracking-tight text-gray-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-[0%] after:rounded-sm after:bg-teal-400 after:duration-300 after:content-[''] group-hover:text-teal-400 group-hover:after:w-full">
                      Work
                    </p>
                  </div>
                </ScrollLink>
              </NavigationMenuList>
              <NavigationMenuList>
                <ScrollLink
                  className="cursor-pointer"
                  offset={changeScrollOffset()}
                  smooth
                  to="contact"
                >
                  <div className="group px-4 py-2">
                    <p className="relative font-light tracking-tight text-gray-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-[0%] after:rounded-sm after:bg-teal-400 after:duration-300 after:content-[''] group-hover:text-teal-400 group-hover:after:w-full">
                      Contact
                    </p>
                  </div>
                </ScrollLink>
              </NavigationMenuList>
              <NavigationMenuList>
                <div
                  onClick={() => router.push("/resume")}
                  className="group px-4 py-2"
                >
                  <p className="relative cursor-pointer font-light tracking-tight text-gray-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-[0%] after:rounded-sm after:bg-teal-400 after:duration-300 after:content-[''] group-hover:text-teal-400 group-hover:after:w-full">
                    Resume
                  </p>
                </div>
              </NavigationMenuList>
              <NavigationMenuList>
                <div
                  onClick={() => router.push("/resume-music")}
                  className="group px-4 py-2"
                >
                  <p className="relative cursor-pointer font-light tracking-tight text-gray-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-[0%] after:rounded-sm after:bg-teal-400 after:duration-300 after:content-[''] group-hover:text-teal-400 group-hover:after:w-full">
                    Music Portfolio
                  </p>
                </div>
              </NavigationMenuList>
            </div>
          </NavigationMenu>
        </Navbar>

        {/* Content */}
        <div className="px-6 sm:px-24">
          {/* Hero */}
          <HeroSection>
            <ScrollLink to="about" offset={changeScrollOffset()} smooth>
              <ArrowDown />
            </ScrollLink>
          </HeroSection>
          <div className="h-10"></div>
          {/* About */}
          <Element name="about">
            <AboutSection technologies={technologies} />
          </Element>
          <div className=" h-60"></div>
          {/* Work */}
          <Element name="work">
            <ProjectsSection />
          </Element>
          <div className=" h-60"></div>
          {/* Contact */}
          <Element name="contact">
            <Reveal className="mx-auto">
              <div className="flex w-full flex-col items-center gap-2">
                <a
                  href="mailto:emile.t.business@gmail.com"
                  className="hover:text-white hover:underline"
                >
                  emile.t.business@gmail.com
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/%C3%A9mile-tremblay-b10491173/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="h-10 w-10 hover:text-white"
                  >
                    <path
                      fill="currentColor"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/emiletremblay01"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="h-10 w-10 hover:text-white"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                    ></path>
                  </svg>
                </a>
              </div>
            </Reveal>
          </Element>
          <div className=" h-60"></div>
        </div>
      </ParallaxProvider>
    </>
  );
}
