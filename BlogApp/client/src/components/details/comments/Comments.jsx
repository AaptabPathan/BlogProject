
import React, {useState, useContext, useEffect} from 'react'
import { DataContext } from '../../context/ContextProvider';
import { API } from '../../../service/api';
import Comment from './Comment'

const initialValues = {
    name: '',
    postId: '',
    comments: '',
    date: new Date(),
}

function Comments({post}) {
    const url = 'https://static.thenounproject.com/png/12017-200.png'
    const [comment, setComment] = useState(initialValues);
    const [comments, setComments] = useState([]);
    const {account} = useContext(DataContext);
    const [toggle, setToggle] = useState(false);
    
    useEffect(() => {
        const getData = async () => {
          let response = await API.getAllComments(post._id);
          if(response.isSuccess){
            setComments(response.data);
          }
        }
        getData();
    }, [post, toggle])

    let handleChange = (e) => {
        setComment({
            ...comment,
            name: account.username,
            postId: post._id,
            comments: e.target.value,
        })
    }

    let addComment = async (e) => {
        let response = await API.newComment(comment)
        if(response.isSuccess){
            setComment(initialValues);
        }
        setToggle(prev => !prev);
    }


  return (
    <div className='mt-[100px]'> 
        <div className='flex'>
           <img src={url} alt="dp" className='w-12 h-12 rounded-[50%]' />
            <textarea name="" value={comment.comments} onChange={(e) => handleChange(e)}  rows="5" placeholder='Write your comments..' className='border-2 border-gray-400 outline-none w-full h-[100px] my-0 mx-5'></textarea>
            <div>
               <button type='button' onClick={(e) => addComment(e)} className='bg-orange-500 py-1 px-3 text-white  rounded-md hover:bg-orange-600'>Post</button>
            </div>
        </div>
        <div>
            
                {
                    comments && comments.length > 0 && comments.map(comment => (
                        <Comment comment={comment} setToggle={setToggle} key={comment.id} />
                    ))
                }

        </div>
    </div>
  )
}

export default Comments