const Ciudad = require('../utils/database').models.ciudad


exports.postAgregarCiudades = async (req, res) => {
    try{
        console.log(req.body)
        await Ciudad.create(req.body)
        console.log('Ciudad creada')
        res.send({operacion: "correcta"})
    }catch(error){
        console.log("Hubo un error")
        res.send({operacion: "incorrecta"})
        res.end()
    }

}

exports.getMostrarCiudadesPais = async (req, res) => {
    try{
        console.log(req.body.pais)
        ciudades = await Ciudad.findAll({
                    where: {
                        pais: req.body.pais
                    }
                })
        console.log(ciudades)
        res.json(ciudades)
    }catch(error){
        console.log("Hubo un error")
        res.send({operacion: "incorrecta"})
        res.end()
    }
}

/*    Ciudad.findAll({
        where: {
            nombre: req.body.nombre
        }
    })
*/