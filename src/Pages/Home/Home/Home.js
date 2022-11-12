import React from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Card></Card>
        </div>
    );
};

export default Home;