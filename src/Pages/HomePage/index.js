import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import HomeComp from '../../Components/HomeComp'
import Navbar from '../../Layout/Navbar'

function HomePage() {
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Home Page</title>
                </Helmet>
                <Navbar />
                <HomeComp />
            </HelmetProvider>
        </div>
    );
}

export default HomePage


