import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory  
} from "react-router-dom";
import Drawer from "../components/DrawerLayout/Drawer";
import Home from "../containers/Home";
import SearchPokemon from "../containers/SearchPokemon";
import Wrapper from "../containers/Wrapper";
import Center from "../helpers/Center";


const Navigation = () => {

  const [loaded, setLoaded] = useState<boolean>(false);
  const [ pathName, setPathName ] = useState<string>('');
  
  useEffect(() => {
    setLoaded(false);

    setTimeout(() => {
      setLoaded(true);
    }, 1000)  
  }, [pathName])

  return (
    <Router>
    <Wrapper loaded={loaded}> 
        <Center>
          <Switch>
            <Route path="/home" exact>
                <Home setPathName={setPathName} />
            </Route>
            <Route path="/search" exact>
              <SearchPokemon setPathName={setPathName} />
            </Route>
            {/* <Route path="/search">
              <Search />
            </Route> */}
            {/* <Route path="/">
              <Home />
            </Route> */}
          </Switch>
        </Center>
    </Wrapper>
    </Router>
  );
}

export default Navigation;