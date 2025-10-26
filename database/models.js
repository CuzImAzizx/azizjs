const { DataTypes, UUIDV4 } = require('sequelize');
const db = require('./database');

// ==== Models ====

const Thing = db.define("Thing", {
    uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
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