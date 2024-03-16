import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({foods}) => {
    return (
        <div className='justify-center w-full md:w-[500px] '>
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
                  <td><button className="btn  text-black bg-green-500 rounded-3xl font-bold">Preparing</button></td>

                  
                </tr> )
                }
             
              
              </tbody>
            </table>

          </div>
          <h1 className='text-2xl font-bold text-center my-6'>Currently Cooking {}</h1>
          <div className="divider"></div>
          {/* 2nd Table */}
          <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody className='bg-gray-100'>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                 
                </tbody>
              </table>
         </div>
         <div className='flex flex-row justify-end gap-6 my-10 mr-4'>
                <h1>Total Time = <br /> <span>50</span> Calories</h1>
                <h1>Total Time = <br /> <span>50</span> Calories</h1>
         </div>

            </div>
        </div>
    );
};

Sidebar.propTypes = {
    
};

export default Sidebar;