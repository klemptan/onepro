const Router = require('express')
const router = new Router()
const CategoryController = require('../controllers/categoryController')

router.post('/',CategoryController.create)
router.get('/',CategoryController.getAll)
router.get('/:id',CategoryController.getOne)
router.put('/',CategoryController.edit)
router.delete('/:id',CategoryController.delete)

module.exports = router