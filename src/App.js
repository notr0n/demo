import React from 'react';
import BottomAppBar from './components/nav2.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/home2.js'
import Offer from './components/offer.js'
import Visa from './components/visa/index.js'
import China from './components/visa/country/china'
import Support from './components/support.js'
import Wallet from './components/wallet.js'
function App() {
  return (
    <div>
      <BottomAppBar/>
       <Router>
                  <Switch>
                      <Route exact path="/">
                          <Home/>
                      </Route>
                      <Route path="/off">
                          <Offer/>
                      </Route>
                      <Route exact path="/visa">
                          <Visa/>
                      </Route>
                      <Route path="/visa/china">
                           <China/>
                    </Route>
                    <Route path="/support">
                           <Support/>
                    </Route>
                    <Route path="/wallet">
                           <Wallet/>
                    </Route>
                    </Switch>
      </Router>
    </div>
  );
}

export default App;
