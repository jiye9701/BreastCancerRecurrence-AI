import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Form from "./components/Form"
import Results from "./components/Result"
import Info from "./components/Info"
import About from "./components/About"
import Error from "./components/Error"
import NavBar from "./components/NavBar"

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/home" exact component={Form} />
        <Route path="/result" component={Results} />
        <Route path="/info" component={Info} />
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
