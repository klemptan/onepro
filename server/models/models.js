const sequelize = require('../db')

const {DataTypes}  = require('sequelize')

const Category = sequelize.define('category',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true},
    transcript:{type:DataTypes.STRING},
    img:{type:DataTypes.STRING},
    smallImg:{type:DataTypes.STRING},
})

const Slider = sequelize.define('slider',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING}
})

const Slide = sequelize.define('slide',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    img:{type:DataTypes.STRING},
    topText:{type:DataTypes.STRING},
    title:{type:DataTypes.STRING},
    description:{type:DataTypes.TEXT},
    link:{type:DataTypes.STRING}
})

const Brand = sequelize.define('brand',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true},
})

const Good = sequelize.define('good',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    article:{type:DataTypes.STRING},
    model:{type:DataTypes.STRING},
    link:{type:DataTypes.STRING},
    price:{type:DataTypes.INTEGER},
})

const CategoryBrand = sequelize.define('category_brand',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})

Slider.hasMany(Slide)
Slide.belongsTo(Slider)

Category.hasMany(Good)
Good.belongsTo(Category)

Brand.hasMany(Good)
Good.belongsTo(Brand)

Category.belongsToMany(Brand,{through:CategoryBrand})
Brand.belongsToMany(Category,{through:CategoryBrand})



module.exports = {
    Category,
    Slider,
    Slide,
    Good,
    Brand,
    CategoryBrand
}