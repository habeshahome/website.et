import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faQuestionCircle,
  } from "@fortawesome/free-solid-svg-icons"
import MenuItems from './menuItems';


const MobileMenu = () => {

  const menu = MenuItems.map(link =>
      <NavLink    
        key={link.name}
        to={link.slug}
        className="py-3 no-underline px-2 my-2 text-gray-4 font-medium hover:text-blue hover:px-2 border-b border-gray-2"
      >
          {link.name}
        </NavLink>
    )


    return (
        <div
        className="flex-1 flex flex-col items-left px-4 text-xl border-t border-gray-1 pb-4">

        <div className="pb-2"> </div>
        
         {menu}

         <div className="my-2 flex justify-center text-gray-4">
          <FontAwesomeIcon
            icon={faQuestionCircle}
            className="text-2xl mx-2 cursor-pointer"
          />
        </div>
      </div>
    )
}
export default MobileMenu;