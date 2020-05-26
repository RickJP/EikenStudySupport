const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const env = process.env;

mongoose.connect(env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
})


const db = mongoose.connection;

db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));


