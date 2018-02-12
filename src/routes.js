//dependencies
import React from 'react';

//
import { Route, Switch } from 'react-router-dom';

//components

import App from './components/App';
import Home from './components/Home';
import Page404 from './components/Page404';
import Nova from './components/Nova';
import Rest from './components/Rest';
import Dise from './components/Dise';


//proyectos de restauracion




const AppRoutes = () =>

 <App>
 	<Switch>
 	  <Route path="/Dise" component={Dise} />
 	  <Route path="/Nova" component={Nova} />
 	  <Route path="/Rest" component={Rest} />
      <Route path="/Home" component={Home} />
      <Route path="/" component={Page404} />
 	</Switch>
 </App>;


 export default AppRoutes;