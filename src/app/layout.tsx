import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Which Character Defines You?",
  description: "Choose the character that defines you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
