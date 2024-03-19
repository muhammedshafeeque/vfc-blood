import express from 'express'
const router =express.Router()
router.post('/create-user')
router.post('/login')
export const adminRouter=router