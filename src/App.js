import React from "react";
// import Home from "./components/Home";
import AboutPage from "./components/About";
// import WhyConnectSection from "./components/Ahead";
import TimeoutSection from "./components/TimeOut";
// import CallToActionsSection from "./components/CTA";
// import Form from "./components/Form";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Home";
import ResponsiveBoxes from "./components/Ahead";
import ResponsiveComponent from "./components/CTA";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection />
      <AboutPage />
      <ResponsiveBoxes />
      <TimeoutSection />
      <ResponsiveComponent />
      <Form />
    </div>
  );
}

export default App;
