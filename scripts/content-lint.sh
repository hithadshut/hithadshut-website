#!/usr/bin/env bash
# Content lint gate per OPERATIONAL_MANDATE_V2.md חלק ו'.
# Blocks: em-dash, [טעון בדיקה] placeholders, banned AI phrases,
# מיגונית + בית פרטי + מרכז mixing.

set -u
FAIL=0
TARGETS=(src/app src/components src/lib src/content)

# Filter to only existing target dirs
EXIST_TARGETS=()
for t in "${TARGETS[@]}"; do
  [ -d "$t" ] && EXIST_TARGETS+=("$t")
done

if [ "${#EXIST_TARGETS[@]}" -eq 0 ]; then
  echo "content-lint: no target directories found"
  exit 0
fi

EXT=(--include="*.tsx" --include="*.ts" --include="*.md" --include="*.mdx")

echo "Gate 1: em-dash (—)"
if grep -rn "—" "${EXIST_TARGETS[@]}" "${EXT[@]}" 2>/dev/null; then
  echo "FAIL: em-dash found. Replace with period/comma/clause."
  FAIL=1
fi

echo "Gate 2: uncertainty placeholders"
if grep -rnE "\[טעון בדיקה\]|\[טעון אימות\]|\[יש לאמת\]|\[יש לבדוק\]|\[לא ברור\]" "${EXIST_TARGETS[@]}" "${EXT[@]}" 2>/dev/null; then
  echo "FAIL: uncertainty placeholder found. Verify or omit."
  FAIL=1
fi

echo "Gate 3: banned AI/marketing phrases"
FORBIDDEN=(
  "הפתרון המוביל"
  "המקצועי ביותר"
  "פורץ דרך"
  "אקוסיסטם"
  "סינרגיה"
  "אופטימיזציה"
  "פרדיגמה"
  "סנסציוני"
  "מהפכני"
  "במאמר זה למדנו"
  "כפי שצוין לעיל"
  "ראש פינתי"
  "שאלה מעולה"
  "בעידן הדיגיטלי"
  "בעולם של היום"
  "ערך מוסף"
  "ללא תחרות"
  "פרואקטיבי"
)
for phrase in "${FORBIDDEN[@]}"; do
  # Special case: "ערך מוסף" is banned as marketing buzz, but "מס ערך מוסף" (VAT) is a legitimate term.
  if [ "$phrase" = "ערך מוסף" ]; then
    if grep -rn "$phrase" "${EXIST_TARGETS[@]}" "${EXT[@]}" 2>/dev/null | grep -v "מס ערך מוסף"; then
      echo "FAIL: banned phrase: $phrase"
      FAIL=1
    fi
  else
    if grep -rn "$phrase" "${EXIST_TARGETS[@]}" "${EXT[@]}" 2>/dev/null; then
      echo "FAIL: banned phrase: $phrase"
      FAIL=1
    fi
  fi
done

echo "Gate 4: מיגונית as private-home solution in central region"
# Skip lines that explicitly warn AGAINST migunit (contain "אינה", "לא הפתרון",
# "לא לבית פרטי", "אינו פתרון", "התראת בטיחות", or "לא משמשת"). Those are
# safety explainers, not recommendations.
if grep -rnE "מיגונית.*בית פרטי.*מרכז|מיגונית.*במרכז.*בית פרטי" "${EXIST_TARGETS[@]}" "${EXT[@]}" 2>/dev/null \
  | grep -vE "אינה|אינו|לא הפתרון|לא לבית פרטי|לא משמשת|התראת|לא ניתן להמיר|הצעות|הצעה|לקבל הצעה|חברות שמציעות|מצג שגוי|warn-migunit|cost-warn-migunit"; then
  echo "FAIL: detected migunit + private-home + central. Critical."
  FAIL=1
fi

echo "Gate 5: room-reinforcement price consistency (owner-verified 2026-07-13, permanent gate)"
# Canonical range is 120,000-150,000 (src/lib/data/pricing.ts migunImprovement).
# Any stale range for this service anywhere in the codebase is a hard fail.
if grep -rn "40,000-150,000\|50,000-120,000" "${EXIST_TARGETS[@]}" "${EXT[@]}" 2>/dev/null; then
  echo "FAIL: stale room-reinforcement price range found. Canonical is 120,000-150,000 ₪ + מע״מ (see src/lib/data/pricing.ts)."
  FAIL=1
fi

if [ $FAIL -eq 1 ]; then
  echo ""
  echo "content-lint: gates failed. Push blocked."
  exit 1
fi

echo "content-lint: all gates passed."
exit 0
