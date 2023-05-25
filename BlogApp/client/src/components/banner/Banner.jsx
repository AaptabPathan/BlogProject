import React from 'react'

function Banner() {
  return (
    <div className='w-[98.9vw] h-[330px] flex flex-col justify-center items-center bg-[size:60%] bg-center bg-repeat-x' style={{backgroundImage: 'url("https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg")'}}>      
            <h1 className='text-[80px] font-light text-white'>BLOG</h1>
            <h3 className='text-xl mt-[-20px] bg-white font-medium'>Write Your Thoughts</h3>
    </div>
  )
}

export default Banner