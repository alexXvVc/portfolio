import type { Metadata } from "next";
import { Anton, Space_Grotesk } from "next/font/google";
import CenterMenu from "@/components/CenterMenu";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alejandro Vázquez Cobo",
  description: "Portfolio de Alejandro Vázquez Cobo — proyectos y CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-ink">
        <CenterMenu />
        <main>{children}</main>
      </body>
    </html>
  );
}
