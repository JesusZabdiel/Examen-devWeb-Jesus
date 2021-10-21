const express = require('express')

const router = express.Router()

const cController = require('../controllers/ciudades')

router.post('/agregarCiudad' , cController.postAgregarCiudades)
router.get('/mostrarCiudades' , cController.getMostrarCiudadesPais)

module.exports = router;