import React from 'react';
import { useNavigate } from 'react-router-dom';

const Primary = (props) => {

const navigate = useNavigate()

    return (
        <div
            className="inline-block rounded font-medium border border-solid cursor-pointer text-center text-xl py-3 px-12 text-white bg-blue border-green-400 hover:bg-blue hover:border-blue"
            onClick={() => navigate(props.path)}
            >
            { props.title }
        </div>
    )
}

export default Primary;