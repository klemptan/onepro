const Router = require('express')
const router = new Router()
const GoodController = require('../controllers/goodController')

router.get('/',GoodController.getAll)
router.post('/parse',GoodController.parsing)

module.exports = router