import express from 'express'
<<<<<<< HEAD
import { login,register } from '../controllers/authController.js'
=======
import {register,login} from '../controllers/authController.js'
>>>>>>> authentication-backend
const router=express.Router()
router.post('/register',register)

router.post('/login',login)
<<<<<<< HEAD
console.log()
=======

>>>>>>> authentication-backend
export default router