import React from 'react';
import PropTypes from 'prop-types';

const Recipecard = ({card,handleRecipes}) => {

    const {recipe_id, recipe_name, short_description,ingredients, preparing_time,calories, recipe_image} = card;



    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img  src={recipe_image}alt="Shoes" className="rounded-xl h-52 w-full" />
            </figure>
            
            <div className="card-body  ">
               
                <h2 className="card-title">{recipe_name}</h2>
                <p className='text-[#878787]'>{short_description} </p>
                <div className="divider"></div>
                <div className="">
                 <h2 className='font-bold'>Ingredients: {ingredients.length}</h2>
                 <ul>
                    {ingredients.map(ing => <li key={ing.id} className='text-[#878787]'> . {ing}</li>)}
                </ul>  
                 <div className="divider"></div>
                 <div className='flex justify-between mb-3'>
                        <div className='flex space-x-1'>
                            <img src="/src/clock_logo.png" alt="" />
                            <p><span> {parseInt(preparing_time)} </span> minutes</p>
                        </div>
                        <div className='flex space-x-1'>
                            <img src="/src/Calory_logo.png" alt="" />
                            <p><span>{parseInt(calories)}</span> Calories</p>
                        </div>
                     
                 </div>

                 <button onClick={()=> handleRecipes(card)} className="btn  text-black bg-green-500 rounded-3xl font-bold">Want to Cook</button>
                </div>
            </div>
            </div>
        </div>
    );
};

Recipecard.propTypes = {
    handleRecipes:PropTypes.func.isRequired
};

export default Recipecard;