/* eslint-disable no-undef */

exports.up = (pgm) => {
  pgm.createTable('Tournaments', {
    tournament_id: { primaryKey: true, type: 'integer', notNull: true },
    date: { type: 'date', notNull: true },
    starting_time: { type: 'timestamp', notNull: true },
    courts: { type: 'string', notNull: true },
    password: { type: 'string', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  })
}
