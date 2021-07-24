import { gql } from '@apollo/client';

// this query gets all workers from DB
export const QUERY_ALL_WORKERS = gql`
    query {
        worker {
        _id
        name
        email
        phoneNumber
        password
        }
    }
`;




