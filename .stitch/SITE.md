# CookSmart: Site Constitution

## 1. Core Identity
- **Project Name:** CookSmart
- **Stitch Project ID:** 88819666962354226
- **Mission:** An intuitive and visually captivating mobile culinary companion that turns everyday pantry ingredients into inspired meals with step-by-step guidance and effortless recipe curation.
- **Target Audience:** Modern home cooks, busy professionals, and food lovers seeking smart meal inspiration without food waste.
- **Voice:** Confident, warm, culinary-focused, effortless, and crisp.

## 2. Visual Language
- **Vibe:** Obsidian Gastronomy — Dark Mode Elegance, Warm Culinary Ember, Clean Mobile Minimalism.
- **Primary Color:** Charcoal Onyx Canvas (`#101318`) with Elevated Surface Charcoal (`#191D24`).
- **Accent Color:** Warm Saffron Flame (`#FF6B35`) with Ember Glow (`#FF7A45`).
- **Text & Accents:** Snow White (`#F9FAFB`) with Muted Slate (`#94A3B8`).

## 3. Architecture & File Structure
- **Staging Directory:** `.stitch/designs/` (Raw Stitch outputs)
- **Production Directory:** `site/public/`
  - `index.html` — Screen 1: Home Screen (Featured recipes, food categories, search bar)
  - `ingredient-input.html` — Screen 2: Ingredient Input (Pantry tags, dietary toggles, generate button)
  - `recipe-result.html` — Screen 3: Recipe Result (Hero, ingredients list, cooking steps, save button)
  - `saved-recipes.html` — Screen 4: Saved Recipes Grid (2-column mobile grid, categories, management)
  - `styles.css` & `app.js` — Shared design system, bottom navigation, localStorage state, dynamic recipe generation.
- **Navigation Strategy:** Native mobile bottom navigation dock across all screens + contextual transition actions.

## 4. Live Sitemap
- [x] `index.html` — Screen 1: Home (Featured recipes, categories, search)
- [x] `ingredient-input.html` — Screen 2: Ingredient Input (Pantry tags, generate action)
- [x] `recipe-result.html` — Screen 3: Recipe Result (Details, ingredients, step-by-step instructions, save)
- [x] `saved-recipes.html` — Screen 4: Saved Recipes (2-column grid, filters, detail view)

## 5. The Roadmap (Backlog)
- **High Priority:**
  - Screen 1: Home screen with featured hero card, horizontal categories, search bar, and trending cards.
  - Screen 2: Ingredient input screen with interactive tag input, quick pantry staples, and Generate CTA.
  - Screen 3: Recipe result view with dish photography, prep metadata, ingredients checklist, step instructions, and Save button.
  - Screen 4: Saved recipes grid with category filters and interactive recipe detail access.
  - Inter-screen mobile navigation dock and smooth transition states.
- **Medium Priority:**
  - LocalStorage recipe persistence so users can save from Screen 3 and view immediately on Screen 4.
  - Dynamic recipe generation simulation based on user entered ingredients.
  - Search filtering on Home screen.
- **Low Priority:**
  - Micro-animations, haptic-style button states, and notification toasts.

## 6. Creative Freedom Guidelines
- Use authentic culinary photography (warm lighting, crisp food imagery).
- Maintain 44px+ touch targets for mobile usability.
- Ensure dark mode contrast exceeds WCAG AA standards.
