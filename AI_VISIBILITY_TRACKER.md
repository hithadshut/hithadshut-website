# AI Visibility Tracker

Track whether Hithadshut surfaces in AI search engines (ChatGPT, Perplexity,
Gemini, Google AI Overviews, Bing Copilot). This is the new SEO — and it
moves faster than classic Google rankings.

Status legend per query:
- ✅ cited as a source (URL appears as link or footnote)
- 📝 mentioned by name (no URL)
- 🟡 generic answer (no specific source — opportunity to win)
- ❌ competitor wins
- - not yet checked

## Methodology

1. Open each AI tool in **incognito / fresh session** (avoid personalized
   results).
2. Set language to Hebrew where the engine allows.
3. Paste the query exactly as listed.
4. Note: did Hithadshut appear? As a link source? As a name mention?
5. Update the cell with the date + status emoji.

## ChatGPT (with Web Search)

Test on chat.openai.com or ChatGPT app with **Search** mode enabled.

| # | Query | Date checked | Status | Cited URL (if ✅) | Notes |
|---|---|---|---|---|---|
| 1 | כמה עולה לבנות ממ״ד? | - | - | - | - |
| 2 | מחיר ממ״ד 2026 | - | - | - | - |
| 3 | איך בונים ממ״ד שלב אחר שלב? | - | - | - | - |
| 4 | מה ההבדל בין ממ״ד לחמ״ד? | - | - | - | - |
| 5 | מה ההבדל בין ממ״ד למקלט? | - | - | - | - |
| 6 | מתי כדאי ממ״ד יביל ולא יצוק? | - | - | - | - |
| 7 | אישור פיקוד העורף לממ״ד — מה התהליך? | - | - | - | - |
| 8 | מסלול פטור מהיתר לממ״ד 2026 | - | - | - | - |
| 9 | תקן 4422 — מה דורש? | - | - | - | - |
| 10 | איך בוחרים קבלן ממ״ד? | - | - | - | - |
| 11 | תמ״א 38 פוקעת — מה דייר עושה? | - | - | - | - |
| 12 | חוק 67% פינוי בינוי — איך זה משפיע? | - | - | - | - |
| 13 | זכויות גיל 70 בפינוי בינוי | - | - | - | - |
| 14 | חלופת שקד מול תמ״א 38 | - | - | - | - |
| 15 | דייר סרבן בפינוי בינוי — מה ההליך? | - | - | - | - |

## Perplexity

Test on perplexity.ai. Perplexity always cites sources, so ✅/❌ is binary.

| # | Query | Date | Status | Cited URL | Position in citations |
|---|---|---|---|---|---|
| 1 | כמה עולה לבנות ממ״ד? | - | - | - | - |
| 2 | מחיר ממ״ד 2026 | - | - | - | - |
| 3 | מה ההבדל בין ממ״ד לחמ״ד? | - | - | - | - |
| 4 | תקן 4422 ממ״ד | - | - | - | - |
| 5 | מסלול פטור ממ״ד 2026 | - | - | - | - |
| 6 | תמ״א 38 פוקעת מאי 2026 | - | - | - | - |
| 7 | זכויות קשישים פינוי בינוי | - | - | - | - |
| 8 | חלופת שקד 2026 | - | - | - | - |
| 9 | בחירת קבלן ממ״ד | - | - | - | - |
| 10 | ממ״ד יביל מחיר | - | - | - | - |

## Google AI Overviews

The new generative summary that appears above classic search results.
Check on google.co.il while logged out, Israel IP, Hebrew.

| # | Query | Date | AI Overview shown? | Hithadshut cited? | Notes |
|---|---|---|---|---|---|
| 1 | מחיר ממ״ד 2026 | - | - | - | - |
| 2 | בניית ממ״ד | - | - | - | - |
| 3 | מסלול פטור ממ״ד | - | - | - | - |
| 4 | ממ״ד יביל מחיר | - | - | - | - |
| 5 | תמ״א 38 פוקעת | - | - | - | - |

## Gemini (Google AI app)

Same queries as ChatGPT. Gemini cites sources less often than Perplexity
but more than ChatGPT default.

| # | Query | Date | Status | Notes |
|---|---|---|---|---|
| 1 | מחיר ממ״ד 2026 | - | - | - |
| 2 | מה ההבדל בין ממ״ד לחמ״ד | - | - | - |
| 3 | אישור פיקוד העורף | - | - | - |
| 4 | זכויות קשישים פינוי בינוי | - | - | - |
| 5 | תמ״א 38 פוקעת | - | - | - |

## Bing Copilot

Test on bing.com/chat. Bing Copilot frequently cites — high opportunity
for Hithadshut to be picked up.

| # | Query | Date | Status | Cited URL |
|---|---|---|---|---|
| 1 | מחיר ממ״ד | - | - | - |
| 2 | מה ההבדל בין ממ״ד למיגון | - | - | - |
| 3 | תקן 4422 | - | - | - |
| 4 | מסלול פטור ממ״ד | - | - | - |
| 5 | תמ״א 38 פוקעת מאי 2026 | - | - | - |

## What to do if not cited

1. **Click on the AI's cited sources** — see who is winning. Are they
   government sites (gov.il, oref.org.il)? Established blogs? Wikipedia?
2. **Read the actual cited content.** What's there that's NOT on
   Hithadshut? Add it.
3. **Verify our schema.** Articles with `Article` + `FAQPage` schemas
   that match the query intent get cited more often. Re-validate the
   page in Rich Results Test.
4. **Update freshness signals.** AI engines weight `dateModified` heavily.
   If a page is 6+ months stale, re-edit it (even minor) to refresh the
   timestamp.
5. **Look for missing entities.** Add Hithadshut to Wikipedia / Wikidata
   if it qualifies (10+ years operating, multiple press citations). For
   now, the `sameAs` array in Person + Organization schemas remains empty —
   fill it as soon as social profiles are stable.

## Quarterly review

Every 3 months:
- Count green ✅ across all engines. Track the trend.
- Replace queries that show `🟡 generic` for >2 quarters with sharper,
  more long-tail variants.
- For queries where competitors win consistently — investigate the
  competitor page; identify what makes it the AI's preferred answer.
