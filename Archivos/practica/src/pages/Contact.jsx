import React from 'react';
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaPodcast, FaFlickr, FaEnvelopeOpenText, FaSearch } from 'react-icons/fa';
{/* Actividad 01*/}
const Contact = () => (
  <div>
    <h1>Contact me aquí</h1>
    <div className="flex flex-wrap items-center justify-center gap-20 p-20">
      <ul className="flex gap-4">
        <li>
          <FaXTwitter size={20} />
        </li>
        <li>
          <FaFacebook size={20} />
        </li>
        <li>
          <FaLinkedin size={20} />
        </li>
        <li>
          <FaInstagram size={20} />
        </li>
        <li>
          <FaThreads size={20} />
        </li>
        <li>
          <FaYoutube size={20} />
        </li>
        <li>
          <FaPodcast size={20} />
        </li>
        <li>
          <FaFlickr size={20} />
        </li>
        <li>
          <FaEnvelopeOpenText size={20} />
        </li>
      </ul>
      <div className="text-center">
        <img
          src="https://www.imf.org/-/media/Images/IMF/News/twitter-seal.ashx"
          alt="Twitter Seal"
          className="w-24 h-auto mx-auto"
        />
        <p className="text-blue-900 font-bold">FONDO MONETARIO INTERNACIONAL</p>
      </div>
      <div className="flex items-center border border-gray-400 rounded">
        <input type="text" placeholder="Buscar" className="py-1 px-2 border-r-0 border-gray-400 rounded-l" />
        <button type="submit" className="bg-transparent border-l-0 border-t-0 border-b-0 border-blue-500 hover:bg-transparent text-blue-500 px-4 py-1">
          <FaSearch className="text-blue-500" />
        </button>
      </div>
    </div>
  </div>
);

export default Contact;