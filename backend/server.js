const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(bodyParser.json());

//connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blog')
.then(()=>console.log('MongoDb connected'))
.catch((err) => console.log('DB error',err));

// Use routes
app.use('/api/posts', postRoutes);

app.listen(PORT,()=>console.log(`server running on ${PORT}`))