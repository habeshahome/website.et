import React from 'react';
import { useNavigate } from 'react-router-dom'
//import Logo from '../../../assets/logo.svg'

function HeroWithFigure(props) {

    const navigate = useNavigate()

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div>
                <h1 className="text-5xl font-bold"> {props.title} </h1>
                <p className="py-6"> { props.description }</p>
                <button 
                    className="btn btn-primary"
                    onClick={() => navigate(props.path)}
                    > {props.cta} </button>
                </div>
            </div>
        </div>
    );
}

export default HeroWithFigure;