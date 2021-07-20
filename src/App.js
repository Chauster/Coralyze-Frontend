import Navbar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Documentation from './pages/documentation';
import Contact from './pages/contact';
import Pricing from './pages/pricing';
import Login from './pages/login';
import Register from './pages/register';
import Faqs from './pages/faqs';
import Dashboard from './pages/dashboard';
import Settings from './pages/settings';
import Support from './pages/support';
import Notifications from './pages/notifications';
import ConfirmAcc from './pages/confirmaccount';
import Devices from './pages/devices';
import Stream from './pages/livestream';
import PageNotFound from './pages/pagenotfound';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/faqs" component={Faqs}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/confirmaccount" component={ConfirmAcc}></Route>
            <Route path="/settings" component={Settings}></Route>
            <Route path="/support" component={Support}></Route>
            <Route path="/notifications" component={Notifications}></Route>
            <Route path="/devices" component={Devices}></Route>
            <Route path="/livestream" component={Stream}></Route>
            <Route path="*" component={PageNotFound}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
