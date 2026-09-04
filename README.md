# SmartChief 🍳

**SmartChief** is a modern, intuitive, and visually captivating smart culinary companion web application designed to turn everyday pantry ingredients into inspired meals with step-by-step guidance, rich culinary aesthetics, and effortless recipe curation.

---

## ✨ Features

- **Pantry to Plate (Ingredient Input)**: Enter ingredients you have on hand, select dietary preferences, and generate tailored recipes instantly.
- **Smart Recipe Discovery & Search**: Explore trending, featured, and categorized culinary creations with dynamic filtering.
- **Detailed Recipe Guides**: Step-by-step cooking instructions, ingredient checklists, prep times, nutritional breakdown, and chef tips.
- **Saved Recipes & Bookmarking**: Save your favorite recipes locally with offline persistence using `localStorage`.
- **Obsidian Dark & Light Modes**: Elegant, responsive UI with smooth theme switching and persistent theme memory.
- **Mobile-First Experience**: Polished mobile navigation bar and fluid micro-interactions.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Modern Vanilla JavaScript (ES6+), Tailwind CSS
- **Design & Typography**: Custom Obsidian Gastronomy theme, Google Fonts (`Outfit`, `Plus Jakarta Sans`), Google Material Symbols
- **Persistence**: Browser `localStorage` for saving custom recipes and theme preferences
- **Assets & Icons**: Custom brand logos, responsive vector icons, and favicon suite

---

![image alt](https://github.com/sandip07102004/SmartChief/blob/9ff4505e832b375ee0803c93c3de545d80302550/Screenshot%202026-09-04%20213133.png)

## 📂 Project Structure

```
SmartChief/
├── .stitch/                    # Design specifications and Stitch assets
│   ├── designs/                # Screen mockups and HTML designs
│   ├── DESIGN.md               # Design system & tokens
│   ├── SITE.md                 # Project constitution & live sitemap
│   └── metadata.json
├── site/
│   └── public/                 # Production web application files
│       ├── index.html          # Screen 1: Home & discovery feed
│       ├── ingredient-input.html # Screen 2: Pantry input & dietary filters
│       ├── loading.html        # Interactive AI recipe generation loader
│       ├── recipe-result.html  # Screen 3: Recipe details & step guide
│       ├── saved-recipes.html  # Screen 4: Saved recipes collection
│       ├── styles.css          # Design system styles & animations
│       ├── app.js              # Application logic & state management
│       └── ...                 # Logos and visual assets
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

Simply open `site/public/index.html` in any modern web browser or serve it using any local HTTP server:

```bash
# Using VS Code Live Server extension or npx serve:
npx serve site/public
```






---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
