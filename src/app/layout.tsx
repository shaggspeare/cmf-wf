import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./css/styles.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic-ext"],
  weight: ["300", "500", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic-ext"],
  weight: ["300", "500", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valeria Vari - CMF course",
  description:
    "The course is an author's program in furniture design and CMF Design by Valeria Vari, starting September 25, 2025",
  openGraph: {
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
