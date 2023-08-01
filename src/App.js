import { BrowserRouter as Router,
  Routes,
  Route  } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import Contact from "./components/contact";
import Login from "./components/login";

function App() {
  return (
  <>
    <div className="">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  </>
  );
}

export default App;
