const Sequelize = require("sequelize")

const Ciudad = (sequelize) =>{
    sequelize.define('ciudad', {
        id:{
            type: Sequelize.INTEGER,
            allowNul: false,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNul: false
        },

        pais: {
            type: Sequelize.STRING,
            allowNul: false
        },

        descripcion: Sequelize.STRING
    })
}


module.exports = Ciudad