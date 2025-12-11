import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legal Packages - Strategic Legal Services",
  description: "Choose the right legal package for your business needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
