# Movie Search

Movie search app powered by the OMDb API. Search any title, view posters and metadata, and enjoy a dark, cinematic UI with your HS branding.

## Features
- 🔍 Live movie search with OMDb
- 🖼️ Poster, title, year, and type cards with hover effects
- 📱 Fully responsive (mobile to desktop)
- 🎨 Dark gradient theme + animated “MovieLand” header
- 🧑‍💻 Custom HS favicon and footer credit (Het Solanki)

## Quick Start
```bash
npm install
npm start
```
Then open http://localhost:3000

## Configure your OMDb API key
Update the key in `src/App.js`:
```javascript
const API_URL = 'http://www.omdbapi.com?apikey=YOUR_KEY';
```
Get a free key at: http://www.omdbapi.com/apikey.aspx

## Scripts
- `npm start` – run dev server
- `npm test` – run tests (watch mode)
- `npm run build` – production build
- `npm run eject` – CRA eject (irreversible)

## Project Structure
```
src/
	App.js        # main app logic + search
	App.css       # styling + responsive breakpoints
	MovieCard.jsx # movie card component
	SearchIcon.jsx# SVG search icon
public/
	favicon.svg   # HS gradient icon
```

## Notes
- Uses fetch; no additional client deps required.
- Responsive breakpoints tuned for 320px–1440px+.
- If icons cache, hard refresh to see the HS favicon.

## Deployment
```bash
npm run build
```
Serve the `build/` folder on any static host (Netlify, Vercel, S3, etc.).
