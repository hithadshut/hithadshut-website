#!/usr/bin/env bash
# Installs the .husky pre-commit hook into .git/hooks.
# Run once per clone: bash scripts/install-hooks.sh

set -e

REPO_ROOT="$(git rev-parse --show-toplevel)"
HUSKY_DIR="$REPO_ROOT/.husky"
GIT_HOOKS_DIR="$REPO_ROOT/.git/hooks"

if [ ! -d "$HUSKY_DIR" ]; then
  echo "ERROR: $HUSKY_DIR not found. Aborting."
  exit 1
fi

if [ ! -d "$GIT_HOOKS_DIR" ]; then
  echo "ERROR: $GIT_HOOKS_DIR not found (not a git repo?). Aborting."
  exit 1
fi

# Option A (simpler, no npm dependency): point core.hooksPath at .husky
git config core.hooksPath .husky

# Ensure pre-commit is executable
chmod +x "$HUSKY_DIR/pre-commit"

echo "✓ Git hooks installed. Pre-commit gates: content-lint, typecheck, eslint."
echo "  To bypass in emergency: git commit --no-verify (NOT recommended)."
