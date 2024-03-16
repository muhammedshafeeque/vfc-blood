import express from 'express'
import { createDonor, getDonor } from '../Controller/DonorControls.js'
const router =express.Router()
router.get('/donors',getDonor)
router.post('/donor',createDonor)
export const userRouter=router