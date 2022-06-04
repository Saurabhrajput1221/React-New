import "./App.css";
import Navbar from "./Code_With_Harry/Navabar_Bootstrap";
import Textform from "./Code_With_Harry/Textform";
let name = "Harry";
function App() {
  return (
    <div>
      <h1>I am Saurabh Rajput Back with {name} </h1>
      <Navbar
        title="NewNavbar"
        Dropdown=" Dropdown 1"
        Dropdown2=" Dropdown 2"
        Dropdown3=" Dropdown 3"
      ></Navbar>
      
      <div className="container">
        <Textform Heading= "This is my TextInput using Props"/>
      </div>
    </div>
  );
}

export default App;
