import { gql } from '@apollo/client';

// queries data for one user by their USERNAME
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
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
      location
      duration
      otherComments
      comments{
        commentAuthor
      }
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

export const QUERY_JOBAUTHOR = gql`
 query jobAuthor($jobAuthor:String!) {
    jobAuthor(jobAuthor: $jobAuthor) {
    _id
    createdAt
    jobText
    location
    duration
    otherComments
  }
}
`;





