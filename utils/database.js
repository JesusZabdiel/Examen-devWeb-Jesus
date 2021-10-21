const Sequelize = require("sequelize")
const {aplicarRelaciones} = require("./relations")

const sequelize = new Sequelize('SebasYJesus', 'user3', 'root', {
    dialect: 'mysql', 
    host: '54.173.202.133', 
    define: {
        timestamps: false,
        freezeTableName: true
    }
})


const modelDefiners = [
    require('../models/ciudades')
]

for(const modelDefiner of modelDefiners)
    modelDefiner(sequelize)


module.exports = sequelize