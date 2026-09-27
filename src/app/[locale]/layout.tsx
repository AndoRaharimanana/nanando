import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "rsuite/dist/rsuite.min.css";
import "../globals.css";
import { Poppins } from "../ui/font";

export const metadata: Metadata = {
  title: "Ando Raharimanana",
  description: "Ando Raharimanana CV online",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={Poppins.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
