import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div
        className="flex justify-between items-center px-6 py-4 mb-4"
        style={{
          background: "linear-gradient(to right, #6a11cb, #2575fc)",
          color: "white",
          fontSize: "22px",
          fontWeight: "600",
          letterSpacing: "1px",
         
        }}
      >
        
        <Link to={'/admin'} style={{ fontSize: "26px" ,color:"wheat" ,textDecoration:"none"}}>🔐 Admin Panel</Link>

        
        <Link to={'/'} style={{ fontSize: "26px" ,color:"wheat" ,textDecoration:"none",marginLeft:'30px'}}>
          <FaShoppingCart size={24} />
          <span>Cart</span>
        </Link>
      </div>
    </>
  );
};

export default Header;
