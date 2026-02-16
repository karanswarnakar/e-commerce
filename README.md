Reference: https://groceria.madrasthemes.com/

**Work Completed So Far**
1. Bootstrapped a Vite + React app and wired the entry point in `src/main.jsx`.
2. Added global styles in `src/assets/css/style.scss` (compiled to `style.css`) with a CSS reset and design tokens (colors, spacing, typography, shadows, radius, z-index, containers).
3. Imported Google Fonts (Nunito Sans, Ubuntu, Archivo Black, Momo Signature) in `src/assets/css/style.scss`.
4. Built the top announcement bar (`TopNavbar`) with a phone contact line, a promo message highlight, and a social media icon row.
5. Added the main navigation bar (`Navbar`) with logo, search form, account/cart actions, menu links, and promo tags.
6. Styled the main navigation layout, search bar, buttons, menus, and tags in `src/assets/css/style.scss`.
7. Added a reusable icon wrapper component (`IconComponent`).
8. Linked Font Awesome stylesheets in `index.html` to support icon classes.

**Current Render**
1. `src/App.jsx` renders `TopNavbar` and `Navbar`.
2. `src/main.jsx` loads the global stylesheet and mounts `App`.
