import React, {useState} from 'react'
import Store from '../store';
import Sidebar from '../Sidebar';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const StorePage = () => {

    const [displayType, setDisplayType] = useState("none");

    const setStyle = (displayType) => {
      setDisplayType(displayType);
    };

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }




    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Store setStyle={setStyle} displayType={displayType}></Store>
            <Footer />
        </div>
    )
}

export default StorePage
