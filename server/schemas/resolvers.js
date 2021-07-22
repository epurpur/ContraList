const { Contractor,Worker,Job } = require('../models');

const resolvers = {
    Query: {
        contractors: async () => {
            return await Contractor.find({})
        },
        jobs:async (parent,{_id})=>{
            const params =_id ? {_id} : {};
            return job.find(params);
        },
        workers: async () =>{
            return await Worker.find({})
        },
        job :async (parent,{_id})=>{
            const params = _id ? {_id} : {};
            return job.find (params);
        }
    },
    Mutation:{
        createJob: async (parent,args)=>{
            const job = await Job.creat(args);
            return job;
        },
        createComment: async (parent,{ _id,jobNum })=>{
            const comment =await Job.findOneAndUpdate(
                {_id},
                {new:true}
            );
            return comment;
        },
    },
};

module.exports = resolvers;