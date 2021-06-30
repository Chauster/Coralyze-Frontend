import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Documentation from "./pages/documentation";
import Contact from "./pages/contact";
import Pricing from "./pages/pricing";
import PageNotFound from './pages/pagenotfound';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
    <div classname="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/documentation" component={Documentation}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/pricing" component={Pricing}></Route>
          <Route path="*" component={PageNotFound}></Route>
        </Switch>
      </div>
    </div>
    </Router>

  );
}

export default App;             