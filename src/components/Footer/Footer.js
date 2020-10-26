import  React, { Component } from "react";
import './Footer.css'

class Footer extends Component{
    render() {
        return(
            <footer className="footer">
                Copyright (C) {new Date().getFullYear()} CRHSAMPLE All Rights Reserved.
            </footer>
        )
    }
}

export default Footer