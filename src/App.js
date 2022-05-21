import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import NavBar from "./Components/SharedComponents/NavBar/NavBar";
import Footer from "./Components/SharedComponents/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="About" element={<About />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
