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
                <title>Création de sondages gratuits</title>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </Head>
            <div className='min-h-screen'>
                <Navbar />
                <HomeHeroSection />
                <Footer className={'absolute bottom-4'} />
            </div>
        </>
    )
}

export default Home