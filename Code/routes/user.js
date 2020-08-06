const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/login', controller.login);
router.post('/login', controller.login);

router.get('/registro', controller.registro);
router.post('/registro', controller.registro);

module.exports = router;