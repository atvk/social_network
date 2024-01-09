import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Footer from "./components/Footer"

const App = () => {
  return (
    <main className="socialNetwork">
      <Header />
      <Navbar />
      <Profile />
      <Footer />
    </main>
  );
};

export default App;
