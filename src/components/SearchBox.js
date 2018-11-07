import React, { Component } from 'react';
import { FormGroup, InputGroup, Button, Card } from "@blueprintjs/core";

export default class SearchBox extends Component {

    //TODO: need to clear the beer list if the query string is changed
    //set default search string to English for demoing purpose
    state = {
        queryStr: 'English'
    }

    handleClick = () => {
        const {queryStr} = this.state;

        const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetBaseUrl = proxyUrl + 'http://api.brewerydb.com/v2/',
            key = 'key=b7da1c5827026053a276f0dbe2234962';

        //show all styles if search string is empty
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
            <Card>
                <FormGroup label={this.props.label} labelFor="text-input">
                    <InputGroup id="search-input" className='search-box' placeholder={this.props.placeholder}
                                onChange={this.handleChange}
                                value={queryStr}
                    />
                    <Button icon="search" onClick={this.handleClick}>Search</Button>
                </FormGroup>
            </Card>

        )
    }
}

