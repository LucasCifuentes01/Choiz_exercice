import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Choiz",
  description: "Comienza tu tratamiento en tres pasos",
};

const larsseit = localFont({ src: "./Larsseit.woff2" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={larsseit.className}>{children}</body>
    </html>
  );
}
