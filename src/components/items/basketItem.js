import React from 'react';
import BasketCard from './basketCard';

const BasketItem = ({laptops}) => {

    return (
        <div>    
            {laptops && laptops.map(laptop => {              
                return (
                    <BasketCard laptop={laptop} key={laptop.id} /> 
                )
            })}
        </div>
    )         
}

export default BasketItem;