import express from 'express'

const router = express.Router()

router.use(express.json())

const tasksList = [
  {
    id: 1,
    title: 'Task 1',
    creationDate: '2023-05-01',
    finishedDate: '2023-05-03',
    creator: 'admin'
  },
  {
    id: 2,
    title: 'Task 2',
    creationDate: '2023-05-02',
    finishedDate: '2023-05-04',
    creator: 'admin'
  },
  {
    id: 3,
    title: 'Task 3',
    creationDate: '2023-05-03',
    finishedDate: null,
    creator: 'admin'
  },
  {
    id: 4,
    title: 'Task 4',
    creationDate: '2023-05-04',
    finishedDate: null,
    creator: 'admin'
  }
]

router.get('/', (req, res) => {
  return res.status(200).json(tasksList)
})

router.post('/', (req, res) => {
  const { title } = req.body
  const creationDate = new Date().toISOString().slice(0, 10)
  let nextId = tasksList.length + 1
  const creatorEmail = req.session.email

  if (!title || title === '') {
    return res.status(406).json({ error: 'Title is required' })
  }

  const newTask = {
    id: nextId,
    title,
    creationDate,
    finishedDate: null,
    creator: creatorEmail
  }

  tasksList.push(newTask)
  nextId++

  return res.status(201).json(newTask)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const task = tasksList.find(task => task.id === parseInt(id))

  if (!task) {
    return res.status(404).json({ error: 'Task not found' })
  } else {
    return res.status(200).json(task)
  }
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const { title, finishedDate } = req.body
  const task = tasksList.find(task => task.id === parseInt(id)) // Inspiriert von eigenen Aufgaben: https://github.com/nxtdxve/m295-233131

  if (!task) {
    return res.status(404).json({ error: 'Task not found' })
  }

  if (!title || title === '') {
    return res.status(406).json({ error: 'Title is required' })
  }

  task.title = title
  task.finishedDate = finishedDate

  return res.status(200).json(task)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const taskIndex = tasksList.findIndex(task => task.id === parseInt(id)) // https://github.com/nxtdxve/m295-233131

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' })
  } else {
    const deletedTask = tasksList.splice(taskIndex, 1)

    return res.status(204).send(deletedTask)
  }
})

export default router
