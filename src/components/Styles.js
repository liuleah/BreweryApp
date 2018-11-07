import React, { Component } from 'react';
import List from "./List";
import SearchBox from "./SearchBox";
import './list.css';


class Styles extends Component {
    state = {
        error: null,
        isLoaded: true,
        showAll: false,
        items: []
    };

    showResults = (result) => {
        //show result for styles

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
    }

    search = (Url) =>{
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


    showBeerList = (item, index) => {
        const styleId = item.id;
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetBaseUrl = proxyUrl + 'http://api.brewerydb.com/v2/',
            key = 'key=b7da1c5827026053a276f0dbe2234962';

        const targetUrl =  targetBaseUrl + 'beers?' + key  + '&styleId=' + styleId;

        this.props.onStyleClick(targetUrl);
    }

    render() {
        const { error, isLoaded, items } = this.state;
        return (
            <div className="style-wrapper">
                <SearchBox
                    label="Search beer style"
                    placeholder="Search beer styles..."
                    onSearch={this.search}
                />

                <div>

                </div>

                <List
                    list={items}
                    error={error}
                    isLoaded={isLoaded}
                    onClickItem={this.showBeerList}
                />
            </div>
        );

    }

}

export default Styles;
