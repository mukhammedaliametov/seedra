import React from 'react';
import Hero from '../../components/hero';
import Products from '../../components/products';
import Blog from '../../components/blog';

const Home = () => {
    return (
        <>
            <Hero />
            <Products />
            <Blog />
        </>
    );
};

export default Home;