import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anjali Anilkumar | UI/UX Designer Portfolio",
  description:
    "Anjali Anilkumar, a passionate UI/UX Designer with expertise in crafting user-centric digital experiences, intuitive interfaces, and impactful visual designs across web and mobile platforms.",
  keywords: [
    "UI/UX Designer",
    "User Experience",
    "User Interface",
    "Product Design",
    "Design Thinking",
    "Web Design",
    "Mobile Design",
    "UX Research",
    "Wireframes",
    "Figma",
    "Sketch",
    "Anjali Anilkumar Portfolio",
    "Dubai UX Designer",
  ],
  authors: [
    {
      name: "Anjali Anilkumar",
      url: "https://www.linkedin.com/in/anjali-anilkumar13/",
    },
  ],
  creator: "Anjali Anilkumar",
  metadataBase: new URL("https://anjali-portfolio.com"), // Replace with the actual domain
  openGraph: {
    title: "Anjali Anilkumar | UI/UX Designer Portfolio",
    description:
      "Showcasing the design work of Anjali Anilkumar — where creativity meets functionality. Discover projects, UX case studies, and design insights.",
    url: "https://anjali-portfolio.com", // Replace with your actual URL
    siteName: "Anjali Portfolio",
    images: [
      {
        url: "https://anjali-portfolio.com/og-image.jpg", // Add a proper OG image URL
        width: 1200,
        height: 630,
        alt: "Anjali Anilkumar - UI/UX Designer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anjali Anilkumar | UI/UX Designer Portfolio",
    description:
      "Discover how Anjali crafts beautiful and effective user experiences through thoughtful design, UX strategy, and innovation.",
    images: ["https://anjali-portfolio.com/og-image.jpg"], // Same as OG image
    creator: "@anjaliux", // Add her Twitter handle if she has one
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth overflow-x-hidden"
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
