import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Checkout from "./Checkout";

if (navigator.serviceWorker){
  navigator.serviceWorker.register("serviceWorker.js");
}

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <Header />

        
        <Routes>

          <Route path="/checkout" element={<Checkout />}>
            
            
          </Route>
          <Route path="/" element={<Home />}>
       
          </Route>
          
        </Routes>
      
      </div>
    </Router>
    
  );
}

export default App;
