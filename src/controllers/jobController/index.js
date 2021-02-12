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
        const saveJob = await jobController.create(newJob);
        return res.json(saveJob);
    },

    async update(req, res) {
        const updatedJob = get_params(req.body);
        const saveJob = await jobController.update(updatedJob);
        return res.json(saveJob);
    },
    delete(req, res) {
        const deleteJobById = req.params.id;
        await jobController.delete(deleteJobById);
        return res.status(200).json();
    }
}