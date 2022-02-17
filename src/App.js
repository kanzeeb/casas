import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Feature from './components/features';
import Home from './components/home';

function App() {
  return (
    <div>      
      <main>
        <Switch>
          <Route path="/inicio" component={Home} />
          <Route path="/detalles" component={Feature} />
          <Redirect from="/" exact to="/inicio" />
          <Redirect from="/casas" to="/inicio" />
        </Switch>
      </main>
    </div>    
  );
}

export default App;
