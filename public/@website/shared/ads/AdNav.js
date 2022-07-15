import React from 'react';

function AdNav(props) {
    return (
        <div className="alert shadow-lg fixed top-0 z-10">
            <div>
                
                <span>Grap the Offer</span>
            </div>
            <div className="flex-none">
                <button className="btn btn-sm btn-ghost">Deny</button>
                <button className="btn btn-sm btn-primary">Accept</button>
            </div>
        </div>
    );
}

export default AdNav;