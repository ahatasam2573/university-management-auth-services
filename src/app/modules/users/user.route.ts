import express from 'express'
import { UserController } from './user.controller'

const router = express.Router()

//here it takes controller createUser and post it
router.post('/create-user', UserController.createUser)

export const UserRoutes = router
