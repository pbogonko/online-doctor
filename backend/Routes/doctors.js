import express from 'express'

import { updateDoctor,deleteDoctor,getAllDoctor,getSingleDoctor } from '../controllers/doctorController.js'
// import { get } from 'mongoose'
import { authenticate,restrict } from '../auth/verifyTokens.js'
import reviewRoute from './review.js'
const router=express.Router()

router.use('/:doctorId/reviews',reviewRoute) 
router.get('/',getAllDoctor)
router.get('/:id',getSingleDoctor)

router.put('/:id',authenticate,restrict(['doctor']),updateDoctor)

router.delete('/:id',authenticate,restrict(['patient']),deleteDoctor)
export default router 