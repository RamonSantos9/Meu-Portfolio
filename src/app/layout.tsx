import type { Metadata } from "next";
import { Sora, Space_Grotesk, Poppins } from "next/font/google";
import "./globals.css";

const soraFont = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: "variable",
});

const spaceGroteskFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: "variable",
});

const poppinsFont = Poppins({
  subsets: ["latin"],
  variable: "--font-space-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ramon Santos",
  description: "Criado por Ramon Santos",
  icons: {
    icon: "/assets/favicon.svg",
    apple: "/assets/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${soraFont.variable} ${spaceGroteskFont.variable} ${poppinsFont.variable} antialiased bg-zinc-950 text-gray-300 font-body`}
      >
        {children}
      </body>
    </html>
  );
}
