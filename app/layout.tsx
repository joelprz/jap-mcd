import React from "react";
import type { Metadata } from "next";

import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Burger Up",
  description: "Burger ordering app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white _dark">
      <body className="h-full bg-white dark:bg-darkMcBlack">
        <div className="min-h-full">
          <Navigation />
          <div className="px-4 pb-4 sm:px-10 sm:pb-10 pt-[100px]">{children}</div>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
