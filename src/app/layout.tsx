import type { Metadata } from "next";
// import "./globals.css";
import "./css/styles.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "M.Philips - Webflow Ecommerce website template",
  description: "A seasoned UI/UX designer dedicated to bridging creativity with user-centric design principles",
  openGraph: {
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  viewport: "width=device-width, initial-scale=1",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-wf-page="68089cd72439612a4ce1e319"
      data-wf-site="68089cd72439612a4ce1e2e4"
    >
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          strategy="beforeInteractive"
        />
        <Script id="webfont-loader" strategy="beforeInteractive">
          {`
            WebFont.load({
              google: {
                families: [
                  "Poppins:300,regular,italic,500,600,700,800,900",
                  "Inter:300,regular,500,600,700,800,900,italic",
                ],
              },
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
