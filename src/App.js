import React, { Component } from 'react';
import './App.css';
import BeerList from "./components/BeerList";
import Header from "./components/Header";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header>
                    Brewery List
                </Header>
                <BeerList />
            </div>
        );
    }
}

export default App;
