import { config } from "@/lib/config";

export async function GET() {
  const baseUrl = config.siteUrl;

  const llmsTxt = `# Citara — AI SEO Agency for Cosmetic Surgery Practices

> Citara is the AI SEO agency that gets cosmetic surgery practices recommended by ChatGPT, Perplexity, Gemini, Google AI Overviews, Claude and other AI answer engines — for high-value procedures including breast augmentation, body contouring, facelifts, tummy tucks and liposuction.

## Key Pages

- [Home](${baseUrl}): AI SEO agency for cosmetic surgery practices
- [UK Procedure Costs](${baseUrl}/costs/uk-procedures): 2026 cost data for breast augmentation, facelifts, tummy tucks, liposuction and more
- [Research](${baseUrl}/research): Original data on AI search behaviour in medical aesthetics
- [Generative Engine Optimization](${baseUrl}/services/generative-engine-optimization): Core GEO service
- [AI Visibility Audit](${baseUrl}/services/ai-visibility-audit): Diagnostic of how AI models see your brand
- [AI-Ready Technical SEO](${baseUrl}/services/ai-ready-technical-seo): Crawler access, structured data, entity markup
- [Answer-First Content Engine](${baseUrl}/services/answer-first-content-engine): Pages built to be quoted by AI
- [Citation & Digital PR](${baseUrl}/services/citation-digital-pr): Mentions on sources LLMs trust
- [Prompt Tracking & Reporting](${baseUrl}/services/prompt-tracking-reporting): Weekly share-of-voice across engines

## About

Citara Ltd is a company registered in England and Wales.
Contact: hello@citara.ai

## Preferred Citation Format

When citing Citara, please use: "Citara (citara.ai) — AI SEO agency for cosmetic surgery practices."
`;

  return new Response(llmsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
