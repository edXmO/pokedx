import React, { useState } from 'react';
import useQuery from './hooks/useQuery';

// CONTAINERS 
import Wrapper from './containers/Wrapper';
import Home from './containers/Home';
import { useEffect } from 'react';
import Navigation from './Navigator/Navigation';
import { useLocation } from 'react-router';



function App() {

  const [loaded, setLoaded] = useState<boolean>(false);

  const { query } = useQuery(); 
  
  //Listener 
  
  const location = useLocation();

  useEffect(() => {
    console.log('location changed')
  }, [location])


  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500)  
  })

  return (
    <Wrapper loaded={loaded}> 
      <Navigation />
    </Wrapper>
  );
}

export default App;
