import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><img src="../images/restaurant.gif" alt="" /></li>
                    <li><input type="text" placeholder='name'/></li>
                    <li><input type="text" placeholder='category'/></li>
                    <li><input type="text" placeholder='ingredient'/></li>
                    <li><input type="text" placeholder='area'/></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;