# Deploy to Render.com - FREE Forever

## Step 1: Go to Render
Visit: https://render.com/

## Step 2: Sign Up
- Click "Get Started"
- Sign up with GitHub (easiest)

## Step 3: Create New Web Service
1. Click "New +" button
2. Select "Web Service"
3. Connect your GitHub repository: `M-Aziz-Ahmed/app-backend`
4. Click "Connect"

## Step 4: Configure Service
- **Name**: pet-store-api (or any name you want)
- **Region**: Choose closest to you
- **Branch**: master
- **Root Directory**: leave empty (or put `.` if it asks)
- **Runtime**: Node
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Instance Type**: FREE

## Step 5: Deploy
- Click "Create Web Service"
- Wait 3-5 minutes for deployment
- You'll get a URL like: `https://pet-store-api.onrender.com`

## Step 6: Update Frontend
Copy your Render URL and update `.env.local`:
```
NEXT_PUBLIC_API_URL=https://pet-store-api.onrender.com
```

Then rebuild:
```bash
npm run build
npx cap sync android
```

## Important Notes:
- Render free tier sleeps after 15 minutes of inactivity
- First request after sleep takes 30-60 seconds to wake up
- But it's 100% FREE forever!
- No credit card required!
