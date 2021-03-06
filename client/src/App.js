import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from  './pages/Home.jsx';

class App extends Component {
  render() {
    return (
      <div className="">
        <Switch>
          <Route
            exact path="/" 
            render={ () => (<HomePage/>) } 
          />
          {/* <Route path="*" component="" /> */}
        </Switch>
      </div>
    );
  }
}

export default App;