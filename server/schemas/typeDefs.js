const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Contractor {
        _id: ID
        name: String
        email: String
        password:String
        phoneNumber: Int
        licenseNumber:Int
     
    }
     type Worker{
         _id:ID
         name:String
         email:String
         password:String
         phoneNumber:Int
       
     

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
        job:[Job]
    }
    type Mutation{
        createJob(jobText:String!,jobAuthor:String!,createdAt:String):Job
    }
    
  

`;

module.exports = typeDefs;