import { gql } from '@apollo/client';

export const GET_REPOSITORIES_BY_NAME = gql`
    query search($repositoryName: String!) {
        search(query: $repositoryName, first: 77, type: REPOSITORY) {
        edges {
            node {
                ... on Repository {
                    watchers {
                        totalCount
                    }
                stargazerCount
                description
                name
                primaryLanguage {
                    name
                    color
                }
                stargazers{
                    totalCount
                }
                url
                    }
                }
            }
        }
    }
`;