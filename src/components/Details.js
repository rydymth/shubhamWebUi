import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from './config';
import { collection, query, where, getDocs } from '@firebase/firestore';
import Logo from '../assets/Logo.png'
import './Details.css';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const [plant, setPlant] = useState([]);

  useEffect(() => {
    const nameToSearch = name;
    fetchPlantsByName(nameToSearch).then((plants) => {
      console.log('Plants matching the name:', plants);
    });
  }, [])


  const fetchPlantsByName = async (name) => {
    const plantCollection = collection(db, 'plants');
    const nameQuery = query(plantCollection, where('Name', '==', name));

    try {
      const querySnapshot = await getDocs(nameQuery);
      const matchingPlants = [];
      querySnapshot.forEach((doc) => {
        matchingPlants.push({ id: doc.id, ...doc.data() });
      });

      setPlant(matchingPlants)
      return matchingPlants;
    } catch (error) {
      console.error('Error fetching plants by name: ', error);
      return [];
    }
  };
 const navigate = useNavigate();
  const { name } = useParams();

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

      {plant.map((item) => (
        <div key={item.id}>
          <div className='detailsContainer1'>

            <img src={item.Image} alt={item.name} className='detailsimage' />
            <div className='detailsContainer11'>
              <div className='detailsbutton'>
                <button className='detailsButton'>English</button>
                <button className='detailsButton'>Hindi</button>
                <button className='detailsButton'>Gujarati</button>
              </div>

              <div className='detailsName'>
                <h4 className='detailsname'><b>Name :</b> {item.Name}</h4>
                <h4 className='detailbotanicalname'><b>Botanical Name :</b> {item.BotanicalName} </h4>
              </div>
            </div>
          </div>  

          <div className='detailsContainer2'>
            <h4 className='detailsdescription di'><b>Description :</b> {item.Description}</h4>
            <h4 className='detailsmedicinalusage di'><b>Medicinal Usage : </b>{item.MedicinalUsage} </h4>
            <h4 className='detailsprepartion d1'><b>Preparation :</b> {item.Preparation} </h4>
          </div>
        </div>
      ))}

    </>
  )
}

export default Details