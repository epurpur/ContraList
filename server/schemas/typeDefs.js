const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Contractor {
        _id: ID
        name: String!
        email: String!
        phoneNumber: String!
        licenseNumber: Number!
    }

    type Query {
        contractors: [Contractors]
    }
`;

module.exports = typeDefs;