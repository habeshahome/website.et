import React from 'react'
import { Link } from 'react-router-dom'
// availing different logo colors
import LogoWhite from '../../assets/logo.png'
import LogoBlack from '../../assets/logo_black.png'
import LogoCoffee from '../../assets/logo_coffee.png'

const Logo = (props) => {
  
  const selectedLogo = () =>{
      if(props.color === 'coffee') {
        return LogoCoffee 
      }
      else if(props.color === 'black') {
        return LogoBlack
      }
      else {
        return LogoWhite
      }
  }
    
    return (
        <React.Fragment>
          <Link to='/'> 
              <img
              src={selectedLogo()}
              className="h-full p-1 z-10"
              alt="website.et"
            />
          </Link>
        </React.Fragment>
    )
}

export default Logo;