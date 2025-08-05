import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IronFit - Transform Your Body, Transform Your Life",
  description: "Join IronFit, the premier fitness destination with state-of-the-art equipment, expert trainers, and a supportive community. Transform your body and mind with our comprehensive fitness programs.",
  keywords: "gym, fitness, personal training, group classes, strength training, cardio, workout, health, wellness",
  authors: [{ name: "IronFit Team" }],
  creator: "IronFit",
  publisher: "IronFit",
  openGraph: {
    title: "IronFit - Transform Your Body, Transform Your Life",
    description: "Join IronFit, the premier fitness destination with state-of-the-art equipment, expert trainers, and a supportive community.",
    url: "https://ironfit.com",
    siteName: "IronFit",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "IronFit Gym - Modern Fitness Facility",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IronFit - Transform Your Body, Transform Your Life",
    description: "Join IronFit, the premier fitness destination with state-of-the-art equipment, expert trainers, and a supportive community.",
    images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
