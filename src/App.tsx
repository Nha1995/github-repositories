import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { NODE, SEARCH_RESULT_ITEM_CONNECTION } from './api/graphqlQueryTypes';

import { GET_REPOSITORIES_BY_NAME } from './api/query';
import { ListItem } from './components/ListItem/ListItem';
import { RepositoryCard } from './components/RepositoryCard/RepositoryCard';
import { SearchBox } from './components/SearchBox/SearchBox';

 function App() {
  const [string, setString] = useState<string>("")
  const [repositoriesCount, setRepositoriesCount] = useState<number>(5);
  const [repositories, setRepositories] = useState<NODE[] | null>([]);
  const history = useHistory();
  
  const { data, error } = useQuery<SEARCH_RESULT_ITEM_CONNECTION>(GET_REPOSITORIES_BY_NAME, {
    variables:{ 
      repositoryName: string, 
      first: repositoriesCount
    },
    fetchPolicy: "network-only",
    onCompleted: ()=> {
      if (data && data.search) {
        setRepositories(data.search.edges)
      }
    }
  });

const scrollToEnd = () => {
  setRepositoriesCount(repositoriesCount+5)
};

  window.onscroll = function () {
    if(
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight 
      && data?.search?.edges?.length === repositoriesCount
    ) {
        scrollToEnd()
    }
  }
  
  useEffect(()=> {
    if (data && data.search) {
      setRepositories(data?.search.edges)
    }
  },[data])
  console.log(repositoriesCount)
  return (
    <>
      <Route path={'/search'} exact>
        <div className="App">
          <SearchBox  
            setString = {setString}
            setRepositoriesCount = {setRepositoriesCount}  
          />
          <div>
            {error && (<p>ERROR</p>)}
            {repositories && repositories.map((repository) => (
              <RepositoryCard 
                repository={repository.node}
                onClick = {() => history.push(`/repositories/${repository.node.id}`)}
              />
              ))
            }
          </div>
        </div>   
      </Route>
      <Route path={`/repositories/:id`}>
        {data?.search?.edges && <ListItem 
          repositories={data?.search?.edges} 
          repositoriesCount = {repositoriesCount}
          scrollToEnd = {scrollToEnd}
        />}
      </Route>
    </>
  );
}

export default App;
