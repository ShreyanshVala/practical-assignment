# 🎬 Movie Wishlist

A responsive React app for browsing movies and saving favorites to a personal wishlist. Built with Vite, React Router, and deployed on Netlify.

## Features
- 🔍 Live search/filter across the movie catalog
- ⭐ Add or remove movies from a personal wishlist
- 🎞️ Dedicated movie details page with routing (`/movie/:id`)
- 📱 Mobile-responsive layout, tested in Chrome DevTools device mode
- ⚡ Performance-optimized rendering using `React.memo` and `useCallback` to prevent unnecessary re-renders while typing in the search box

## Tech Stack
- React 18 + Vite
- React Router DOM v6
- Plain CSS (Grid + Flexbox, no framework)

## Project Structure
```
movie-wishlist-app/
├── src/
│   ├── components/     # MovieCard, SearchBar (memoized)
│   ├── pages/           # Home, Wishlist, MovieDetails
│   ├── data/movies.js   # Sample movie data
│   ├── App.jsx
│   └── main.jsx
├── public/_redirects    # Netlify SPA routing config
├── netlify.toml
└── package.json
```

## Setup

```bash
git clone <your-repo-url>
cd movie-wishlist-app
npm install
npm run dev
```

App runs at `http://localhost:5173`.

## Build

```bash
npm run build
```

Output is generated in the `dist/` folder.

## Deployment (Netlify)

**Option A — Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

**Option B — Netlify dashboard**
1. Push this project to GitHub.
2. In Netlify, click "Add new site" → "Import an existing project".
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy.

The included `_redirects` file (and `netlify.toml`) ensures client-side routes like `/movie/1` or `/wishlist` don't 404 when the URL is loaded or refreshed directly.

## Known Issues / Notes
- Movie data is currently hardcoded in `src/data/movies.js`; swap in a real API (e.g. TMDB) for production use.
- Wishlist state resets on page reload since it isn't persisted yet — a good next step would be `localStorage` or Firebase Firestore.

## License
MIT
