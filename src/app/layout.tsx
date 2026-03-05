import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "GBM Solutions - Pakistan's Premier ERP Solution",
  description:
    "Transform your business with Pakistan's first locally developed ERP software. FBR compliant digital invoicing, real-time analytics, and comprehensive business management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrains.variable} antialiased font-sans bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
