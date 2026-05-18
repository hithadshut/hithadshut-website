import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Robots policy.
 *
 * - Wildcard: allow all except `/api/` (server endpoints).
 *   `/_next/static/` is explicitly allowed: Googlebot fetches JS and CSS
 *   chunks from there to render the page, and any disallow on `/_next/`
 *   (even as a defensive prefix) blocks those fetches and degrades how
 *   Google sees the rendered DOM. GSC flagged this in May 2026 with
 *   "Blocked by robots.txt" against /_next/static/chunks/*.js.
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
    "Bytespider", // ByteDance / Doubao (Chinese LLM with Hebrew support)
    "cohere-ai", // Cohere Command R+ (enterprise LLM with citation behavior)
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/"],
        disallow: "/api/",
      },
      ...aiBots.map((ua) => ({ userAgent: ua, allow: "/" as const })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
