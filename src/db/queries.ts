import { Tournament, Team } from 'shared'
import Pool from './pool'

async function executeInsert(query: string, values: (string | number)[]) {
  try {
    const client = await Pool.connect()
    const res = await client.query(query, values)
    console.log('Inserted: ', res.rows[0])
    client.release()
    return res
  } catch (err) {
    console.log(err)
  }
}

export function insertTournament(tournament: Tournament) {
  return executeInsert(
    `INSERT INTO "Tournaments" (start, courts, password)
        VALUES (
          $1,
          $2,
          $3) RETURNING *;`,
    [
      formatToTimestamp(tournament.start),
      tournament.courts,
      tournament.password
    ]
  )
}

export function insertTeam(team: Team) {
  return executeInsert(
    `INSERT INTO "Teams" (tournament_id, group_id, player1_name, player2_name)
        VALUES (
          $1,
          $2,
          $3,
          $4) RETURNING *;`,
    [team.tournament_id, team.group_id, team.player1_name, team.player2_name]
  )
}

function formatToTimestamp(date: Date) {
  function zeroPad(d: string | number) {
    return ('0' + d).slice(-2)
  }

  // 2016-06-22 19:10
  return `${date.getFullYear()}-${zeroPad(date.getMonth() + 1)}-${zeroPad(
    date.getDay()
  )} ${zeroPad(date.getHours())}:${zeroPad(date.getMinutes())}`
}
