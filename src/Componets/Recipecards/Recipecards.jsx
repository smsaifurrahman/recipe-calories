import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Recipecard from './Recipecard';

const Recipecards = ({handleRecipes}) => {

        const [cards, setCards]  = useState([]);

    useEffect( () => {
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setCards(data));
    } ,[])
    
    return (
        <div className=' w-full flex-1 grid grid-cols-1 lg:grid-cols-2 justify-between   gap-4 p-4 md:p-4 rounded-3xl mb-4  '>
             
             {
                cards.map(card => <Recipecard key={card.id} handleRecipes={handleRecipes} card ={card} ></Recipecard>)
             }
            

        </div>
    );
};

Recipecards.propTypes = {
    handleRecipes:PropTypes.func.isRequired

};

export default Recipecards;