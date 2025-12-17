# Victor Oduor - Full Stack Developer Portfolio

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Node.js. Features a secure contact form integrated with Telegram.

## Tech Stack

- **Frontend:** React (Vite), TypeScript, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express, Telegram Bot API
- **Deployment:** Render (recommended)

## Project Structure

```
/
├── client/          # Frontend application
└── server/          # Backend API
```

## Local Development

1. **Clone the repository**
2. **Install Dependencies**
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```
3. **Setup Environment Variables**
   - Create `server/.env` based on `.env.example`:
     ```
     PORT=5000
     CLIENT_URL=http://localhost:5173
     TG_BOT_TOKEN=your_bot_token
     TG_CHAT_ID=your_chat_id
     ```
4. **Run Locally**
   - Backend: `cd server && npm run dev` (starts on port 5000)
   - Frontend: `cd client && npm run dev` (starts on port 5173)

## Deployment on Render

### Backend Service
1. Create a new **Web Service** on Render connected to your repo.
2. set **Root Directory** to `server`.
3. Set **Build Command** to `npm install`.
4. Set **Start Command** to `node index.js`.
5. Add Environment Variables:
   - `TG_BOT_TOKEN`, `TG_CHAT_ID`
   - `CLIENT_URL` (URL of your frontend, once deployed)

### Frontend Static Site
1. Create a new **Static Site** on Render.
2. Set **Root Directory** to `client`.
3. Set **Build Command** to `npm run build`.
4. Set **Publish Directory** to `dist`.
5. Update your Backend's `CLIENT_URL` env var to match this new Frontend URL.

### Static Site Deployment (Render/Netlify)
Since this is a Single Page Application (SPA), you must configure your host to rewrite all 404s to `index.html`.

**For Render:**
1. Go to your Static Site dashboard.
2. Go to **Redirects/Rewrites**.
3. Add a new rule:
   - **Source:** `/*`
   - **Destination:** `/index.html`
   - **Action:** Rewrite

**For Netlify:**
- A `public/_redirects` file is already included. Netlify will detect it automatically.


## License
MIT
