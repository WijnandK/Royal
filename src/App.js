import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shopPage/ShopPage";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
