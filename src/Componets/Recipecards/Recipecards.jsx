import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Recipecard from './Recipecard';

const Recipecards = props => {

        const [cards, setCards]  = useState([]);

    useEffect( () => {
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setCards(data));
    } ,[])
    
    return (
        <div className='flex-1 grid grid-cols-1 lg:grid-cols-2 justify-between border-2 '>
             
             {
                cards.map(card => <Recipecard ></Recipecard>)
             }
            

        </div>
    );
};

Recipecards.propTypes = {
    
};

export default Recipecards;