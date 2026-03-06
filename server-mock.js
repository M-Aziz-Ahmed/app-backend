import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const app = express()
const PORT = process.env.PORT || 5000

// In-memory user storage (for testing only)
const users = []

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Pet Store API is running (Mock Mode - No MongoDB)' })
})

// Create user
app.post('/api/user/create', async (req, res) => {
  try {
    const { name, email, password, role } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' })
    }

    // Check if user exists
    const existingUser = users.find(u => u.email === email)
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' })
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password: hashedPassword,
      role: role || 'user',
      createdAt: new Date()
    }

    users.push(newUser)

    res.status(201).json({
      message: 'User created successfully',
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      }
    })

  } catch (error) {
    console.error('Error creating user:', error)
    res.status(500).json({ message: 'Internal server error', error: error.message })
  }
})

// Login
app.post('/api/user', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' })
    }

    // Find user
    const user = users.find(u => u.email === email)
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    // Generate token
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    )

    res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token
    })

  } catch (error) {
    console.error('Error logging in:', error)
    res.status(500).json({ message: 'Internal server error', error: error.message })
  }
})

// Get all users
app.get('/api/user', (req, res) => {
  try {
    const usersWithoutPasswords = users.map(({ password, ...user }) => user)
    res.json({ users: usersWithoutPasswords })
  } catch (error) {
    console.error('Error fetching users:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

app.listen(PORT, () => {
  console.log(`🚀 Mock Server running on port ${PORT}`)
  console.log(`⚠️  Using in-memory storage (no MongoDB)`)
})
