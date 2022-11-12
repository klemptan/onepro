const Router = require('express')
const categoryRouter = require('./categoryRouter')
const sliderRouter = require('./sliderRouter')
const goodRouter = require('./goodRouter')
const brandRouter = require('./brandRouter')

const router = new Router()

router.use('/category',categoryRouter)
router.use('/slider',sliderRouter)
router.use('/good',goodRouter)
router.use('/brand',brandRouter)

module.exports = router