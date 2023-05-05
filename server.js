import express from 'express'
import session from 'express-session'
import tasksRouter from './routes/tasks.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Von Präsentationsfolie: https://openscript.github.io/course-zli-m295/#/83?clicks=0
app.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: false,
  cookie: {}
}))

const loginCredentials = {
  password: 'm295'
}

// mit Ben besprochen und so umgesetzt
const authentication = (req, res, next) => {
  if (req.session.email) {
    next()
  } else {
    return res.status(401).json({ error: 'Not logged in' })
  }
}

app.use('/tasks', authentication, tasksRouter)

app.get('/', (req, res) => {
  res.send('m295 Prüfung B')
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
