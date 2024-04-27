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
export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}

export default function Resume({ resume }: { resume: any }) {
  const [isApiShown, setIsApiShown] = useState(false);
  // {
  //   _id: '66030ded79f7da075b725bfa',
  //   name: 'Émile Tremblay',
  //   birthDate: '1998-02-17',
  //   location: 'Montreal, QC',
  //   phone: '418 551-8482',
  //   email: 'emiletremblay01@gmail.com',
  //   summary: 'Detail-oriented React developer with experience in building and maintaining web applications. Skilled in translating designs into functional user interfaces. Dedicated to delivering high-quality products with a focus on excellence. Musician and composer in my free time.',
  //   skills: [
  //     'Proficiency in JavaScript, HTML and JSON',
  //     'Great communication skills and ability to work in a team',
  //     'Keen eye for design and meticulous',
  //     'Strong desire to learn and improve, as well as to share knowledge with others',
  //     'Highly creative and problem-solving oriented'
  //   ],
  //   workExperience: [
  //     {
  //       title: 'Freelance developer - contract',
  //       company: 'Périphérie Le Mag',
  //       location: 'Montreal, QC',
  //       dates: '2022-present',
  //       responsibilities: [Array],
  //       programmingRelated: true
  //     },
  //     {
  //       title: 'Assistant Manager',
  //       company: 'Cineplex Odeon Quartier Latin',
  //       location: 'Montreal, QC',
  //       dates: '2022-present',
  //       responsibilities: [Array],
  //       programmingRelated: false
  //     },
  //     {
  //       title: 'Co-worker',
  //       company: 'IKEA',
  //       location: 'Montreal, QC',
  //       dates: '2019-2021',
  //       responsibilities: [Array],
  //       programmingRelated: false
  //     },
  //     {
  //       title: 'Lead stage technician',
  //       company: 'Cegep Saint-Laurent',
  //       location: 'Montreal, QC',
  //       dates: '2017-2019',
  //       responsibilities: [Array],
  //       programmingRelated: false
  //     },
  //     {
  //       title: 'Tour guide',
  //       company: "École de l'Anse",
  //       location: 'Notre-Dame-du-Portage, QC',
  //       dates: '2016-2018',
  //       responsibilities: [Array],
  //       programmingRelated: false
  //     },
  //     {
  //       title: 'Freelance musician',
  //       company: 'Self-employed',
  //       location: 'Montreal, QC',
  //       dates: '2015-present',
  //       responsibilities: [Array],
  //       programmingRelated: false
  //     }
  //   ],
  //   education: [
  //     {
  //       degree: 'Web Development ACS',
  //       school: 'College Rosemont',
  //       location: 'Montreal, QC',
  //       year: '2021-2022'
  //     },
  //     {
  //       degree: 'Professional Music Diploma, Composition',
  //       school: 'Cegep Saint-Laurent',
  //       location: 'Montreal, QC',
  //       year: '2016-2019'
  //     },
  //     {
  //       degree: 'International Baccalaureate',
  //       school: 'Rivière-du-Loup High School',
  //       location: 'Rivière-du-Loup, QC',
  //       year: '2010-2015'
  //     }
  //   ],
  //   certifications: [],
  //   languages: [
  //     { name: 'French', level: 'Native' },
  //     { name: 'English', level: 'Fluent' }
  //   ],
  //   interests: [ 'Music', 'Cinema', 'Video games', 'Tennis', 'Design' ]

  // }
  const toggleApi = () => {
    setIsApiShown(!isApiShown);
  };
  const {
    name,
    location,
    phone,
    email,
    summary,
    skills,
    workExperience,
    education,
    certifications,
    interests,
    languages,
  } = resume;

  const tab1 = "programming";
  const tab2 = "other";

  const NonProgrammingRelatedWorkExperiences = workExperience.filter(
    (experience: any) => !experience.programmingRelated,
  );
  const ProgrammingRelatedWorkExperiences = workExperience.filter(
    (experience: any) => experience.programmingRelated,
  );
  function formatLanguages(languages: any[]) {
    const formattedLanguages = languages.map(
      (lang) => `${lang.name.toLowerCase()} (${lang.level.toLowerCase()})`,
    );
    const formattedString = "Speaks " + formattedLanguages.join(" and ");
    return (
      formattedString.charAt(0).toUpperCase() + formattedString.slice(1) + "."
    );
  }
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
        <div className="flex items-center space-x-2">
          <Label htmlFor="api-display">Show API endpoints</Label>
          <Switch
            checked={isApiShown}
            onCheckedChange={toggleApi}
            id="api-display"
          />
        </div>
      </div>
      {isApiShown && <ApiList />}
      <section id="name" className="space-y-4 pb-8">
        <h1 className="pt-8 text-4xl font-bold text-gray-900">{name}</h1>
        <p>
          {location}
          <br />
          {phone}
          <br />
          {email}
        </p>
        <p>
          {summary}
          <span> {formatLanguages(languages)}</span>
        </p>
      </section>
      <section id="skills" className="space-y-4 pb-8">
        <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
        <ul className="space-y-2">
          {skills.map((skill: any) => (
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
              Programming-Related
            </TabsTrigger>
            <TabsTrigger key={tab2} value={tab2}>
              Other
            </TabsTrigger>
          </TabsList>
          <TabsContent key={tab1} value={tab1}>
            {ProgrammingRelatedWorkExperiences.map((experience: any) => (
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
                    {experience.responsibilities.map((responsibility: any) => (
                      <p
                        className=" text-sm text-gray-500 "
                        key={responsibility}
                      >
                        • {responsibility}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value={tab2} key={tab2} className="space-y-4">
            {NonProgrammingRelatedWorkExperiences.map((experience: any) => (
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
                    {experience.responsibilities.map((responsibility: any) => (
                      <p
                        className=" text-sm text-gray-500 "
                        key={responsibility}
                      >
                        • {responsibility}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </section>

      <section id="education" className="space-y-4 pb-8">
        <h2 className="text-2xl font-bold text-gray-900">Education</h2>
        {education.map((education: any) => (
          <div
            className="rounded border p-4 md:flex md:items-center md:justify-between md:gap-1"
            key={education.degree}
          >
            <h4 className="shrink-0 text-lg font-semibold leading-none text-gray-900">
              {education.degree}
            </h4>
            <div className="flex h-5 shrink-0 items-center space-x-4 text-sm">
              <div className="truncate">{education.school}</div>
              {/* <Separator orientation="vertical" />
              <div>{education.location}</div> */}
              <Separator orientation="vertical" />
              <div className=" shrink-0">{education.year}</div>
            </div>
          </div>
        ))}
      </section>
      {certifications.length > 0 && (
        <section className=" space-y-4 pb-8">
          <h2 className="text-2xl font-bold text-gray-900">Certifications</h2>
          <ul>
            {certifications.map((certification: any) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </section>
      )}
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
