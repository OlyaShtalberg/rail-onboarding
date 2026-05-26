# Rezolve — Design System

_rezolve.com · April 2026 · Compiled from rezolve.com analysis · update on site redesign_

---

## 01 — Colors

### Color Palette

| Name | Hex | Role |
|---|---|---|
| Brand Navy | `#001E60` | Primary brand color: text, buttons, accents, links |
| Blue | `#478BC9` | Secondary accent: section labels, interactive elements |
| Dark Charcoal | `#2D3748` | Secondary text, icons |
| White | `#FFFFFF` | Page background, text on dark surfaces, secondary buttons |
| Gray | `#718096` | Supporting text, descriptions, placeholders |

### Gradients

| Name | Definition | Use |
|---|---|---|
| Brand Gradient | `#001E60 → #478BC9` | Decorative elements, section backgrounds |
| Text Gradient | `#4A7FC1 → #00C8E8` | Gradient fill on hero heading keywords (left-to-right) |

---

## 02 — Typography

### Fonts

| Role | Family |
|---|---|
| Headings | **Manrope** |
| Paragraphs / Body | **Inter Tight** |

Sample heading: _Aa Bb Cc_ (Manrope)
Sample body: _Reignite the love for retail with AI._ (Inter Tight)

### Type Scale

| Style | Spec | Sample |
|---|---|---|
| **H1 — Hero** | Manrope 800 · 60px · ~1.1 lh | "AI for Commerce" |
| **Section Label** | Inter Tight 700 · 11px · uppercase · 2px letter-spacing · color `#478BC9` | "Conversational AI" |
| **H2 — Section** | Manrope 700 · ~28–36px | "Create Unified Shopping Experiences" |
| **Body** | Inter Tight 400 · 15px · 1.6 lh · color `#2D3748` | "Reignite the love for retail with human-like conversations, smarter search and product discovery — optimized for revenue." |
| **Gradient Text** | Manrope 800 · used on hero keywords · `#4A7FC1 → #00C8E8` (left-to-right) | "Search to Checkout" |

---

## 03 — Buttons

### Components

- **Primary CTA** — examples: "Get a Product Tour", "Explore more"
- **Secondary CTA** — examples: "Request a Demo", "Read More"

### Specifications

| Property | Value |
|---|---|
| Border-radius | `58px` (pill) |
| Padding | `14px 28px` |
| Font | `Inter Tight 600` |
| Font size | `14px` |
| Primary bg | `#001E60` |
| Primary text | `#FFFFFF` |
| Secondary bg | `#FFFFFF` |
| Secondary text | `#001E60` |
| Shadow | 6-layer, `rgba(0,0,0,0.016–0.07)` |

---

## 04 — Spacing

### Spacing & Radius

| Value | Use |
|---|---|
| `4px` | Base unit — grid base step |
| `8px` | Inner padding for small elements |
| `16px` | Standard gap |
| `32px` | Section padding |
| `4px` radius | Cards, input fields |
| `58px` radius | Buttons (pill) |

---

## 05 — Logo

### Brand Assets

- **Primary logo (SVG):** https://rezolve.com/wp-content/uploads/2025/07/rezolve-logo-12-2025.svg
- **Favicon:** `/uploads/2025/02/cropped-rezolve-ai-favicon-32x32.png`

---

## 06 — Products

### Product Sub-brands

| Name | Description |
|---|---|
| **Brain Commerce** | Conversational commerce, search and product discovery. Personalized AI-driven recommendations. |
| **Brain Checkout** | One-click checkout, cart management, crypto payments support, curbside & drive-thru. |
| **brainpowa** | Proprietary LLM trained on ecommerce data. Zero hallucinations. Always written lowercase. |

---

## 07 — Brand Voice

### Tone of Voice

| Dimension | Value |
|---|---|
| Tone | Professional |
| Energy | Medium |
| Audience | B2B — retail & ecommerce |
| Spelling | Rezolve Ai (lowercase `i`) |

### Headline examples

- "AI That Transforms Commerce from Search to Checkout"
- "Reignite the love for retail with human-like conversations"
- "We've Solved for Bad LLMs"
- "Create Unified Shopping Experiences That Turn Shopper Intent Into Purchase"

### Section pattern

- Overline (small uppercase label) → H2 (large heading) → Body paragraph → CTA button
- Emphasis on metrics: `+10% Online Revenue` · `+25% Conversions` · `<5min Wait Times`

---

## 08 — Tech Stack

### Tech Notes

| Dimension | Value |
|---|---|
| CMS | WordPress |
| Page Builder | Elementor 4.0.2 |
| Fonts | Google Fonts (swap) |
| Color Scheme | Light |
