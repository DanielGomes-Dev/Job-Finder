const Job = require('../../models/Job');

const set_job = async (id) => {
    const job = await Job.findByPk(id);
    //Se Não achar levantar um erro para ser tratado la na frente;
    return job;
}

module.exports = {
    async findAll() {
        const jobs = await Job.findAll({
            order: [['createdAt', 'DESC']]
        })
        return jobs;
    },

    async getById(id) {
        const job = await set_job(id);
        return job
    },

    async createNew(job) {
        const newJob = await Job.create(job)
        return newJob;
    },

    async update(id, jobUpdate) {
        const job = await set_job(id);
        const jobUpdated = await job.update(jobUpdate);
        return jobUpdated;
    },

    async delete(id) {
        const job = await set_job(id);
        return await job.destroy();
    }
}