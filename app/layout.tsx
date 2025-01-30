//import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Portfolio | Thurein",
//   description: "This is the portfolio website of Thurein, Software Developer, for the purpose of uploading Next.js app on Vercel.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
  <meta name="keywords" content="Next.js, SEO, React, JavaScript" />
  <meta name="author" content="Thurein Win Htun" />
  <meta name="description" content="This is the portfolio website I made to showcase my skills and coding journey." />
  <meta property="og:title" content="Portfolio | Thurein Win Htun" />
  <meta property="og:description" content="This is the portfolio website I made to showcase my skills and coding journey." />
  <meta property="og:image" content="/profile.jpg" />
  <meta property="og:url" content="https://thurein-dev-portfolio.vercel.app" />
</Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
