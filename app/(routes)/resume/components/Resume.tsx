import { resume } from "@/types";
import { Card } from "@/components/ui/card-hover-effect";
export default function Resume({ resume }: { resume: resume }) {
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
  } = resume;
  return (
    <article className="prose mx-auto font-sans">
      <h1>{name}</h1>
      <p>
        {location}
        <br />
        {phone}
        <br />
        {email}
      </p>
      <p>{summary}</p>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <h2>Work Experience</h2>
      {workExperience.map((experience) => (
        <div key={experience.title}>
          <h3>{experience.title}</h3>
          <p>{experience.company}</p>
          <p>{experience.location}</p>
          <p>{experience.dates}</p>
          <ul>
            {experience.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
      <h2>Education</h2>
      <p>{education.degree}</p>
      <p>{education.school}</p>
      <p>{education.location}</p>
      <p>{education.year}</p>
      <h2>Certifications</h2>
      <ul>
        {certifications.map((certification) => (
          <li key={certification}>{certification}</li>
        ))}
      </ul>
    </article>
  );
}
