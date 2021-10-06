import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/CartContext/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact>
              {" "}
              <ItemListContainer />{" "}
            </Route>
            <Route path="/category/:categoryId">
              <ItemListContainer />{" "}
            </Route>
            <Route path="/item/:itemId">
              <ItemDetailContainer />{" "}
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
