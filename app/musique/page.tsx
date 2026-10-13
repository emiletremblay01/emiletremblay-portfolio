import Portfolio from "@/components/portfolio";
export const metadata = {
  description:
    "Composition, piano, production et mixage : découvrez les expériences musicales, les projets et les distinctions d’Émile Tremblay.",
  alternates: { canonical: "/musique" },
  title: "Musique & son",
};
export default function Musique() {
  return <Portfolio mode="music" />;
}
