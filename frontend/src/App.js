import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Components/Sigin/Signin";
import Navbar from "./Pages/Nav/Nav";
import Signup from "./Components/Signup/Signup";
import Home from "./Pages/Home/Home";
import Askform from "./Components/ASkForm/Askform";
import Footer from "./Pages/Footer/Footer";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Answer from "./Pages/Answer/Answer";
import Profile from "./Components/UserProfile/Profile";
import UserQuestions from "./Pages/User/userQuestions";
import UserAnswer from "./Pages/User/UserAnswer";
import Userprofile from "./Pages/User/Userprofile";
import UserComment from "./Pages/User/userComment";
import Search from "./Pages/Search/Search";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && location.pathname !== "/signup" ? (
        <Navbar />
      ) : null}
      <Routes>
        <Route index element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/answers" element={<Answer />} />
        <Route exact path="/searches" element={<Search />} />
        <Route
          exact
          path="/profile"
          element={
            <div className="container-profile">
              <Profile />
              <Userprofile />
            </div>
          }
        />
        <Route exact path="/userquestions" element={<UserQuestions />} />
        <Route exact path="/useranswer" element={<UserAnswer />} />
        <Route exact path="/usercomments" element={<UserComment />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/ask" element={<Askform />} />
      </Routes>
      {location.pathname !== "/" && location.pathname !== "/signup" ? (
        <Footer />
      ) : null}
    </div>
  );
}
export default App;
