const express = require('express')

const router = express.Router()

const cController = require('../controllers/ciudades')

router.post('/agregarVideojuego' , cController.postAgregarCiudades)
router.get('/mostrarVideojuegos' , cController.getMostrarCiudadesPais)

module.exports = router;