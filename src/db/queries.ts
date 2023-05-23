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

export async function insertTournament(tournament: Tournament) {
  return executeInsert(
    `INSERT INTO "Tournaments" (start, courts, password)
        VALUES (
          $1,
          $2,
          $3)`,
    [
      formatToTimestamp(tournament.start),
      tournament.courts,
      tournament.password
    ]
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
