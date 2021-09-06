import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Drawer from "../components/DrawerLayout/Drawer";
import Home from "../containers/Home";
import Center from "../helpers/Center";

const Navigation = () => {
  return (
    <Router>
      <Center>
        <Drawer />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          {/* <Route path="/search">
            <Search />
          </Route> */}
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </Center>
    </Router>
  );
}

export default Navigation;