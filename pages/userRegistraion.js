import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try{
        const {data}= await axios.post("/api/register",{
            name,
            email,
            password,
        })
        console.log(data);
    }catch(error){
        console.log(error)
    }
  };

  return (
    <div className="container container-fluid">
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-10 col-lg-5 ">
          <form
            className="border border-secondary rounded p-4"
            onSubmit={submitHandler}
          >
            <h1 className="mb-4">Register</h1>

            <div className="form-outline mb-4">
              <label className="form-label" for="name_field">
                Name
              </label>
              <input type="text" id="email" name="text" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
              onChange={(e) => setName(e.target.value)}  value={name}
              />
           
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" for="email_field">
                Email address
              </label>
              <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
              onChange={(e) => setEmail(e.target.value)}  value={email}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" for="password_field">
                Password
              </label>
              <input type="password" id="email" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
              onChange={(e) => setEmail(e.target.value)}  value={password}
              />
            </div>

            <button
              type="submit"
              className="bg-orange-400 rounded p-2 mb-4"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;