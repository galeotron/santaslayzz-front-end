import React, { useState } from 'react'
import Footer from '../components/Footer'
import Sidebar from '../Sidebar'
import Navbar from '../components/Navbar'
import Tournaments from '../components/Tournaments'

const TournamentPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Tournaments></Tournaments>
            <Footer />
        </div>
    )
}

export default TournamentPage

