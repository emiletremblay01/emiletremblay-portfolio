import Link from "next/link";
import Image from "next/image";
import data from "@/data/portfolio.json";
import SectionNav from "./section-nav";
export type Mode = "general" | "coding" | "music";
type Entry = {
  dates: string;
  title: string;
  company?: string;
  description?: string;
  tags?: string[];
  bullets?: string[];
  hyperlink?: string;
  location?: string;
};
type Project = {
  title: string;
  description: string;
  dates?: string;
  href?: string;
  hyperlink?: string;
  secondaryHref?: string;
  image?: string;
  tags?: string[];
};
export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
function Experience({ entry }: { entry: Entry }) {
  return (
    <article className="experience">
      <p className="date">{entry.dates}</p>
      <div>
        <h3>
          {entry.title}
          {entry.company && <span className="company"> · {entry.company}</span>}
        </h3>
        {entry.location && <p className="location">{entry.location}</p>}
        {entry.description && <p>{entry.description}</p>}
        {entry.bullets && (
          <ul className="responsibilities">
            {entry.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
        {entry.tags && <Tags items={entry.tags} />}
      </div>
    </article>
  );
}
export default function Portfolio({ mode = "general" }: { mode?: Mode }) {
  const specialist = mode === "general" ? null : data[mode];
  const title = specialist?.title ?? "Gestion, service & création";
  const about = specialist?.about ?? data.profile.about;
  const experience: Entry[] = specialist?.experience ?? data.general;
  const projects: Project[] = mode === "general" ? [] : data[mode].projects;
  const sections = [
    { id: "apropos", label: "À propos" },
    { id: "experience", label: "Expérience" },
    ...(projects.length ? [{ id: "projets", label: "Projets" }] : []),
    { id: "formation", label: "Formation" },
    ...(mode === "music"
      ? [{ id: "distinctions", label: "Distinctions" }]
      : []),
    { id: "contact", label: "Contact" },
  ];
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <div className={`portfolio ${mode}`}>
        <header className="sidebar">
          <div>
            <Link className="eyebrow home-link" href="/">
              ÉT <span>MONTRÉAL, QUÉBEC</span>
            </Link>
            <h1>
              <Link href="/">
                Émile
                <br />
                Tremblay<span className="name-dot">.</span>
              </Link>
            </h1>
            <p className="role">{title}</p>
            <p className="tagline">
              {specialist?.subtitle ?? data.profile.intro}
            </p>
            <nav className="modes" aria-label="Choisir un parcours">
              {(
                [
                  ["general", "/", "Parcours"],
                  ["coding", "/coding", "Coding"],
                  ["music", "/musique", "Musique"],
                ] as const
              ).map(([key, href, label]) => (
                <Link
                  href={href}
                  key={key}
                  aria-current={mode === key ? "page" : undefined}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <SectionNav sections={sections} />
          </div>
          <div className="sidebar-bottom">
            <p>Les gens. Les idées. Le souci du détail.</p>
            <div className="socials">
              <a href={`mailto:${data.profile.email}`}>
                Courriel <span aria-hidden="true">↗</span>
              </a>
              <a
                href={data.profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <Link href={`/cv${mode === "general" ? "" : `?volet=${mode}`}`}>
                CV <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </header>
        <main id="contenu" className="content">
          <section id="apropos">
            <div className="section-heading">
              <span>01</span>
              <h2>À propos</h2>
            </div>
            <div className="intro">
              {about.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <Tags items={specialist?.skills ?? data.profile.skills} />
          </section>
          <section id="experience">
            <div className="section-heading">
              <span>02</span>
              <h2>Expérience</h2>
            </div>
            <div>
              {experience.map((entry) => (
                <Experience
                  key={entry.title + entry.company + entry.dates}
                  entry={entry}
                />
              ))}
            </div>
            {mode === "general" && (
              <div className="other-paths">
                <p>Deux autres facettes de mon parcours</p>
                <Link href="/coding">
                  Développement web <span aria-hidden="true">↗</span>
                </Link>
                <Link href="/musique">
                  Musique et son <span aria-hidden="true">↗</span>
                </Link>
              </div>
            )}
            <Link
              className="text-link"
              href={`/cv${mode === "general" ? "" : `?volet=${mode}`}`}
            >
              Consulter mon CV <span aria-hidden="true">↗</span>
            </Link>
          </section>
          {projects.length > 0 && (
            <section id="projets">
              <div className="section-heading">
                <span>03</span>
                <h2>
                  {mode === "music" ? "Projets & collaborations" : "Projets"}
                </h2>
              </div>
              <div className="projects">
                {projects.map((project) => (
                  <article
                    className={`project ${project.image ? "has-image" : ""}`}
                    key={project.title}
                  >
                    {project.image && (
                      <Image
                        src={project.image}
                        width={220}
                        height={145}
                        alt={`Aperçu du projet ${project.title}`}
                        className="project-image"
                        sizes="(max-width: 600px) 100vw, 160px"
                      />
                    )}
                    <div>
                      {project.dates && <p className="date">{project.dates}</p>}
                      <h3>
                        {project.href || project.hyperlink ? (
                          <a
                            href={project.href ?? project.hyperlink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.title} <span aria-hidden="true">↗</span>
                          </a>
                        ) : (
                          project.title
                        )}
                      </h3>
                      <p>{project.description}</p>
                      {project.tags && <Tags items={project.tags} />}
                      {project.secondaryHref && (
                        <a
                          className="secondary-link"
                          href={project.secondaryHref}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Voir le tableau de bord ↗
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
          <section id="formation">
            <div className="section-heading">
              <span>{projects.length ? "04" : "03"}</span>
              <h2>Formation</h2>
            </div>
            {data.education
              .filter(
                (e) =>
                  mode === "general" ||
                  (mode === "coding"
                    ? e.title.includes("web")
                    : e.title.includes("musique")),
              )
              .map((entry) => (
                <Experience key={entry.title} entry={entry} />
              ))}
          </section>
          {mode === "music" && (
            <section id="distinctions">
              <div className="section-heading">
                <span>05</span>
                <h2>Distinctions</h2>
              </div>
              {data.music.awards.map((award) => (
                <article className="award" key={award.name + award.year}>
                  <p className="date">{award.year}</p>
                  <div>
                    <h3>
                      {award.hyperlink ? (
                        <a
                          href={award.hyperlink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {award.name} ↗
                        </a>
                      ) : (
                        award.name
                      )}
                    </h3>
                    <p>{award.description}</p>
                  </div>
                </article>
              ))}
            </section>
          )}
          {mode === "general" && (
            <div className="interests">
              <p className="eyebrow">EN DEHORS DU TRAVAIL</p>
              <p>{data.profile.interests.join(" · ")}</p>
            </div>
          )}
          <section id="contact" className="contact">
            <p className="eyebrow">UNE OCCASION DE COLLABORER ?</p>
            <h2>
              Parlons-en<span>.</span>
            </h2>
            <p>Pour un poste, un projet ou simplement faire connaissance.</p>
            <a className="contact-email" href={`mailto:${data.profile.email}`}>
              {data.profile.email} <span aria-hidden="true">↗</span>
            </a>
            <a className="phone" href="tel:+14185518482">
              {data.profile.phone}
            </a>
          </section>
          <footer>
            © {new Date().getFullYear()} Émile Tremblay · Montréal
            <br />
            <span>Gestion, création et un peu de curiosité.</span>
          </footer>
        </main>
      </div>
    </>
  );
}
