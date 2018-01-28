//dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//assets
import './css/Barra.css';

class Barra extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		items: PropTypes.string.isRequired,
    classe: PropTypes.string.isRequired
	};

  render() {
  	const {title, classe, items} = this.props;


    return (
      <div className="Barra">


        <input type="checkbox" id="btn-menu"/>
        <label for="btn-menu"><span><i class="fa fa-bars fa-lg" aria-hidden="true"></i></span>
        </label> 
    
      <nav className="menu">
        <ul>
        	{
            items && items.map(
              (item, key) => <li key={key}>
                                <Link to={item.url}><span><i class={classe} aria-hidden="true"></i></span>{item.title}</Link>
                            </li>
              )
          }
        </ul>
      </nav>
         
      </div>
    );
  }
}  


export default Barra;
