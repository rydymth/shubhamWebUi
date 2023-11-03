import React from 'react'
import './Plants.css'
import { db } from './config';
import { collection, getDocs } from '@firebase/firestore';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/Logo.png'

const Plants = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate()

  const ref = collection(db, 'plants');

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(ref);
      const newData = [];

      querySnapshot.forEach((doc) => {
        newData.push({ id: doc.id, ...doc.data() });
      });

      setData(newData);
    };

    fetchData();
  }, []);


  const filteredData = data.filter((item) =>
    item.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (

    <>
        <div class="bg-white border-gray-200 dark:bg-gray-900" style={{}}>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a class="flex items-center">
            <img src={Logo} class="mr-3" style={{ height: "5rem" }} alt="MediLeaf Logo" />

          </a>
              <button  class="mr-4 detailsBackButton" onClick={() => { navigate('/')}} type='submit'>
                Back
              </button>          
        </div>
      </div>

    <div className='PlantContainer'>
      
      <div className='Plantcontainer'>
        <div className='headinput'>
          <h1 className='plantTitle'>Medicinal Plants Near You</h1>
          <input
            type='text'
            placeholder='Search your plant'
            className='plantSearch'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className='cards'>
          {filteredData.map((item) => (
            <div className='card' key={item.id}>
              <div className='ImageContainer'><img src={item.Image} alt={item.Name} className='plantimage' /></div>
              <h2>{item.Name}</h2>
              <button onClick={() => { navigate(`/details/${item.Name}`) }} className='plantbutton'>Read More</button>
            </div>
          ))}

          {
            filteredData.length === 0 ? (
              <h1 style={{marginTop:'1rem'}}>No plant found</h1>
            ) : null
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default Plants