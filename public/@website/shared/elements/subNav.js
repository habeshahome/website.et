import React from 'react';
import { Link } from 'react-router-dom';

export default function SubNav(props){
    return (
        <React.Fragment> 
            <Link to='/'> Home </Link>
            <Link to='/about'> About </Link>
            <Link to='/services'> Services </Link>
        </React.Fragment>
    )
}