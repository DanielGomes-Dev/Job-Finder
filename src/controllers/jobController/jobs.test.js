const jobs = require('./jobsController');

describe('Jobs', () => {
    test('should be able to list all jobs', async () => {
        const Jobs = await jobs.index();
        // console.log(Jobs);
        expect(Jobs[0]).toHaveProperty('id');
    });
    test('should be able to return a job by id', async () => {
        const Jobs = await jobs.show(1);
        // console.log(Jobs);
        expect(Jobs).toHaveProperty('id', 1);
    });
    test('should be able to create a new job', async () => {
        const newJob = {
            title: "valid_title",
            description: "valid_description",
            salary: 3000,
            company: "valid_company",
            email: "valid_email@email.com"
        }
        const Jobs = await jobs.create(newJob);
        // console.log(Jobs);
        expect(Jobs).toHaveProperty('id');
    });
});