import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const bananaSummer = localFont({
  src: "./fonts/CreamBeige-q2Xg6.otf",
  variable: "--font-banana-summer",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Ida bagus perawita yasa",
  description: "Hi evrey one wellcome to my portofolio pages i hove evrey body like my portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`font-source-code antialiased background max-h-full `}
      >
        {children}
      </body>
    </html>
  );
}
