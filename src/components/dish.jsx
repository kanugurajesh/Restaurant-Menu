import React, { useState } from 'react';

const Dish = ({name,category,url}) => {

    const [isClicked,setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    return (
        <>
            {!isClicked && (
                <div className="dish" onClick={handleClick}>
                <h1>{name}</h1>
                <h2>{category}</h2>
                <img src={url} alt="dish" />
                </div>
            )}

            {isClicked && (
                <div className="overlay" onClick={handleClick}>
                <h1>{name}</h1>
                <h2>{category}</h2>
                <img src={url} alt="dish" />
                </div>
            )}
        </>
    );
}

export default Dish;