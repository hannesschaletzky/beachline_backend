import express from 'express'
import pool from 'db/pool'

export const setupExpressServer = () => {
  return new Promise<express.Express>((resolve) => {
    const app = express()
    app.get('/', (req, res) => {
      res.json('Hello World! This is the beachline backend')
    })

    pool.connect()

    resolve(app)
  })
}
