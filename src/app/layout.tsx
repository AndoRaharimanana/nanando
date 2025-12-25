import type { Metadata } from "next";
import "rsuite/dist/rsuite.min.css";
import "./globals.css";
import { Poppins } from "./ui/font";

export const metadata: Metadata = {
  title: "Ando Raharimanana",
  description: "Ando Raharimanana CV online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Poppins.className}>{children}</body>
    </html>
  );
}
