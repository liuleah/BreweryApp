import React, { Component } from 'react';
import './App.css';
import Styles from "./components/Styles";
import BeerList from "./components/BeerList";
import SearchBox from "./components/SearchBox";
import Nav from "./components/Nav";
import { Button, Intent, Spinner } from "@blueprintjs/core";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Nav>
                    <Styles/>
                </Nav>
                <div className="App-main">
                    {/*<Spinner*/}
                        {/*intent={Intent.PRIMARY}*/}
                        {/*size={Spinner.SIZE_SMALL}*/}
                    {/*/>*/}
                    <SearchBox label="Search beer by name"
                               placeholder="Search beer..."/>
                    <BeerList />
                </div>

            </div>
        );
    }
}

export default App;

// const styles = {
//     appContainer: {
//         display: "flex"
//     }
// };
