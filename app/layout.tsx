import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import LanguageContextProvider from "@/context/language-context";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matías Roje — Personal Portfolio",
  description:
    "Matías is a experienced Software Developer and DevOps Engineer graduated from Le Wagon Berlin and DST",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${raleway.className} hyphens-auto bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-100 sm:pt-36`}
      >
        <ThemeContextProvider>
          <LanguageContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
            </ActiveSectionContextProvider>
            <Footer />
            <Toaster position="top-right" />
          </LanguageContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
