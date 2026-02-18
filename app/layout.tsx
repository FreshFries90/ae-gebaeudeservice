import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AE Gebäudeservice - Sauberkeit in 24h - Jetzt Anrufen",
  description:
    "Maximale Sauberkeit. Minimaler Aufwand. Ihr professioneller Partner für gewerbliche Reinigungslösungen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`scroll-smooth ${inter.variable}`}>
      <head>
        {/* Material Icons / Symbols wie im HTML */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700&display=swap"
        />
      </head>
      <body className="bg-surface-light dark:bg-background-dark text-text-main dark:text-gray-100 font-display selection:bg-primary selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
