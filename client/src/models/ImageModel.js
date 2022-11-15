export class ImageModel {
    constructor(image) {
        if (image) {
            this.id = image.id
            this.img = image.img
        }
        else{
            this.id = 0
            this.img = ''
        }
    }
}