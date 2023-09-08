# Astro Modern Personal Website

![Astro Modern Personal Website](public/social_img.png)

Modern Personal Website Template with Project Section, CV Section, Paginated Blog, RSS Feed, SEO Friendly, Visual themes and Responsive Desing for Astro framework.

## Demo

View a live demo of the [Astro Modern Personal Website](https://astro-modern-personal-website.netlify.app/)

## Installation

Run the following command in your terminal

```bash
npm install
```

Once the packages are installed you are ready to run astro. Astro comes with a built-in development server that has everything you need for project development. The astro dev command will start the local development server so that you can see your new website in action for the very first time.

```bash
npm run dev
```

## Tech Stack

- [Astro](https://astro.build)
- [tailwindcss](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

## Project Strucutre

```php
├── src/
│   ├── components/
│   │   ├── cs/
│   │   │   ├── TimeLine
│   │   ├── BaseHead.astro
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── HorizontalCard.jsx
│   │   └── SideBar.jsx
│   ├── content/
│   │   ├── blog/
│   │   │   ├── post1.md
│   │   │   ├── post2.md
│   │   │   └── post3.md
│   │   ├── store/
│   │   │   ├── item1.md
│   │   │   ├── item2.md
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │   └── PostLayout.astro
│   └── pages/
│   │   ├── blog/
│   │   │   ├── [...page].astro
│   │   │   ├── [slug].astro
│   │   └── cv.astro
│   │   └── index.astro
│   │   └── projects.astro
│   │   └── rss.xml.js
│   └── styles/
│       └── global.css
├── public/
│   ├── favicon.svg
│   └── social-image.png
│   └── profile.jpg
│   └── social_img.webp
├── astro.config.mjs
├── tailwind.config.cjs
├── package.json
└── tsconfig.json
```

