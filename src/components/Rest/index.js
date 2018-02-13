//Dependencies
import React, { Component } from 'react';

import PropTypes from 'prop-types';
//components

//import Opciones from '../global/Opciones';



//data
//import items from '../data/opcionesmenu';

import BarraRest from './restGlobal/BarraRest';



//assets
import './styles.css';
import Carousel from './ui/Carousel';

//data
import items from '../../data/menuRest';


class Rest extends Component {


	render() {

		return (
				<div className="container">

				
				<div className="container-fondotitle">
				<img className="title d-block-center" src="./images/fondo4.png"/>

				</div>

				<BarraRest items={items} />

				


				

				<img className="d-block w-100" src="./images/arriba.png" alt="First slide" />
				

				<h3> Nicho Oaxaca</h3>

				<h2>Dorados y policromias</h2>
				


				  <Carousel />
				  
				  <img className="d-block w-100" src="./images/abajo.png" alt="First slide" />



				








				</div>
			);
		
	}
}

export default Rest;