import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Navbar} from "./components/Navbar";
import {Desktop1} from "./views/Desktop1";
import {Desktop2} from "./views/Desktop2";
import {DesktopState} from "./context/desktops/desktopState";


function App() {

  return (
      <DesktopState>
          <BrowserRouter>
              <Navbar/>
              <div className="container">
                  <Switch>
                      <Route path='/' exact component={Desktop1}/>
                      <Route path='/2' component={Desktop2}/>
                  </Switch>
              </div>
          </BrowserRouter>
      </DesktopState>
  );
}

export default App;
