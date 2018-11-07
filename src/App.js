import React, { Component } from 'react';
import './App.css';
import Styles from "./components/Styles";
import BeerList from "./components/BeerList";
import Nav from "./components/Nav";


class App extends Component {

    state = {
        error: null,
        isLoaded: true,
        beers: []
    };

    showResults = (result) => {
        let beers = result.data.map(beer => {
            return {
                id: beer.id,
                name: beer.nameDisplay,
                abv: beer.abv,
                ibu: beer.ibu,
                glass: beer.glass
            }
        });

        this.setState({
            isLoaded: true,
            beers: beers
        });
    }

    onStyleClick  = (Url) => {
        this.setState({
            isLoaded: false,
        });

        fetch(Url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.showResults(result);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {beers, error, isLoaded} = this.state;

        return (
            <div className="App">
                <Nav>
                    <Styles onStyleClick={this.onStyleClick}/>
                </Nav>

                <div className="beer-list-container">
                    <BeerList
                        beers={beers}
                        error={error}
                        isLoaded={isLoaded}/>
                </div>

            </div>
        );
    }
}

export default App;

