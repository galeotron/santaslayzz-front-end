import React, { useState } from 'react'
import Footer from '../components/Footer'
import Sidebar from '../Sidebar'
import Navbar from '../components/Navbar'
import About from '../components/AboutBg'

const AboutPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <About></About>
            <Footer />
        </div>
    )
}

export default AboutPage
