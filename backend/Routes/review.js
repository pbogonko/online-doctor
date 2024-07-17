import { getAllReview,createreview } from "../controllers/reviewController.js";
import express from 'express'

import { authenticate,restrict} from "../auth/verifyTokens.js";

const router=express.Router({mergeParams:true })

router.route('/').get(getAllReview).post(authenticate,restrict(['patient']),createreview)

export default router