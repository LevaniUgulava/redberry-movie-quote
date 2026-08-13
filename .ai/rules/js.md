---
paths:
  - 'resources/js/**'
---

# Js

## Never add barrel files (index.ts re-exports)
Barrel files (index.ts that only re-export) are forbidden in this project. Never create them, and never commit Wayfinder-generated barrels. Existing tracked Wayfinder files stay tracked; generated/untracked barrel files should be deleted, not committed.
