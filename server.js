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
    return res.status(403).json({ error: 'Not logged in' })
  }
}

app.use('/tasks', authentication, tasksRouter)

app.get('/', (req, res) => {
  res.send('m295 Prüfung B')
})

// /login /verify /logout inspiriert von https://openscript.github.io/course-zli-m295/#/83?clicks=0
app.post('/login', (req, res) => {
  const { email, password } = req.body
  // eslint-disable-next-line no-useless-escape
  const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ // Regex from https://www.w3resource.com/javascript/form/email-validation.php

  if (!email || email === '') {
    return res.status(400).json({ error: 'Email is required' })
  } else if (!mailRegex.test(email)) {
    return res.status(400).json({ error: 'Email is invalid' })
  } else if (!password || password === '') {
    return res.status(400).json({ error: 'Password is required' })
  }

  if (password === loginCredentials.password) {
    req.session.email = email

    return res.status(200).json({ success: `Logged in as ${email}` })
  } else {
    return res.status(401).json({ error: 'Invalid credentials' })
  }
})

app.get('/verify', (req, res) => {
  if (req.session.email) {
    return res.status(200).json({ message: `Currently logged in as ${req.session.email}` })
  } else {
    return res.status(401).json({ error: 'Not logged in' })
  }
})

app.delete('/logout', (req, res) => {
  if (req.session.email) {
    req.session.destroy()

    return res.status(204).send()
  } else {
    return res.status(401).json({ error: 'Not logged in' })
  }
})

app.get('/*', (req, res) => {
  res.sendStatus(404)
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
