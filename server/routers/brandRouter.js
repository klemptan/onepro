const Router = require('express')
const router = new Router()
const BrandController = require('../controllers/brandController')

router.get('/',BrandController.getAll)
router.post('/parse',BrandController.parse)
router.get('/:id',BrandController.getOne)

module.exports = router