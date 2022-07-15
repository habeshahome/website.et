import React from 'react';
import { useNavigate } from 'react-router-dom'

function HeroCard(props) {
    const navigate = useNavigate();
    return (
        <React.Fragment>
        <div className="flex min-h-screen bg-base-200 justify-center">
            <div className="text-left">
                <div className="max-w-md flex flex-col items-start">

                <h1 className="text-5xl font-bold"> {props.title } </h1>
                <p className="py-6"> { props.description } </p>

                <button 
                className="btn btn-primary"
                onClick={() => navigate(props.path)}> { props.cta }</button>
                </div>
            </div>
        </div>
        
        <div className="bg-base-200">
          {props.children}  
        </div> 
        
        </React.Fragment>
    );
}

export default HeroCard;