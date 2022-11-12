const { Brand, Good } = require("../models/models")

class BrandController{
    async getAll(req,res,next){
        const brands = await Brand.findAll(
            // {
            //     include:[{model:Good, as: 'goods'}]
            // }
        )
        return res.json(brands)
    }
}

module.exports = new BrandController