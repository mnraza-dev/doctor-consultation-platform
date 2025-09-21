import React from 'react';
interface HeaderProps {
  showDashboardNavbar?: boolean,

}
interface NavigationItem {
  label: string;
  icon: React.ComponentType<any>;
  href: string;
  active: boolean;

}
const Header: React.FC<HeaderProps> = ({ showDashboardNavbar }) => {
  return (
    <div className='text-black'>
      {showDashboardNavbar &&
        <h1>Navbar Header</h1>
      }
    </div>
  )
}
export default Header