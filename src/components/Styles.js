import React, { Component } from 'react';
//import './App.css';
import List from "./List";
import SearchBox from "./SearchBox";


function getResult() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetBaseUrl = proxyUrl + 'http://api.brewerydb.com/v2/',
        key = 'key=b7da1c5827026053a276f0dbe2234962';

    const {queryStr, showAll} = this.state;

    const targetUrl = showAll ? targetBaseUrl + 'styles/?' + key
        : targetBaseUrl + 'search/style?' + key  + '&q=' + queryStr;

    fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(
            (result) => {
                let styles = result.data.map(style => {
                    return {
                        id: style.id,
                        cid: style.categoryId,
                        name: style.shortName
                    }
                });

                this.setState({
                    isLoaded: true,
                    items: styles
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
}

class Styles extends Component {
    state = {
        error: null,
        isLoaded: false,
        showAll: false,
        queryStr: 'English',
        items: []
    };

    componentDidMount() {
        //getResult.bind(this);

        const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetBaseUrl = proxyUrl + 'http://api.brewerydb.com/v2/',
            key = 'key=b7da1c5827026053a276f0dbe2234962';

        const {queryStr, showAll} = this.state;

        const targetUrl = showAll ? targetBaseUrl + 'styles/?' + key
            : targetBaseUrl + 'search/style?' + key  + '&q=' + queryStr;

        fetch(proxyUrl + targetUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    let styles = result.data.map(style => {
                        return {
                            id: style.id,
                            cid: style.categoryId,
                            name: style.shortName
                        }
                    });

                    this.setState({
                        isLoaded: true,
                        items: styles
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    showBeerList = (index) => {
        //show all of the beers of one style

        // const {items} = this.state;

        // this.setState({
        //     items: items.filter((item, i) => i !== index),
        // }
    }

    getSearchResult = (queryStr) => {
        this.setState({
            queryStr: queryStr
        });
    }


    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="style-wrapper">
                    <SearchBox
                        label="Search beer style"
                        placeholder="Search beer styles..."
                        value={this.state.queryStr}
                        onSearch={this.getSearchResult}
                    />

                    <List
                        list={items}
                        onClickItem={this.showBeerList}
                    />
                </div>
            );
        }
    }

}

export default Styles;
