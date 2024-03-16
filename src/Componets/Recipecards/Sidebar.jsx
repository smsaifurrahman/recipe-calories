import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({foods,handlePreparing,cookingLists}) => {


    return (
        <div className='justify-center w-full md:w-[500px]  '>
            <div className='border-2  rounded-3xl '>
            <h1 className='text-2xl font-bold text-center my-6'>Want to cook: {foods.length}</h1>
          <div className="divider"></div>
          <div className="overflow-x-auto">
            <table className="table ">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody className='bg-gray-100'>
                {/* row 1 */}
                {
                  foods.map((food,idx) =>    <tr key={idx}>
                  <th>{idx +1}</th>
                  <td>{food.recipe_name}</td>
                  <td><span>{food.preparing_time}</span> minutes</td>
                  <td><span>{food.calories}</span> Calories</td>
                  <td><button onClick={()=> handlePreparing(food)} className="btn  text-black bg-green-500 rounded-3xl font-bold">Preparing</button></td>

                  
                </tr> )
                }
             
              
              </tbody>
            </table>

          </div>
          <h1 className='text-2xl font-bold text-center my-6'>Currently Cooking: {cookingLists.length}</h1>
          <div className="divider"></div>
          {/* 2nd Table */}
          <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody className='bg-gray-100'>
                  {/* row 1 */}
                  {
                    cookingLists.map((each,idx) =>  <tr key={idx}>
                    <th>{idx+1}</th>
                    <td>{each.recipe_name}</td>
                    <td><span>{each.preparing_time}</span> minutes</td>
                    <td><span>{each.calories}</span> Calories</td>
                  </tr>)
                  }
                 
                 
                </tbody>
              </table>
         </div>
         <div className='flex flex-row justify-around gap-6 my-10 mr-4'>
                <h1>Total Time = <br /> <span>{cookingLists.reduce((previousItem, currentItem) => previousItem + currentItem.preparing_time,0)}</span> minutes</h1>
                <h1>Total Calories = <br /> <span>{cookingLists.reduce((previousItem, currentItem) => previousItem + currentItem.calories,0)}</span> Calories</h1>
         </div>

            </div>
        </div>
    );
};

Sidebar.propTypes = {
  handlePreparing: PropTypes.func.isRequired
    
};

export default Sidebar;