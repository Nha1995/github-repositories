import { gql } from '@apollo/client';

export const GET_REPOSITORIES_BY_NAME = gql`
    query search($repositoryName: String!, $first: Int!) {
        search(query: $repositoryName, first: $first,  type: REPOSITORY) {
        edges {
            node {
                ... on Repository {
                    id
                    owner {
                        login
                    }
                    name
                    description
                    primaryLanguage {
                        name
                        color
                    }
                    stargazerCount
                    pullRequests {
                        totalCount
                    }
                    issues {
                        totalCount
                    }
                    languages(first:100) {
                        nodes {
                            name
                            color
                        }
                    }
                }
            }
        }
    }
}
`;