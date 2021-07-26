// const { AuthenticationError } = require('apollo-server-express');
const { Contractor,Worker,Job} = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        //finding all contractors
        contractor: async () => {
            return await Contractor.find({});
        },
        //finding all workers
        worker: async () => {
            return await Worker.find({}).populate('job').populate({
                path:'job'
                populate:''
            })
        },
        //finding all jobs
        job: async () => {
            return await Job.find({});
        },
        // jobs: async (parent, args) => {
        //     return await Class.findById(args.id);
        //   },
    },
    Mutation:{
        createJob: async (parent,{jobText,jobAuthor,createdAt})=>{
            const job = await Job.create({jobText,jobAuthor,createdAt});
            return job;
        },
        createContractor:async (parent,{name,email,password,phoneNumber,licenseNumber})=>{
            const contractor = await Contractor.create({name,email,password,phoneNumber,licenseNumber});
            return contractor;
        },
        // submitApplictaion: async (parent,{ name,email})=>{
        //     const apply =await Job.findOneAndUpdate(
        //         {name},
        //         {email}
        //     );
        //     return apply;
        // },
    },
};

module.exports = resolvers;