## Learned User Preferences

- Deploys production on Vercel (not Cloudflare Workers).
- Uses Bun for install and dev scripts (`bun install`, `bun run dev`).
- Prefers polished, responsive UI with interactive card-style sections and consistent light/dark theming over plain text blocks.

## Learned Workspace Facts

- TanStack Start app using `@lovable.dev/vite-tanstack-config`; Vercel deploy via Nitro (`cloudflare: false`, `nitro/vite` in `vite.config.ts`).
- On Vercel, leave Output Directory empty/default — do not set `dist` or `dist/client` (causes platform NOT_FOUND).
- Requires Node.js >=22.12.0 (`engines` in `package.json`).
- GitHub remote: `Raghav2003gaur/kindred-peoplesolutions`.
- Brand/site name is "RightKind" (full company name: "RightKind People Solutions"); hero copy uses "Right Kind" (two words).
- Landing page sections and copy live in `src/routes/index.tsx`.
- Global styles and design tokens live in `src/styles.css` (navy/teal palette, Cormorant Garamond + DM Sans).
