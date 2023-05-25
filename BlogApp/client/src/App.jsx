// import React from 'react'


// import ContextProvider from './components/context/ContextProvider';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
// } from "react-router-dom";
// // imports 
// import Login from './components/screens/Login'
// import Home from './components/home/Home'
// import Header from './components/header/Header';
// function App() {

//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Home />
//     },
//     {
//       path: '/login',
//       element: <Login />
//     }
//   ])


//     return (
//       <div>
      
//       <ContextProvider>
         
//            <div>
//               <RouterProvider router={router} />
//            </div>    
//       </ContextProvider>
//       </div>
//   )
// }

// export default App


import React, {useEffect, useState} from 'react'

import ContextProvider from './components/context/ContextProvider'
import { BrowserRouter, Routes, Route, Outlet, Navigate} from 'react-router-dom'

import Login from './components/account/Login'
import Home from './components/home/Home'
import Header from './components/header/Header'
import CreatePost from './components/create/CreatePost'
import DetailView from './components/details/DetailView'
import Update from './components/create/Update'
import About from './components/about/About'
import Contact from './components/about/Contact'



const PrivateRoute = ({isAuthenticated, ...props}) =>{
   return isAuthenticated ?
   <>
     <Header />
     <Outlet />
   </>
   :<Navigate replace to='/login' />
}

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <ContextProvider>
       <BrowserRouter>

         <div>
          <Routes>
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
            {/* <Route path='/' element={<PrivateRoute isAuthanticated={isAuthanticated} />} >
               <Route path='/' element={<Home />} />
            </Route> */}

            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/' element={<Home />} />
            </Route>

            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/create' element={<CreatePost />} />
            </Route>
          
            <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/details/:id' element={<DetailView />} />
            </Route>

            <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/update/:id' element={<Update />} />
            </Route>

            <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/about' element={<About />} />
            </Route>

            <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/contact' element={<Contact />} />
            </Route>
        
          
          </Routes>
         </div>
       </BrowserRouter>
    </ContextProvider>
  )
}

export default App