require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const app = express();
app.use(cors());
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', () => console.log('Something went Wrong!'))
db.once('open', () => console.log('Conected to Database...'))

const usersRouter = require('./routes/users');
//const workersRouter = require("./routes/workers");
const guestsRouter = require("./routes/guests");
const roomsRouter = require("./routes/rooms");
const complaintsRouter = require("./routes/complaints");


app.use(express.json());
app.use('/users', usersRouter);
//app.use('/workers', workersRouter);
app.use('/guests', guestsRouter);
app.use('/rooms', roomsRouter);
app.use('/complaints', complaintsRouter);


const PORT = process.env.PORT || 8000;

app.listen(
    PORT,
    () => console.log('Server is running on PORT ' + PORT)
)