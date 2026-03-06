import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
connectDb()

// Routes
app.use('/api/user', userRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'Pet Store API is running' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
