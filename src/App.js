import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Topics from "./pages/topics";
import Components from "./components/components";
import Props from "./components/props-v-state";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/topics" element={<Topics />}></Route>
            <Route exact path="components" element={<Components />}></Route>
            <Route exact path="props-v-state" element={<Props />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;



// echo "# qwasar-react" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/KomilovTemur/qwasar-react.git
// git push -u origin main