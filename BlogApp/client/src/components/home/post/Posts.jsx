import React, {useEffect, useState} from 'react'
import {API} from '../../../service/api.js';
import Post from './Post.jsx';
import { useSearchParams, Link } from 'react-router-dom';
function Posts() {

    const [posts, getPosts] = useState([]);
    const [searchParams] = useSearchParams();

    const category = searchParams.get('category');

    useEffect(() => {
       const fetchData = async () =>{
           let response = await API.getAllPosts({category: category} || '');
           console.log(`response = ${response}`)
           if(response.isSuccess){
              getPosts(response.data);
           console.log(`response data = ${response.data}`)
           }
       }
       console.log(`post = ${posts}`);
       fetchData();
    }, [category])

  return (
    <>
        {
            posts && posts.length > 0 ? (
                posts.map(post => (
                <div key={post.id} className='lg:w-1/4 sm:w-1/3 w-full'>
                    <Link to={`/details/${post._id}`}>
                        <Post post={post} />
                    </Link>
                </div>
                ))
            ) : (
                <div className='text-[#878787] my-8 mx-20 text-[18px]'>No data available to display</div>
            )
        }
    </>
  )
}

export default Posts