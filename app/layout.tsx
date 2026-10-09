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
  title: "Citara — AI SEO Agency for ChatGPT, Perplexity & Google AI Search",
  description:
    "Citara is the AI SEO agency that gets your brand recommended by ChatGPT, Perplexity, Gemini and Google AI Overviews — while compounding your classic search rankings.",
  keywords: [
    "AI SEO agency",
    "generative engine optimization",
    "GEO",
    "AEO",
    "answer engine optimization",
    "ChatGPT visibility",
    "Perplexity SEO",
    "Google AI Overviews",
    "LLM SEO",
  ],
  applicationName: "Citara",
  authors: [{ name: "Citara Labs, Inc." }],
  openGraph: {
    type: "website",
    siteName: "Citara",
    title: "Citara — AI SEO Agency for ChatGPT, Perplexity & Google AI Search",
    description:
      "Get your brand recommended by ChatGPT, Perplexity, Gemini and Google AI Overviews — while compounding your classic search rankings.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Citara — AI SEO Agency for ChatGPT, Perplexity & Google AI Search",
    description:
      "Get your brand recommended by ChatGPT, Perplexity, Gemini and Google AI Overviews — while compounding your classic search rankings.",
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
