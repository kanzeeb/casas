import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IoBedOutline, IoCarSportOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { MdOutlineKitchen, MdOutlineYard, MdOutlineMail } from "react-icons/md";
import Gallery from "./gallery";
class Feature extends Component {
    
    render () {
        return (
            <>
                <div className="mrg-off">
                    <Link to="/inicio">Regresar al inicio</Link>
                    <div className="grid grid--2-cols">
                        <div>
                            <Gallery className="wd-100" />                            
                        </div>
                        <div className="text__feature wd-100">
                            Turpis egestas integer eget aliquet nibh praesent tristique magna. In est ante
                            <ul>
                                <li className="wd-220">
                                    <div className="grid__features">
                                        <IoBedOutline className="icon grid__features__box" /> <span>6 habtaciones</span>
                                    </div>
                                </li>
                                <li className="wd-220">
                                    <div className="grid__features">
                                        <GiBathtub className="icon grid__features__box" /> <span>2 baños</span>
                                    </div>
                                </li>
                                <li className="wd-220">
                                    <div className="grid__features">
                                        <MdOutlineKitchen className="icon grid__features__box" /><span>cocina</span>
                                    </div>
                                </li>
                                <li className="wd-220">
                                    <div className="grid__features">
                                        <IoCarSportOutline className="icon grid__features__box" /><span>estacionamiento</span>
                                    </div>
                                </li>
                                <li className="wd-220">
                                    <div className="grid__features">
                                        <MdOutlineYard className="icon grid__features__box" /><span>jardín</span>
                                    </div>
                                </li>
                            </ul>
                            <p className="text__price">1,200,000.00$</p>
                            Contactanos &nbsp;
                            <a href="https://wa.me/525547823179?text=I'm%20interested%20in%20your%20house%20for%20sale">
                                <FaWhatsapp className="icon" />
                            </a> &nbsp;
                            <a href="mailto:kanzeebastian@gmail.com">
                                <MdOutlineMail className="icon" /> 
                            </a> &nbsp;
                            <a href="tel:+525547823179">
                                <FaPhone className="icon" />
                            </a>
                        </div>			
                    </div>
                </div>
            </>
        );
    }
};

export default Feature;