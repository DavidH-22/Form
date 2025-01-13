import React, {useState} from "react";
import {ToastContainer, toast} from 'react-toastify';

function FormComponent(){
  const [formData, setFormData] = useState({
      Username: '',
      Email: '',
      Address: '',
      Gender: ''
  })

  const success = () => toast("submit success") 
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
   

    const data = {
      Username: formData.Username,
      Email: formData.Email,
      Address: formData.Address,
      Gender: formData.Gender,
    }

    const response = await fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('Data successfully insert');
      setFormData({
        Username: '',
        Email: '',
        Address: '',
        Gender: ''
      })
    } else {
      console.error('Error inserting data');
      alert("failed to submit");
    }
  };

    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://www.zarla.com/images/pepsi-logo-2400x2400-20220513-1.png?crop=1:1,smart&width=150&dpr=2"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Form Attendance
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit}  className="space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="Username" className="block text-sm/6 font-medium text-gray-900">
                  Username
                  </label>
                </div>

                <div className="mt-2">
                  <input
                    id="Username"
                    name="Username"
                    type="username"
                    required
                    value={formData.Username}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label  htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Email address
                  </label>
                </div>
                
                <div className="mt-2">
                  <input
                    id="Email"
                    name="Email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.Email}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="address" className="block text-sm/6 font-medium text-gray-900">
                    Address
                  </label>
                </div>
                
                <div className="mt-2">
                  <input
                    id="Address"
                    name="Address"
                    value={formData.Address}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="gender" className="block text-sm/6 font-medium text-gray-900">
                  Gender
                  </label>
                </div>
                <div className="mt-2">
                  <select 
                  name="Gender" 
                  id="Gender" 
                  value={formData.Gender}
                  onChange={handleChange} 
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                  </select>
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  onClick={success}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                 Submit
                </button>
                <ToastContainer />
              </div>
            </form>
  
          </div>
        </div>
      </>
    )
 }

  export default FormComponent;
  