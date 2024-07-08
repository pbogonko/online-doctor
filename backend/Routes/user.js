import express from 'express'

import { updateUser,deleteUser,getAllUser,getSingleUser } from '../controllers/userController.js'
// import { get } from 'mongoose'
import { authenticate,restrict } from '../auth/verifyTokens.js'
const router=express.Router()
router.get('/:id',authenticate,restrict(['patient']),getSingleUser)

router.get('/',authenticate,restrict(['admin']),getAllUser)

router.put('/:id',authenticate,restrict(['patient']),updateUser)

router.delete('/:id',authenticate,restrict(['admin']),authenticate,restrict(['patien']),deleteUser)
export default router 