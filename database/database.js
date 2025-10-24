const { Sequelize, DataTypes } = require('sequelize')
const logger = require('../logger')

// Driver
const db = new Sequelize({
    dialect: 'sqlite',
    storage: './database/database.db',
    // logging: (...msg) => logger.info(msg),
    logging: false,
});

// Authenticate
(async () => {
    try {
        await db.authenticate();
        logger.info("Connection to DB has been established successfully.");
    } catch (error) {
        logger.error(`Unable to connect to the database: ${error}`);
        process.exit(1);
    }
})()

module.exports = db;