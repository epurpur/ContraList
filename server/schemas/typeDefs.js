const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Contractor {
        _id: ID
        name: String!
        email: String!
        password:String!
        phoneNumber: String!
    }

    type Query {
        contractors: [Contractor]
    }
   type Worker{
    _id:ID
    name:String!
    email:String!
    password:String!

   }
   type Query {
   workers: [Worker]

  

`;

module.exports = typeDefs;