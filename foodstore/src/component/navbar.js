import React from 'react';
import Contact from "./contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-light fixed-top py-4">
                    <div className="container">
                       <Link to="/" className="navbar-brand">
                            <img src="http://logok.org/wp-content/uploads/2017/01/Juventus-logo-2017.png" width="50" height="50" alt="" /><h3 className="d-inline align-middle">Just Food</h3>
                        </Link>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto ">
                            <Link to="/" className="mr-2">Home</Link>
                            <li className="nav-item">
                                <Link to="/history" className="mr-2">History</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addrestaurants" className="mr-2">Add Restaurants</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="mr-2">Contact</Link>
                            </li>
                            </ul>
                        </div>
                      </div>
                </nav>
            </div>
            
        );
    }
}
export default Navbar;