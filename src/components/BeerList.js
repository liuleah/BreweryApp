import React, { Component } from 'react';
//import './App.css';
import List from "./List";

class BeerList extends Component {
    state = {
        error: null,
        isLoaded: false,
        items: []
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
        const {items} = this.state;

        this.setState({
            items: items.filter((item, i) => i !== index),
        })
    }


    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <List
                    list={items}
                    onClickItem={this.onRemoveTodo}
                />
            );
        }
    }

}

export default BeerList;
