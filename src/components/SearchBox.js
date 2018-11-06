import React, { Component } from 'react';
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";

export default class SearchBox extends Component {

    state = {
        queryStr: 'English'
    }

    handleClick = () => {
        const {queryStr} = this.state;

        const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetBaseUrl = proxyUrl + 'http://api.brewerydb.com/v2/',
            key = 'key=b7da1c5827026053a276f0dbe2234962';

        const targetUrl = queryStr ? targetBaseUrl + 'search/style?' + key  + '&q=' + queryStr
            :  targetBaseUrl + 'styles/?' + key;

        this.props.onSearch(targetUrl);
    }

    handleChange = (e) => {
        this.setState({queryStr: e.target.value});
    }

    render() {
        const {queryStr} = this.state;

        return (
            <FormGroup label={this.props.label} labelFor="text-input">
                <InputGroup id="search-input" className='search-box' placeholder={this.props.placeholder}
                            onChange={this.handleChange}
                            value={queryStr}
                            />
                <Button icon="search" onClick={this.handleClick}>Search</Button>
            </FormGroup>
        )
    }
}

function callAPI(queryStr) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'http://api.brewerydb.com/v2/style/?key=b7da1c5827026053a276f0dbe2234962&q=' + queryStr;

    fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.data
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

