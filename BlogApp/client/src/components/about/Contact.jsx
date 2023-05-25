import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Contact() {
  return (
    <div>
        <div className='container m-auto'>
            <img className='w-full h-[55vh] object-cover bg-left-bottom bg-cover' src="http://mrtaba.ir/image/bg2.jpg" alt="" />
            <h1 className='text-3xl font-bold mt-8'>Getting in touch is easy!</h1>
            <p className='mt-5'>Reach out to me on 
            <a href="https://www.instagram.com/" target='_blank'>

            <i class="fa-brands fa-instagram mx-2 hover:text-blue-500"></i> 
            </a>
            
            or send me an Email  
            <a href="https://mail.google.com" target=''>

            <i class="fa-solid fa-envelope mx-2 hover:text-blue-500"></i>
            </a>
            </p>
        </div>
    </div>
  )
}

export default Contact