import React, {useState} from "react";
import Sidebar from "../../Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ReportScores from "../../components/ReportScores";

const ReportScoresPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ReportScores></ReportScores>  
      <Footer />
    </>
  );
};

export default ReportScoresPage;
