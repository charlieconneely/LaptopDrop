import React from 'react';
import LaptopCard from './laptopCard';

const LaptopItem = ({laptops}) => {

    return (
        <div>    
            {laptops && laptops.map(laptop => {              
                return (
                    <LaptopCard laptop={laptop} key={laptop.prodID} /> 
                )
            })}
        </div>
    )         
}

export default LaptopItem;