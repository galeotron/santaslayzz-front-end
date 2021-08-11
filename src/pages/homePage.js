import React, { useState } from 'react'
import Footer from '../components/Footer'
import Sidebar from '../Sidebar'
import Navbar from '../components/Navbar'
import HomePage from '../components/HomePage'


const HomePages = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HomePage></HomePage>
            <Footer />
        </div>
    )
}

export default HomePages