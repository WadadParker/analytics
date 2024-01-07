import React, { useState,useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';
import ShareUrlModal from "./ShareUrlModal";
import {  clearPreferencesCookie } from '../utils/utils'; 

const ButtonContainer = ({filters}) => {
  const [showModal,setShowModal] = useState(false);
  const navigate = useNavigate();

  const logoutHandler = () =>
  {
    localStorage.setItem("token",false);
    navigate('/login');
  }

  const url = () =>
  {
    const currentURL = "http://localhost:5173/"
    return `${currentURL}${filters.fromDate}/${filters.toDate}/${filters.age===""?"any":filters.age}/${filters.gender===""?"any":filters.gender}`
  }

  const isDisabled = () => filters.fromDate==="" || filters.toDate===""

  return (
    <>
    {showModal && <ShareUrlModal filters={filters} setShowModal={setShowModal} url={url()}/> }
    <section className='space-x-5 mt-3'>
      <button className='bg-red-400 text-white px-2 pb-1 rounded-lg border border-red-400 hover:text-red-400 hover:bg-white' onClick={logoutHandler}>Logout</button>
      <button className='px-2 pb-1 border rounded-lg hover:shadow-lg disabled:brightness-50 disabled:hover:cursor-not-allowed' onClick={()=>setShowModal(true)} disabled={isDisabled()}>Share URL</button>
      <button onClick={clearPreferencesCookie}>Clear preferences</button>
    </section>
    </>
  )
}

export default ButtonContainer