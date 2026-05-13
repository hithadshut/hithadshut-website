# Lessons Learned — hithadshut.co.il

Append-only log of mistakes worth not repeating. One line per entry, with date and one-line context if needed.

---

- **2026-05-13** — sed רוחבי על תוכן עברי דורש visual review של 100% מהקבצים המושפעים, לא רק CI gates. בעתיד: replace_in_file פר קובץ עם diff visible. (Triggered by Week 1 em-dash purge: blanket `sed 's/—/, /g'` left 9+11 `,  ` artifacts and 3 awkward phrasings that CI didn't catch — only human read caught them.)
