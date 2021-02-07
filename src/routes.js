const testController = require('./controllers/test');


module.exports = {
    test(route) {
        route.get('/', testController.index)
    },

    init(route) {
        this.test(route)
    }
}