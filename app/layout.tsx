import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://citara.ai"),
  title: "Citara — AI SEO Agency for Cosmetic Surgery Practices",
  description:
    "Citara is the AI SEO agency that gets cosmetic surgery practices recommended by ChatGPT, Perplexity, Gemini and Google AI Overviews — for high-value procedures like breast augmentation, body contouring, facelifts, tummy tucks and liposuction.",
  keywords: [
    "AI SEO for cosmetic surgery",
    "GEO for plastic surgeons",
    "generative engine optimization healthcare",
    "ChatGPT visibility cosmetic surgery",
    "AI SEO breast augmentation",
    "AI SEO body contouring",
    "AI SEO facelift",
    "AI SEO tummy tuck",
    "AI SEO liposuction",
    "Perplexity SEO medical aesthetics",
  ],
  applicationName: "Citara",
  authors: [{ name: "Citara Labs, Inc." }],
  openGraph: {
    type: "website",
    siteName: "Citara",
    title: "Citara — AI SEO Agency for Cosmetic Surgery Practices",
    description:
      "Get your cosmetic surgery practice recommended by ChatGPT, Perplexity, Gemini and Google AI Overviews — for breast augmentation, body contouring, facelifts, tummy tucks and liposuction.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Citara — AI SEO Agency for Cosmetic Surgery Practices",
    description:
      "Get your cosmetic surgery practice recommended by ChatGPT, Perplexity, Gemini and Google AI Overviews — for breast augmentation, body contouring, facelifts, tummy tucks and liposuction.",
  },
};

export const viewport: Viewport = {
  themeColor: "#06070a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${bricolage.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
