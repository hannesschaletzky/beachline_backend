import { Tournament } from 'shared'
import Pool from './pool'

async function executeInsert(query: string, values: (string | number)[]) {
  try {
    const client = await Pool.connect()
    const res = await client.query(query, values)
    console.log(`${res.command} of ${values}`)
    client.release()
  } catch (err) {
    console.log(err)
  }
}

export function insertTournament(tournament: Tournament) {
  return executeInsert(
    `INSERT INTO "Tournaments"
        VALUES (
          $1,
          $2,
          $3,
          $4)`,
    [
      tournament.date,
      tournament.starting_time,
      tournament.courts,
      tournament.password
    ]
  )
}
