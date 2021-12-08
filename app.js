require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const scheduleRoutes = require('./routes/scheduleRoutes');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/schedule', scheduleRoutes);

const port = 6000;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})