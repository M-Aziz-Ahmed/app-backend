import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB (non-blocking)
connectDb().catch(err => {
  console.error('MongoDB connection failed, but server will continue:', err.message)
})

// Routes
app.use('/api/user', userRoutes)

app.get('/', (req, res) => {
  res.json({ 
    message: 'Pet Store API is running',
    mongodb: process.env.MONGODB_URI ? 'configured' : 'not configured'
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err)
  res.status(500).json({ 
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`MongoDB URI: ${process.env.MONGODB_URI ? 'Set' : 'Not set'}`)
})
