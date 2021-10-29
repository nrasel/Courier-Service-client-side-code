import React from 'react';
import Agents from '../Agents/Agents';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Agents />
        </div>
    );
};

export default Home;