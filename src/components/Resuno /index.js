//Dependencies
import React, { Component } from 'react';


//components

//import Opciones from '../global/Opciones';


//data
//import items from '../data/opcionesmenu';



//assets
import './styles.css';
import Carousel from './ui/Carousel';
import Carousel2 from './ui/Carousel2';

class Rest extends Component {


	render() {

		return (
				<div className="container">

				<div className="container-fondotitle">
				<img className="title d-block-center" src="./images/fondo4.png"/>

				</div>


				

				<img className="d-block w-100" src="./images/arriba.png" alt="First slide" />
				

				<h3> Restauraciones Religiosas</h3>

				<h2>Dorados y policromias</h2>
				


				  <Carousel />
				  
				  <img className="d-block w-100" src="./images/abajo.png" alt="First slide" />



				<img className="d-block w-100" src="./images/arriba.png" alt="First slide" />
				

				<h3> Restauraciones Religiosas</h3>

				<h2>Dorados y policromias</h2>
				


				  <Carousel2 />
				  
				  <img className="d-block w-100" src="./images/abajo.png" alt="First slide" />





				</div>
			);
		
	}
}

export default Rest;