import React, {useState} from "react";
import Sidebar from "../../Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SignUp from "../../components/SignUp";

const SignUpPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <SignUp></SignUp>
      <Footer />
    </div>
  );
};

export default SignUpPage;
