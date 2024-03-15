import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = props => {
    return (
        <div className='flex-2 justify-center

         border-2 border-rose-700 '>

            <div className="card bg-neutral text-neutral-content">
  <div className="card-body  text-center">
    <h2 className="card-title">Cookies!</h2>
    <p>We are using cookies for no reason.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Accept</button>
      <button className="btn btn-ghost">Deny</button>
    </div>
  </div>
</div>
        </div>
    );
};

Sidebar.propTypes = {
    
};

export default Sidebar;