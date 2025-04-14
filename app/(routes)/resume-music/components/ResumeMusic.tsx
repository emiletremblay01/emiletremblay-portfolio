"use client";
import { resume } from "@/types";
import { Card } from "@/components/ui/card-hover-effect";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkExperienceCard } from "./WorkExperienceCard";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { ApiList } from "@/components/ui/api-list";
import { title } from "process";
export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}

export default function ResumeMusic() {
  const musicSkills = [
    "Composes original music in various styles",
    "Produces, mixes and masters tracks using Ableton Live",
    "Applies advanced music theory in arrangements",
    "Collaborates with musicians and sound engineers",
  ];
  const tab1 = "employee";
  const tab2 = "contractor";

  const employeWorkExperiences = [
    {
      title: "Lead Stage Technician",
      company: "Salle Adrienne-Milotte",
      location: "Montreal, QC",
      description: "Set up equipment, mix live sound, and support artist needs",
      dates: "2017 - 2019",
    },
    {
      title: "Lead Stage Technician",
      company: "École de l'Anse",
      location: "Notre-Dame-du-Portage, QC",
      description: "Set up equipment, mix live sound, and support artist needs",
      dates: "2016 - 2018",
    },
    {
      title: "DJ",
      company: "Le Loft",
      location: "Rivière-du-Loup, QC",
      description: "Mixed music to create the atmosphere in the restaurant",
      dates: "2016 - 2018",
    },
    {
      title: "Accompanist for Vocal Jazz Ensemble",
      company: "ÉMAC",
      location: "Rivière-du-Loup, QC",
      description: "Played piano accompaniment for the choir during rehearsals",
      dates: "2013 - 2015",
    },
  ];

  const contractorWorkExperiences = [
    {
      title: "Arrangement & Backing Tracks for Trio Temps Libre",
      company: "",
      description:
        "Created arrangements and backing tracks for various jazz trio projects",
      dates: "2018 - 2023",
    },
    {
      title: "Audio Mixing: The Four",
      company: "",
      description: "Mixed a single by artist Rose Adam",
      dates: "2022",
    },
    {
      title: "Music Production: On Est Loisir",
      company: "",
      description:
        "Full production and arrangement of a song for Cégep de Rivière-du-Loup",
      dates: "2021",
      hyperlink: "https://www.youtube.com/watch?v=vNMUY8s-gsw",
    },
    {
      title: "Jazz Pianist in Retirement Homes",
      company: "",
      description: "Performed in a jazz trio for concerts in retirement homes",
      dates: "2018 - 2020",
    },
    {
      title: "Music for Video: Livres d'Artistes",
      company: "",
      description: "Composed music for the promotional video of an art exhibit",
      dates: "2019",
      hyperlink: "https://youtu.be/wAJ95dwyzjc?t=44",
    },
    {
      title: "Audio Mixing: Sunflower",
      company: "",
      description: "Mixed a single by artist Mojarke",
      dates: "2019",
    },
    {
      title: "Audio & Video Mixing: Graduation Concert",
      company: "",
      description:
        "Mixed and edited the final concert recording for Cégep St-Laurent's music program",
      dates: "2019",
    },
    {
      title: "Arrangement: St-Laurent",
      company: "",
      description: "Created flute arrangement for a song by Chassepareil",
      dates: "2018",
    },
    {
      title: "Music for Film: In Loving Memory",
      company: "",
      description: "Composed original music for a short film",
      dates: "2018",
      hyperlink: "https://www.youtube.com/watch?v=_eXK9gLwRJE",
    },
    {
      title: "Freelance DJ & Producer",
      company: "",
      description:
        "DJ for various events (parties, corporate events, proms, live shows)",
      dates: "2014 - 2018",
    },
  ];

  const awards = [
    {
      name: "Studio Jupiter Award",
      description: "Cégeps en spectacle",
      year: 2018,
      hyperlink:
        "https://www.cegepsl.qc.ca/nouvelles/cegeps-en-spectacle-emile-tremblay-remporte-le-prix-studio-jupiter/",
    },
    {
      name: "Local Final Winner",
      description: "Cégeps en spectacle",
      year: 2017,
    },
    {
      name: "Local Final Winner + Audience Choice Award",
      description: "Cégeps en spectacle",
      year: 2015,
      hyperlink:
        "https://www.infodimanche.com/actualites/culturel/281464/emile-tremblay-remporte-la-finale-locale-de-cegeps-en-spectacle",
    },
    {
      name: "Local Final Winner",
      description: "Secondaire en spectacle",
      year: 2014,
    },
    {
      name: "Gold Medalist: Classical Piano Competitions",
      description: "Various classical piano contests",

      year: "2005-2016",
    },
  ];
  const interests = [
    "Music Production",
    "Sound Design",
    "Live Sound Engineering",
    "Music Composition",
    "Audio Mixing",
    "Jazz Music",
  ];
  return (
    <article className=" mx-auto max-w-3xl px-4 font-sans text-gray-700">
      <div className="flex w-full justify-between">
        <Button
          asChild
          variant="outline"
          className="border-none bg-inherit p-2"
        >
          <Link href="/">
            <ArrowLeft className="size-6" />
          </Link>
        </Button>
      </div>

      <section id="name" className="space-y-4 pb-8">
        <h1 className="pt-8 text-4xl font-bold text-gray-900">
          Émile Tremblay
        </h1>
        <p>
          Versatile and hands-on audio professional with a background in jazz
          composition and years of experience in both music production and
          technical audio work. Comfortable behind the DAW or the mixing board,
          I produce, mix, and design sound with precision using Ableton Live,
          while also handling live setups, system troubleshooting, and clean
          signal routing with confidence. Whether in the studio or on stage, I
          bring creativity, technical know-how, and a perfectly coiled XLR cable
          every time.
        </p>
      </section>
      <section id="skills" className="space-y-4 pb-8">
        <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
        <ul className="space-y-2">
          {musicSkills.map((skill: any) => (
            <li className=" pl-4" key={skill}>
              • {skill}
            </li>
          ))}
        </ul>
      </section>
      <section id="workexperience" className="space-y-4 pb-8">
        <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
        <Tabs defaultValue={tab2} className="">
          <TabsList className="mb-4 border bg-gray-100">
            <TabsTrigger key={tab1} value={tab1}>
              Employee
            </TabsTrigger>
            <TabsTrigger key={tab2} value={tab2}>
              Contractor
            </TabsTrigger>
          </TabsList>

          <TabsContent value={tab1} key={tab1} className="space-y-4">
            {employeWorkExperiences.map((experience: any) => (
              <div
                key={experience.title!}
                className="rounded border p-4 hover:bg-gray-100"
              >
                {/* <Separator className="" /> */}
                <div className="relative space-y-2">
                  <div className=" md:flex md:flex-wrap md:items-center md:justify-between md:gap-1">
                    <h3 className="shrink-0 text-lg font-semibold leading-none text-gray-900">
                      {experience.title}
                    </h3>
                    <div className="item flex h-5 shrink-0 items-center space-x-4 text-sm">
                      <div className="truncate">{experience.company}</div>
                      <Separator
                        className="hidden sm:block"
                        orientation="vertical"
                      />
                      <div className="hidden sm:block">
                        {experience.location}
                      </div>
                      <Separator orientation="vertical" />
                      <div className="shrink-0">{experience.dates}</div>
                    </div>
                  </div>
                  <Separator className="" />
                  <div className="pt-2">
                    <div className="text-sm text-gray-500">
                      • {experience.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value={tab2} key={tab2} className="space-y-4">
            {contractorWorkExperiences.map((experience: any) => (
              <div
                key={experience.title!}
                className="rounded border p-4 hover:bg-gray-100"
              >
                <div className="relative space-y-2">
                  <div className=" md:flex md:flex-wrap md:items-center md:justify-between md:gap-1">
                    <h3 className="shrink-0 text-lg font-semibold leading-none text-gray-900">
                      {experience.title}
                    </h3>
                    <div className="item flex h-5 shrink-0 items-center space-x-4 text-sm">
                      <div className="shrink-0">{experience.dates}</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="pt-2">
                    <div className="text-sm text-gray-500">
                      • {experience.description}
                    </div>
                    {experience.hyperlink && (
                      <div className="pt-2 text-sm text-gray-500">
                        • Link:{" "}
                        <Link
                          href={experience.hyperlink}
                          target="_blank"
                          className=" text-blue-500 underline"
                        >
                          {experience.hyperlink}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </section>

      <section id="awards" className="space-y-4 pb-8">
        <h2 className="text-2xl font-bold text-gray-900">Awards</h2>
        {awards.map((award: any) => (
          <div className="space-y-2 rounded border p-4" key={award.name}>
            <div className="md:flex md:items-center md:justify-between md:gap-1">
              <h3 className="shrink-0 text-lg font-semibold leading-none text-gray-900">
                {award.name}
              </h3>
              <div className="flex h-5 shrink-0 items-center space-x-4 text-sm">
                <div className="truncate">{award.description}</div>
                <Separator orientation="vertical" />
                <div className=" shrink-0">{award.year}</div>
              </div>
            </div>
            {award.hyperlink && <Separator />}
            {award.hyperlink && (
              <div className="">
                <div className="truncate pt-2 text-sm text-gray-500">
                  • Link:{" "}
                  <Link
                    href={award.hyperlink}
                    target="_blank"
                    className=" text-blue-500 underline"
                  >
                    {award.hyperlink}
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {interests.length > 0 && (
        <section className="space-y-4 pb-8">
          <h2 className="text-2xl font-bold text-gray-900">Interests</h2>
          <ul className="flex flex-wrap gap-2">
            {interests.map((interest: any) => (
              <li
                key={interest}
                className="flex-auto rounded-xl border px-4 py-2 text-center text-sm "
              >
                {interest}
              </li>
            ))}
          </ul>
        </section>
      )}
      <section id="api"></section>
    </article>
  );
}
