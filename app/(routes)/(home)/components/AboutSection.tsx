"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import Tilt from "react-next-tilt";
import { Parallax } from "react-scroll-parallax";
import profilpic from "@/assets/images/profilpic.png";
import stars from "@/assets/svgs/Stars.svg";
import Image from "next/image";
import { tech } from "@/types";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export const AboutSection = ({
  technologies,
}: {
  technologies: tech[] | null;
}) => {
  const router = useRouter();
  const dragRef = useRef<HTMLDivElement>(null);
  return (
    <section className="relative m-auto max-w-5xl items-center text-sm sm:p-8 sm:shadow-md md:text-base ">
      <div className="absolute left-0 top-0 -z-30 h-full w-full">
        <Reveal className=" h-full w-full  " distance={0} delay={0.9}>
          <div className="absolute h-full w-full  sm:rounded-2xl sm:border sm:border-white sm:border-opacity-50"></div>
        </Reveal>
      </div>

      <Parallax
        speed={-6}
        className="absolute left-0 -z-40 h-full w-full overflow-clip  opacity-30 sm:left-8"
      >
        <Image
          src={stars}
          alt="stars"
          className="pointer-events-none h-full select-none object-none object-left-top"
        />
      </Parallax>

      <Parallax
        speed={2}
        className="absolute -left-4 -top-4 hidden text-3xl font-bold sm:block"
      >
        <Reveal>About me</Reveal>
      </Parallax>

      <Reveal className="sm:hidden">
        <h1 className="text-3xl font-bold sm:hidden">About me</h1>
        <hr className=" mb-8 opacity-50 sm:hidden" />
      </Reveal>
      <motion.div ref={dragRef} className="relative ">
        <div className="flex h-full w-full flex-col items-center justify-between gap-8  lg:flex-row">
          <div className="flex h-full basis-2/3 flex-col gap-4 font-light ">
            <Reveal>
              <p className="mb-8 text-2xl font-bold md:mb-4">
                I'm a web developer based in Montreal.
              </p>
            </Reveal>
            <Reveal>
              After I got my degree in music composition, I was looking for a
              new challenge where I could use my creativity and my
              problem-solving skills during the covid-19 pandemic. This is when
              I discovered my passion for coding.
            </Reveal>
            <Reveal>
              Since then, I've finished my ACS in web development from College
              Rosemont and done a few projects. I am now{" "}
              <span className=" bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-bold italic text-transparent">
                looking for new opportunities to grow as a React developer.
              </span>
            </Reveal>
          </div>

          <motion.div
            drag
            dragConstraints={dragRef}
            className="right-0 top-0 aspect-square h-60 cursor-grab rounded-2xl active:cursor-grabbing"
          >
            <Reveal className=" overflow-visible" delay={0.5} initial="right">
              <Tilt
                className="h-full rounded-2xl "
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                lineGlareEnable={false}
                spotGlareEnable={false}
              >
                <div className="aspect-square h-60 rounded-2xl border border-white border-opacity-30 bg-[#FFFFFFBD,#EBEBEB68,#D9D9D91A]  backdrop-blur-[5px]">
                  <div className="absolute left-0 top-0 h-full w-full">
                    <Image
                      src={profilpic}
                      alt="Emile Tremblay"
                      layout="fill"
                      objectFit="cover"
                      className="pointer-events-none rounded-2xl opacity-30"
                    />
                  </div>
                </div>
              </Tilt>
            </Reveal>
          </motion.div>
        </div>
        <div className="mt-32">
          <Reveal className="-z-20 w-full ">
            <h1 className="flex w-full items-center gap-2">
              <div className="min-w-fit ">Technologies I've worked with</div>
              <hr className="-z-20 h-px w-full opacity-50" />
            </h1>
          </Reveal>
          <Reveal className="-z-20">
            <ul className="flex flex-wrap gap-2 pt-4 font-light lg:justify-between">
              {technologies &&
                technologies.map((tech) => (
                  <li
                    className="inline-block min-w-fit flex-auto items-center rounded-2xl border border-gray-600 p-2 text-center md:flex-initial md:basis-1/6"
                    key={tech.name}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="hidden"
                    >
                      <path fill="currentColor" d="m10 7l6 5l-6 5z" />
                    </svg>
                    <p>
                      {tech.name}
                      {tech.favorite && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          className=" ml-1 inline w-3 -translate-y-px text-red-500"
                        >
                          <path
                            fill="currentColor"
                            d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636C7.5.825 2 4.274 2 9.137"
                          />
                        </svg>
                      )}
                    </p>
                  </li>
                ))}
            </ul>
          </Reveal>
        </div>
      </motion.div>
    </section>
  );
};
