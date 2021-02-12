const Job = require('./jobsDatabse');
const valid = require('../services/jobsValidator');

module.exports = {

    async index() {
        return await Job.findAll();
    },

    async show(id) {
        return await Job.getById(id);
    },

    async create(job) {
        if (!valid.job(job)) return { err: 'Invalid Params' };
        const newJob = Job.createNew(job);
        return newJob;
    },

    update() {
        return res.json({ msg: 'ok3' })
    },
    delete() {
        return res.json({ msg: 'ok4' })
    }
}