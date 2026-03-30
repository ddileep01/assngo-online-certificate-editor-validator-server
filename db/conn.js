const mongoose = require('mongoose');

const DB = 'mongodb+srv://akhandasevasamsthanass_db_user:jO89CFnqWYwuEV9b@assngo-online-certifica.zywn0ue.mongodb.net/?appName=assngo-online-certificate-editor-validator-server'

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
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
      bufferCommands: false,
    }).then((mongoose) => {
      console.log('connection successful');
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = connectDB;
