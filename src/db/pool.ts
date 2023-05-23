import { Pool } from 'pg'

// pools will use environment variables for connection information
const pool = new Pool()

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

if (process.env.NODE_ENV == 'local') {
  pool.query('SELECT NOW()').then((res) => {
    console.log(`connected to ${process.env.PGDATABASE} at ${res.rows[0].now}`)
  })
}

export default pool
