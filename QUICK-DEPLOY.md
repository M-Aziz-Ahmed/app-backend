# 🚀 Quick Deploy Guide

## Fastest Way: Railway.app (5 minutes)

### Step 1: Push to GitHub
```bash
cd backend
git init
git add .
git commit -m "Initial backend"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Deploy on Railway
1. Visit: https://railway.app
2. Click "Start a New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Railway will auto-detect Node.js

### Step 3: Add Environment Variables
In Railway dashboard, go to Variables tab and add:
```
MONGODB_URI=mongodb+srv://azizahmed:ynaOEIXp69rsG4Bf@app.ipk7p3c.mongodb.net/petstore?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-change-in-production
PORT=5000
```

### Step 4: Get Your URL
Railway will give you a URL like: `https://pet-store-backend-production.up.railway.app`

### Step 5: Update Frontend
In your main project's `.env.local`:
```
NEXT_PUBLIC_API_URL=https://pet-store-backend-production.up.railway.app
```

### Step 6: Rebuild
```bash
npm run build
npx cap sync android
```

Done! Your app now uses an online backend.

---

## Alternative: Render.com (Also Free)

1. Visit: https://render.com
2. New → Web Service
3. Connect GitHub repo
4. Root Directory: `backend`
5. Build: `npm install`
6. Start: `npm start`
7. Add same environment variables
8. Deploy!

You'll get: `https://pet-store-backend.onrender.com`

---

## Test Your Backend

Visit your backend URL in browser:
- Should see: `{"message": "Pet Store API is running"}`

Test login endpoint:
```bash
curl -X POST https://your-backend-url.com/api/user/create \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","password":"123456"}'
```
