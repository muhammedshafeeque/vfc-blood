import express from 'express'
import { createDonor, getDonor } from '../Controller/DonorControls.js'
import { bloodBulkUpload } from '../Controller/bloodController.js'
const router =express.Router()
router.get('/donors',getDonor)
router.post('/donor',createDonor)
router.post('/donor-bulk-upload',bloodBulkUpload)
export const userRouter=router