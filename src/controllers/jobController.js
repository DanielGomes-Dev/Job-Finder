const Job = require('../models/Job');

const get_params = (body) => {
    const { title, description, salary, company, email } = body;
    const job = { title, description, salary, company, email };
    return job
}

const set_job = async (id) => {
    return await Job.findByPk(id);
}

module.exports = {

    async index(req, res) {
        const jobs = await Job.findAll()
        return res.json(jobs);
    },

    async show(req, res) {
        const job = await set_job(req.params.id)
        return res.json(job);
    },

    async create(req, res) {
        const job = get_params(req.body);

        try {
            const newJob = await Job.create(job)
            return res.json(newJob);

        } catch (e) {
            // console.log(e);
            return res.status(400).json()

        }
    },

    update(req, res) {
        return res.json({ msg: 'ok3' })
    },
    delete(req, res) {
        return res.json({ msg: 'ok4' })
    }
}