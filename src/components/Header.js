import React, { Component } from "react";
import logo from "../logo.svg";

export default class Header extends Component {
    render() {
        const { children } = this.props;

        return (
            <header style={styles.header}>
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <div style={styles.title}>{children}</div>
            </header>
        );
    }
}

const styles = {
    header: {
        backgroundColor: "skyblue",
        padding: 15
    },
    title: {
        textAlign: "center",
        color: "white"
    }
};
