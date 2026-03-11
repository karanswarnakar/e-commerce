# E-Commerce (React + Vite)

Reference UI:
`https://groceria.madrasthemes.com/`

## Overview
Single-page ecommerce UI built with React and Vite. Styles are authored in Sass and compiled into the global stylesheet.

## Tech Stack
- React 19.1.1
- Vite 7.1.7
- Sass (SCSS) 1.97.3
- ESLint 9.36.0
- Font Awesome (CDN)

## Getting Started
1. Install dependencies:
   `npm install`
2. Run the dev server:
   `npm run dev`
3. Build for production:
   `npm run build`
4. Preview the build:
   `npm run preview`
5. Lint:
   `npm run lint`

## Current UI Sections
- Top announcement bar (`TopNavbar`)
- Main navigation (`Navbar`) with search and actions
- Category menu (`Catagory` + `MenuCatagoryCard` + `CircleCatagory`)
- Hero cover (`Section1` + `Cover`)
- "Fresh in Today" product grid (`Section2` + `Product`)
- Promotional banner grid (`Section3` + `GridCard`)
- Split marketing block (`Section4` + `SubContain`)

## Project Structure (key files)
- `src/App.jsx`
- `src/main.jsx`
- `src/assets/css/style.scss`
- `src/components/Custome/`
- `src/components/Nabars/`
- `src/components/Section/`
- `public/image/`

## Notes
- Global styles live in `src/assets/css/style.scss`.
- Font Awesome is loaded in `index.html`.
