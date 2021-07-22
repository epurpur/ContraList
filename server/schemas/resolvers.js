const { Contractor,Worker } = require('../models');

const resolvers = {
    Query: {
        contractors: async () => {
            return await Contractor.find({})
        },
        worker:async (parent,{_id})=>{
            const params =_id ? {_id} : {};
            return Worker.find(params);
        },
    },
    Mutation:{
        
    }
};

module.exports = resolvers;