import React, {useState, useEffect, useContext} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
import {API} from '../../service/api.js';
import { DataContext } from '../context/ContextProvider.jsx'
import Comments from './comments/Comments.jsx';

function DetailView() {

  const [post, setPost] = useState({});

  let url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
  const  { id } = useParams();
  const {account} = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
     let fetchData = async () => {
        let response = await API.getPostById(id);
        if(response.isSuccess){
          setPost(response.data);
        }
     }
     fetchData();
  }, [])

  const deleteBlog = async () =>{
      let response = await API.deletePost(post._id);
      if(response.isSuccess){
          navigate('/');
      }
  }
 
 
  return (
    <div className='my-[50px] mx-[100px]'>
      <img src={url} alt="blog" className='w-full h-[50vh] object-cover' />
      

         {
          (account.username === post.username) ? 
          <>
             <div className='flex justify-end mt-2'>  
             <Link to={`/update/${post._id}`}>
                <div className='mx-[6px] mt-1 p-[4px] border-2 border-[#878787] rounded-[10px] hover:border-orange-600'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-orange-600 hover:text-orange-400">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                    </svg>
                </div>
             </Link>
                <div onClick={() => deleteBlog()} className='mx-[6px] mt-1 p-[4px] border-2 border-[#878787] rounded-[10px] hover:border-red-600'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500 hover:text-red-800">
                      <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                    </svg>
                </div>
             </div> 
          </>
          : ''
         }

         

      <p className='text-[38px] font-[500] text-center my-[40px] uppercase break-words'>{post.title}</p>
      <div className='text-[#878787] m-[20px 0] flex justify-between'>
        <p>
          Author -
          <span className='font-bold'>
          {post.username}
          </span>
        </p>
        
        <p>{new Date(post.createDate).toDateString()}</p>
      </div>
      <div>
        <p className='break-words'>{post.description}</p>
      </div>
      <Comments post={post} />
    </div>
  )
}

export default DetailView