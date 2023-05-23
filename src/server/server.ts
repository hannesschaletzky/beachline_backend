/* eslint-disable no-constant-condition */
import express from 'express'
import { insertTournament, insertTeam } from '../db/queries'
import { Tournament, Team } from 'shared'

export const setupExpressServer = () => {
  return new Promise<express.Express>((resolve) => {
    const app = express()
    app.get('/', (req, res) => {
      res.json('Hello World! This is the beachline backend')
    })

    if (true && process.env.NODE_ENV == 'local') {
      const tournament: Tournament = {
        start: new Date(),
        courts: '18-20',
        password: '123456'
      }
      insertTournament(tournament).then((res) => {
        const team: Team = {
          tournament_id: res?.rows[0].tournament_id,
          group_id: 1,
          player1_name: 'Hans',
          player2_name: 'Dampf'
        }
        insertTeam(team)
      })
    }

    resolve(app)
  })
}
