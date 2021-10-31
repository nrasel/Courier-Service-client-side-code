import React from 'react';
import Agents from '../Agents/Agents';
import Banner from '../Banner/Banner';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Agents />
            <Pricing />
        </div>
    );
};

export default Home;