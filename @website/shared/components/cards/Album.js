import React from 'react';

function Album(props) {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img src="https://api.lorem.space/image/album?w=400&h=400" 
                alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> { props.title }</h2>
                <p>{ props.description }</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">{ props.cta }</button>
                </div>
            </div>
        </div>
    );
}

export default Album;