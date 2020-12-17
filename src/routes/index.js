const express = require ('express')
const fs = require ('fs')
const router = express.Router()
const categoriesApi = 'src/db/todos.json'
// const path = require ('path')

// const categoriesPath = path.join(__dirname, '../db/todos.json')

router.get('/', async (req, res, next) => {
  try {
    const readingTL = await fs.readFileSync(categoriesApi)
    const toJSON = JSON.parse(readingTL)

      res.status(200).json({
        data: {
          length: toJSON.length,
          data: toJSON
        },
        status: 'OK!'
      })
  }catch (error) {
    next(error)
  }
})

module.exports = router