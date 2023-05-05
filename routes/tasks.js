import express from 'express'

const router = express.Router()

router.use(express.json())

const tasksList = [
  {
    id: 1,
    title: 'Task 1',
    creation_date: '2023-05-01',
    finished_date: '2023-05-03'
  },
  {
    id: 2,
    title: 'Task 2',
    creation_date: '2023-05-02',
    finished_date: '2023-05-04'
  },
  {
    id: 3,
    title: 'Task 3',
    creation_date: '2023-05-03',
    finished_date: null
  },
  {
    id: 4,
    title: 'Task 4',
    creation_date: '2023-05-04',
    finished_date: null
  }
]

router.get('/', (req, res) => {
  res.send(tasksList)
})

router.post('/', (req, res) => {
  res.send('Create a TODO')
})

router.get('/:id', (req, res) => {
  res.send(`Get TODO ${req.params.id}`)
})

router.put('/:id', (req, res) => {
  res.send(`Update TODO ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
  res.send(`Delete TODO ${req.params.id}`)
})

export default router
