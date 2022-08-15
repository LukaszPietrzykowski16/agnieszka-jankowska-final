import React from "react";
import { Link } from 'react-router-dom';
import logo1 from './images/test1.png';
import logo2 from './images/test2.png';

const firstPanel = () => {
    return <>
        <div className="panel">
       
            <Link to="/fizjoterapia"> 
            <div className="panel-div">
                <img src={logo1}/>
            </div> 
            </Link>
            <Link to="/fotografia"> 
            <div className="panel-div">
                <img src={logo2}/>
            </div>
            </Link>
        </div>
    
    </>
}

export default firstPanel; 