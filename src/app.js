const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const colors = require('colors');
const connectDB = require('./db/db');

//Load env vars
dotenv.config({ path: path.resolve(__dirname, 'config/.env') });

//Connecet DB
// connectDB();

//Route files
const shcoolChatbots = require('./routes/routes');

const app = express();

//Body parser
app.use(express.json());

//Mount routes
app.use('/shcoolChatbots', shcoolChatbots);

const PORT = process.env.PORT || 9000;

app.listen(PORT, err => {
  if (err) {
    throw new Error(err);
  }
  console.log(`We listen PORT ${PORT}`.brightYellow.underline);
});
