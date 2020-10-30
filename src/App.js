import React from "react";

import './App.css';
import First from "./components/First";
import NavBar from "./components/NavBar";
import Second from "./components/Second";

import {BrowserRouter,Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Route exact path="/first">
          <First/>
      </Route>
      <Route path="/second">
          <Second/>
      </Route>
      </BrowserRouter>
  );
}

export default App;
