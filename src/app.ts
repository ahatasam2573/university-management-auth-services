import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'

const app: Application = express()

//parser
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/users/', UserRoutes)

// app.get('/', (req: Request, res: Response) => {
//   throw new Error('Error checking')
// })

//global error handler
app.use(globalErrorHandler)

export default app
