import "./App.css";
import LoginForm from "./LoginForm";
import clgbg from "./clgbg.jpg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./sidebar.jsx";
import Logout from "./logout.jsx";
import Home from "./home.js";
import Staff from "./staff";

function App() {
  return (
    // // <div className="App">
    //   {/* <div className="clg">
    //     <img src={clgbg} alt="A purple background"></img>
    //   </div> */}
    //   {/* <div className="loginform">
    //     <LoginForm></LoginForm>
    //   </div> */}
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/staffdetails" element={<Staff />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
