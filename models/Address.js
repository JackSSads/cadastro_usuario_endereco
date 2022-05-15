const { DataTypes } = require("sequelize");

const db = require("../db/conn");
const Users = require("./Users");

const Address = db.define("Address", {
    city: {
        type: DataTypes.STRING,
        required: true,
    },
    counties: {
        type: DataTypes.STRING,
        required: true,
    },
    street: {
        type: DataTypes.STRING,
        required: true,
    },
    number: {
        type: DataTypes.STRING,
        required: true,
    },
});

Users.hasMany(Address);
Address.belongsTo(Users);

module.exports = Address;