import React from 'react';


const Carousel = () =>{
	return(
			<div>
			
				<div id="carouselExampleIndicators" className="carousel slide rounded mx-auto d-block" data-ride="carousel">
				  <ol className="carousel-indicators">
				    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
				    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				  </ol>
				  <div className="carousel-inner">
				    <div className="carousel-item active">
				      <img className="d-block w-100" src="./images/diseñoyelaboracion/veracruz/imagen1.png" alt="First slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/diseñoyelaboracion/veracruz/imagen2.png" alt="Second slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/diseñoyelaboracion/veracruz/imagen3.png" alt="Third slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/diseñoyelaboracion/veracruz/imagen4.png" alt="Third slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/diseñoyelaboracion/veracruz/imagen5.png" alt="Third slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/diseñoyelaboracion/veracruz/imagen6.png" alt="Third slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/diseñoyelaboracion/veracruz/imagen7.png" alt="Third slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/diseñoyelaboracion/veracruz/imagen8.png" alt="Third slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/diseñoyelaboracion/veracruz/imagen9.png" alt="Third slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/diseñoyelaboracion/veracruz/imagen10.png" alt="Third slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/diseñoyelaboracion/veracruz/imagen11.png" alt="Third slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/diseñoyelaboracion/veracruz/imagen12.png" alt="Third slide" />
				    </div>
				    
				   
				  </div>
				  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
				    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
				    <span className="sr-only">Previous</span>
				  </a>
				  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
				    <span className="carousel-control-next-icon" aria-hidden="true"></span>
				    <span className="sr-only">Next</span>
				  </a>
				</div>
			
			</div>

		);

};

export default Carousel;