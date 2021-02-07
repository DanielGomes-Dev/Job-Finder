const jobController = require('./controllers/jobController');


module.exports = {
    job(route) {
        route.get('/jobs', jobController.index)
        route.get('/jobs/:id', jobController.show)
        route.post('/jobs', jobController.create)
        route.put('/jobs', jobController.update)
        route.delete('/jobs', jobController.delete)

    },

    init(route) {
        this.job(route);
    }
}