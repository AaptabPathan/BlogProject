
import React, {useState, useEffect, useContext} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../context/ContextProvider';
import { API } from '../../service/api';

const data = {
    title: "",
    description: "",
    picture: "",
    username: "",
    categories: "",
    createDate: new Date()
}


function CreatePost() {
    let location = useLocation();
    const [post, setPost] = useState(data);
    const [file, setFile] = useState('');
    const {account} = useContext(DataContext);
    const navigate = useNavigate();
    
    let url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    let handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

  

    useEffect(() => {
        const getImage =  async () =>{
            try {
                if(file){
                    const data = new FormData();
                    data.append('name', file.name);
                    data.append('file', file);
    
                   let response =  await API.uploadFile(data);
                   post.picture = response.data; // url

             
               
                }
            } catch (error) {
                console.log(error)
            }

            
        }
        getImage();
        
        post.categories = location.search?.split('=')[1] || 'All';
        post.username = account.username;
    }, [file])


    const savePost = async () => {
        let response = await API.createPost(post);
        if(response.isSuccess){
           navigate('/');
        }
    }

  return (
   <>
      <div className='container mx-auto'>
          <img src={url} alt="banner" className='w-screen h-[50vh] object-cover' />
      </div>
      <form action="">
          <div className='mt-5 container mx-auto flex items-center justify-between'>
               <div>
                  <label htmlFor="chooseImage">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10  text-gray-400 hover:text-orange-600">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                    </svg>

                  </label>
                  <input type="file" name="" id="chooseImage" className='hidden' onChange={(e) => setFile(e.target.files[0])} />
               </div>
               <div>
                   <input type="text" name="title" id="" placeholder='Title' onChange={(e) => handleChange(e)} className='w-[84vw] border-2 border-gray-200 outline-none py-[1px] px-3 text-xl rounded-md' />
               </div>
               <div>
                 <button type='button' onClick={() => savePost()} className='bg-orange-500 text-lg text-white hover:bg-orange-600 font-bold rounded-md py-1 px-5'>Publish</button>
               </div>
          </div>
          <div className='container mx-auto mt-5'>
              <textarea name="description" id="" placeholder='Tell your story...' onChange={(e) => handleChange(e)} className='outline-none border-2 border-gray-200 w-[96.7vw] h-[23vh] rounded-md py-[2px] px-3 text-xl'></textarea>
          </div>
      </form>
   </>
  )
}

export default CreatePost