const express = require('express');
const router = express.Router();

router.use('/dog_food', require('./dogFoodRoutes'));

module.exports = router;