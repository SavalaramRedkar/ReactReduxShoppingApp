import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import ProductsListing from "./components/ProductsListing";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={ProductsListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>
            {
              <div style={{ margin: "80px" }}>
                <h1>404 Not Found!</h1>
              </div>
            }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
