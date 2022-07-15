import React from 'react';
import { Outlet, useParams } from 'react-router-dom'
//import {useSearchParams} from 'react-router-dom'

function Referral(props) {
    const {userID} = useParams() // returns object 
    //const user_id = params.userID 
    return (
        <div>
            Referal Program {userID}
            <Outlet />
        </div>
    );
}

export default Referral;