import React, { Component } from 'react';
import List from "./List";
import SearchBox from "./SearchBox";

class BeerList extends Component {
    state = {
        error: null,
        isLoaded: true,
        showAll: false,
        beers: []
    };

    componentDidMount() {
        // const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        //     targetUrl = 'http://api.brewerydb.com/v2/beers/?key=b7da1c5827026053a276f0dbe2234962&p=0';
        //
        // fetch(proxyUrl + targetUrl)
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 items: result.data
        //             });
        //         },
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )
    }



    onRemoveTodo = (index) => {
        const {beers} = this.state;

        this.setState({
            beers: beers.filter((item, i) => i !== index),
        })
    }

    showBeer = (id) => {

    }


    render() {
        // const { error, isLoaded } = this.state;
        const {error, isLoaded, beers} = this.props;

        return (
            <div className="style-wrapper">
                <div>

                </div>
                <List
                    list={beers}
                    error={error}
                    isLoaded={isLoaded}
                    onClickItem={this.showBeer}
                />
            </div>
        );
    }

}

export default BeerList;
