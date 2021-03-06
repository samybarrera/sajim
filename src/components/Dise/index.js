//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//components

//import Opciones from '../global/Opciones';
import BarraRest from './restGlobal/Barranova';


//data
//import items from '../data/opcionesmenu';
import items from '../../data/menudise';



//assets
import './styles.css';
import Carousel from './ui/Carousel';

class Dise extends Component {
	render() {

		return (
				<div className="container">

				<div className="container-fondotitle">
				<img className="title d-block-center" src="./images/fondoDISE.png"/>

				</div>
				<BarraRest items={items} />


				<img className="d-block w-100" src="./images/arriba.png" alt="First slide" />

				<h3> Diseño y Elaboracion Religiosa </h3>

				<h2>Dorados y policromias</h2>
				<div className="container-caroucel">


				  <Carousel />
				  </div>
				  <img className="d-block w-100" src="./images/abajo.png" alt="First slide" />


				  
				</div>
			);
		
	}
}

export default Dise;