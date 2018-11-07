import React, { Component } from "react";
import logo from "../BreweryDB_top_logo.png";
import './Nav.css';

export default class Nav extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className="nav-wrapper">
                <div className="nav">
                    <header>
                        <img src={logo} className="nav-logo" alt="logo" />
                        <h4>Explore the beer you like</h4>
                    </header>
                    <div className="nav-content">{children}</div>
                </div>
            </div>
        );
    }
}
