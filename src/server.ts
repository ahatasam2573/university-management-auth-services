import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { logger, errorLogger } from './share/logger'
import { Server } from 'http'

process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})
let server: Server
async function batman() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`Db is Connected`)

    server = app.listen(config.port, () => {
      logger.info(`app listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error(`Failed to connect`, error)
  }
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}
batman()
process.on('SIGTERM', () => {
  logger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})
