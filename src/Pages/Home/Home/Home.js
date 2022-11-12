import React from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../Make Appointment/MakeAppointment';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Card></Card>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;