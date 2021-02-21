import React, { Suspense, lazy } from "react";
import{ BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from './history'

const Home =    lazy(() => import('./pages/home/homeComponents'));


const Routes = () => (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>  
          <Route exact path="/" component={Home}/>   
        </Switch>
      </Suspense>
    </Router>
  );
  
   
  
export default Routes;