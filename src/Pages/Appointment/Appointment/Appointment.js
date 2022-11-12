import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AviableAbleAppiontment from '../AviableAbleAppiontment/AviableAbleAppiontment';

const Appointment = () => {
    const [selectedDate , setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner 
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AviableAbleAppiontment
            selectedDate={selectedDate}
            ></AviableAbleAppiontment>
        </div>
    );
};

export default Appointment;