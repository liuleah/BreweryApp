import React, { Component } from 'react';
//import './list.css';

export default class List extends Component {
    renderItem = (item, i) => {
        const { onClickItem } = this.props;

        return (
            <li key={item.id} onClick={() => onClickItem(i)}
                style={styles.item}>
                <div>{item.name}</div>

            </li>
        );
    };

    render() {
        const { list } = this.props;

        return (
            <div style={styles.container}>
                { list.map(this.renderItem) }
            </div>
        );
    }
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column"
    },
    item: {
        backgroundColor: "whitesmoke",
        border: "1px solid",
        marginBottom: 5,
        padding: 15
    }
};