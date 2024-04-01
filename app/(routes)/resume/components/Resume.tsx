"use client";
import { resume } from "@/types";
import { Card } from "@/components/ui/card-hover-effect";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkExperienceCard } from "./WorkExperienceCard";
import { Separator } from "@/components/ui/separator";
export default function Resume({ resume }: { resume: any }) {
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
    <article className=" mx-auto space-y-4 px-4 font-sans text-gray-700">
      <h1 className="text-4xl font-bold text-gray-900">{name}</h1>
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
      <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
      <ul className="space-y-2">
        {skills.map((skill: any) => (
          <li className=" pl-4" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
      <Tabs defaultValue="other" className="max-w-[600px]">
        <TabsList>
          <TabsTrigger value="programming">Programming-Related</TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </TabsList>
        <TabsContent value="programming">
          {ProgrammingRelatedWorkExperiences.map((experience: any) => (
            <div className="space-y-4">
              <Separator className="" />
              <div className="space-y-1">
                <h3 className="text-base ">{experience.title}</h3>
                <div className="flex h-5 items-center space-x-4 text-sm">
                  <div>{experience.company}</div>
                  <Separator orientation="vertical" />
                  <div>{experience.location}</div>
                  <Separator orientation="vertical" />
                  <div>{experience.dates}</div>
                </div>
                {experience.responsibilities.map((responsibility: any) => (
                  <p
                    className="text-sm text-muted-foreground"
                    key={responsibility}
                  >
                    {responsibility}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="other" className="space-y-4">
          {" "}
          {NonProgrammingRelatedWorkExperiences.map((experience: any) => (
            <div className="rounded border p-2">
              {/* <Separator className="" /> */}
              <div className="space-y-2">
                <h3 className="text-lg leading-none text-gray-900">
                  {experience.title}
                </h3>
                <div className="flex h-5 items-center space-x-4 text-sm">
                  <div>{experience.company}</div>
                  <Separator orientation="vertical" />
                  <div>{experience.location}</div>
                  <Separator orientation="vertical" />
                  <div>{experience.dates}</div>
                </div>
                <div>
                  {experience.responsibilities.map((responsibility: any) => (
                    <p className=" pl-4 text-sm " key={responsibility}>
                      {responsibility}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>

      <h2>Education</h2>
      {education.map((education: any) => (
        <div key={education.degree}>
          <h4>{education.degree}</h4>
          <p>
            {education.school}
            <br />
            {education.location}
            <br />
            {education.year}
          </p>
        </div>
      ))}
      {certifications.length > 0 && (
        <>
          <h2>Certifications</h2>
          <ul>
            {certifications.map((certification: any) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </>
      )}
      {interests.length > 0 && (
        <>
          <h2>Interests</h2>
          <ul>
            {interests.map((interest: any) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
}
