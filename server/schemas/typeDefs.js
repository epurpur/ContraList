const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        password:String
        phoneNumber: String 
        licenseNumber:String
        roleId:String
        description:String
        jobs:[Job]
     
    }
    
     type Job{
         _id:ID
         jobText:String
         jobAuthor:String
         createdAt:String
         comments:[Comment]

     }
     type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }
  type Auth {
    token: ID!
    user: User
  }
 

  
    type Query {
    users: [User]
    user(username: String!): User
    jobs(username: String): [Job]
    job(jobId: ID!): Job
    jobAuthor(jobAuthor:String):[Job]
    commentAuthor(commentAuthor:String):[Comment]
    
  }
    type Mutation{
    addUser(username: String!, email: String!, password: String!,phoneNumber:String!,licenseNumber:String,roleId:String!,description:String!): Auth
    login(email: String!, password: String!): Auth
    addJob(jobText: String!, jobAuthor: String!): Job
    addComment(
      jobId: ID!
      commentText: String!
      commentAuthor: String!
    ): Job
    removeJob(jobId: ID!): Job
    removeComment(jobId: ID!, commentId: ID!): Job
   
    }
`;

module.exports = typeDefs;