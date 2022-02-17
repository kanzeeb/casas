import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getHouses } from '../services/fakeHousesRepository';
class Home extends Component {
    state = {
        houses: getHouses()
    };
    render(){
    return (
        <>
         <div className="container__menu">
          <div className="header-3 pdB-4 pdL-3 padT-2">Nuestras propiedades</div>
            <NavLink to="/detalles" className="anchor" >
              <div className="gallery gallery--3-cols mrg-2"> 
                {this.state.houses.map(house => (
                    <div key={house._id} className="gallery__item">
                        <div>
                            <div>
                                <img src={house.gallery.flat} className="img__feature" alt="propiedad A" />
                            </div>
                            <div className="padT-2 text__info">
                            {house.location}<br/>{house.item}<br/>{house.price}
                            </div>
                        </div>
                    </div>
                ))}
              </div>
            </NavLink>            
         </div>
        
        </>
    );
    }
};


export default Home;