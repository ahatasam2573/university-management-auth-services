import express from 'express'
import usersController from './users.controller'

const router = express.Router()

//here it takes controller createUser and post it
router.post('/create-user', usersController.createUser)

export default router
