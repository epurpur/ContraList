import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!,$email: String!,$phoneNumber:String!,$licenseNumber:String,roleId:String!,$description:String!) {
    user(username: $username,email:$email,phoneNumber:$phoneNumber,licenseNumber:$licenseNumber,roleId:$roleId,$description:description) {
      _id
      username
      email
      phoneNumber
      licenseNumber
      roleId
      description
      jobs {
        _id
        jobText
        createdAt
      }
    }
  }
`;

export const QUERY_JOBS = gql`
  query getJobs {
    jobs {
      _id
      jobText
      jobAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_JOB = gql`
  query getSingleJob($jobId: ID!) {
    job(jobId: $jobId) {
      _id
      jobText
      jobAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;





