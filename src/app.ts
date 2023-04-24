import * as dotenv from 'dotenv'
dotenv.config()
import { setupExpressServer } from 'server/server'

const hostname = process.env.HOSTNAME
const port = process.env.PORT

setupExpressServer().then((server) => {
  server.listen(port, () => {
    console.log(`Beachstats backend running on ${hostname}:${port}/`)
  })
})
