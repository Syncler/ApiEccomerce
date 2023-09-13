//All API Route Goes here
var router = require("express").Router();


//Import contact controller
var authController = require('../controller/authController');
var userController = require('../controller/userController');
var productController = require('../controller/productController')

router.use('/auth', authController);
router.use('/users', userController);
router.use('/products', productController);



//Export API routes
module.exports = router

