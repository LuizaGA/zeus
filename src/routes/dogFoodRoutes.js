const express = require('express');
const router = express.Router();
const controller = require('../controllers/foodController')

router.post('/register', controller.creat);
router.get('/find', controller.find);
router.get('/find_one/:id', controller.findOne);
router.put('/update/:id', controller.edit);
router.delete('/delete/:id', controller.delete);

router.get('/total', controller.total)

module.exports = router;

