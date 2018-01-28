//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './css/Body.css';

class Body extends Component {

	static PropTypes = {
		 body: PropTypes.object.isRequired
	};

  render() {

  	const { body } = this.props;
    return (
      <div className="Body">
        
        {body}
        
         
      </div>
    );
  }
}  


export default Body;
