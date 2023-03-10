const express = require('express');

const router = express.Router();



const { registerUser, logout, loginUser } = require('../controllers/authController');

router.route('/register').post(registerUser);

// router.get('/products', isAuthenticatedUser,  getProducts)

router.route('/login').post(loginUser);



// router.route('/password/forgot').post(forgotPassword);

// router.route('/password/reset/:token').put(resetPassword);



router.route('/logout').get(logout);



module.exports = router;