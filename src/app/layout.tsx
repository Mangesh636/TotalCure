import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";

import { NextUI } from "@/providers/next-ui";
import { cn } from "@/utils/cn";

const RobotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TotalCure",
  description:
    "TotalCure - An AI powered application to get health assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={cn("antialiased", RobotoSlab.className)}>
        <NextUI>{children}</NextUI>
      </body>
    </html>
  );
}
