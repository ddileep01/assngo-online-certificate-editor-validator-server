const mongoose = require('mongoose');

const DB = 'mongodb+srv://akhandasevasamsthanass_db_user:jO89CFnqWYwuEV9b@assngo-online-certifica.zywn0ue.mongodb.net/certificateGenerator?retryWrites=true&w=majority&appName=assngo-online-certificate-editor-validator-server';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(DB, {
      serverSelectionTimeoutMS: 8000,
      socketTimeoutMS: 8000,
    }).then((m) => {
      console.log('MongoDB connected');
      return m;
    }).catch((err) => {
      cached.promise = null; // reset so next call can retry
      throw err;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

// Initiate connection at module load to warm up on cold starts
connectDB().catch(console.error);

module.exports = connectDB;
