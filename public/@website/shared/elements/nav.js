import React, { useState } from "react"
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faQuestionCircle,
  faBell,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"
import Logo from '../common/Logo'
import MobileMenu from './mobileMenu'
import DesktopMenu from "./desktopMenu"


function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <div className="w-screen flex items-center h-12 px-6 justify-between border-b border-gray-1 bg-base-200 text-gray-4 relative z-50">
      <div className="h-8 w-8">
        <Logo color="coffee"/>
      </div>

      <div className="text-gray-4 text-2xl font-light lowercase font-sans flex justify-center text-center px-2"> 
          <Link to="/"> 
            website.et
          </Link> 
      </div>

      <div className="flex-1 ml-10 items-center hidden lg:flex md:justify-center md:text-center">
        <DesktopMenu />
      </div>

      <div className="items-center hidden lg:flex ">
         <FontAwesomeIcon
          icon={faQuestionCircle}
          className="ml-6 text-2xl cursor-pointer text-gray-4"
        />
        <FontAwesomeIcon
          icon={faBell}
          className="ml-6 text-2xl cursor-pointer text-gray-4"
        />
      </div>
      
      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="text-gray-4 text-3xl cursor-pointer lg:hidden w-1/12"
      />

      {mobileOpen && (
        <div className="bg-base-200 absolute top-full left-0 flex flex-col w-full pb-8 lg:hidden h-auto">
            <MobileMenu />
        </div>
      )}
    </div>
  )
}

export default Nav