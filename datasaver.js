const fs = require('fs')
const rp = require('request-promise')
var waitTimeMs = 30000;

function logMessage(string, ...args) {
  if (process.env.NODE_ENV !== 'test') {
      console.log(string, ...args)
  }
}

logMessage("Data saver running...")

const getSavedUsers = async () => {
  let savedUserData
  if (fs.existsSync('./users.json')) {
    const fileStr = fs.readFileSync('./users.json')
    savedUserData = JSON.parse(fileStr)
  } else {
    savedUserData = {}
  }

  return savedUserData
}

const saveUsers = async (users) => {
  try {
      fs.writeFileSync('./users.json', JSON.stringify(users, null, 2))
  } catch (err) {
      console.log(err)
      return false
  }
  return true
}

const checkCurrentUsers = async () => {
    logMessage("Checking current users...")

  const opts = {
    method: 'GET',
    uri: 'http://localhost:3000/users',
    json: true
  }

  const newUserList = await rp(opts)
  const users = await getSavedUsers()

  for (let user of newUserList) {
    if (users[user.id] === undefined) {
      logMessage("New User ", user.id, user.name)
      users[user.id] = user
    } else {
      logMessage("Existing User ", user.id, user.name)
    }
  }
    await saveUsers(users)
    return new Date()
}

setInterval(async () => {
  await checkCurrentUsers()
}, waitTimeMs)

checkCurrentUsers()

module.exports = {
  checkCurrentUsers,
  getSavedUsers,
  saveUsers,
  waitTimeMs
}