import express from 'express'
import pool from 'db/pool'
import { insertTournament } from 'db/queries'
import { Tournament } from 'shared'

export const setupExpressServer = () => {
  return new Promise<express.Express>((resolve) => {
    const app = express()
    app.get('/', (req, res) => {
      res.json('Hello World! This is the beachline backend')
    })

    pool.connect()

    const tournament: Tournament = {
      start: new Date(),
      courts: '18-20',
      password: '123456'
    }
    insertTournament(tournament)

    resolve(app)
  })
}
