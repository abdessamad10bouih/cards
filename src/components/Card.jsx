import React from "react";

const Card = ({ image, name, location, age }) => {
  return (
    // <div className="container mx-auto p-4">
    //     <div className="overflow-x-hidden">
    //       <table className="min-w-full bg-white border border-gray-300">
    //         <thead>
    //           <tr className="bg-gray-100">
    //             <th className="py-2 px-4 border-b text-left">Avatar</th>
    //             <th className="py-2 px-4 border-b text-left">Name</th>
    //             <th className="py-2 px-4 border-b text-left">Location</th>
    //             <th className="py-2 px-4 border-b text-left">Age</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //             <tr className="bg-white hover:bg-gray-100">
    //             <td className="py-2 px-4 border-b">
    //               <img src={image} className="w-12 h-12 rounded-full" alt="" />
    //             </td>
    //             <td className="py-2 px-4 border-b">{name}</td>
    //             <td className="py-2 px-4 border-b">{location}</td>
    //             <td className="py-2 px-4 border-b">{age}</td>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={image} alt="img"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{location}</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">Age : {age}</span>
    </div>
</div>

  );
};

export default Card;
