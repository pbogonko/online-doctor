import express from 'express'

import { updateDoctor,deleteDoctor,getAllDoctor,getSingleDoctor,getdoctorProfile , getDoctorAppointments} from '../controllers/doctorController.js'
// import { get } from 'mongoose'
import { authenticate,restrict } from '../auth/verifyTokens.js'
import reviewRoute from './review.js'

const router=express.Router()

router.use('/:doctorId/reviews',reviewRoute) 
router.get('/',getAllDoctor)
router.get('/:id',getSingleDoctor)

router.put('/:id',authenticate,restrict(['doctor']),updateDoctor)

router.delete('/:id',authenticate,restrict(['doctor']),deleteDoctor)
router.get('/profile/me',authenticate,restrict(['doctor']),getdoctorProfile)
router.get('/appointments/doctorappointments',authenticate,restrict(['doctor']),getDoctorAppointments)
export default router 