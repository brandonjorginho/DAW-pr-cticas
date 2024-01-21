import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faChartPie,
  faClipboardCheck,
  faBoxOpen,
  faUsers,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 h-screen p-4 flex flex-col">
      
      <div className="flex items-center mb-6">
        
        <div className="w-10 h-8 bg-white text-black flex items-center justify-center mr-2 rounded-full">
          S
        </div>
        
        <span className="text-2xl font-bold">Sidebar</span>
      </div>
      
      <hr className="border-white my-1" />

      
      <nav>
        <ul className="mb-4">
          <li className="mb-2">
            
            <a
              href="#"
              className="flex items-center text-gray-400 hover:text-white hover:bg-blue-500 py-2 px-4 rounded w-full"
            >
              <FontAwesomeIcon icon={faHouseUser} className="w-5 h-5 mr-2" />
              Home
            </a>
          </li>
          <li className="mb-2">
            
            <a
              href="#"
              className="flex items-center text-gray-400 hover:text-white hover:bg-blue-500 py-2 px-4 rounded w-full"
            >
              <FontAwesomeIcon icon={faChartPie} className="w-5 h-5 mr-2" />
              Dashboard
            </a>
          </li>
          <li className="mb-2">
            
            <a
              href="#"
              className="flex items-center text-gray-400 hover:text-white hover:bg-blue-500 py-2 px-4 rounded w-full"
            >
              <FontAwesomeIcon
                icon={faClipboardCheck}
                className="w-5 h-5 mr-2"
              />
              Orders
            </a>
          </li>
          <li className="mb-2">
            
            <a
              href="#"
              className="flex items-center text-gray-400 hover:text-white hover:bg-blue-500 py-2 px-4 rounded w-full"
            >
              <FontAwesomeIcon icon={faBoxOpen} className="w-5 h-5 mr-2" />
              Products
            </a>
          </li>
          <li className="mb-2">
            
            <a
              href="#"
              className="flex items-center text-gray-400 hover:text-white hover:bg-blue-500 py-2 px-4 rounded w-full"
            >
              <FontAwesomeIcon icon={faUsers} className="w-5 h-5 mr-2" />
              Customers
            </a>
          </li>
        </ul>
      </nav>

      <div className="mt-auto">
        <hr className="border-white my-4" />
        <div className="flex items-center">
          
          <div className="w-10 h-10 text-white flex items-center justify-center mr-2 bg-gray-300 rounded-full">
            <FontAwesomeIcon icon={faUser} className="text-black" />
          </div>
          
          <span className="text-lg font-semibold">mdo</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
