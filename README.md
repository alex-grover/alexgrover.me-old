# alexgrover.me

Welcome to the repository for my personal website! It's very much a work in progress. Somehow I find myself spending more time rebuilding stuff than actually writing content 😅

Technologies in use:

- [TypeScript](https://www.typescriptlang.org)
- [Astro](https://astro.build)
- Markdown for content
- Vanilla CSS + CSS variables
- [astro-themes](https://github.com/alex-grover/astro-themes) for dark mode
- [postcss-custom-media](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media) to use the Stage 2 CSS feature and consolidate media queries
- [Radix UI Icons](https://icons.radix-ui.com)
- [Prettier](https://prettier.io), [Stylelint](https://stylelint.io), [lint-staged](https://github.com/okonet/lint-staged), and [husky](https://typicode.github.io/husky/#/) for linting and formatting
- [Playwright](https://playwright.dev) for testing
- [GitHub Actions](https://github.com/features/actions) to run CI jobs
- [Dependabot](https://github.com/features/security/) to keep dependencies up to date
- [Vercel](https://vercel.com) for hosting and analytics

## Getting Started

- Install Node.js
- `gh repo clone alex-grover/alexgrover.me`
- `npm install`
- `npx vercel env pull`
- `npm run dev`

### To Customize

- Update `constants.ts` with your preferred values
- Update favicons
- Update `theme-color` meta tags
