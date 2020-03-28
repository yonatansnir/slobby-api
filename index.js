require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', () => console.log('Something went Wrong!'))
db.once('open', () => console.log('Conected to Database...'))

const workersRouter = require("./routes/workers");
const guestsRouter = require("./routes/guests");
const roomsRouter = require("./routes/rooms");
const complaintsRouter = require("./routes/complaints");


app.use(express.json());
app.use('/workers', workersRouter)
app.use('/guests', guestsRouter)
app.use('/rooms', roomsRouter)
app.use('/complaints', complaintsRouter)


const port = process.env.PORT || 8000;

app.listen(
    port,
    () => console.log('Server is running on PORT ' + port)
)