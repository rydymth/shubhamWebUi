import React from 'react';
import Logo from '../assets/Logo.png'
import './Footer.css'

const Footer = () => {
  return (

    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
            <img src={Logo} className='footerimage' alt="Flowbite Logo" />
            
          </a>
          <ul  class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="mr-4 ml-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        
         </div>
    </footer>


  );
};



export default Footer;
