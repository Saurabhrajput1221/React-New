// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import About from "./Code_With_Harry//Practice/About";
// import Contact from "./Code_With_Harry/Practice/Contact";
// import Disable from "./Code_With_Harry/Practice/Disable";
// import Navbar from "./Code_With_Harry/Practice/Navabar_Bootstrap";
// // import PrTextform from "./Code_With_Harry/PrTextform";
// import Textform from "./Code_With_Harry/Practice/Textform";
/********************************New Components***************** */

import Navbar from "./Code_With_Harry/News/Navbar";
import News from "./Code_With_Harry/News/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./Code_With_Harry/News/ContactUs";
import Link from "./Code_With_Harry/News/Link";
import About from "./Code_With_Harry/News/About";

function App() {
  return (
    <>
      {/* // All Components are Practice i did with Code with harry */}
      {/* <div> */}
      {/* ************************************************** */}
      {/* <Navbar title="NewNavbar" Dropdown=" Dropdown 1"></Navbar> */}
      {/* ************************************************** */}

      {/* <div className="container">
          <Textform Heading="This is my TextInput using Props" />
        </div>
        <br /> */}
      {/* <div className="container">
        <PrTextform Heading= "heading"></PrTextform>
      </div> */}
      {/* </div> */}
      {/* ************************************************** */}
      {/* This is React router Practice*/}
      {/* <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/textform" element={<Textform />}></Route>
        <Route path="/disable" element={<Disable />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes> */}
      {/* ************************************************** */}
      {/* NewsAPI use... */}
      <h1>This is my news NewsAPI</h1>
      <Navbar title="News App"></Navbar>
      <Routes>
        <Route path="/" element={<Link />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/News" element={<News />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
      </Routes>
    </>
  );
}

export default App;
