const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose').set('debug', true);
const path = require('path');
require('dotenv').config();
require('./services/passport.js')
const compression = require('compression')
const config = require('./config.js');