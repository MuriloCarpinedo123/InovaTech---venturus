const express = require('express');
const router = express.Router();
const AnimalController = require('../Controllers/AnimalController');

// Rota para cadastrar animal
router.post('/', AnimalController.cadastrarAnimal);

module.exports = router;
