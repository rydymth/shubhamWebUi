import React, { useState , useEffect } from 'react';
import './Identify.css'
import Logo from '../assets/Logo.png'
import { useNavigate } from 'react-router-dom';
import * as tf from '@tensorflow/tfjs';

const Identify = () => {
  const [image, setImage] = useState(null);
  const [label, setLabel] = useState(null);
  const [model, setModel] = useState(null);
  const [highestPrediction, setHighestPrediction] = useState(null);
  const CLASS_NAMES = ['AloeVera', 'Amla', 'Neem'];

  const navigate = useNavigate();

  useEffect(() => { 
    loadModel();
  },[]);

  async function loadModel() {
    try {
      const model = await tf.loadLayersModel("model/model.json");
      setModel(model);
      console.log(model)
      console.log("Load model success"); 
    }
    catch (err) {
      console.log(err);
    }
  }

  const classifyImage = async () => {
    const imagee = new Image();
    imagee.src = image;

    const tensor = tf.browser.fromPixels(imagee)
      .resizeNearestNeighbor([256, 256])
      .toFloat()
      .div(tf.scalar(255))

    const predictions = await model.predict(tensor).data();
    console.log(predictions);

    const output = Array.from(predictions)
      .map((p, i) => ({ probability: p, className: CLASS_NAMES[i] }))
      .sort((a, b) => b.probability - a.probability);

    const highestPrediction = output[0];
    console.log(highestPrediction);
    console.log(highestPrediction.className);
    setLabel(highestPrediction.className);   
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div class="bg-white border-gray-200 dark:bg-gray-900" style={{}}>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a class="flex items-center">
            <img src={Logo} class="mr-3" style={{ height: "5rem" }} alt="MediLeaf Logo" />

          </a>
              <button  class="mr-4 detailsButton" onClick={() => { navigate('/')}} type='submit'>
                Back
              </button>          
        </div>
      </div>


      <div className="Identifycontainer">
        <div className="Identifytitle">
          <h1>Identify your Plant</h1>
        </div>
        <div className='IdentifyButton'>
          <button><input
            type="file"
            id="files"
            className="hidden"
            onChange={handleImageSelect}
          />
            <label htmlFor="files">SCAN PLANT</label></button>
          <button className='Identifybutton' onClick={() => classifyImage()}>IDENTIFY</button>
        </div>

        <div className='IdentifyImage'>
          {
            image && <img src={image} alt="Selected Plant" className='Identifyimage' /> 
          }
          {
            label && <div className='predictionResult'>
              <h1>{label}</h1>
              <button onClick={() => { navigate(`/details/${label}`) }} className='plantbutton'>READ MORE</button>
            </div>
          }
          
        </div>
      </div>
    </>
  );
};

export default Identify;
