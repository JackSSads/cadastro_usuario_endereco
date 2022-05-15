const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const User = db.define("User", {
    name: {
        type: DataTypes.STRING,
        required: true,
    },
    old: {
        type: DataTypes.STRING,
        required: true,
    },
});

module.exports = User;