const {Category,Good,Brand} = require('../models/models')

class GoodController {
    async parsing(req,res,next) {
       try{
        let {model,article,price,link,category_transcript,brand_name} = req.body
        brand_name = brand_name.trim()
        const category = await Category.findOne({where:{transcript:category_transcript}})

        let brand = await Brand.findOne({where:{name:brand_name}})

        if(!brand) {
            brand = await Brand.create({name:brand_name})
        }

        const good = await Good.create({
            model,
            article,
            price:+price,
            link,
            categoryId:category.id,
            brandId:brand.id
        })

        return res.json(good)
       } catch(e){
        next(e)
       }
    }

    async getAll(req,res,next){
        let {sort,order,load,count,page,filter} = req.params
        page=page||1,
        count=count||20,
        load=load||20,
        order=order||'asc',
        sort=sort||'id'
        let offset = page*load - load

        let goods
        if(!categoryId && !filter) {
            goods = await Good.findAll({load,offset})
        }
        else if(categoryId && !filter){
            goods = await Good.findAll({where:{categoryId},load,offset})
        }
        else if(!categoryId && filter){
            goods = await Good.findAll({where:{brandId:filter},load,offset})
        }
        else {
            goods = await Good.findAll({where:{brandId:filter,categoryId},load,offset})
        }
        return res.json(goods)
    }
}

module.exports = new GoodController()