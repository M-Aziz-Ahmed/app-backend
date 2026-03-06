# Pet Store Backend API

Express.js backend for the Pet Store application.

## 🚀 Quick Deploy (Choose One)

### Railway.app (Recommended - Free)
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template)

1. Click the button above
2. Add environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Any random secret key
3. Deploy!

### Render.com (Free)
1. Fork this repo
2. Go to https://render.com
3. New Web Service → Connect repo
4. Root Directory: `backend`
5. Build: `npm install`
6. Start: `npm start`
7. Add environment variables
8. Deploy!

### Vercel (Free)
```bash
cd backend
vercel
```

## 📦 Local Development

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your MongoDB URI

# Run development server
npm run dev
```

The API will run on `http://localhost:5000`

## 🔧 Environment Variables

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

## 📡 API Endpoints

- `GET /` - Health check
- `POST /api/user` - Login
- `POST /api/user/create` - Create new user
- `GET /api/user` - Get all users

## 🌐 After Deployment

1. Copy your backend URL
2. Update frontend `.env.local`:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.com
   ```
3. Rebuild frontend: `npm run build`
4. Sync Capacitor: `npx cap sync android`

## 📝 Notes

- MongoDB Atlas connection may fail due to network/DNS issues
- For local development, use local MongoDB: `mongodb://localhost:27017/petstore`
- Make sure to whitelist your IP in MongoDB Atlas Network Access
