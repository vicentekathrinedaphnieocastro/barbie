# Kathrine Daphnie Vicente Portfolio

Simple setup guide for this React + Vite portfolio app.

## 1) Requirements

- Node.js 20 or newer
- npm (comes with Node.js)

## 2) Install dependencies

```bash
npm install
```

## 3) Start the app

```bash
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

## Useful commands

- `npm run dev`: start the development server
- `npm run lint`: run ESLint
- `npm run typecheck`: run TypeScript checks
- `npm run build`: run TypeScript checks and create a production build in `dist/`
- `npm run check`: run lint and production build checks
- `npm run preview`: preview the production build locally

## Build for production

```bash
npm run build
```

Output files are generated in the `dist/` folder.

## Troubleshooting

### Node version error

If install or run fails, check your Node version:

```bash
node -v
```

Use Node.js 20+.

### Port already in use

If `5173` is busy, Vite will usually offer another port automatically.
You can also run:

```bash
npm run dev -- --port 5174
```

### Dependencies not installing correctly

Try a clean install:

```bash
rm -rf node_modules package-lock.json
npm install
```

On Windows PowerShell, use:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```
