export class ListModel {
    constructor(data) {
        if (data) {
            this.id = data.id
            this.name = data.id
        }
        else {
            this.id = 0
            this.name = ''
        }
    }
}