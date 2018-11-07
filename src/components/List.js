import React, { Component } from 'react';
import {Intent, Spinner, Card, Elevation, H5} from "@blueprintjs/core";
import './list.css';

export default class List extends Component {
    renderDetail = (item) => {
        const {type} = this.props;
        if (type === 'beers') {
            return (
                <div className="beer-detail">
                    <H5>{item.name}</H5>
                    <ul>
                        <li>ABV: {item.abv}</li>
                        <li>IBU: {item.ibu}</li>
                    </ul>
                </div>
            );
        } else {
            return (<a href="#">{item.name}</a>);
        }
    }

    renderItem = (item, i) => {
        const { onClickItem } = this.props;

        return (
            <li key={item.id} onClick={() => onClickItem(item, i)}>
                <Card className="list-item" interactive={true} elevation={Elevation.TWO}>
                    {this.renderDetail(item)}
                </Card>
            </li>
        );
    };

    render() {
        const { list, error, isLoaded } = this.props;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <Spinner
                    intent={Intent.PRIMARY}
                    size={Spinner.SIZE_SMALL}
                />
            );
        } else {
            return (
                <ul className='list-container'>
                    { list.map(this.renderItem) }
                </ul>
            );
        }

    }
}
