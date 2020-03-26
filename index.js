require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', () => console.log('Something went Wrong!'))
db.once('open', () => console.log('Conected to Database...'))
const usersRouter = require('./routes/userRouter');

app.use(express.json());
app.use('/users', usersRouter);


app.listen(
    process.env.PORT || 8000,
    () => console.log('Server is running...')
)