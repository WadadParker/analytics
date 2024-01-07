import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;

const Signup = () => {

    const [input,setInput] =useState({email:"",password:""});
    const navigate = useNavigate();

    const changeHandler = (inputField,text)=>
    {
        setInput(prev=>({...prev,[inputField]:text}));
    }

    const clickHandler = async ()=>
    {
        const response = await fetch(`${apiUrl}/signup`);
        const data = await response.json();
        setInput({email:"",password:""})
    }

    const isDisabled = () => input.email==="" || input.password===""

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <main className='p-4 rounded-lg shadow-md flex flex-col space-y-2 max-sm:w-full max-sm:mx-8'>
            <h1 className='text-center font-semibold'>Signup</h1>
            <aside className='flex flex-col'>
                <label htmlFor='email'>Email:</label>
                <input value={input.email} placeholder='Enter Email'  className='px-2' onChange={(e)=>changeHandler("email",e.target.value)}/>
            </aside>

            <aside className='flex flex-col'>
                <label htmlFor='password'>Password:</label>
                <input value={input.password} type='password' placeholder='Enter password' className='px-2' onChange={(e)=>changeHandler("password",e.target.value)}/>
            </aside>

            <button className='bg-primary text-white disabled:brightness-50 disabled:hover:cursor-not-allowed' disabled={isDisabled()} onClick={clickHandler}>Sign-up</button>
            <button className='hover:underline' onClick={()=>navigate("/login")}>Sign in to my account</button>
        </main>
    </div>
  )
}

export default Signup