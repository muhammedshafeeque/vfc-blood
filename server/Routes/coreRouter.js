import express from 'express'
import { createBloodGroupe, getBloodGroupe } from '../Controller/bloodController.js'
import { createLocation, searchLocation } from '../Controller/LocationConrtoller.js'
const router =express.Router()
router.post('/blood-group',createBloodGroupe)
router.get('/blood-group',getBloodGroupe)
router.post('/location',createLocation)
router.get('/location',searchLocation)
router.post('status')
router.get('status')

export const coreRouter=router