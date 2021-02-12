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

    async update(id, jobUpdate) {
        if (!valid.job(jobUpdate)) return { err: 'Invalid Params' };
        const updatedJob = await Job.update(id, jobUpdate);
        return updatedJob
    },
    async delete(id) {
        const deleted = await Job.delete(id);
        return deleted;
    }
}