import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-robotomono",
});

export const metadata: Metadata = {
  title: "Emile Tremblay Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} bg-gray-950   font-mono text-gray-300`}
      >
        {children}
      </body>
    </html>
  );
}
