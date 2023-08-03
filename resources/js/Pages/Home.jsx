import { Button, Flex } from '@mantine/core';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { HomeHeroSection } from '../components/HomeHeroSection';
import { Head } from '@inertiajs/inertia-react';
import Footer from '../components/Footer';

const Home = () => {
    const [count, setCount] = useState(0)
    const clickHandler = () => {
        setCount(count + 1)
        console.log(`You clicked ${count} times.`)
    }

    return (
        <>
            <Head>
                <title>Votee - Sondages</title>
            </Head>
            <Navbar />
            <HomeHeroSection />
            <Footer />
        </>
    )
}

export default Home