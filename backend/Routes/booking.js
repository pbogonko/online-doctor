import express from 'express'
import { getCheckoutSession } from '../controllers/bookingController.js'
import {authenticate} from '../auth/verifyTokens.js'

const router=express.Router()
router.post('/checkout-session/:doctorId',authenticate,getCheckoutSession)

export default router