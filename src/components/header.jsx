import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><img src="https://ik.imagekit.io/hbzknb1hm/restaurant.gif?updatedAt=1687122581439" alt="" /></li>
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