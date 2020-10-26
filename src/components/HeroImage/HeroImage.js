import  React, { Component } from "react";
import './HeroImage.css'
// import logo from '../../../public/keyvisual.png';


class HeroImage extends Component {
    render() {
        return (
            <div className="hero-container">
                <img src='/keyvisual.png' alt="colored pencils" className="hero-image">

                </img>
            </div>
        )
    }
}

export default HeroImage