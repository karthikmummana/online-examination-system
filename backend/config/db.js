const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;

  if (!mongoUri) {
    console.error('[Database] MongoDB connection URI is not configured in environment variables.');
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log(
      `[Database] Connected to MongoDB at ${mongoose.connection.host}`
    );
  } catch (err) {
    console.error('[Database] MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log('[Database] MongoDB disconnected.');
  } catch (err) {
    console.error('[Database] Error disconnecting DB:', err.message);
  }
};

module.exports = { connectDB, disconnectDB };
