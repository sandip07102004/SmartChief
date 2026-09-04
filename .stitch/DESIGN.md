# Design System: CookSmart Mobile

**Project ID:** 88819666962354226

## 1. Visual Theme & Atmosphere
A sleek, modern culinary mobile application featuring an Obsidian Gastronomy aesthetic. Deep charcoal-black backgrounds (`#101318`) provide high contrast for appetizing food photography and vibrant warm orange accents (`#FF6B35`). The atmosphere is modern, welcoming, and tactile — reminiscent of a high-end chef's personal kitchen companion with refined typography, rounded containers, and deliberate micro-interactions.

## 2. Color Palette & Roles
- **Obsidian Canvas** (`#101318`) — Primary application background.
- **Elevated Charcoal Surface** (`#191D24`) — Card backgrounds, bottom navigation dock, and elevated containers.
- **Subtle Surface Highlight** (`#222731`) — Input fields, search background, and hover/active states.
- **Saffron Ember Accent** (`#FF6B35`) — Primary action buttons, active tab indicators, rating stars, and focal highlights.
- **Warm Glow** (`#FF7A45`) — Gradient highlight for primary CTA buttons.
- **Crisp Snow** (`#F9FAFB`) — Primary headers, titles, and active labels.
- **Muted Slate** (`#94A3B8`) — Secondary text, body descriptions, measurement units, and inactive icons.
- **Border Stroke** (`rgba(255, 255, 255, 0.08)`) — Crisp 1px container borders and dividers.
- **Success Mint** (`#10B981`) — Calorie badges, completed checkmarks, and positive indicators.

## 3. Typography Rules
- **Display / Headers:** Outfit or Plus Jakarta Sans — tracking tight, semi-bold to bold (`font-weight: 600 - 700`).
- **Body / Metadata:** Plus Jakarta Sans or system-ui — clean, legible, relaxed line-height (`1.5`), `font-weight: 400 - 500`.
- **Numbers / Timers:** Monospace or tabular figures (`font-variant-numeric: tabular-nums`) for prep times and calorie values.

## 4. Component Stylings
- **Buttons:** Tactile pill-shaped or generously rounded (16px - 9999px radius). Gradient accent fill (`#FF6B35` to `#FF7A45`), crisp white text, subtle shadow (`box-shadow: 0 4px 14px rgba(255, 107, 53, 0.35)`). Active state scales to 0.98.
- **Cards & Containers:** Border radius 20px, filled with Elevated Charcoal (`#191D24`), enclosed with 1px border (`rgba(255, 255, 255, 0.08)`).
- **Category Chips:** Pill-shaped (`rounded-full`), inactive state `#191D24` with `#94A3B8` text, active state `#FF6B35` with white text.
- **Input Fields:** Generously rounded (14px - 16px), `#222731` background, 1px border (`rgba(255, 255, 255, 0.1)`), glowing `#FF6B35` border on focus.
- **Navigation Dock:** Floating or docked bottom bar with frosted blur (`backdrop-filter: blur(16px)`), `#191D24` semi-transparent background, glowing active indicator under current tab.

## 5. Layout Principles
- **Mobile Viewport Focus:** 390px to 430px optimal mobile container (max-width 480px centered on larger screens with responsive mobile shell).
- **Touch Ergonomics:** Minimum 44px tap targets for all buttons and interactive chips.
- **Spacing Scale:** Consistent 16px horizontal screen padding, 12px card gap, 24px section spacing.

## 6. Design System Notes for Stitch Generation
```
DESIGN SYSTEM:
- Theme: Dark mobile culinary app with deep charcoal (#101318) and elevated card surface (#191D24).
- Accent: Warm saffron orange (#FF6B35) for primary actions, active indicators, and badges.
- Text: Crisp snow white (#F9FAFB) for headings and high contrast titles; muted slate (#94A3B8) for secondary details.
- Styling: Rounded cards (radius 20px), pill chips (radius 9999px), 1px borders (rgba(255,255,255,0.08)).
- Typography: Clean modern sans-serif (Outfit / Plus Jakarta Sans), track-tight headlines.
- Safe Area: Mobile interface with top status bar styling and bottom navigation dock (Home, Ingredients/Pantry, Saved).
```

## 7. Anti-Patterns (Banned)
- No generic purple or neon cyberpunk glows.
- No pure black (`#000000`) — use rich dark charcoal (`#101318`).
- No generic serif fonts.
- No cluttered desktop layouts on mobile screens.
- No dead or non-interactive navigation links.
