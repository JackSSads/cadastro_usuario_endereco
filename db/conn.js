const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dbcobaiamvc", "root", "", {
   host: "localhost",
   dialect: "mysql"
});

try {
   sequelize.authenticate();
   console.log("Conectado ao banco de dados: dbcobaiamvc.");
} catch (error) {
   console.log(error);
};

module.exports = sequelize;