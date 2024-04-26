const express=require('express')
const router = express.Router()

//authenthication middleware
const authMiddleware= require('../middleware/authMiddleware')

//user controller 
const {register,login,checkUser} = require('../controller/userController');

// register route
router.post('/register',register)
   
// login route
router.post('/login',login)
    
// register route
router.get('/check',authMiddleware,checkUser)
    

module.exports=router