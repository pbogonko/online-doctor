import express from 'express'

import { updateUser,deleteUser,getAllUser,getSingleUser, getUserProfile,getMyAppointments } from '../controllers/userController.js'
// import { get } from 'mongoose'
import { authenticate,restrict } from '../auth/verifyTokens.js'
const router=express.Router()
router.get('/:id',authenticate,restrict(['patient']),getSingleUser)

router.get('/',authenticate,restrict(['admin']),getAllUser)

router.put('/:id',authenticate,restrict(['patient']),updateUser)

router.delete('/:id',authenticate,restrict(['patient']),deleteUser)
router.get('/profiles/me',authenticate,restrict(['patient']),getUserProfile)
router.get('/appointments/my-appointments',authenticate,restrict(['patient']),getMyAppointments)
export default router 