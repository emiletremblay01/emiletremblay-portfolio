import Link from "next/link";
import data from "@/data/portfolio.json";
import PrintButton from "@/components/print-button";
export const metadata = { title: "Curriculum vitæ" };
export default function CV({
  searchParams,
}: {
  searchParams: { volet?: string };
}) {
  const mode =
    searchParams.volet === "coding"
      ? "coding"
      : searchParams.volet === "music"
        ? "music"
        : "general";
  const specialised = mode === "general" ? null : data[mode];
  const entries = specialised?.experience ?? data.general;
  return (
    <div className="resume-page">
      <nav className="resume-toolbar">
        <Link
          href={
            mode === "general"
              ? "/"
              : mode === "coding"
                ? "/coding"
                : "/musique"
          }
        >
          ← Retour au portfolio
        </Link>
        <PrintButton />
      </nav>
      <main className="resume-sheet">
        <header>
          <p className="eyebrow">
            CURRICULUM VITÆ ·{" "}
            {mode === "general"
              ? "PARCOURS GÉNÉRAL"
              : mode === "coding"
                ? "DÉVELOPPEMENT WEB"
                : "MUSIQUE"}
          </p>
          <h1>Émile Tremblay</h1>
          <p>
            Montréal, QC · <a href="tel:+14185518482">418 551 8482</a> ·{" "}
            <a href={`mailto:${data.profile.email}`}>{data.profile.email}</a>
          </p>
          <a href="https://emile-tremblay.com">emile-tremblay.com</a>
        </header>
        <section>
          <h2>Profil</h2>
          <p>
            {specialised
              ? specialised.about.join(" ")
              : data.profile.about.slice(0, 2).join(" ")}{" "}
            Bilingue français et anglais.
          </p>
        </section>
        <section>
          <h2>Compétences</h2>
          <p>{(specialised?.skills ?? data.profile.skills).join(" · ")}</p>
        </section>
        <section>
          <h2>Expérience professionnelle</h2>
          {entries.map((e) => (
            <article key={e.title + e.dates}>
              <div className="resume-entry">
                <h3>
                  {e.title}
                  {e.company && ` — ${e.company}`}
                </h3>
                <span>{e.dates}</span>
              </div>
              <p>{e.description}</p>
              {"bullets" in e && e.bullets.length > 0 && (
                <ul>
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
          {mode === "general" && (
            <>
              <article>
                <h3>Développeur web contractuel — Depuis 2022</h3>
                <p>
                  Création et maintenance de sites et d’applications web selon
                  les besoins des clients.
                </p>
              </article>
              <article>
                <h3>Musicien et compositeur contractuel — Depuis 2015</h3>
                <p>
                  Composition, arrangement, production et mixage pour divers
                  projets.
                </p>
              </article>
            </>
          )}
        </section>
        {specialised && (
          <section>
            <h2>Projets {mode === "music" ? "et collaborations" : ""}</h2>
            {specialised.projects.map((p) => (
              <article key={p.title}>
                <h3>
                  {p.title}
                  {"dates" in p && ` — ${p.dates}`}
                </h3>
                <p>{p.description}</p>
              </article>
            ))}
          </section>
        )}
        <section>
          <h2>Formation</h2>
          {data.education.map((e) => (
            <p key={e.title}>
              <strong>{e.title}</strong> — {e.company} · {e.dates}
            </p>
          ))}
        </section>
        {mode === "music" && (
          <section>
            <h2>Distinctions</h2>
            {data.music.awards.map((a) => (
              <p key={a.name}>
                {a.name} — {a.description} · {a.year}
              </p>
            ))}
          </section>
        )}
        {mode === "general" && (
          <section>
            <h2>Intérêts</h2>
            <p>{data.profile.interests.join(" · ")}</p>
          </section>
        )}
      </main>
    </div>
  );
}
