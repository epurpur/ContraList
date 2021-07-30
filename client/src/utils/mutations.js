import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        roleId
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!,$phoneNumber:String!,$licenseNumber:String!,$roleId:String!,$description:String!) {
    addUser(username: $username, email: $email, password: $password,phoneNumber:$phoneNumber,licenseNumber:$licenseNumber,roleId:$roleId,description:$description) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_JOB = gql`
  mutation addJob($jobText: String!, $jobAuthor: String!) {
    addJob(jobText: $jobText, jobAuthor: $jobAuthor) {
      _id
      jobText
      jobAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $jobId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      jobId: $jobId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
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
