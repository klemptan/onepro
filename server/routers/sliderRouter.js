const Router = require('express')
const router = new Router()
const slideController = require('../controllers/slideController')

router.get('/',slideController.GetAllSliders)
router.get('/:id',slideController.GetSliders)
router.post('/',slideController.CreateSlider)
router.post('/slide',slideController.AppendSlide)

module.exports = router