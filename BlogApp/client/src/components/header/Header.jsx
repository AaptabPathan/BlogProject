import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='bg-white text-black p-6 border-b-4 border-orange-400 text-center'>
            <Link className='mx-6 hover:text-orange-500 font-medium' to='/'>HOME</Link> 
            <Link className='mx-6 hover:text-orange-500 font-medium' to='/about'>ABOUT</Link> 
            <Link className='mx-6 hover:text-orange-500 font-medium' to='/contact'>CONTACT</Link> 
            <Link className='mx-6 hover:text-orange-500 font-medium' to='/login'>LOGOUT</Link> 
    </div>
  )
}

export default Header