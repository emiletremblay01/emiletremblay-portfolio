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
  // try {
  //   await queryClient.prefetchQuery({
  //     queryKey: ["technologies"],
  //     queryFn: getTechnologies,
  //   });
  // } catch (error) {
  //   console.error(error);
  // }

  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} bg-gray-950 font-mono text-gray-300`}
      >
        {/* <Provider>
          <HydrationBoundary state={dehydrate(queryClient)}> */}
        {/* <Home {...props} /> */}
        {children}
        {/* </HydrationBoundary>
        </Provider> */}
      </body>
    </html>
  );
}
