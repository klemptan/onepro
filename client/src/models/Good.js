import { ListModel } from "./ListModel"
import { ImageModel } from './ImageModel'
import { DetailModel } from './DetailModel'

export class Good {
    constructor(good) {
        if (good) {
            this.id = good.id
            this.model = good.model
            this.article = good.article
            this.description = good.description
            if (good.category) {
                this.category = new ListModel(good.category)
            }
            if (good.brand) {
                this.brand = new ListModel(good.brand)
            }
            this.price = good.price
            if (good.good_images) {
                this.good_images = []
                for (var item of good.good_images) {
                    this.good_images.push(new ImageModel(item))
                }
            }
            if (good.good_details) {
                this.good_details = []
                for (var item of good.good_details) {
                    this.good_details.push(new DetailModel(item))
                }
            }
        }
        else {
            this.id = 0
            this.model = ''
            this.article = ''
            this.category = new ListModel()
            this.brand = new ListModel()
            this.price = ''
            this.good_images = [new ImageModel()]
            this.good_details = [new DetailModel()]
        }
    }
}

