# Deploy Instructions

## The backend is now configured to use the MOCK server by default

This means:
- No MongoDB required
- Users stored in memory (resets on restart)
- Perfect for testing and development

## To Deploy to Railway:

1. Push your backend folder to GitHub
2. Go to https://railway.app
3. Create new project from GitHub repo
4. Railway will automatically use `npm start` which runs the mock server
5. No environment variables needed!
6. Get your Railway URL (e.g., https://your-app.railway.app)

## Update Frontend:

In your main project's `.env.local`:
```
NEXT_PUBLIC_API_URL=https://your-railway-url.railway.app
```

Then rebuild:
```bash
npm run build
npx cap sync android
```

## To Use Real MongoDB Later:

Change `package.json` main script to:
```json
"start": "node server.js"
```

And add environment variables in Railway:
- MONGODB_URI
- JWT_SECRET
