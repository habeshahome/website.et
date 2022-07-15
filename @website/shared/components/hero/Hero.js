import React from 'react';
import {useRouter} from 'next/router'

function Hero(props) {
    const router = useRouter();
    return (
        <React.Fragment>
        <div className="flex hero min-h-screen bg-base-200 justify-center">
            <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold"> {props.title } </h1>
                <p className="py-6"> { props.description } </p>
                <button 
                className="btn btn-primary"
                onClick={() => router.push(props.path)}> { props.cta }</button>
                </div>
            </div>
        </div>
        
        <div className="bg-base-200">
          {props.children}  
        </div> 
        
        </React.Fragment>
    );
}

export default Hero;