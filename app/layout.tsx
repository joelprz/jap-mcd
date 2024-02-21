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
          <div className="p-4 sm:p-10">{children}</div>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
