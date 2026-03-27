import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const avantGarde = localFont({
  src: [
    {
      path: "./propuesta/fonts/ITC-Avant-Garde-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./propuesta/fonts/ITC-Avant-Garde-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./propuesta/fonts/ITC-Avant-Garde-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avant-garde",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guille.A/Frutempo",
  description: "Esta propuesta tiene como objetivo transformar Frutempo en una marca sólida, visible y en constante crecimiento, mediante la implementación de un sistema integral que abarca marketing, ventas, distribución y presencia digital.",
   icons: {
    icon: "/img/wolf.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${avantGarde.variable} ${geistMono.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
