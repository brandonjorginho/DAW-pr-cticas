import React from "react";

const Card = ({character:{id,name,status,species,gender,image}}) => {
  return (
    <div className="basis-1/3 mt-2">
      <div
        key={id}
        className="flex p-3 bg-slate-50 rounded-sm shadow-md shadow-lime-600"
      >
        <img className="w-1/3 rounded-sm mr-2" src={image} alt={name} />
        {/* unknown,Alive,Dead */}
        <div>
          <h4 className="font-title text-gray-400 text-3xl">{name}</h4>
          <p className="text-black">
            <b>Especie:</b> {species}
          </p>
          <p className="text-black">
            <b>Género:</b> {gender}
          </p>
          <p className="text-black mt-2">
            <b>Estado:</b>
          </p>
          <span className="rounded-md bg-green-700 font-title px-3 text-center text-white">
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
