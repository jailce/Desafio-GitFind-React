import React from 'react';
import './styles.css';

const ItemList =  ({ title, description }) => {
    return (
        <div className="item-list">
            <span>{title}</span>
            <p>{description}</p>
            <hr/>
        </div>
    );
}

export { ItemList };
