import { Team, Tournament } from '../shared'
import { insertTeam, insertTournament } from './queries'
import Pool from './pool'

describe('INSERT queries work', () => {
  afterAll(() => {
    Pool.end()
  })

  test('tournament and team was inserted', async () => {
    const tournament: Tournament = {
      start: new Date(),
      courts: '18-20',
      password: '123456'
    }

    let res = await insertTournament(tournament)
    const tournament_id = res?.rows[0].tournament_id
    expect(tournament_id).toBeGreaterThanOrEqual(1)
    expect(res?.rows[0].courts).toBe(tournament.courts)

    const team: Team = {
      tournament_id: tournament_id,
      group_id: 1,
      player1_name: 'Hans',
      player2_name: 'Dampf'
    }

    res = await insertTeam(team)
    expect(res?.rows[0].team_id).toBeGreaterThanOrEqual(1)
    expect(res?.rows[0].tournament_id).toBe(tournament_id)
    expect(res?.rows[0].player1_name).toBe(team.player1_name)
  })
})
