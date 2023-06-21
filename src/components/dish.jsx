import React, { useState } from 'react';

// basic dish component which takes in props as their input
const Dish = ({name,category,url}) => {
    return (
        <div className="dish">
        <h1>{name}</h1>
        <h2>{category}</h2>
        <img src={url} alt="dish" />
        </div>
    );
}

export default Dish;