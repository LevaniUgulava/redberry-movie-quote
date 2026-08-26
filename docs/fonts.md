# Fonts

## Setup

Fonts are stored in `resources/fonts/` and loaded via `resources/css/fonts.css` (imported in `app.css`).

## Font Files

### HelveticaGeorgian
Georgian script fonts (U+10A0-10FF, U+2D00-2D2F, U+1C90-1CBF):
- `helvetica-neue-lt-geo-25-ultlt.ttf` (200)
- `helvetica-neue-lt-geo-35-thin.ttf` (300)
- `helvetica-neue-lt-geo-45-light.ttf` (400)
- `helvetica-neue-lt-geo-55-roman.ttf` (600)
- `helvetica-neue-lt-geo-65-medium.ttf` (500)
- `helvetica-neue-lt-geo-75-bold.ttf` (700)
- `helvetica-neue-lt-geo-85-heavy.ttf` (800)
- `helvetica-neue-lt-geo-95-black.ttf` (900)
- `HelveticaNeueLTGEOCaps-45Light.ttf` (400, caps variant)
- `HelveticaNeueLTGEOCaps-55Roman.ttf` (600, caps variant)

### HelveticaNeue
Latin script fonts (U+0000-00FF):
- `helvetica-neue-ultralight.ttf` (200)
- `helvetica-neue-medium-extended.ttf` (500, expanded)
- `helvetica-neue-w01-66-medium-it.ttf` (500, italic)
- `helvetica-neue-w01-77-bd-cn-obl.ttf` (700, condensed oblique)
- `helvetica-neue-w01-87-hv-cn-obl.ttf` (800, condensed oblique)
- `helvetica-neue-ltw0693blkextobl.ttf` (900, expanded oblique)
- `helvetica-neue-ltw0697blkcnobl.ttf` (900, condensed oblique)

## Language-Based Switching

Uses `unicode-range` for automatic font selection:
- Georgian characters → Georgian font
- Latin characters → Latin font

No JavaScript required.

## Default Font

`Helvetica Neue` is set as the default font in `app.css` via `--font-sans`.
