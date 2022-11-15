const Router = require('express')
const router = new Router()
const GoodController = require('../controllers/goodController')

router.get('/',GoodController.getAll)
router.get('/:id',GoodController.getOne)
router.post('/parseGoods',GoodController.parseGoods)

module.exports = router