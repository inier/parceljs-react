import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./src/components/Header";
import OneComponent from "./src/components/OneComponent";
import TwoComponent from "./src/components/TwoComponent";
import ThreeComponent from "./src/components/ThreeComponent";
import "./index.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div className="container">
            <Link to={"/one"} style={{ marginRight: 20 }}>One</Link>
            <Link to={"/two"} style={{ marginRight: 20 }}>Two</Link>
            <Link to={"/three"} style={{ marginRight: 20 }}>Three</Link>
            <Route path="/one" component={OneComponent} />
            <Route path="/two" component={TwoComponent} />
            <Route path="/three" component={ThreeComponent} />
          </div>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept();
}
