/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import CardList from '../components/CardList'
import Footer from '../components/Footer'

function HomePage() {
    return (
        <>

            <Navbar />
            <div className="container mx-auto p-6">
                {/* <SearchBar /> */}
                <CardList />
            </div>
            <Footer />
        </>
    )
}

export default HomePage