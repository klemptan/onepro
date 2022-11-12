const path = require('path')
const {Slider,Slide} = require('../models/models')
const uuid = require("uuid");

class SliderController {
    async GetAllSliders(req,res,next) {
        const sliders = await Slider.findAll({
            include:[{model:Slide, as:'slides'}]
        })

        return res.json(sliders)
    }

    async GetSliders(req,res,next) {
        const {id} = req.params
        const slider = await Slider.findOne({
            where:{id},
            include:[{model:Slide, as:'slides'}]
        })
        slider.slides.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
        return res.json(slider)
    }

    async CreateSlider(req,res,next) {
        const {name} = req.body
        const slider = await Slider.create({name})
        return res.json(slider)
    }

    async AppendSlide(req,res,next) {
        const {topText,title,description,link,sliderId} = req.body
        const {img} = req.files
        const img_name = uuid.v4()+img.mimetype.split('/')[1]
        img.mv(path.resolve(__dirname,'..','static',img_name))
        const slide = await Slide.create({title,topText,description,link,sliderId,img:img_name})
        return res.json(slide)
    }
}

module.exports = new SliderController()