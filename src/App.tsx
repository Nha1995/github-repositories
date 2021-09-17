import { useQuery } from '@apollo/client';
import React, { useState } from 'react';

import { GET_REPOSITORIES_BY_NAME } from './api/queries';

const App: React.FC = () => {
  const [string, setString] = useState<string>("")
  const { loading, error, data } = useQuery(GET_REPOSITORIES_BY_NAME, {
    variables:{ repositoryName: string },
    fetchPolicy: "network-only"
  });

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
