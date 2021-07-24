// const { AuthenticationError } = require('apollo-server-express');
const { Contractor,Worker,Job} = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        contractor: async () => {
            return await Contractor.find({})
        },
        worker: async () => {
            return await Worker.find({})
        },
      
    },
    // Mutation:{
    //     createJob: async (parent,{jobText,jobAuthor,createdAt})=>{
    //         const job = await Job.create({jobText,jobAuthor,createdAt});
    //         return job;
    //     },
    //     submitApplictaion: async (parent,{ name,email})=>{
    //         const apply =await Job.findOneAndUpdate(
    //             {name},
    //             {email}
    //         );
    //         return apply;
    //     },
    // },
};

module.exports = resolvers;