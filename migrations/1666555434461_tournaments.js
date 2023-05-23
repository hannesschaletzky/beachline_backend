/* eslint-disable no-undef */
// https://salsita.github.io/node-pg-migrate/#/columns

exports.up = (pgm) => {
  pgm.createTable('Tournaments', {
    tournament_id: {
      type: 'SERIAL',
      primaryKey: true,
      notNull: true
    },
    start: { type: 'timestamp', notNull: true },
    courts: { type: 'string', notNull: true },
    password: { type: 'string', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  })
}
