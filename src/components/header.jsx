import React, { useContext } from 'react';
import { sharedData } from '../contexts/shared';

const Header = () => {

    const {setName,setCategory,setIngredient,setArea} = useContext(sharedData);
    
    return (
        <header>
            <nav>
                <ul>
                    <li><img src="https://ik.imagekit.io/hbzknb1hm/restaurant.gif?updatedAt=1687122581439" alt="" /></li>
                    <li><input type="text" placeholder='name'id='1' onChange={(e) => setName(e.target.value)}/></li>
                    <li><input type="text" placeholder='category' id='2' onChange={(e) => setCategory(e.target.value)}/></li>
                    <li><input type="text" placeholder='area' id='3' onChange={(e) => setArea(e.target.value)}/></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;