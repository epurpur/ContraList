const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        name: String
        email: String
        password:String
        phoneNumber: String 
        licenseNumber:String
        roleId:String
        description:String
     
    }
    
     type Job{
         _id:ID
         jobText:String
         jobAuthor:String
         createdAt:String

     }

    type Query {
        user: [User]
        job:[Job]
        contractorjobs(_id: String):[Job]
    }
    type Mutation{
        createJob(jobText:String!,jobAuthor:String!,createdAt:String):Job
        createUser(name:String!,email:String!,password:String!,phoneNumber:String!,licenseNumber:String,roleId:String!,description:String!):User

        
    }
    
  

`;

module.exports = typeDefs;