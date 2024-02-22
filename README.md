This is a [Next.js](https://nextjs.org/) app created by Joel Przybylowski during the interview process for a NextJS position with McDonald's. 

## Getting Started

First, clone the repo and install project modules:

```bash
npm install
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Run tests:

```bash
npm run test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Notice the email and password required to authenticate are in the input fields as placeholder text.


Login email: ronald@mcd.com

Login Password: "happymeal"
## Application features

What can be observed in the code and by viewing in the browser?:

- NextJS architecture prioritizing server-side rendering, with client components nearest the bottom of the rendering tree.
- NextJS Error and Suspense boundaries utilizing Error and Loading pages in routes.
- NextJS image optimization.
- Basic username/password authentication using nextAuth and Vercel Postgres.
- Postgres data storage and queries along with localStorage/useState for persistent data on browser Refresh. 
- Mobile-first, responsive design.
- Demonstration of basic Jest unit and snapshot tests.
- Dark mode theming and interactive toggle.
- In situ item selection confirmation.
- Visual and functional approximation of an e-commerce quick-service ordering experience.
- Logout functionality and cart data erasure.
- Tailwind UI components and styling.
- I'm certainly forgetting something...

The [GitHub repository](https://github.com/joelprz/jap-mcd) for your perusal and feedback.

## Bugs and/or deficiencies?

Is there something I overlooked or didn't have time to complete? Where can improvements be made?

- Surely I've duplicated some code where I should have created shared component and have otherwise made some (hopefully minor) mistakes.
- I realized too late that if you toggle dark mode "on" before logging in the value is not preserved when access to the app is achieved.
- Organization. This is a small project completed by a single developer in a limited time-frame. This basic organization would not scale well.
- You'll let me know what else I'm forgetting!   =)

## Technologies leveraged
- Tailwind UI. All other technologies listed in [package.json](https://github.com/joelprz/jap-mcd/blob/main/package.json).