'use strict';

const server = require('./server');

//// require the enviroment /////
require('dotenv').config();

//// App setup //////
const PORT = process.env.PORT || 4000;

//// accesing the app /////
server.start(PORT);
