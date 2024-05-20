import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/components/Sidebar";

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
      <body
        className={`${inter.className} max-w-screen-md flex mx-auto md:mt-16 mt-8 justify-center items-center `}
      >
        <main className="flex md:gap-16 gap-4 md:flex-row flex-col mx-4 md:mx-0"><Sidebar/> {children}</main>
      </body>
    </html>
  );
}
