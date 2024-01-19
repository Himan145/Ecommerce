const express = require('express');
const { RegisterController, LoginController } = require('../controllers/AuthController');


const router=express.Router();

router.post('/register',RegisterController);
router.post('/login',LoginController);


module.exports=router;