import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const url = "https://bcss.website";
const title = "BCSS";
const description = "The Bath Computer Science Society (BCSS) Website.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(url),
  keywords: "bcss, bath computer science society, university of bath",
  themeColor: "#fff",
  openGraph: {
    title,
    description,
    type: "website",
    url,
    images: {
      url: "/logo.svg",
      alt: "BCSS Logo",
    },
    locale: "en_GB",
  },
  viewport: "width=device-width, initial-scale=1",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className={`${inter.className} flex flex-col h-screen w-full dark:bg-zinc-900 dark:text-white bg-zinc-100 text-black`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
