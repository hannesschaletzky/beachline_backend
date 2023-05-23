export interface Tournament {
  tournament_id?: number
  start: Date
  courts: string
  password: string
}

export interface Team {
  team_id?: number
  tournament_id: number
  group_id: number
  player1_name: string
  player2_name: string
}
