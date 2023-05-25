// import React from "react";
// import { categories } from "../context/data";
// function Categories() {
//   return (
//     <>
//       <button className="w-[10%] bg-orange-500 p-1 text-white rounded-md my-3 mx-3 font-medium hover:bg-orange-400 inline-block">CREATE BLOG</button>

// <div className="grid grid-cols-12 gap-4 mx-auto">
//       {/* First Column */}
//       <div className="col-span-12 sm:col-span-2 lg:col-span-2">
//         <div className="bg-green-500">
//           <table className="border-black border-2">
//             <thead>
//               <tr>
//                 <th className="p-2 text-1xl">All Categories</th>
//               </tr>
//             </thead>
//             <tbody>
//               {categories.map((category) => (
//                 <tr key={category.id}>
//                   <td>{category.type}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Second Column */}
//       <div className="col-span-12 sm:col-span-8 lg:col-span-8 w-full">
//         <div className="bg-red-300">Post</div>
//       </div>

//       {/* Third Column */}
//       <div className="col-span-12 sm:col-span-2 lg:col-span-2 w-auto flex justify-start">
//         <div className="bg-blue-300">Other</div>
//       </div>
//     </div>
//       </>)
// }
  
// export default Categories;

import { Link, useSearchParams } from 'react-router-dom';
import { categories } from '../context/data';
import Posts from './post/Posts';

const Categories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  return (
    <div className="container grid grid-cols-12 gap-4 mx-auto">
      {/* First Column */}
      <div className="col-span-12 sm:col-span-2 lg:col-span-2">
        <Link
          to={`/create?category=${category || ''}`}
          className="block w-full max-w-xs mb-4 py-2 text-center bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-md mt-5"
        >
          Create Blog
        </Link>
        <table className='border-2 border-gray-400 w-full'>
          <thead>
            <tr className='border-2 text-center'>
            
                <th className='p-2'>  <Link to='/'>All Categories </Link></th>
             
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
                <tr key={category.id} className='border-2'>
                    <td className='p-2 text-center hover:text-orange-500 cursor-pointer'>
                      <Link to={`/?category=${category.type}`}>
                         {category.type}
                      </Link>
                    </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Second Column */}
      <div className="col-span-12 sm:col-span-8 lg:col-span-10 w-full flex flex-wrap">
        <Posts />
      </div>
      </div>
  );
}

export default Categories;
