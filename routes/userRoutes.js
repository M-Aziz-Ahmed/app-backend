import express from 'express'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

// POST /api/user - Login
router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' })
        }

        // Find user by email
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        // Check password
        const isPasswordValid = await user.comparePassword(password)
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        // Generate JWT token
        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )

        res.json({
            message: 'Login successful',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            },
            token
        })

    } catch (error) {
        console.error('Error logging in:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
})

// GET /api/user - Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find({}, '-password')
        res.json({ users })
    } catch (error) {
        console.error('Error fetching users:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
})

// POST /api/user/create - Create new user
router.post('/create', async (req, res) => {
    try {
        const { name, email, password, role } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Name, email, and password are required' })
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email' })
        }

        // Create new user
        const newUser = await User.create({
            name,
            email,
            password,
            role: role || 'user'
        })

        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role
            }
        })

    } catch (error) {
        console.error('Error creating user:', error)
        res.status(500).json({ 
            message: 'Internal server error',
            error: error.message,
            details: 'Check if MongoDB is connected'
        })
    }
})

export default router
