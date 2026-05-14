# AI Citation Baseline T+0 — 2026-05-14

## Methodology
- Bing search used as proxy for ChatGPT Search retrieval (ChatGPT Search is grounded in Bing's index).
- For each of 25 V7 prompts: query Bing in Hebrew (he-IL, cc=IL), grep top results for `hithadshut.co.il` URLs.
- This is a directional baseline. Manual ChatGPT/Perplexity/Gemini test = Ofek's worksheet at `ofek-manual-worksheet.md`.

**Limitation:** Bing organic results ≠ ChatGPT generative citations. They overlap meaningfully (Bing's index is what ChatGPT browses) but ChatGPT's selection layer can pick differently.

## Bing Search Results

| # | Prompt | hithadshut.co.il in top 20? | URL cited (if any) |
|---|---|---|---|
| 1 | כמה עולה לבנות ממ"ד 9 מ"ר בבית פרטי? | ✗ | — |
| 2 | מה ההבדל בין ממ"ד תקני לממ"ד יביל? | ✗ | — |
| 3 | עד מתי תקפה הוראת השעה לבניית ממ"ד ללא היתר? | ✗ | — |
| 4 | מה התהליך לקבל אישור פיקוד העורף לממ"ד? | ✗ | — |
| 5 | כמה זמן לוקח לבנות ממ"ד? | ✗ | — |
| 6 | האם המדינה מסבסדת בניית ממ"ד? | ✗ | — |
| 7 | מה ההבדל בין שיפור מיגון לבניית ממ"ד חדש? | ✗ | — |
| 8 | מה זה תקנה 30ב' לתקנות התכנון והבנייה? | ✗ | — |
| 9 | כמה עולה ממ"ד יביל? | ✗ | — |
| 10 | מה זה אישור פיקוד העורף? | ✗ | — |
| 11 | כמה זה 14 ימים מסלול מהיר ממ"ד? | ✗ | — |
| 12 | מה זה תקן 4570? | ✗ | — |
| 13 | כמה דיירים צריך להסכים בפינוי בינוי? | ✗ | — |
| 14 | מה זה חוק 67% פינוי בינוי? | ✗ | — |
| 15 | מה זכויות קשישים בפינוי בינוי? | ✗ | — |
| 16 | מי זה דייר סרבן בפינוי בינוי? | ✗ | — |
| 17 | מה ההבדל בין פינוי בינוי לתמ"א 38? | ✗ | — |
| 18 | מה זה חלופת שקד? | ✗ | — |
| 19 | מה ערבות חוק מכר? | ✗ | — |
| 20 | כמה דירות מקבלים בפינוי בינוי? | ✗ | — |
| 21 | כמה זמן לוקח פינוי בינוי? | ✗ | — |
| 22 | איך בוחרים יזם פינוי בינוי? | ✗ | — |
| 23 | כמה עולה הוספת ממ"ד לדירה בבניין? | ✗ | — |
| 24 | מה זה ממ"ד תקני? | ✗ | — |
| 25 | עד אוקטובר 2026 מסלול פטור — מה זה? | ✗ | — |

## Aggregate
- Prompts where hithadshut.co.il appears in top 20 Bing results: 0/25

## Next checkpoint
- T+14 (2026-05-28): re-run identical script, compare delta.
- T+30 (2026-06-13): re-run + add Google AIO + Perplexity API if available.
