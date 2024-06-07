import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Navbar, SearchBox } from "@/components";
import Provider from "./Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDB Clone",
  description: "A clone of the IMDB Website",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "/icon/favicon.ico",
        href: "/icon/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Provider>
      </body>
    </html>
  );
}
