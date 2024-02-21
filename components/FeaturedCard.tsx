import React from "react";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import Tilt from "react-next-tilt";
export const FeaturedCard = ({
  className,
  name,
  description,
  imgUrl,
  imgAlt,
  color,
}: {
  className: string;
  name: string;
  description: string;
  imgUrl: string | StaticImageData;
  imgAlt: string;
  color: string;
}) => {
  return (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      lineGlareEnable={false}
      spotGlareEnable={false}
      className=""
    >
      <div
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-2xl border border-white border-opacity-60  shadow  backdrop-blur",
          className,
        )}
      >
        <div className={cn("h-40", color)}>
          <div className="flex items-center gap-1 px-4 py-3 ">
            <h3 className="font-bold duration-200">{name}</h3>
            <ArrowUpRight className="aspect-square h-4  transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:h-5" />
          </div>
        </div>
        <div className=" h-fit w-full border-t border-inherit border-opacity-60   transition-opacity duration-200 group-hover:opacity-0 ">
          <p className="px-4 py-3 text-xs  ">{description}</p>
        </div>
        <Image
          src={imgUrl}
          alt={imgAlt}
          className="pointer-events-none absolute -z-10 h-full w-full object-cover opacity-20 blur-sm transition duration-200 ease-in-out group-hover:scale-105 group-hover:opacity-80 group-hover:blur-none"
        />
      </div>
    </Tilt>
  );
};
