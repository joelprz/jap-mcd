import type { Metadata } from "next";

import "./globals.css";
import Navigation from "./components/navigation";

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
    <html lang="en" className="h-full bg-white">
      <body className="h-full">
        <div className="min-h-full">
          <Navigation />
          <div className="p-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
