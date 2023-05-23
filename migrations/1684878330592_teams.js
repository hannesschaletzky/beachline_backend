/* eslint-disable no-undef */
// https://salsita.github.io/node-pg-migrate/#/columns

exports.up = (pgm) => {
  pgm.createTable('Teams', {
    team_id: {
      type: 'SERIAL',
      primaryKey: true,
      notNull: true
    },
    tournament_id: { type: 'integer', notNull: true },
    group_id: { type: 'integer', notNull: true },
    player1_name: { type: 'string', notNull: true },
    player2_name: { type: 'string', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  })

  pgm.addConstraint('Teams', 'ForeignKey_Tournemant_ID', {
    foreignKeys: {
      columns: 'tournament_id',
      references: 'Tournaments'
    }
  })
}
