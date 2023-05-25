import React from 'react'
import {addElipse} from '../../../../utils/common.utls.js';
function Post({post}) {

    let url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';


  return ( 
    <div className='border-2 border-[#d3cede] rounded-md my-5 mx-2 h-[350px] text-center overflow-hidden'>
        <img className='w-full rounded-[10px 10px 0 0] object-cover h-[150px]' src={url} alt="blog" />
        <p className='pt-0 pb-1 px-2 text-[#878787] text-[12px] mt-1'>{post.categories}</p>
        <p className='pt-0 pb-1 px-2 text-[18px] font-bold break-words'>{addElipse(post.title, 15)}</p>
        <p className='pt-0 pb-1 px-2 text-[#878787] text-[12px]'>{post.username}</p>
        <p className='pt-0 pb-1 px-2 text-[14px] break-words'>{addElipse(post.description, 80)}</p>
    </div>
  )
}

export default Post