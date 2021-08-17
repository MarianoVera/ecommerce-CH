import "./App.css";
import { Component, Fragment } from "react";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import img1 from "./components/intel.jpg";
import img2 from "./components/keybd.jpg";
import img3 from "./components/note1.jpg";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <ItemListContainer img1={img1} img2={img2} img3={img3} />
      </Fragment>
    );
  }
}

export default App;
