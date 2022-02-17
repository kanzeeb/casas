import React, { Component } from 'react';  
import Carousel from 'react-bootstrap/Carousel';   
class BootstrapCarousel extends Component {  
        render() {    
            return (  
              <Carousel fade={true} interval={8000} touch={true} indicators={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.postimg.cc/Qx5PDtcn/flat-3.jpg"
                  alt="First slide"
                />                
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.postimg.cc/c1nf7FDG/living-1.jpg"
                  alt="Second slide"
                />              
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.postimg.cc/zXYKxTMb/bath-1.jpg"
                  alt="Third slide"
                />               
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.postimg.cc/8z1WSNTT/kitchen-1.jpg"
                  alt="Fourth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.postimg.cc/jSZfqmjP/room-1.jpg"
                  alt="Fifth slide"
                />
              </Carousel.Item>
            </Carousel>      
            );  
        }  
};  
  
export default BootstrapCarousel;  