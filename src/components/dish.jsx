import React from 'react';

const Dish = ({name,category,url}) => {
    return (
        <div className="dish">
            <h1>{name}</h1>
            <h2>{category}</h2>
            <img src={url} alt="dish"/>
        </div>
    );
}

export default Dish;