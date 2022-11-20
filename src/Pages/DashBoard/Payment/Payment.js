import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const bookings = useLoaderData()
    const {treatment, price, appiontmentDate, slot } = bookings
    console.log( 'booking payment' ,bookings);
    return (
        <div>
            <h2 className='text-3xl'>Payment For {treatment} </h2>
            <p className='text-xl'>Please Pay <strong>${price} </strong> for your appointment on {appiontmentDate} at {slot} </p>
            <div className='w-96 my-6'>
            <Elements stripe={stripePromise}>
                    <CheckOutForm
                     bookings={bookings}
                    />
                       
                </Elements>
            </div>
        </div>
    );
};

export default Payment;