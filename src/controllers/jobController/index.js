const jobController = require('./jobsController');

const get_params = (body) => {
    const { title, description, salary, company, email } = body;
    const job = { title, description, salary, company, email };
    return job;
}

module.exports = {
    async index(req, res) {
        const allJobs = await jobController.index()
        return res.json(allJobs);
    },

    async show(req, res) {
        const idJob = req.params.id;
        const showJobById = await jobController.show(idJob);
        return res.json(showJobById);
    },

    async create(req, res) {
        const newJob = get_params(req.body);
        const saveJob = jobController.create(newJob);
        return res.json(saveJob);
    },

    update() {
        return res.json({ msg: 'ok3' })
    },
    delete() {
        return res.json({ msg: 'ok4' })
    }
}