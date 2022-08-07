import React from "react";
import { Link } from 'react-router-dom';
import logo1 from './images/LogoFizjo2.png';
import logo2 from './images/logo.png';

const firstPanel = () => {
    return <>
        <div className="panel">
       
            <div className="panel-div">
                <img src={logo2}/>
            </div>
            <div className="panel-div">
                <img src={logo2}/>
            </div>
        
        </div>
    
    </>
}

export default firstPanel; 