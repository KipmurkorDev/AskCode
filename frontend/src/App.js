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
import Answer from "./Components/Answer/Answer";
import Profile from "./Components/UserProfile/Profile";
import UserQuestions from "./Components/UserProfile/userQuestions";
import UserAnswer from "./Components/UserProfile/UserAnswer";
import Userprofile from "./Components/UserProfile/Userprofile";
import UserComment from "./Components/UserProfile/userComment";
import Search from "./Components/Search/Search";
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
