import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket, FaTv, FaRegEnvelope } from "react-icons/fa";

const Home = function () {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-center bg-red-500 p-4">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8a15848a-64d3-4d87-a366-fc1894a95296/df9m8g7-e9f4ac61-8af5-41ab-bb94-9dd25850a856.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhhMTU4NDhhLTY0ZDMtNGQ4Ny1hMzY2LWZjMTg5NGE5NTI5NlwvZGY5bThnNy1lOWY0YWM2MS04YWY1LTQxYWItYmI5NC05ZGQyNTg1MGE4NTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1kE1tMAm3mDb8kZY0W_bGotpOXsE6qzkukyK5v63BHQ"
          alt="Plaza Vea Logo"
          style={{ width: '200px' }}
        />
      </div>
      <nav className="flex justify-center items-center p-4 bg-red-500">
        <div className="flex items-center space-x-4">
          <Link to="/categoria" className="text-white hover:text-gray-300">
            Compra por Categoría
          </Link>
          <Link to="/internacional" className="text-white hover:text-gray-300">
            <FaTv className="inline-block mr-2" />
            Internacional
          </Link>
          <Link to="/novedades" className="text-white hover:text-gray-300">
            <span className="mr-2">▲</span> Novedades
          </Link>
          <Link to="/ofertas" className="text-white hover:text-gray-300">
            Ofertas oh
          </Link>
          <Link to="/listas-vea" className="text-white hover:text-gray-300">
            <FaShoppingBasket className="inline-block mr-2" />
            Listas Vea
          </Link>
          <Link to="/ayuda" className="text-white hover:text-gray-300">
            Te ayudamos
          </Link>
        </div>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        
        <div className="p-4 bg-red-500 rounded text-white text-center">
          <p className="text-2xl font-bold mb-2">Supermercado</p>
          <p className="text-sm font-bold text-black">
            ¡Entregas desde 24 horas!
          </p>
          <p className="text-xs mt-2 text-black">
            Compra de todo a precios bajos
          </p>
          <button className="rounded-full bg-white text-green-500 border border-green-500 p-2 mt-4">
            ¡Haz tu pedido ahora!
          </button>
        </div>
        <div className="p-4 bg-red-500 rounded text-white text-center">
          <p className="text-2xl font-bold mb-2">Supermercado</p>
          <p className="text-sm font-bold text-black">
            ¡Entregas desde 24 horas!
          </p>
          <p className="text-xs mt-2 text-black">
            Compra de todo a precios bajos
          </p>
          <button className="rounded-full bg-white text-green-500 border border-green-500 p-2 mt-4">
            ¡Haz tu pedido ahora!
          </button>
        </div>

        
        <div className="p-4 bg-purple-500 rounded text-white text-center">
          <p className="text-2xl mb-2">Electro, hogar y más</p>
          <p className="text-sm text-black">
            Lo último en tecnologías, electrohogar, deporte, moda, infantil y más
          </p>
          <button
            className="rounded-full bg-white text-purple-500 border border-purple-500 p-2 mt-4"
            onClick={openModal}
          >
            Descubre todo
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-md">
              <button
                onClick={closeModal}
                className="float-right text-gray-600 hover:text-gray-800"
              >
                &#x2716; 
              </button>
              <p className="text-2xl font-bold mb-4 text-guinda">
                ¡Sé un expert@ del ahorro!
              </p>
              <p className="text-sm mb-4">
                Dejanos tu correo y enterate primero de todas las promociones y novedades que tenemos para ti
              </p>
              <input
                type="email"
                placeholder="Correo electrónico"
                className="bg-gray-100 border border-gray-300 rounded px-4 py-2 mt-2"
              />
              <div className="flex items-center mt-2">
                <input type="checkbox" className="mr-2" />
                <p className="text-sm">
                  Aceptar todos los términos y condiciones
                </p>
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded mt-4 w-60">
                Suscribirme
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
