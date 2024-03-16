import express from 'express'
import { adminRouter } from './AdminRouter.js'
import { coreRouter } from './coreRouter.js'
import { userRouter } from './UserRouter.js'
const router =express.Router()
router.use('/admin',adminRouter)
router.use('/core',coreRouter)
router.use('/user',userRouter)
export  default router