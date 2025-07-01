import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Figtree } from "next/font/google"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mendygo",
  description: "AI that adapts – Lead generation for modern businesses.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },                     
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },  
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },  
    ],
    apple: "/apple-touch-icon.png",                                      
    other: [
      { rel: "manifest", url: "/site.webmanifest" },                
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${figtree.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
