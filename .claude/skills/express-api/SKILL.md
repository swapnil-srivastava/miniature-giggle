---
name: express-api
description: Use when adding or changing routes, middleware, CORS, configuration, tests or the Vercel setup in this Express + TypeScript app (miniature-giggle). Covers how to grow the single index.ts, validation, testing and what merging to main deploys.
---

# Working on the Express app

Read `CLAUDE.md` first.

## Adding a route

1. While the app is small, add it to `index.ts`. Once there are more than about five
   routes or any shared logic, split into `src/routes/<feature>.ts` (an
   `express.Router`) and `src/services/`, and update `tsconfig.json` and
   `vercel.json` to the new entry point in the same PR.
2. Type handlers (`Request`, `Response`); `async` handlers catch errors and pass them
   to one error-handling middleware that answers JSON without stack traces.
3. Add `app.use(express.json())` when the first route takes a body, and validate the
   body before using it (`zod` is fine).
4. JSON responses for anything a program reads; keep `/healthcheck` cheap and free of
   dependencies.
5. CORS stays per route with an explicit origin list. Anything that writes data,
   sends messages or costs money needs authentication; ask Swapnil how before
   exposing it.

## Configuration

Read env vars in one place at the top, with defaults for local runs
(`process.env.PORT ?? 3000`). List new ones in the PR for Swapnil to set in Vercel.

## Tests

There are none yet. For the first real logic, add the Node test runner or `vitest`
with `supertest`, export `app` without calling `listen` in tests, and replace the
placeholder `test` script.

## Before you say it works

`yarn build` passes, and the changed route answers when run locally
(`yarn build && PORT=3000 yarn start`, then `curl`). Report the real output.

## Shipping

Session branch, PR to `main`. With Vercel's defaults the PR gets a preview and a merge
to `main` deploys to production. Never push to `main` directly.
