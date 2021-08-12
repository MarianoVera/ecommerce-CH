import "./App.css";
import { Component, Fragment } from "react";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <ItemListContainer />
      </Fragment>
    );
  }
}

export default App;
