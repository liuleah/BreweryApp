import React, { Component } from 'react';
//import './App.css';
import List from "./List";
import SearchBox from "./SearchBox";


class Styles extends Component {
    state = {
        error: null,
        isLoaded: false,
        showAll: false,
        items: []
    };

    showResults = (result) => {
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


    showBeerList = (index) => {
        //show all of the beers of one style

        // const {items} = this.state;

        // this.setState({
        //     items: items.filter((item, i) => i !== index),
        // }
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
