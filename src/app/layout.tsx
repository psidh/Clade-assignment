import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const general_sans = localFont({ src: "./GeneralSans-Regular.otf" });

export const metadata: Metadata = {
  title: "Clade Internship Assignment",
  description: "By Philkhana Sidharth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={general_sans.className}>
      
        {children}
      </body>
    </html>
  );
}
