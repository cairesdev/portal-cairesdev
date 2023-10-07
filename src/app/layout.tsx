import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "João Caires | Full Stack Developer",
  description: " Meu portfolio website, construido com Next.js",
  themeColor: "#222",
  icons: {
    icon: "/favicon.ico",
  },
  //Open graphics
  openGraph: {
    title: "João Caires | Full Stack Developer",
    description: "Meu portfolio website,  construido com Next.js",
    url: "https://cairesdev.cloud",
    siteName: "João Caires | Full Stack Developer",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://cairesdev.cloud/og-image.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
