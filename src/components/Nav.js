import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="w-[40%] mt-16 flex justify-around align-middle border border-yellow rounded-lg">
        <NavLink
          to="crypto"
          end
          className={({ isActive }) => {
            return `w-full text-base text-center font-nunito
       m-2.5
       ${
         isActive
           ? "bg-yellow text-gray-300"
           : "bg-gray-200 text-gray-100  hover:text-yellow active:bg-yellow  active:text-gray-300"
       }
      
      border-0 cursor-pointer
       rounded capitalize font-semibold`;
          }}
        >
          Crypto
        </NavLink>
        <NavLink
          to="/saved"
          className={({ isActive }) => {
            return `w-full text-base text-center font-nunito
       m-2.5
       ${
         isActive
           ? "bg-yellow text-gray-300"
           : "bg-gray-200 text-gray-100  hover:text-yellow active:bg-yellow  active:text-gray-300"
       }
      
      border-0 cursor-pointer
       rounded capitalize font-semibold`;
          }}
        >
          Saved
        </NavLink>
      </nav>
    </>
  );
}

export default Nav;
