import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Menu from './Menu';
import Navbar from './Navbar';
import NotFound from './NotFound';
import MenuDetails from './MenuDetails';

export default function AppNavbar() {
    return (
        <BrowserRouter>
            <Navbar />
            <hr />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/menu/" component={Menu} />
                <Route exact path="/menu/:id" component={MenuDetails} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}
