import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { NODE, SEARCH_RESULT_ITEM_CONNECTION } from './api/graphqlQueryTypes';

import { GET_REPOSITORIES_BY_NAME } from './api/query';
import { RepositoryCard } from './components/RepositoryCard/RepositoryCard';
import { SearchBox } from './components/SearchBox/SearchBox';

 function App() {
  const [string, setString] = useState<string>("")
  const [repositories, setRepositories] = useState<NODE[] | null>([]);
  
  const { data, loading, error } = useQuery<SEARCH_RESULT_ITEM_CONNECTION>(GET_REPOSITORIES_BY_NAME, {
    variables:{ repositoryName: string },
    fetchPolicy: "network-only",
    onCompleted: ()=> {
      if (data && data.search) {
        setRepositories(data.search.edges)
      }
    }
  });
  
  useEffect(()=> {
    if (data && data.search) {
      setRepositories(data?.search.edges)
    }
  },[data])

  return (
    <div className="App">
      <SearchBox  setString = {setString}/>
      {error && (<p>ERROR</p>)}
      {loading &&  (<p>Loading...</p>)}
      {repositories && repositories.map((repository) => (
        <RepositoryCard repository={repository} />
      ))
    }
    </div>
  );
}

export default App;
