const Jobs = require('./jobsController');

describe('Jobs', () => {
    let id = null;

    test('should be able to create a new job', async () => {
        const newJob = {
            title: "valid_title",
            description: "valid_description",
            salary: 3000,
            company: "valid_company",
            email: "valid_email@email.com"
        }
        const jobs = await Jobs.create(newJob);
        id = jobs.id;
        expect(jobs).toHaveProperty('id');
    });

    test('should be able to list all jobs', async () => {
        const jobs = await Jobs.index();
        expect(jobs[0]).toHaveProperty('id');
    });

    test('should be able to return a job by id', async () => {
        const jobs = await Jobs.show(id);
        expect(jobs).toHaveProperty('id', id);
    });

    test('should be able to update a job', async () => {
        const newJob = {
            title: "valid_title_update"
        }
        const jobs = await Jobs.update(id, newJob);
        expect(jobs).toHaveProperty('title', 'valid_title_update');
    });

    test('should be able to delete a job by id', async () => {

        const jobs = await Jobs.delete(id);
        expect(jobs).toHaveProperty('id');
    });
});