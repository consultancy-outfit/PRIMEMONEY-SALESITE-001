import type { Metadata } from "next";
import "@/styles/globals.css";
import RootProvidersLayout from "@/layouts/root-providers-layout";
import { outfitFontFamily } from "@/assets/fonts/outfit";

export const metadata: Metadata = {
  title: "Prime Money | Smart Financial Solutions for the Modern Economy",
  description: `Prime Money offers innovative tools for smarter money management. From digital payments and savings to real-time insights and secure financial services, we help individuals and businesses take control of their finances.`,
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "icon",
        url: "/favicon.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "/favicon.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: {
      rel: "favicon.png",
      url: "/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
  openGraph: {
    title: "Prime Money | Smart Financial Solutions for the Modern Economy",
    description: `Prime Money offers innovative tools for smarter money management. From digital payments and savings to real-time insights and secure financial services, we help individuals and businesses take control of their finances.`,
    type: "website",
    images: [
      {
        url: "https://realmon.netlify.app/og-logo.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: `Prime Money offers innovative tools for smarter money management. From digital payments and savings to real-time insights and secure financial services, we help individuals and businesses take control of their finances.`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfitFontFamily.className} subpixel-antialiased`}>
        <RootProvidersLayout>{children}</RootProvidersLayout>
      </body>
    </html>
  );
}
