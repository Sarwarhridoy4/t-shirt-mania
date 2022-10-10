import React from 'react';
import './Tshirt.css'
//handel add to card comes from Home.JSX
const Tshirt = ({ tshirt,handelAddToCart}) => {
    const {_id,name,picture,price} = tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt={_id} />
            <h2>{name}</h2>
            <h4>${price}</h4>
            <button onClick={()=>handelAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;