import React, {useState} from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const Home = () => {

    const [mainVideoEnded, setMainVideoEnded] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };



    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar isMediaPlaying={!mainVideoEnded} toggle={toggle} />
          <HeroSection mainVideoEnded={mainVideoEnded} setMainVideoEnded={setMainVideoEnded} />
          <Footer></Footer>

        </>
    );
};

export default Home;
