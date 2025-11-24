import React from 'react';
import Hero from '../../components/hero';
import Products from '../../components/products';
import Blog from '../../components/blog';
import About from '../../components/about'

const Home = () => {
    return (
        <>
            <Hero />
            <Products />
            <Blog />
            <About />
        </>
    );
};

export default Home;