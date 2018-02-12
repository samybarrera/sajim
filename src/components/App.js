//dependencies
import React, { Component } from 'react';
import logo from '../logo.svg';
import './css/App.css';
import PropTypes from 'prop-types';

//components
import Content from './global/Content';

import Barra from './global/Barra';
import Footer from './global/Footer';
import Body from './global/Body';


//data
import items from '../data/menu';

class App extends Component {

  static PropTypes = {
    children: PropTypes.object.isRequired
  };


  render() {
    const {children} = this.props;
    return (
      <div className="App">
        <Content />
     
        <Barra items={items} />
        <Body body={children} />
        
        <Footer copyright="&copy; 2018 SANCORA. Todos los derechos reservados." />
      </div>
    );
  }
}

export default App;
