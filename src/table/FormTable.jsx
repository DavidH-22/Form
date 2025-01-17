import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {IoMoonOutline} from "react-icons/io5";
import {IoSunnyOutline} from "react-icons/io5";


const FormTable = () => {
        const [data, setData] = useState([]);
       const apiUrl = process.env.NODE_ENV === 'production'
              ? 'https://form-six-flax.vercel.app'
              : 'http://localhost:3000'
        useEffect(() => {
            fetch (`${apiUrl}/table`,{
                method: 'GET',
               headers: {
                   'content-type': 'application/json',
               },
           })
           .then(function(response) { return response.json(); })
           .then((data) => {
            //console.log(data);
            setData(data);
           } )
           .catch((error) => console.error('Error fetching data'));
        }, []);

        const [dark, setDark] = React.useState(false);

        const darkModeHandler = () => {
          setDark(!dark);
          document.body.classList.toggle("dark");
        }
    
        return ( 

<body class="bg-gray-200  flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 dark:bg-gray-800">

        <div className="relative w-full   flex justify-end ">
          <button onClick={()=> darkModeHandler()}>
            {
              dark && <IoSunnyOutline className='text-white'/>
            }
            {
              !dark && <IoMoonOutline />
            }
          </button>
        </div>

   <div class="sm:mx-auto sm:w-1/2 sm:max-w-sm h-auto">    
   <div class=" ml-36  ">
          <h1 class="relative mb-10 text-lg font-bold dark:text-white">Form User</h1>
     </div>
    </div>   

    <div class="sm:mx-auto sm:w-full sm:max-w-sm h-auto ">
   
      <div class="flex flex-col justify-center items-center ">
        <table class="table-auto   "> 
            
            <thead class="bg-gray-300 dark:bg-gray-700"> 
                <tr> 
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-900 dark:text-white uppercase tracking-wider">Username</th> 
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-900 dark:text-white uppercase tracking-wider">Email</th> 
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-900 dark:text-white uppercase tracking-wider">Address</th> 
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-900 dark:text-white uppercase tracking-wider">Gender</th> 
                </tr> 
            </thead>

            <tbody class="bg-white divide-y dark:bg-gray-200"> 
                {data.map((row, index) => ( 
                <tr key={index}> 
                    <td class="px-6 py-4 whitespace-nowrap">{row.Username}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{row.Email}</td> 
                    <td class="px-6 py-4 whitespace-nowrap">{row.Address}</td> 
                    <td class="px-6 py-4 whitespace-nowrap">{row.Gender}</td> 
                 </tr> ))} 
            </tbody> 
            
        </table> 
      
      
        <div class=" relative w-full flex justify-end mt-4 ml-72">
            <Link to = "/form">
              <button  class=" 
                w-20 h-10
                rounded-md 
                dark:bg-gray-700
              bg-gray-950
                text-sm/6 
                font-semibold 
              text-white 
                shadow-sm 
              hover:bg-gray-700
                dark:hover:bg-gray-600
                focus-visible:outline 
                focus-visible:outline-2 
                focus-visible:outline-offset-2 
              focus-visible:outline-gray-950">Form
              </button>
            </Link>
         </div>
      </div>
    </div>
</body>
    
    );
    };

export default FormTable;
