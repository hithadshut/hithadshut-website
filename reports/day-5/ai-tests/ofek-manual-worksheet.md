# Ofek Manual AI Test — T+0 Baseline

**Date target:** 2026-05-14 (before PR #5 + #6 merge effects propagate)
**Time estimate:** ~45 minutes (4 engines × 25 prompts × ~30 sec each)
**Why this matters:** This is the floor. Every citation appearing in re-tests at T+14 (2026-05-28) and T+30 (2026-06-13) = direct attribution to the work shipped this week.

---

## Instructions

1. Open **Incognito / Private window** for each engine (no personalization)
2. For each engine, paste each prompt verbatim
3. Mark the cell:
   - ☑ **cited** = hithadshut.co.il appears as a clickable source/citation in the response
   - ☐ **not cited** = does not appear
4. For Google AI Overview: if hithadshut.co.il appears, screenshot and save to `reports/day-5/ai-tests/screenshots/aio-Q{N}.png`
5. For each citation hit, fill the "URL cited" column with the page path

---

## Engines and where to test

| Engine | URL | Settings |
|---|---|---|
| ChatGPT | https://chatgpt.com | GPT-4 / GPT-4o with web browsing **enabled** |
| Perplexity | https://perplexity.ai | Sonar Pro or default |
| Gemini | https://gemini.google.com | Default (with grounding) |
| Google AI Overview | https://www.google.com (set lang=he, region=IL) | Standard Google search, scroll for AIO panel |

---

## The 25 Prompts (V7 set)

| # | Prompt | ChatGPT | Perplexity | Gemini | Google AIO | URL cited (if any) |
|---|---|---|---|---|---|---|
| 1 | כמה עולה לבנות ממ"ד 9 מ"ר בבית פרטי? | ☐ | ☐ | ☐ | ☐ | |
| 2 | מה ההבדל בין ממ"ד תקני לממ"ד יביל? | ☐ | ☐ | ☐ | ☐ | |
| 3 | עד מתי תקפה הוראת השעה לבניית ממ"ד ללא היתר? | ☐ | ☐ | ☐ | ☐ | |
| 4 | מה התהליך לקבל אישור פיקוד העורף לממ"ד? | ☐ | ☐ | ☐ | ☐ | |
| 5 | כמה זמן לוקח לבנות ממ"ד? | ☐ | ☐ | ☐ | ☐ | |
| 6 | האם המדינה מסבסדת בניית ממ"ד? | ☐ | ☐ | ☐ | ☐ | |
| 7 | מה ההבדל בין שיפור מיגון לבניית ממ"ד חדש? | ☐ | ☐ | ☐ | ☐ | |
| 8 | מה זה תקנה 30ב' לתקנות התכנון והבנייה? | ☐ | ☐ | ☐ | ☐ | |
| 9 | כמה עולה ממ"ד יביל? | ☐ | ☐ | ☐ | ☐ | |
| 10 | מה זה אישור פיקוד העורף? | ☐ | ☐ | ☐ | ☐ | |
| 11 | כמה זה 14 ימים מסלול מהיר ממ"ד? | ☐ | ☐ | ☐ | ☐ | |
| 12 | מה זה תקן 4570? | ☐ | ☐ | ☐ | ☐ | |
| 13 | כמה דיירים צריך להסכים בפינוי בינוי? | ☐ | ☐ | ☐ | ☐ | |
| 14 | מה זה חוק 67% פינוי בינוי? | ☐ | ☐ | ☐ | ☐ | |
| 15 | מה זכויות קשישים בפינוי בינוי? | ☐ | ☐ | ☐ | ☐ | |
| 16 | מי זה דייר סרבן בפינוי בינוי? | ☐ | ☐ | ☐ | ☐ | |
| 17 | מה ההבדל בין פינוי בינוי לתמ"א 38? | ☐ | ☐ | ☐ | ☐ | |
| 18 | מה זה חלופת שקד? | ☐ | ☐ | ☐ | ☐ | |
| 19 | מה ערבות חוק מכר? | ☐ | ☐ | ☐ | ☐ | |
| 20 | כמה דירות מקבלים בפינוי בינוי? | ☐ | ☐ | ☐ | ☐ | |
| 21 | כמה זמן לוקח פינוי בינוי? | ☐ | ☐ | ☐ | ☐ | |
| 22 | איך בוחרים יזם פינוי בינוי? | ☐ | ☐ | ☐ | ☐ | |
| 23 | כמה עולה הוספת ממ"ד לדירה בבניין? | ☐ | ☐ | ☐ | ☐ | |
| 24 | מה זה ממ"ד תקני? | ☐ | ☐ | ☐ | ☐ | |
| 25 | עד אוקטובר 2026 מסלול פטור, מה זה? | ☐ | ☐ | ☐ | ☐ | |

---

## After filling: aggregate

Total citations / 100 (25 prompts × 4 engines):
- ChatGPT: ___ / 25
- Perplexity: ___ / 25
- Gemini: ___ / 25
- Google AIO: ___ / 25
- **TOTAL: ___ / 100**

## Top competitors observed (fill the 5 most-cited domains across all 100)
1. ___
2. ___
3. ___
4. ___
5. ___

## Surprises / patterns
(free text — what you saw that wasn't expected)

---

## Re-test schedule

| Date | What changed | Expected delta |
|---|---|---|
| 2026-05-14 (T+0) | baseline (this file) | floor |
| 2026-05-21 (T+7) | post PR #5 + #6 merge + IndexNow + 1 week crawl | 2-5 citations expected |
| 2026-05-28 (T+14) | + 2 more weeks of indexing | 7-12 citations expected |
| 2026-06-13 (T+30) | + Step 5 deeper work if executed | 15-25 citations target |

Save each re-test as `ai-tests/T-plus-{N}-{date}.md` (preserve the worksheet structure for delta comparison).
