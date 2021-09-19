import { gql } from '@apollo/client';

export const GET_REPOSITORIES_BY_NAME = gql`
    query search($repositoryName: String!) {
        search(query: $repositoryName, first: 5, type: REPOSITORY) {
        edges {
            node {
                ... on Repository {
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