const express = require ('express')
const fs = require ('fs')
const router = express.Router()
const todosApi = 'src/db/todos.json'
const categoriesApi = 'scr/db/categories.json'
// const path = require ('path')

// const categoriesPath = path.join(__dirname, '../db/todos.json')

router.get('/', async (req, res, next) => {
  try {
    const readingTL = await fs.readFileSync(todosApi)
    const toJSON = JSON.parse(readingTL)

    const mapped = toJSON.filter((category) => category)
    console.info('> allrigth: ', mapped)

      res.status(200).json({
        data: {
          length: toJSON.length,
          data: toJSON
        },
        success: "true"
      })
  }catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const readingCA = await fs.readFileSync(todosApi)
    const caToJson = JSON.parse(readingCA)
    const filteringTheId = caToJson.filter(todo => todo.id === +req.params.id)

    const mapingCa = caToJson.filter((category) => category.id === +req.params.id)
    console.info('> maybe: ', mapingCa)

      res.status(200).json({
        success: true,
        data: filteringTheId,
      })    
  }catch (error) {
    next(error)
  }
})

module.exports = router