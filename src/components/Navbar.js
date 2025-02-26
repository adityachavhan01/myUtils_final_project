import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {

  const shinyBlackStyle = {
    background: 'linear-gradient(145deg, #000000, #ff0000)',
  };

  return (
    <nav className="p-4" style={shinyBlackStyle}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
        <Link to="/" className="text-white hover:text-gray-200">MYUtils..</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/ToDoList" className="text-white hover:text-gray-200">ToDoList</Link>
          
          <Link to="/PhoneBook" className="text-white hover:text-gray-200">PhoneBook</Link>
          <Link to="/StudentGradeChecker" className="text-white hover:text-gray-200">StudentGradeChecker</Link>
        </div>

        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;