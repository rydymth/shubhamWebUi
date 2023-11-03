import React from 'react'
import image from '../assets/MainImage.png';
import './Main.css';
import {  Link  , useNavigate } from "react-router-dom";


const Main = () => {
  const navigate = useNavigate()
  return (
    <>
    
    <div className='main'>
        <div className='mainImage'><img src={image}></img></div>
        <div className='headline'><p className='headlineText'>Identify the Medicinal Property of Plants</p></div>
        <div className='searchArea'>      
        <button onClick={() => { navigate('./Identify')}} type='submit' className='searchButton'>Identify</button> 
        <button onClick={() => { navigate('./Plants')}} type='submit' className='searchButton'>Search</button>   
        </div>
    </div>
    
    </>
  )
}

export default Main;