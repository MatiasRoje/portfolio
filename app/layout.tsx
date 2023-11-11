import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matías — Personal Portfolio",
  description:
    "Matías is a full stack web developer graduated from Le Wagon Berlin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} bg-gray-50 text-gray-950 h-[5000px] pt-28 sm:pt-36`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
