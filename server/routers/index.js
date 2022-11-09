const Router = require('express')
const categoryRouter = require('./categoryRouter')

const router = new Router()

router.use('/category',categoryRouter)

module.exports = router