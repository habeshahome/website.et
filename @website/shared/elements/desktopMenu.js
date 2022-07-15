import React from "react"
import { NavLink } from 'react-router-dom';
import MenuItems from './menuItems'

const DesktopMenu = ({children}) => {

  //defining the active property style
  const navLinkStyle = ({isActive}) => {
      return {
        color: isActive? '#6d543d': '',
      }
  }


  const menu = MenuItems.map((link) =>
        <NavLink
          key={link.name}
          to={link.slug}
          style={navLinkStyle}
          className="no-underline px-2 p-2 text-gray-4 font-medium hover:text-[#6d543d]"
        >
          {link.name}
        </NavLink>
    );

   // console.log(menu)

    return (
        <React.Fragment>
            {menu}
        </React.Fragment>
    )
}

export default DesktopMenu;