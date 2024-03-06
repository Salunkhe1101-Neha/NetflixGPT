import React from 'react'
import Netflix_logo from '../Assets/Logo.png'
const Header = () => {
  return (
    <div className='z-10 absolute w-[100%] px-12 py-2 bg-gradient-to-b from-black'>
      <img src={Netflix_logo} alt='Netflix_logo'className='h-[80px]'></img>
    </div>
  )
}

export default Header