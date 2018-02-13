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
import Randresapostol from './components/Randresapostol';
import Rsanmiguel from './components/Rsanmiguel';
import Rsantiagooaxaca from './components/Rsantiagooaxaca';

//proyectos de Renovaciones
import Nnichoyoso from './components/Nnichoyoso';
import Nsanjuan from './components/Nsanjuan';
import Ntamaulipas from './components/Ntamaulipas';

//proyectos de Diseño y eleavoracion
import Dhidalgo from './components/Dhidalgo';
import Dveracruz from './components/Dveracruz';




const AppRoutes = () =>

 <App>
 	<Switch>
 	  <Route path="/Dise" component={Dise} />
 	  <Route path="/Nova" component={Nova} />
 	  <Route path="/Rest" component={Rest} />
      <Route path="/Home" component={Home} />
      <Route path="/Randresapostol" component={Randresapostol} />
      <Route path="/Rsanmiguel" component={Rsanmiguel} />
      <Route path="/Rsantiagooaxaca" component={Rsantiagooaxaca} />
      <Route path="/Nnichoyoso" component={Nnichoyoso} />
      <Route path="/Nsanjuan" component={Nsanjuan} />
      <Route path="/Ntamaulipas" component={Ntamaulipas} />
      <Route path="/Dhidalgo" component={Dhidalgo} />
      <Route path="/Dveracruz" component={Dveracruz} />
      <Route path="/" component={Page404} />
 	</Switch>
 </App>;


 export default AppRoutes;