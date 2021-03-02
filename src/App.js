import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Jumbo from "./components/Jumbo/Jumbo";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
// import OnHover from "./components/Hero/index"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Navbar />
      <Hero />
      {/* <OnHover /> */}
      <Jumbo />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
