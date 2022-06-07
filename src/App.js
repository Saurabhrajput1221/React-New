// import { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import About from "./Code_With_Harry/About";
import Navbar from "./Code_With_Harry/Navabar_Bootstrap";
// import PrTextform from "./Code_With_Harry/PrTextform";
import Textform from "./Code_With_Harry/Textform";
// import {browserRouter as router , } from "react-router-dom"
function App() {
  let name = "Harry";
  return (
    <>
    <Router>

      {/* // All Components are Practice i did with Code with harry */}
      <div>
        <h1>I am Saurabh Rajput Back with {name} </h1>
        {/* ************************************************** */}
        <Navbar title="NewNavbar" Dropdown=" Dropdown 1"></Navbar>
        {/* ************************************************** */}

        <div className="container">
          <Textform Heading="This is my TextInput using Props" />
        </div>
        <br />
        {/* <div className="container">
        <PrTextform Heading= "heading"></PrTextform>
      </div> */}
      </div>
      {/* ************************************************** */}
     
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/users">
            <Textform></Textform>
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        
    </Router>
    </>
  );
}

export default App;
