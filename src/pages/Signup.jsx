import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

const Signup = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen mt-20">
        <div className='flex flex-col max-w-3xl p-3 mx-auto md:flex-row md:items-center'>
          <div className="flex-1">
            <Link className="text-4xl font-bold dark:text-white">
              <span className="px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Solo's
              </span>
              Blog
            </Link>
            <p className="mt-5 text-sm ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore beatae, suscipit necessitatibus incidunt eos iure
              corporis dolorem quam aliquid blanditiis saepe ea soluta
              dignissimos ex. Mollitia delectus sed sint vero.
            </p>
          </div>
          <div className=""> 
            <form className="flex flex-col gap-4">
              
              <div className="">
                <Label value="Your Name"/>
                 <TextInput 
                  type="text"
                  placeholder="UserName"
                 id="username"
                 />
                <Label value="Your email"/>
                   <TextInput 
                  type="text"
                  placeholder="example@gmail.com"
                  id="email"
                 />
                <Label value="Your password"/>
                <TextInput 
                  type="text"
                  placeholder="paswword"
                  id="password"
                 />
              </div>
              <Button gradientDuoTone='purpleToPink' type="submit">
                Sign Up
              </Button>
            </form>
            
            <div className="flex gap-2 mt-5 text-sm">
              <span>Have an account?</span>
              <Link to='/signin' className="text-blue-500">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
