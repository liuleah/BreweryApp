import React, { Component } from 'react';
import { Button, Intent, Spinner } from "@blueprintjs/core";
import './list.css';

export default class List extends Component {
    renderItem = (item, i) => {
        const { onClickItem } = this.props;

        return (
            <li key={item.id} onClick={() => onClickItem(item, i)}
                className='list-item'>
                <div>{item.name}</div>

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
                <div className='style-list'>
                    { list.map(this.renderItem) }
                </div>
            );
        }

    }
}
