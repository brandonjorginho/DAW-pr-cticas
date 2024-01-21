import React, { useState } from "react";

const Modal = function ({ onClose }) {
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubscribe = () => {
    console.log("Correo electronico:", email);
    console.log("Términos y condiciones aceptados:", termsAccepted);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded text-center">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &#x2716; 
        </button>
        <p className="text-guinda text-2xl font-bold mb-4">
          ¡Sé un expert@ del ahorro!
        </p>
        <p>
          Dejanos tu correo y enterate primero de todas las promociones y
          novedades que tenemos para ti
        </p>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white border border-gray-300 rounded px-4 py-2 mt-4"
        />
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
            className="mr-2"
          />
          <p>Aceptar todos los términos y condiciones</p>
        </div>
        <button
          onClick={handleSubscribe}
          disabled={!termsAccepted}
          className={`bg-guinda text-white px-4 py-2 rounded mt-4 ${
            !termsAccepted && "opacity-50 cursor-not-allowed"
          }`}
        >
          Suscribirme
        </button>
      </div>
    </div>
  );
};

export default Modal;
