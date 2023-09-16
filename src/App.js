import './App.css';
import React from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/checkout" element={
        <React.Fragment>
          <Header />
          <Checkout />
        </React.Fragment>} />
        <Route path="/" element={
        <React.Fragment>
          <Header />
          <Home />
        </React.Fragment>} />
      </Routes>


      </Router>
      {/* <Header/>
      <Home/> */}
    </div>
  );
}

export default App;
{/* <Route exact path="/" element={<Header/><Home/>} /> */}