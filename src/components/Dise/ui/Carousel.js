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
				      <img className="d-block w-100" src="./images/chihuahua/chi1.jpg" alt="First slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/chihuahua/chi2.jpg" alt="Second slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/chihuahua/chi3.jpg" alt="Third slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/chihuahua/chi4.jpg" alt="Third slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/chihuahua/chi5.jpg" alt="Third slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/chihuahua/chi6.jpg" alt="Third slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/chihuahua/chi7.jpg" alt="Third slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/chihuahua/chi8.jpg" alt="Third slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/chihuahua/chi9.jpg" alt="Third slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/chihuahua/chi10.jpg" alt="Third slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="./images/chihuahua/chi11.jpg" alt="Third slide" />
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