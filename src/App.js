import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import FinalizarCompra from "./components/FinalizarCompra/FinalizarCompra";

const App = () => {
  return (
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
            <FinalizarCompra />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
