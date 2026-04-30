import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Robots policy.
 *
 * - Wildcard: allow all except `/api/` (server endpoints) and `/_next/`
 *   (build artifacts; Google ignores these by default but explicit is safer).
 * - AI-engine bots are explicitly allowed. AI Overviews, ChatGPT search,
 *   Perplexity, Claude, and Bing-Copilot use these user-agents to ground
 *   their responses; blocking them removes us from those answer surfaces.
 *   This is opt-in: the wildcard already allows everything, but enumera-
 *   ting these bots makes the intent legible and protects the policy
 *   against future tightening of the wildcard rule.
 */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot", // OpenAI / ChatGPT browse + training
    "OAI-SearchBot", // OpenAI Search
    "ChatGPT-User", // ChatGPT user-initiated fetches
    "PerplexityBot", // Perplexity index
    "Perplexity-User", // Perplexity user-initiated
    "ClaudeBot", // Anthropic crawler
    "anthropic-ai", // Anthropic legacy UA
    "Claude-Web", // Anthropic web access
    "Google-Extended", // Google AI training (Gemini / AIO grounding)
    "CCBot", // Common Crawl (used by many model trainers)
    "Bingbot", // Bing index → ChatGPT Search + Copilot
    "Applebot-Extended", // Apple AI (Siri / Apple Intelligence)
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] },
      ...aiBots.map((ua) => ({ userAgent: ua, allow: "/" as const })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
