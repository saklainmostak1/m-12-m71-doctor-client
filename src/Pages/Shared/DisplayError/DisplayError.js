import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const DisplayError = () => {
    const {logOut} = useContext(AuthContext)
    const error = useRouteError()
    const handleLogOut = () => {
        logOut()
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <p className='text-red-600'>Something Went Wrong</p>
            <p className='text-red-400'>{error.sattusText || error.message}</p>
            <h4 className='text-3xl'>PLease <button onClick={handleLogOut} >Sign Out</button> and log back in  </h4>
        </div>
    );
};

export default DisplayError;