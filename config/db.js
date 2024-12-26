const { Sequelize } = require('sequelize')
require('dotenv').config();


const Database = new Sequelize(process.env.DB_NAME, process.env.DB_USER, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false

})

Database.authenticate()
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.log("Database connection failed", err))

module.exports = Database; 