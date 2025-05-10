import React from 'react';
import Hero from '../pages/Hero/Hero';
import About from '../pages/About/About';
import Products from '../components/Product/Products';
import Services from '../pages/Service/Services';
import NewsLatter from '../pages/NewsLatter/NewsLatter';

const HomeLayout = () => {
    return (
        <>
            <Hero />
            <About />
            <Products />
            <Services />
            <NewsLatter />
        </>
    );
};

export default HomeLayout;