import mongoose from 'mongoose'

const connectDb = async () => {
    try {
        if (mongoose.connection.readyState >= 1) {
            console.log('✅ Already connected to MongoDB')
            return
        }

        const options = {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        }

        await mongoose.connect(process.env.MONGODB_URI, options)
        console.log('✅ Connected to MongoDB')
    } catch (error) {
        console.error('❌ MongoDB connection error:', error.message)
        console.log('⚠️  Server will continue running. Check your MongoDB connection string.')
        // Don't exit - let server run for testing
    }
}

export default connectDb
