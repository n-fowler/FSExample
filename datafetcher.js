const rp = require('request-promise')
const express = require('express')

const app = express()

function logMessage(string, ...args) {
  if (process.env.NODE_ENV !== 'test') {
      console.log(string, ...args)
  }
}

if (!module.parent) {
  app.listen(3000, () => {
      logMessage("Data fetcher listening on port 3000")
  })
}

app.get('/users', async (req, res) => {
  const opts = {
    method: 'GET',
    uri: 'https://jsonplaceholder.typicode.com/users',
    json: true
  }

  const users = await rp(opts)

  res.json(users)
})

module.exports = app; // for testing