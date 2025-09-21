import React from 'react';

const Header = ({showDashboardNavbar}) => {
  return (
    <div className='text-black'>
      {showDashboardNavbar &&
      <h1>Navbar Header</h1>
      }
    </div>
  )
}
export default Header