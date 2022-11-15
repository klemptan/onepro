export class DetailModel {
    constructor(detail) {
        if (detail) {
            this.id = detail.id
            this.name = detail.name
            this.description = detail.description
        }
        else {
            this.id = 0
            this.name = ''
            this.description = ''
        }
    }
}