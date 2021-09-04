import React, { useState } from 'react';
import useQuery from './hooks/useQuery';

// CONTAINERS 
import Wrapper from './containers/Wrapper';
import Home from './containers/Home';
import { useEffect } from 'react';



function App() {

  const [loaded, setLoaded] = useState<boolean>(false);

  const { query } = useQuery();  


  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500)  
  })

  return (
    <Wrapper loaded={loaded}> 
      <Home />
    </Wrapper>
  );
}

export default App;
