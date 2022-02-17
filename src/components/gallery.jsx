import React, { Component } from "react";
import BootstrapCarousel from "./carousel";
class Gallery extends Component {
    
    render () {
        return (
            <>
                <div className="mrg-off">                   
                    <div className="wd-100">
                        <BootstrapCarousel />
                        <div className="padT-2 gallery-sm">
                            <img src="https://i.postimg.cc/Qx5PDtcn/flat-3.jpg" className="wd-100" />
                            <img src="https://i.postimg.cc/c1nf7FDG/living-1.jpg" className="wd-100" />
                            <img src="https://i.postimg.cc/jSZfqmjP/room-1.jpg" className="wd-100" />
                            <img src="https://i.postimg.cc/zXYKxTMb/bath-1.jpg" className="wd-100" />
                            <img src="https://i.postimg.cc/8z1WSNTT/kitchen-1.jpg" className="wd-100" />
                        </div>
                    </div>                        		
                </div>
            </>
        );
    }
};

export default Gallery;