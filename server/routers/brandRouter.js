const Router = require('express')
const router = new Router()
const BrandController = require('../controllers/brandController')

router.get('/',BrandController.getAll)

module.exports = router