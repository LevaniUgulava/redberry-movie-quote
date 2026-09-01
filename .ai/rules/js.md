---
paths:
  - 'resources/js/**'
---

# Js

## Never add barrel files (index.ts re-exports)
Barrel files (index.ts that only re-export) are forbidden in this project. Never create them, and never commit Wayfinder-generated barrels. Existing tracked Wayfinder files stay tracked; generated/untracked barrel files should be deleted, not committed.

## react-i18next multi-namespace needs nsMode fallback
useTranslation(["a","b"]) in react-i18next v17 binds t() to only the FIRST namespace unless i18n init sets react.nsMode:"fallback" (i18n.ts already does). Shared keys (edit, cancel, save_changes, confirm, director, delete...) live only in "common" and will render as raw keys if a component adds a second namespace without nsMode fallback set. Do not rely on cross-namespace lookup without it.
