import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { logger, errorLogger } from './share/logger'

async function batman() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`Db is Connected`)

    app.listen(config.port, () => {
      logger.info(`app listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error(`Failed to connect`, err)
  }
}

batman()
