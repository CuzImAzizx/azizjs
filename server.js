require('dotenv').config({ quiet: true });
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const logger = require('./logger');
const routes = require('./routes/routes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/assets/bootstrap/css', express.static('node_modules/bootstrap/dist/css'));
app.use('/assets/fontawesome', express.static('node_modules/@fortawesome/fontawesome-free'));
app.use('/assets/bootstrap/js', express.static('node_modules/bootstrap/dist/js'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('trust proxy', true);
app.listen(process.env.APP_PORT);

// ==== Middlewares ====

app.use((req, res, next) => {
    logger.info(`${req.ip} ${req.method} ${req.originalUrl}`);
    next();
});

// ==== Routes ====

app.use('/', routes);

logger.info(`The app is listening on http://127.0.0.1:${process.env.APP_PORT}`);
