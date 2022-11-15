import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppiontmentOption from './AppiontmentOption';

const AviableAbleAppiontment = ({selectedDate}) => {
  

    const [treatment, setTreatment] = useState(null)

    const {data:appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () =>  fetch('http://localhost:5000/appointmentOptions')
        .then(Response => Response.json())
    })

    return (
        <section className='my-16'>
            
             <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP' )}</p>
             <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppiontmentOption
                    key={option._id}
                    option={option}
                    setTreatment={setTreatment}
                    ></AppiontmentOption>)
                }
             </div>
             { treatment && 
                <BookingModal
                selectedDate={selectedDate}
             treatment={treatment}
             setTreatment={setTreatment}
             ></BookingModal>
             }
        </section>
    );
};

export default AviableAbleAppiontment;