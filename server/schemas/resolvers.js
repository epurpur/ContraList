// const { AuthenticationError } = require('apollo-server-express');
const { User,Job} = require('../models');
// const { populate } = require('../models/');
// const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        //finding all users
        user: async () => {
            return await User.find({}).populate('job')
        },
    
        //finding all jobs
        job: async () => {
            return await Job.find({}).populate('user')
        },
         //finding one user that applied and display the jobs that are connected to this user (contractor)
         contractorjobs: async (parent, { user }) => {
            // return Job.find({ user })
            return Job.find({ _id: userId });
          },
      
    },
    Mutation:{
        createJob: async (parent,{jobText,jobAuthor,createdAt})=>{
            const job = await Job.create({jobText,jobAuthor,createdAt});
            return job;
        },
        createUser:async (parent,{name,email,password,phoneNumber,licenseNumber,roleId,description})=>{
            const user = await User.create({name,email,password,phoneNumber,licenseNumber,roleId,description});
            return user;
        },
        

    
    },
};

module.exports = resolvers;