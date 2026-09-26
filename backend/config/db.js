const mongoose = require('mongoose');

let mongodInstance = null;

const connectDB = async () => {
  const primaryUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/online-examination';

  try {
    // Attempt connecting to configured MongoDB with a 2.5s timeout
    await mongoose.connect(primaryUri, {
      serverSelectionTimeoutMS: 2500,
    });
    console.log(`[Database] Connected to MongoDB at ${mongoose.connection.host}`);
  } catch (primaryErr) {
    console.warn(`[Database] Direct connection to ${primaryUri} failed: ${primaryErr.message}`);
    console.log('[Database] Starting embedded in-memory MongoDB instance for seamless local execution...');

    try {
      const { MongoMemoryServer } = require('mongodb-memory-server');
      mongodInstance = await MongoMemoryServer.create({
        instance: {
          launchTimeout: 180000, // 3 minutes for initial binary download if needed
        },
      });
      const memoryUri = mongodInstance.getUri();
      await mongoose.connect(memoryUri);
      console.log(`[Database] Connected successfully to embedded MongoDB at ${memoryUri}`);
    } catch (memoryErr) {
      console.error('[Database] Failed to connect to embedded MongoDB:', memoryErr.message);
      process.exit(1);
    }
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    if (mongodInstance) {
      await mongodInstance.stop();
    }
  } catch (err) {
    console.error('[Database] Error disconnecting DB:', err.message);
  }
};

module.exports = { connectDB, disconnectDB };
