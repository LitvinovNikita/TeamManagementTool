require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Replace the following with your own MongoDB connection string
const dbUri = 'mongodb://localhost:27017/myapp';

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

app.listen(5000, () => console.log('Server is running on port 5000'));
