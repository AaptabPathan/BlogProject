import React, { useState, useContext } from "react";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { API } from "../../service/api";
import { DataContext } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";


function Login({isUserAuthenticated}) {
  const { setAccount } = useContext(DataContext);
  const imageURL = "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
 
  const [showPage, toggleShowPage] = useState("login");
  
  const navigate = useNavigate();
  

  const data = {
    name: "",
    username: "",
    password: "",
  }

  const [signup, setSignUp] = useState(data);

  const loginUserValues = {
    username: "",
    password: ""
  }

  const [login, setLogin] = useState(loginUserValues);

  const [error, showError] = useState('');
  
  const toggleSignUp = () =>{
    showPage === 'signup'?toggleShowPage('login'):toggleShowPage('signup')
  }


  const sendDataToStore = (e) =>{
       setSignUp({...signup, [e.target.name]: e.target.value});
  }

  const onValueChange = (e) => {
       setLogin({...login, [e.target.name]: e.target.value});
  }


  // const signupUser = () => {
      
  //      API.userSignup(signup).then((response) => {
  //       console.log(response)
  //      if(response.isSuccess){
  //       showError('');
  //       setSignUp(data);
  //       toggleSignUp('login');
  //      }else{
  //       showError('Something went wrong, please try again later.')
  //      }
  //     }).catch((e) => {
  //       console.log(e);
  //     });
  // }


  const signupUser = async () => {
    try {
      const response = await API.userSignup(signup);
      if (response.isSuccess) {
        showError('');
        setSignUp(data);
        toggleSignUp('login');
      } else {
        showError('Something went wrong, please try again later.')
      }
    } catch (e) {
      console.log(e);
    }
  }


  const loginUser = async () =>{
      try{
         const response = await API.userLogin(login);
         if(response.isSuccess){
          showError('');
          
          sessionStorage.setItem(`accessToken`, `Bearer ${response.data.accessToken}`)
          sessionStorage.setItem(`refreshToken`, `Bearer ${response.data.refreshToken}`);
          
          setAccount({ name: response.data.name, username: response.data.username });
          setLogin(loginUserValues)
          navigate('/');

          isUserAuthenticated(true);
         }else{
          showError('Something went wrong, please try again later.');
         }
      }catch(e){
          console.log(e);
      }
  }
  





  return (
    <div style={{fontFamily: "sans-serif"}}>
      {showPage === "login" ? (
        <div className="w-[350px] h-[470px] border-2 shadow-[5.0px_6.0px_2.0px_rgba(0,0,0,0.38)] mx-auto mt-10 rounded-[5px]">
          <div>
            <img
              src={imageURL}
              alt="blog logo"
              className="w-[130px] m-auto mt-5"
            />
            
          </div>
          <form action="">
            <div className="flex w-[90%] mx-auto flex-col mt-[70px]">
              <input
                className="outline-none border-b-2 border-gray-400 p-[2px] text-gray-600 font-medium"
                onChange={(e) => onValueChange(e)}
                name="username"
                type="email"
                value={login.username}
                placeholder="Enter Email..."
              />
              <input
                className="outline-none border-b-2 border-gray-400 p-[2px] text-gray-600 font-medium mt-7"
                onChange={(e) => onValueChange(e)}
                name="password"
                type="password"
                value={login.password}
                placeholder="Enter Password..."
              />
            </div>

            {error &&  <p className="text-[15px] text-red-500 font-bold my-2 text-center">{error}</p>}

            <div className="w-[90%] mt-6 mx-auto flex flex-col justify-between  h-[150px]">
              <button
                className="bg-[#e36405] w-[100%] p-1 text-xl font-bold hover:bg-orange-500 rounded-sm text-white shadow-[3.0px_3.0px_1.0px_rgba(0,0,0,0.38)]"
                type="button"
                onClick={() => loginUser()}
              >
                Login
              </button>
              <p className="text-center text-xl text-gray-600 font-bold">OR</p>
              <button
                className="w-[100%] p-1 text-[15px] font-bold text-blue-500 hover:bg-gray-100 rounded-sm"
                type="button"
                onClick={() => toggleSignUp()}
              >
                Create a new Account
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="w-[350px] h-[500px] border-2 shadow-[5.0px_6.0px_2.0px_rgba(0,0,0,0.38)] mx-auto mt-10 rounded-[5px]">
          <div>
            <img
              src={imageURL}
              alt="blog logo"
              className="w-[130px] m-auto mt-5"
            />
          </div>
          <form action="">
            <div className="flex w-[90%] mx-auto flex-col mt-[70px]">
              <input
                className="outline-none border-b-2 border-gray-400 p-[2px] text-gray-600 font-medium"
                onChange={(e) => sendDataToStore(e)}
                name="name"
                type="text"
                placeholder="Enter Name..."
              />
              <input
                className="outline-none border-b-2 border-gray-400 p-[2px] text-gray-600 font-medium mt-5"
                onChange={(e) => sendDataToStore(e)}
                name="username"
                type="email"
                placeholder="Enter Email..."
              />
              <input
                className="outline-none border-b-2 border-gray-400 p-[2px] text-gray-600 font-medium mt-5"
                onChange={(e) => sendDataToStore(e)}
                name="password"
                type="password"
                placeholder="Enter Password..."
              />
            </div>

            {error &&  <p className="text-[15px] text-red-500 font-bold my-2 text-center">{error}</p>}

            <div className="w-[90%] mt-4 mx-auto flex flex-col justify-between  h-[150px]">
              <button
                className="bg-[#e36405] w-[100%] p-1 text-xl font-bold hover:bg-orange-500 rounded-sm text-white shadow-[3.0px_3.0px_1.0px_rgba(0,0,0,0.38)]"
                type="button"
                onClick={() => signupUser()}
              >
                Sign Up
              </button>
              <p className="text-center text-xl text-gray-600 font-bold">OR</p>
              <button
               className="w-[100%] p-1 text-[15px] font-bold text-blue-500 hover:bg-gray-100 rounded-sm"
               type="button"
                onClick={() => toggleSignUp()}
              >
                already have an Account
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
