// import { useState } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";

// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";

// import Navigation from './components/Navigation'
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
