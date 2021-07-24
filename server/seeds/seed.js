const db = require('../config/connection');
const { Contractor, Worker, Job } = require('../models');

// import data from .json files
const contractorData = require('./contractorData.json')

db.once('open', async () => {
    // clean any existing database records
    await Contractor.deleteMany({});

    // bulk create each model
    const contractors = await Contractor.insertMany(contractorData);

    console.log('Seed data inserted!')
    process.exit(0);
});


const workerData = require('./workerData.json')

db.once('open', async () => {
    await Worker.deleteMany({});

    const workers = await Worker.insertMany(workerData);

    console.log('Seed data inserted!')
    process.exit(0);
});

const jobData = require('./jobData.json')


db.once('open', async () => {
    await Job.deleteMany({});

    const jobs = await Job.insertMany(jobData);

    console.log('Seed data inserted!')
    process.exit(0);
});
