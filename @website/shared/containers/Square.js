import React from 'react'

export default function(props){
    return (
        <div className='block bg-gray-3 w-full h-96'>
            <span 
            className='text-4xl inline-block text-center align-middle'
            > {props.title} </span> 
        </div> 
    )
}