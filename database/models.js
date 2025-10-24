const { Sequelize, DataTypes } = require('sequelize');
const db = require('./database');
const { v4: uuidv4 } = require('uuid');

// ==== Models ====

const Thing = db.define("Thing", {
    uuid: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: uuidv4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

// Your models goes here

db.sync({alter: true});

module.exports = { // Export your new models here
    Thing,
}