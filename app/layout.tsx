import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const inter = localFont({
  src: "../public/fonts/Inter.woff2",
  display: "swap",
  variable: "--font-inter",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://emile-tremblay.com"),
  title: {
    default: "Émile Tremblay — Gestion, service & création",
    template: "%s | Émile Tremblay",
  },
  description:
    "Découvrez le parcours d’Émile Tremblay : gestion d’équipe, service à la clientèle, développement web et musique à Montréal.",
  openGraph: {
    title: "Émile Tremblay",
    description:
      "Gestion, service & création. Un parcours humain et polyvalent à Montréal.",
    locale: "fr_CA",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
