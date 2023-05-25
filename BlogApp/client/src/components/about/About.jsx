import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function About() {
  return (
    <div>
        <div className='container m-auto'>
            <img className='w-full h-[55vh] object-cover bg-left-bottom bg-cover' src="https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg" alt="" />
            <h1 className='text-3xl font-bold mt-8'>Aaptab Pathan</h1>
            <p className='mt-4 text-xl font-mono'>I'm a Software Engineer based in India. 
                    I've built websites, desktop applications and corporate software.<br />
                    If you are interested, you can view some of my favorite projects here.
                    <span className='text-2xl ml-2'>
                        <a href="https://github.com/AaptabPathan" className=''>
                          <i className="fa-brands fa-github mt-2 hover:text-blue-400"></i>   
                        </a>
                    </span>
            </p>
        </div>
    </div>
  )
}

export default About