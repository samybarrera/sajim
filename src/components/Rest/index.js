//Dependencies
import React, { Component } from 'react';


//components

//import Opciones from '../global/Opciones';


//data
//import items from '../data/opcionesmenu';



//assets
import './styles.css';
import Carousel from './ui/Carousel';

class Rest extends Component {


	render() {

		return (
				<div className="container">

				<img className="d-block w-100" src="./images/grecavintage2.png" alt="First slide" />

				<h3> Restauraciones Religiosas</h3>

				<h2>Dorados y policromias</h2>


				  <Carousel />
				</div>
			);
		
	}
}

export default Rest;