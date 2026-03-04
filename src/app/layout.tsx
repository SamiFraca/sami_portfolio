import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samidev",
  description: "Portfolio made by samidev",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
      </head>
      <body
        className={`${inter.className}  flex mx-auto   justify-center items-center `}
      >
        <main className="flex flex-col w-full">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
