import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matías Roje — Personal Portfolio",
  description:
    "Matías is a full stack web developer graduated from Le Wagon Berlin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${raleway.className} bg-gray-50 pt-28 text-gray-950 sm:pt-36`}
      >
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
