// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderForm from "./componets/HeaderForm";
import People from "./view/People";
import Planet from "./view/Planet";

function App() {
  return (
<BrowserRouter>
    <h1>API Test</h1>

    <HeaderForm/>

    <Switch>
      <Route path="/people/:id">
        <People />
      </Route>
      <Route path="/planet/:id">
        <Planet />
      </Route>
    </Switch>
</BrowserRouter>
  );
}

export default App;
