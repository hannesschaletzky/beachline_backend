export interface Tour_Result {
  DVV_ID: number
  Place: number
  Team_DVV_ID: number
  Points: number
}

export interface Team {
  DVV_ID: number
  Player_1_DVV_ID: number
  Player_2_DVV_ID: number
}

export interface Player {
  DVV_ID: number
  First_Name: string
  Last_Name: string
  Club: string
}

/**
 * Database Table names
 */
export enum Tables {
  Players = 'Players',
  Teams = 'Teams',
  Tour_Result = 'Tour_Result'
}
