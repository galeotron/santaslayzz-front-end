import React from 'react'
import Admin from '../components/Admin'
import Navbar from '../components/Navbar'
import {withRouter} from 'react-router-dom'

const AdminPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Admin></Admin>
        </>
    )
}

export default withRouter(AdminPage)
