import React from 'react';

function Steps(props) {
    return (
        <div className="flex flex-col justify-center items-center p-4">
            <div className='p-4'>
                <h1 className='text-4xl bold'> 3 Easy Steps! </h1>
            </div> 
            <div>
               <ul className="steps steps-vertical">
                    <li className="step" data-content="☝🏾"> Tell us about your project </li>
                    <li className="step" data-content="✌🏾"> Tell us about your business</li>
                    <li className="step" data-content="🤙🏾"> We’ll coordinate the rest!</li>
                </ul> 
            </div> 
            
        </div>
    );
}

export default Steps;