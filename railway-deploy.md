# Deploy to Railway - Quick Guide

## Step 1: Go to Railway
Visit: https://railway.app/new

## Step 2: Deploy from GitHub
1. Click "Deploy from GitHub repo"
2. If you haven't pushed to GitHub yet, do this first:

```bash
cd backend
git init
git add .
git commit -m "Pet store backend"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## Step 3: Select Your Repo
- Choose your repository
- Railway will auto-detect Node.js

## Step 4: No Environment Variables Needed!
The mock server doesn't need any environment variables. It works out of the box.

## Step 5: Get Your URL
After deployment (takes 1-2 minutes), Railway will give you a URL like:
`https://your-app-name.up.railway.app`

## Step 6: Update Frontend
Copy your Railway URL and update `.env.local`:
```
NEXT_PUBLIC_API_URL=https://your-app-name.up.railway.app
```

Then rebuild:
```bash
npm run build
npx cap sync android
```

Done!
