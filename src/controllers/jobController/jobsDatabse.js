const Job = require('../../models/Job');

module.exports = {
    async findAll() {
        const jobs = await Job.findAll({
            order: [['createdAt', 'DESC']]
        })
        return jobs;
    },

    async getById(id) {
        return await Job.findByPk(id);
    },
    async createNew(job) {

        try {
            const newJob = await Job.create(job)
            return newJob;

        } catch (err) {
            // console.log(e);
            return err

        }
    }
}