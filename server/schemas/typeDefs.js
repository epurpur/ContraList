const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Contractor {
        _id: ID
        name: String
        email: String
        password:String
        phoneNumber: String 
        licenseNumber:String
     
    }
     type Worker{
         _id:ID
         name:String
         email:String
         password:String
         phoneNumber:String
       
     

     }
     type Job{
         _id:ID
         jobText:String
         jobAuthor:String
         createdAt:String

     }

    type Query {
        contractor: [Contractor]
        worker:[Worker]
        jobs:[Job]
        job(id:ID!):Job
    }
    type Mutation{
        createJob(jobText:String!,jobAuthor:String!,createdAt:String):Job
        
        createContractor(name:String!,email:String!,password:String!,phoneNumber:String!,licenseNumber:String!):Contractor
    }
    
  

`;

module.exports = typeDefs;