# Deploy Backend to Cloud

Choose one of these platforms (all have free tiers):

## Option 1: Railway.app (Recommended - Easiest)

1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository and choose the `backend` folder
5. Add environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Any random secret key
   - `PORT`: 5000
6. Deploy! You'll get a URL like: `https://your-app.railway.app`

## Option 2: Render.com (Also Free)

1. Go to https://render.com
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect your repository
5. Settings:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Add environment variables (same as above)
7. Deploy! You'll get a URL like: `https://your-app.onrender.com`

## Option 3: Vercel (Good for Next.js)

1. Go to https://vercel.com
2. Sign up with GitHub
3. Import your repository
4. Set Root Directory to `backend`
5. Add environment variables
6. Deploy!

## After Deployment:

1. Copy your backend URL (e.g., `https://your-app.railway.app`)
2. Update `.env.local` in your main project:
   ```
   NEXT_PUBLIC_API_URL=https://your-app.railway.app
   ```
3. Rebuild your app: `npm run build`
4. Sync with Capacitor: `npx cap sync android`

## Test Your Backend:

Visit: `https://your-backend-url.com/`
You should see: `{"message": "Pet Store API is running"}`
