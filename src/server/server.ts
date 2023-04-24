import express from 'express'

export const setupExpressServer = () => {
  return new Promise<express.Express>((resolve) => {
    const app = express()
    app.get('/', (req, res) => {
      res.json('Hello World! This is the beachstats backend')
    })

    resolve(app)
  })
}
