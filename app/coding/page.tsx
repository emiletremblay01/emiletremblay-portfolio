import Portfolio from "@/components/portfolio";
export const metadata = {
  description:
    "Sites et applications web : découvrez les expériences et les projets de développement d’Émile Tremblay.",
  alternates: { canonical: "/coding" },
  title: "Développement web",
};
export default function Coding() {
  return <Portfolio mode="coding" />;
}
