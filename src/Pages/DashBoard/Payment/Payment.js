import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const bookings = useLoaderData()
    const {treatment, price, appiontmentDate, slot } = bookings
    console.log( 'booking payment' ,bookings);
    return (
        <div>
            <h2 className='text-3xl'>Payment For {treatment} </h2>
            <p className='text-xl'>Please Pay <strong>${price} </strong> for your appointment on {appiontmentDate} at {slot} </p>
        </div>
    );
};

export default Payment;