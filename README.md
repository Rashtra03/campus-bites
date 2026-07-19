# Campus Bites — React (Vite) Version

This is a 1:1 React conversion of the original `index.html` / `style.css` / `app.js` Campus Bites site.
No design, copy, class names, or logic were changed — only restructured into React components.

## Structure

```
campus-bites/
├── index.html                  # Vite entry HTML (head/meta/fonts only)
├── package.json
├── vite.config.js
├── public/                     # put your image files here (see below)
└── src/
    ├── main.jsx                 # React root, imports style.css
    ├── App.jsx                  # top-level state (cart, theme, drawer, etc.)
    ├── style.css                 # your original CSS, untouched
    ├── data/
    │   └── menuData.js           # MENU_ITEMS, ITEM_VARIANTS, FEATURED (from app.js)
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── MenuSection.jsx
        ├── MenuCard.jsx
        ├── XeroxSection.jsx
        ├── AboutSection.jsx
        ├── ContactSection.jsx
        ├── Footer.jsx
        ├── CartSidebar.jsx
        ├── VariantDrawer.jsx
        ├── OrderModal.jsx
        └── ToastContainer.jsx
```

## Images

The original site referenced images by bare filename (e.g. `"Veg Noodles.jpg"`, `"Chef logo.jpg"`) sitting next to `index.html`.
In Vite, static files like that go in the `public/` folder and are referenced the same way (Vite serves `public/` at the site root).

Copy your image files (Chef logo.jpg, Veg Noodles.jpg, Veg momo.jpg, Dosa.jpg, Coffee.jpg, Egg Roll.jpg, Tea.jpg, samosa.jpg, chips.jpg, etc. — every filename used in `menuData.js`/components) into the `public/` folder, keeping the exact same names (including spaces/capitalization), and they'll resolve exactly as before.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
```

## What changed vs. the original

Nothing behaviorally or visually — only *how* it's built:
- All DOM manipulation (`document.getElementById`, `innerHTML`, `addEventListener`) was replaced with React state (`useState`/`useEffect`) and JSX.
- `MENU_ITEMS`, `ITEM_VARIANTS`, `FEATURED` were moved as-is into `src/data/menuData.js`.
- Every section of `index.html` became its own component, matching the original HTML comments (`NAVBAR`, `HERO`, `MENU SECTION`, `XEROX SECTION`, `ABOUT`, `CONTACT`, `FOOTER`, `CART SIDEBAR`, `VARIANT DRAWER`, `ORDER SUCCESS MODAL`, `TOAST`).
- `style.css` is copied verbatim — same class names, same variables, same everything.
