import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import About from './About';
import Navbar from './Navbar';
import Contact from './Contact';
import Param from './Param';
import Form from './Forms';
import Clock from './Clock';
import AnalogClock from './Analogclock';
import Weatherhome from './Weatherhome';
import Login from './Login';
import Signup from './Signup';
import FormValidator from './FormValidator';
import Carouseldata from './Carousel';
import FormValidatorTwo from './FormValidatroTwo';
import FileUpload from './FileUpload';
import CarList from './CarList';
// import Signup from './Signup';
import Todos from './todos';
import PageNotFound from './PageNotFound';
import SignupBackend from './SignupBackend';
import SigninBackend from './LoginBackend';
import This from './This';
import DummyList from './DummyList';
import DummyLogin from './DummyLogin';
import DummySignup from './DummySignup';
import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();

const CustomeRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/about' component={About} />
                <Route path='/forms' component={Form} />
                <Route path='/clock' component={Clock} />
                <Route path='/analog' component={AnalogClock} />
                <Route path='/contact' component={Contact} />
                <Route path='/contact/:id' component={Param} />
                <Route path='/param/:id' component={Param} />
                <Route exact path='/weather' component={Weatherhome} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/form-validator' component={FormValidator} />
                <Route exact path='/form-validator-two' component={FormValidatorTwo} />
                <Route exact path='/carousel' component={Carouseldata} />
                <Route exact path='/file-upload' component={FileUpload} />
                <Route exact path='/car-list' component={CarList} />
                <Route exact path='/todos' component={Todos} />
                <Route exact path='/signup-backend' component={SignupBackend} />
                <Route exact path='/login-backend' component={SigninBackend} />
                <Route exact path='/this' component={This} />
                <Route exact path='/dummy-list' component={DummyList} />
                <Route exact path='/dummy-login' component={DummyLogin} />
                <Route exact path='/dummy-signup' component={DummySignup} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </Router>
)

export default CustomeRoutes;