const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dataBase = require('./database/index')

const app = express();
dataBase()

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('dev'));
app.all('*', require('./routes/index'))

app.listen(3000);