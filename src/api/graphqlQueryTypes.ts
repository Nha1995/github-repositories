export interface SEARCH_RESULT_ITEM_CONNECTION {
    __typename: "SearchResultItemConnection"
    search: SEARCH_RESULT_ITEM_EDGE | null
}

export interface SEARCH_RESULT_ITEM_EDGE {
    __typename: "SearchResultItemEdge"
    edges: NODE[] | null
}

export interface NODE {
    node: REPOSITORY
}

export interface REPOSITORY {
    __typename:"Repository"
    id: string
    description: string
    name: string
    owner: OWNER
    primaryLanguage: LANGUAGE
    stargazerCount: number
    pullRequests: PULL_REQUEST_CONNECTION
    issues: ISSUES_CONNECTION
    languages: LANGUAGE_CONNECTION
}

export interface PULL_REQUEST_CONNECTION {
    __typename: "PullRequestConnection"
    totalCount: number
}

export interface OWNER {
    __typename: "Organization"
    login: string
}

export interface ISSUES_CONNECTION {
    __typename: "IssueConnection"
    totalCount: number
}

export interface LANGUAGE_CONNECTION {
    __typename: "LanguageConnection"
    nodes: LANGUAGE[]
}

export interface LANGUAGE {
    __typename: "Language"
    color: string
    name: string
}