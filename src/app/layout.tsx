import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Chat",
  description: "Chat",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={[
        `${GeistSans.variable}`,
        "flex min-h-screen flex-col items-center justify-center",
      ].join(" ")}
    >
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
