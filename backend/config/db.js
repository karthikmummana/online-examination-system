
const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error(
      '[Database] MongoDB connection URI is not configured in environment variables.'
    );
  }

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log('[Database] MongoDB connected successfully');
    console.log(
      `[Database] Connected to: ${mongoose.connection.name}`
    );

  } catch (err) {
    console.error(
      '[Database] MongoDB connection failed:',
      err.message
    );

    throw err;
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log('[Database] MongoDB disconnected.');
  } catch (err) {
    console.error(
      '[Database] Error disconnecting DB:',
      err.message
    );
  }
};

module.exports = { connectDB, disconnectDB };
