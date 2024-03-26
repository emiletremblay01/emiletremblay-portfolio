import remplacementsImg from "@/assets/images/app-remplacements.jpg";
import peripherieImg from "@/assets/images/site-peripherie.jpg";
import stars from "@/assets/svgs/Stars.svg";
import { FeaturedCard } from "@/components/FeaturedCard";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
export const ProjectsSection = () => {
  return (
    <section className="relative m-auto max-w-5xl items-center rounded-2xl text-sm sm:p-8 sm:shadow-md md:text-base">
      <div className="absolute left-0 top-0 -z-30 h-full w-full">
        <Reveal className="h-full w-full" distance={0} delay={0.9}>
          <div className="absolute h-full w-full sm:rounded-2xl sm:border sm:border-white sm:border-opacity-50"></div>
        </Reveal>
      </div>
      <Parallax
        speed={-6}
        className="absolute -z-20 h-full w-full overflow-clip opacity-30"
      >
        <Image
          src={stars}
          alt="stars"
          className="pointer-events-none -z-20 h-full select-none object-none object-left-top"
        />
      </Parallax>
      <Parallax
        speed={2}
        className="absolute -left-4 -top-4 z-30 hidden text-3xl font-bold sm:block"
      >
        <Reveal>Things I've built</Reveal>
      </Parallax>
      <Reveal className="sm:hidden">
        <h1 className="text-3xl font-bold sm:hidden">Things I've built</h1>
        <hr className="mb-8 opacity-50 sm:hidden" />
      </Reveal>
      <Reveal>
        <h1 className="mb-4 mt-4 text-xl font-bold">Featured Projects</h1>
      </Reveal>
      <Reveal className="mx-auto overflow-visible">
        <motion.div className="flex h-full w-full flex-col items-center justify-between gap-8 pb-16 lg:flex-row lg:items-stretch">
          <a
            className="flex items-stretch"
            target="_blank"
            href="https://remplacement-app-portfoliodb.vercel.app/"
          >
            <FeaturedCard
              {...{
                name: "remplacements-app",
                description:
                  "A web app I created for my job at Cineplex to help our team manage replacements demands. Is currently used by the manager team. Has an intuitive, clean interface and a dark mode toggle.",
                imgUrl: remplacementsImg,
                imgAlt: "remplacements website",
                color: "group-hover:text-pink-500",
              }}
              className="relative w-full max-w-md border-pink-500 shadow-md"
            ></FeaturedCard>
          </a>
          <a
            className="flex items-stretch"
            target="_blank"
            href="https://peripherie-website.vercel.app/"
          >
            <FeaturedCard
              {...{
                name: "peripherie-le-mag",
                description:
                  "A website for PériphérieLeMag, a local art magazine, with a custom dashboard for analytics. Fully responsive and has a cart and a store where the admin can chose which products to display using the dashboard's API.",
                imgUrl: peripherieImg,
                imgAlt: "peripherie website",
                color: "group-hover:text-violet-500",
              }}
              className="relative h-full w-full max-w-md border-violet-500 shadow-md"
            ></FeaturedCard>
          </a>
        </motion.div>
      </Reveal>
      <Reveal>
        <h1 className="my-4 pt-12 text-xl font-bold">Other stuff</h1>
      </Reveal>
      <Reveal className="w-full">
        <div className="flex w-full flex-row flex-wrap justify-normal gap-2 md:flex-col">
          <div className="flex items-center gap-2 md:w-full">
            <p className="hidden min-w-fit text-sm font-light md:block">
              The dashboard used for peripherie's website
            </p>
            <hr className="hidden h-px w-full bg-gray-300 opacity-50 md:block" />
            <Button
              asChild
              className="grow-0 rounded-2xl border border-teal-300 bg-transparent hover:border-transparent hover:bg-teal-300 hover:text-gray-700"
            >
              <a
                target="_blank"
                href="https://peri-admin-dashboard.vercel.app/"
              >
                dashboard
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-2 md:w-full">
            <p className="hidden min-w-fit text-sm font-light md:block">
              The final team project of my ACS
            </p>
            <hr className="hidden h-px w-full bg-gray-300 opacity-50 md:block" />
            <Button
              asChild
              className="grow-0 rounded-2xl border border-teal-300 bg-transparent hover:border-transparent hover:bg-teal-300 hover:text-gray-700"
            >
              <a
                target="_blank"
                href="https://github.com/dangrenier83/ProjetFinal"
              >
                projet-final
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-2 md:w-full">
            <p className="hidden min-w-fit text-sm font-light md:block">
              First project using react & tailwind
            </p>
            <hr className="hidden h-px w-full bg-gray-300 opacity-50 md:block" />
            <Button
              asChild
              className="grow-0 rounded-2xl border border-teal-300 bg-transparent hover:border-transparent hover:bg-teal-300 hover:text-gray-700"
            >
              <a
                target="_blank"
                href="https://portfolio-musique-1nw9zf4yx-emiletremblay01.vercel.app/"
              >
                portfolio-musique
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
