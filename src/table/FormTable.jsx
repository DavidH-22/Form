import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


const FormTable = () => {
        const [data, setData] = useState([]);
       

        useEffect(() => {
            fetch ('http://localhost:3000/table',{
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
    
        return ( 
     <div class="flex justify-center items-center h-screen ">
       <div class="">
        <table class="table-auto   border-separate border border-slate500"> 
            
            <thead> 
                <tr> 
                    <th class="border border-slate-600">Username</th> 
                    <th class="border border-slate-600">Email</th> 
                    <th class="border border-slate-600">Address</th> 
                    <th class="border border-slate-600">Gender</th> 
                </tr> 
            </thead>

            <tbody> 
                {data.map((row, index) => ( 
                <tr key={index}> 
                    <td class="border border-slate-700">{row.Username}</td>
                    <td class="border border-slate-700">{row.Email}</td> 
                    <td class="border border-slate-700">{row.Address}</td> 
                    <td class="border border-slate-700">{row.Gender}</td> 
                 </tr> ))} 
            </tbody> 
            
        </table> 
      
      <div class="col-span-5"></div>
      <div class="col-span-0 ">
        <Link to = "/form">
            <button  class=" 
               w-20 h-16 
                rounded-md 
              bg-indigo-600 
                text-sm/6 
                font-semibold 
              text-white 
                shadow-sm 
              hover:bg-indigo-500 
                focus-visible:outline 
                focus-visible:outline-2 
                focus-visible:outline-offset-2 
              focus-visible:outline-indigo-600">Form
            </button>
        </Link>
      </div>
      <div class="col-span-1"></div>
    </div>
</div>
    
    );
    };

export default FormTable;
