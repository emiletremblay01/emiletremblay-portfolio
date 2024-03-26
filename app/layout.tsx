import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/utils/Providers";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { getTechnologies } from "@/actions/getTechnologies";
import Home from "./page";
import { tech } from "@/types";
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-robotomono",
});

export const metadata: Metadata = {
  title: "Emile Tremblay Portfolio",
  description: "My personal portfolio",
};
const queryClient = new QueryClient();
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // try {
  //   await queryClient.prefetchQuery({
  //     queryKey: ["technologies"],
  //     queryFn: getTechnologies,
  //   });
  // } catch (error) {
  //   console.error(error);
  // }
  const data = await getTechnologies();

  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} bg-gray-950 font-mono text-gray-300`}
      >
        {/* <Provider>
          <HydrationBoundary state={dehydrate(queryClient)}> */}
        <Home data={data} />
        {/* </HydrationBoundary>
        </Provider> */}
      </body>
    </html>
  );
}
