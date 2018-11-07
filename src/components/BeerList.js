import React, { Component } from 'react';
import List from "./List";

class BeerList extends Component {
    state = {
        beer: {}
    }

    showBeer = (beer) => {
        this.setState({beer: beer});
    }


    render() {
        const {error, isLoaded, beers} = this.props;

        return (
            <List
                list={beers}
                type='beers'
                error={error}
                isLoaded={isLoaded}
                onClickItem={this.showBeer}
            />
        );
    }

}

export default BeerList;
