const { Contractor } = require('../models');

const resolvers = {
    Query: {
        contractors: async () => {
            return await Contractor.find({})
        }
    }
};

module.exports = resolvers;