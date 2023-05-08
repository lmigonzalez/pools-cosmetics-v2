import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  BsFacebook,
  BsInstagram,
  BsFillGeoFill,
  BsFillEnvelopeOpenFill,
  BsTools,
} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="w-full flex-shrink-0 mt-auto py-20 text-center bg-[#2E3840] text-white">
      <p className="text-4xl mb-8">Pools Cosmetics</p>
      <div className="flex justify-center items-center space-x-5 text-2xl mb-8 ">
        <a className="p-2 rounded-full border-solid border-white border hover:text-blue-400 hover:border-blue-400 transition-all cursor-pointer">
          {' '}
          <BsInstagram />{' '}
        </a>
        <a className="p-2 rounded-full border-solid border-white border hover:text-blue-400 hover:border-blue-400 transition-all cursor-pointer">
          {' '}
          <BsFacebook />{' '}
        </a>
        <a className="p-2 rounded-full border-solid border-white border hover:text-blue-400 hover:border-blue-400 transition-all cursor-pointer">
          {' '}
          <BsFillEnvelopeOpenFill />{' '}
        </a>
        <a className="p-2 rounded-full border-solid border-white border hover:text-blue-400 hover:border-blue-400 transition-all cursor-pointer">
          {' '}
          <BsFillGeoFill />{' '}
        </a>
      </div>

      <ul className="flex items-center justify-center text-xl font-thin space-x-5 mb-8">
        <li className='hover:text-blue-400 transition-all'>
          {' '}
          <NavLink to="/categories"> Shop </NavLink>{' '}
        </li>
        <li className='hover:text-blue-400 transition-all'>
          {' '}
          <NavLink to="/about"> About </NavLink>{' '}
        </li>
        <li className='hover:text-blue-400 transition-all'>
          {' '}
          <NavLink to="/contact"> Contact </NavLink>{' '}
        </li>
        <li className='hover:text-blue-400 transition-all'>
          {' '}
          <NavLink to="/terms-and-conditions">
            {' '}
            Terms & Conditions{' '}
          </NavLink>{' '}
        </li>
        <li className='hover:text-blue-400 transition-all'>
          {' '}
          <NavLink to="/login"> Login </NavLink>{' '}
        </li>
      </ul>

      <p className="flex items-center justify-center font-extralight">
        © 2023 Pools Cosmetics.{' '}
        <span className="ml-2 mr-1">
          <BsTools />
        </span>{' '}
		<a className='hover:text-blue-400 cursor-pointer transition-all'>Elegant Designs.</a>
      
      </p>
    </footer>
  );
};

export default Footer;
