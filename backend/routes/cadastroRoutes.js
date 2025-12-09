const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');

router.post('/cadastrar', cadastroController.cadastrar);

module.exports = router;
