import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

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
        className={`${inter.className} max-w-screen-md flex mx-auto md:mt-16 mt-8 justify-center items-center `}
      >
        <main className="flex md:gap-16 gap-4 md:flex-row flex-col mx-4 md:mx-0 w-[768px]"><Sidebar/> {children}</main>
      </body>
    </html>
  );
}
