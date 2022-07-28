import React from "react";
import { Link } from 'react-router-dom';

const firstPanel = () => {
    return <>
        <div className="panel">
       
            <div className="left-panel">
                <Link to="/fizjoterapia">
                    <div className="title-div">
                        <p className="title"> Fizjoterapia </p>
                    </div>
                </Link>
            </div> 
        
        
           <div className="right-panel">
                <Link to="/fotografia">
                    <div className="title-div">
                        <p className="title"> Fotografia </p>
                    </div>
                </Link>
            </div>
        
        </div>
    
    </>
}

export default firstPanel; 