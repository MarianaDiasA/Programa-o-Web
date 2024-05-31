const express = require('express');
const router = express.Router();
const controller = require('../controller/calculadoraController');

router.get("/", controller.home);
router.post("/resultado", controller.resultado);


module.exports = router;