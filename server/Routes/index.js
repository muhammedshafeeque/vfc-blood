import express from 'express'
import { adminRouter } from './AdminRouter.js'
import { coreRouter } from './coreRouter.js'
const router =express.Router()
router.use('/admin',adminRouter)
router.use('/core',coreRouter)
export  default router