const express = require('express');
const router = express.Router();

router.use('/', require('./dogFoodRoutes'));

module.exports = router;