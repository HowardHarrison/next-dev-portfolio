import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Portfolio | Thurein Win Htun",
  description: "This is the portfolio website I made to showcase my skills and coding journey.",
  keywords: "Thurein Win Htun, Myanmar, Software Developer",
  openGraph: {
    title: "Portfolio | Thurein Win Htun",
    description: "This is the portfolio website I made to showcase my skills and coding journey.",
    images: "/profile.jpg",
    // url: "https://thurein-dev-portfolio.vercel.app",
  },
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
