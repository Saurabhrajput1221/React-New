import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Code_With_Harry/About";
import Contact from "./Code_With_Harry/Contact";
import Disable from "./Code_With_Harry/Disable";
import Navbar from "./Code_With_Harry/Navabar_Bootstrap";
// import PrTextform from "./Code_With_Harry/PrTextform";
import Textform from "./Code_With_Harry/Textform";
// import {browserRouter as router , } from "react-router-dom"
function App() {
  return (
    <>
      {/* // All Components are Practice i did with Code with harry */}
      <div>
        {/* ************************************************** */}
        <Navbar title="NewNavbar" Dropdown=" Dropdown 1"></Navbar>
        {/* ************************************************** */}

        {/* <div className="container">
          <Textform Heading="This is my TextInput using Props" />
        </div>
        <br /> */}
        {/* <div className="container">
        <PrTextform Heading= "heading"></PrTextform>
      </div> */}
      </div>
      {/* ************************************************** */}
      {/* This is React router Practice*/}
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/textform" element={<Textform />}></Route>
        <Route path="/disable" element={<Disable />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
