# miniature-giggle

Minimal Express 4 + TypeScript app in a single file, `index.ts`, deployed on Vercel
through `vercel.json` (`@vercel/node`). Owner: Swapnil (`swapnil-srivastava`).

Endpoints: `GET /`, `GET /hello`, `GET /healthcheck` (the only route with CORS on).

## Commands (yarn)

- `yarn install`
- `yarn build` (`tsc` → `dist/`), `yarn start` (`node dist/index.js`)
- `yarn dev` (tsc watch + nodemon)
- `PORT` comes from `.env` (dotenv). There are no tests and no linter yet;
  `yarn test` is a placeholder that fails.

## Things to know before changing anything

- CORS is enabled per route, not app-wide, on purpose. A new route that a browser on
  swapnilsrivastava.eu must call needs `cors({ origin: [...] })` with the site's
  hosts, or (preferred) is reached through a Next.js rewrite on the website.
- `app.listen()` runs at import. On Vercel's `@vercel/node` the app should also be
  exported (`export default app`) so it works as a function; keep `listen` for local runs.
- Secrets live in Vercel env vars. Never commit `.env`.
- A Vercel project is connected to this repo; with Vercel's defaults a merge to `main` deploys to production and a PR gets a preview.

## How this fits with the website

The main project is the website, `swapnil-srivastava/reimagined-guide`
(swapnilsrivastava.eu, Next.js + Supabase on Vercel). This repo is one of six small
backend services kept beside it as cloud/framework experiments. The website does not
depend on it for anything visitors use today. The agreed way to wire a backend in
later is a Next.js rewrite on the website with the backend URL in an env var
(`/svc/<name>/...`), so the browser never calls this service directly and CORS is
not needed.

For step-by-step work use the `express-api` skill in `.claude/skills/`.
