import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
const Navbar = () => {
  function handleCallClick() {
    window.location.href = `tel: ${786 - 879 - 4236}`;
  }
  return (
    <nav className="absolute top-0 left-0 z-30 w-full flex flex-col bg-white mb-12">
      <div className="flex justify-between items-center py-2 px-4 w-full">
        <Link to="/">
          <img src={Logo} alt="" width={150} height={150} />
        </Link>
        <ul className="flex items-center text-xl font-semibold space-x-6">
          <li>
            <NavLink to="/categories"> Shop </NavLink>
          </li>
          <li>
            <NavLink to="/about"> About </NavLink>
          </li>
          <li>
            <NavLink to="/contact"> Contact </NavLink>
          </li>

          <li>
            <button onClick={handleCallClick}>(305) 875-7466</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
