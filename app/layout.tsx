import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AxeCoreRunner } from "@/components/dev/AxeCoreRunner";
import { SkipLink } from "@/components/ui/SkipLink";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A11y Demo",
  description: "웹 접근성을 테스트를 위한 데모 웹사이트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AxeCoreRunner />
        <SkipLink targetId="main-content" />
        <div id="main-content" tabIndex={-1} className="flex-1 flex flex-col outline-none">
          {children}
        </div>
      </body>
    </html>
  );
}
