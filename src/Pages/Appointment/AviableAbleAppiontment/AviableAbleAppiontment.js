import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppiontmentOption from './AppiontmentOption';

const AviableAbleAppiontment = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])

    useEffect(() =>{
        fetch('appointmentOptions.json')
        .then(Response => Response.json())
        .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <section className='my-16'>
            
             <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP' )}</p>
             <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppiontmentOption
                    key={option._id}
                    option={option}
                    ></AppiontmentOption>)
                }
             </div>
        </section>
    );
};

export default AviableAbleAppiontment;