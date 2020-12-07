const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const commentsRouter = require('./routes/comment');
const usersRouter = require('./routes/user');
const favoritesRouter = require('./routes/favorite');
const dishesRouter = require('./routes/dish');

app.use('/comment', commentsRouter);
app.use('/user', usersRouter);
app.use('/favorite', favoritesRouter);
app.use('/dish', dishesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});