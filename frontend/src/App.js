import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Components/Sigin/Signin";
import Navbar from "./Components/Nav/Nav";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home/Home";
import Askform from "./Components/ASkForm/Askform";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
function App() {
  const location=useLocation()

  return (
    <div className="App">
       
       {location.pathname !== '/' && location.pathname !== '/signup'? <Navbar /> : null}
        <Routes>
          <Route index element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />

          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/ask" element={<Askform />} />

        </Routes>
        {location.pathname !== '/' && location.pathname !== '/signup'? <Footer /> : null}

    </div>
  );
}
export default App;