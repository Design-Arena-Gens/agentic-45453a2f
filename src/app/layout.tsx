import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title:
    "1-3 Aylık Ateşli Bebekte İnvaziv Bakteriyel Enfeksiyonlar | Kongre Sunumu",
  description:
    "1-3 aylık ateşli bebeklerde invaziv bakteriyel enfeksiyon yönetimi için kanıta dayalı sunum taslağı, risk tabakalandırma, tanı ve tedavi stratejileri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
