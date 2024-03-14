import express from 'express'
import { createBloodGroupe, getBloodGroupe } from '../Controller/bloodController.js'
const router =express.Router()
router.post('/blood-group',createBloodGroupe)
router.get('/blood-group',getBloodGroupe)
router.post('location')
router.get('location')
router.post('status')
router.get('status')

export const coreRouter=router